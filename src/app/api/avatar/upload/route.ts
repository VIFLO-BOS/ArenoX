import { getAuth} from "@/app/lib/auth";
import { userSession } from "@/utils/types/session";
import { handleUpload, type HandleUploadBody } from "@vercel/blob/client";
import { headers } from "next/headers";
import { NextResponse } from "next/server";




export async function POST(request: Request): Promise<NextResponse> {
  const body = (await request.json()) as HandleUploadBody;

  try {

    const auth = await getAuth();

    const jsonResponse = await handleUpload({
      body,
      request,
      onBeforeGenerateToken: async (pathname: string) => {
        // TODO: Add authentucation check here
        // Make sure only admins or instructors or student can upload avatar
        const session = await auth.api.getSession({
          headers: await headers(),
        });

        if (!session) {
          throw new Error("Unauthorized: please log in to upload file");
        }

        const user = session?.user as userSession;

        const isAdmin = user?.role === "admin";
        const isInstructor = user?.role === "instructor";
        const isStudent = user?.role === "student";

        if (!isAdmin && !isInstructor && !isStudent) {
          throw new Error(
            "Forbidden: Only administrators, instructors, and students can upload avatars."
          );
        }

        // USE THE PATHNAME:
        // Organize files into a specific folder and use the user's ID
        // Example: "avatars/user_123_original_name.jpg"
        const fileName = pathname.split("/").pop(); // Get original file name
        const structuredPath = `avatars/${user.id}_${fileName}`;

        return {
          allowedContentTypes: [
            "image/jpeg",
            "image/png",
            "image/webp",
            "image/gif",
          ],
          pathname: structuredPath,
          tokenPayload: JSON.stringify({ userId: user.id }),
          maxFileSize: 5 * 1024 * 1024, // 5mb max
          addRandomSuffix: true,
          callbackUrl: "/dashboard/admin/edituser/" + user.id,  // Redirect to user edit page after upload
        };
      },
      onUploadCompleted: async ({ blob, tokenPayload }) => {
        console.log("Avatar upload completed:", blob.url, tokenPayload);
        const userId = JSON.parse(tokenPayload as string).userId;

        console.log("userId:- ", userId);
        console.log("blob.url:- ", blob.url);   

        const response = await auth.api.updateUser({
          headers: await headers(),
          body: JSON.stringify({
            id: userId,
            image: blob.url,
          }),
        });

        if (!response) {
          throw new Error("Failed to update avatar");
        }

        console.log("Avatar updated successfully");
      },
    });
    return NextResponse.json(jsonResponse);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 400 }
    );
  }
}
