import { NextApiRequest, NextApiResponse } from "next";
import admin from "@/app/models/admin/admin";
import connect from "@/app/lib/db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    await connect(); // connect to DB

    const newAdmin = new admin(req.body);
    const savedAdmin = await newAdmin.save();

    return res
      .status(201)
      .json({ message: "Admin created successfully", admin: savedAdmin });
  } catch (error: unknown) {
    console.error("Error creating admin:", error);

    if (typeof error === "object" && error !== null) {
      const errWithCode = error as { code?: number; keyPattern?: Record<string, unknown> };
      if (errWithCode.code === 11000 && errWithCode.keyPattern && "email" in errWithCode.keyPattern) {
        return res.status(409).json({ message: "Email address already exists." });
      }
    }

    if (error instanceof Error && error.name === "ValidationError") {
      return res.status(400).json({ message: error.message });
    }

    return res
      .status(500)
      .json({ message: "An error occurred during admin creation." });
  }
}
