import connect from "@/app/lib/db";
import { NextResponse } from "next/server";
import { checkAdmin } from "../enrollment_Session";
import { ObjectId } from "mongodb";

// 1. GET: Fetch all enrollments with detailed student and course names
export async function GET(request: Request) {
  const session = await checkAdmin();
  // Security Check: Ensure user is authenticated and is an admin
  if (!session) {
    return NextResponse.json(
      { error: "Unauthorized: Admins Only" },
      { status: 401 },
    );
  }

  try {
    // Existing DB: use MongoClient Connection Helper
    const { db } = await connect();
    const { searchParams } = new URL(request.url);
    const course_id = searchParams.get("courseId");
    const user_id = searchParams.get("userId");

    // Dynamic filter
    const matchFilter: any = { "user.role": "instructor" };

    // if courseId is provided, filter by it
    if (course_id) {
      matchFilter.course_id = new ObjectId(course_id);
    }

    // if userId is provided, filter by it
    if (user_id) {
      matchFilter.user_id = new ObjectId(user_id);
    }

    // Proffessional join using $lookup on raw MongoDB collections
    const enrollment = await db
      .collection("enrollment")
      .aggregate([
        {
          $lookup: {
            from: "user",
            localField: "user_id",
            foreignField: "_id",
            as: "user",
          },
        },
        {
          $lookup: {
            from: "course",
            localField: "course_id",
            foreignField: "_id",
            as: "course",
          },
        },
        // Use preserveNullAndEmptyArrays so the data isn't filtered out
        { $unwind: { path: "$user", preserveNullAndEmptyArrays: true } },
        { $unwind: { path: "$course", preserveNullAndEmptyArrays: true } },
        // Filter to only show instructors
        {
          $match: matchFilter,
        },
        {
          $project: {
            _id: 1,
            status: 1,
            enrolledAt: 1,
            userId: "$user._id", //for linking
            courseId: "$course._id", //for linking
            userName: { $ifNull: ["$user.name", "N/A"] },
            userImage: { $ifNull: ["$user.image", "N/A"] },
            userEMail: { $ifNull: ["$user.email", "N/A"] },
            userBio: { $ifNull: ["$user.bio", "N/A"] },
            userPhone: { $ifNull: ["$user.phone", "N/A"] },
            userAddress: { $ifNull: ["$user.address", "N/A"] },
            userCity: { $ifNull: ["$user.city", "N/A"] },
            userState: { $ifNull: ["$user.state", "N/A"] },
            userZip: { $ifNull: ["$user.zip", "N/A"] },
            userCountry: { $ifNull: ["$user.country", "N/A"] },
            userExperience: { $ifNull: ["$user.experience", "N/A"] },
            userSkills: { $ifNull: ["$user.skills", "N/A"] },
            userLanguage: { $ifNull: ["$user.language", "N/A"] },
            userEducation: { $ifNull: ["$user.education", "N/A"] },
            userAvailability: { $ifNull: ["$user.available", "N/A"] },
            userAvatar: { $ifNull: ["$user.avatar", "N/A"] },
            courseTitle: { $ifNull: ["$course.title", "Deleted Course"] },
          },
        },
      ])
      .toArray();

    return NextResponse.json({ status: "success", data: enrollment });
  } catch (error) {
    console.error("Enrollments API Error", error);
    return NextResponse.json(
      {
        error: "Failed to fetch enrollments",
        message: "Internal Server Error",
      },
      { status: 500 },
    );
  }
}
