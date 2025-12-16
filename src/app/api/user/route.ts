import connect from "@/app/lib/db";
import { NextResponse } from "next/server";

export async function PATCH(req: Request) {
  try {
    const body = await req.json();
    const { id, role } = body;

    if (!id || role) {
      return NextResponse.json(
        {
          message: "Mising required fields",
        },
        {
          status: 400,
        }
      );
    }

    const { db } = await connect();
    const result = await db
      .collection("user")
      .updateOne({ id: id }, { $set: { role: role } });

    if (result.matchedCount === 0) {
      return NextResponse.json(
        {
          message: "User not found",
        },
        {
          status: 404,
        }
      );
    }
    return NextResponse.json(
      { message: "User role updated" },
      {
        status: 200,
      }
    );
  } catch (error) {
    if (error instanceof Error) {
      console.error("error updating user role:", error);
      return NextResponse.json(
        {
          message: error.message,
        },
        {
          status: 500,
        }
      );
    } else {
      return NextResponse.json(
        {
          message: "Error updating role",
        },
        {
          status: 500,
        }
      );
    }
  }
}
