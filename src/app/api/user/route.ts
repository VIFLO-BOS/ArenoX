import { NextRequest, NextResponse } from "next/server";
import connect from "@/app/lib/db";
import { UserData } from "@/utils/types/apiRouteTypes";
import { redirect } from "next/navigation";

export async function POST(req: NextRequest) {
  try {
    const { db } = await connect();
    const userCollection = db.collection("users");

    const formData = await req.formData();

    const userData = Object.fromEntries(formData) as unknown as UserData;

    if (userData.fullName) {
      const names = userData.fullName.trim().split(/\s+/);
      console.log(names);
      userData.firstName = names[0] || "";
      userData.lastName = names.slice(1).join(" ") || " ";
      delete userData.fullname;
    }

    if (
      !userData.firstName ||
      typeof userData.firstName !== "string" ||
      userData.firstName.length > 30 ||
      !/^[a-zA-Z\s]+$/.test(userData.firstName)
    ) {
      return NextResponse.json(
        { message: "Invalid firstName" },
        { status: 400 }
      );
    }
    if (
      !userData.lastName ||
      typeof userData.lastName !== "string" ||
      userData.lastName.length > 30 ||
      !/^[a-zA-Z\s]+$/.test(userData.lastName)
    ) {
      return NextResponse.json(
        { message: "Invalid lastName" },
        { status: 400 }
      );
    }
    if (!userData.email || typeof userData.email !== "string") {
      return NextResponse.json({ message: "Invalid email" }, { status: 400 });
    }
    if (!userData.password || typeof userData.password !== "string") {
      return NextResponse.json(
        { message: "Invalid password" },
        { status: 400 }
      );
    }

    const existing = await userCollection.findOne({ email: userData.email });
    if (existing) {
      return NextResponse.json(
        { message: "Email already exists" },
        { status: 409 }
      );
    }

    userData.role = (userData.role || "user").toLowerCase();
    userData.status = userData.status || "active";
    if (userData.role === "admin") {
      userData.permission = userData.permission || {
        manageUsers: true,
        manageCourses: true,
        managePayments: true,
        viewReport: true,
      };
    }
    userData.createdAt = new Date();
    userData.agreeToTerms = userData.agreeToTerms === true;

    const result = await userCollection.insertOne(userData);

    if (result) {
      return () => {
        NextResponse.json(
          {
            message: "User created successfully",
            user: { _id: result.insertedId, ...userData },
          },
          { status: 201 }
        );
      redirect("/signin");
      };
    }
  } catch (error: unknown) {
    console.error("Error creating user:", error);
    return NextResponse.json(
      {
        message: "An error occurred during user creation.",
        error: (error as Error).message, 
      },
      { status: 500 }
    );
  }
}
