import { NextResponse } from "next/server";
import connect from "@/app/lib/db";
import bcrypt from "bcrypt";

export async function POST(req: Request) {
    try {
        const { token, newPassword } = await req.json();
        const db = await connect();

        const resetRecord = await db.db.collection("passwordReset").findOne({
            token,
            used: false,
            expiresAt: { $gt: new Date() }
        });

        if (!resetRecord) {
            return NextResponse.json({ error: "Invalid or expired token" }, { status: 400 });
        }

        const hashedPassword = await bcrypt.hash(newPassword, 12);

        await db.db.collection("user").updateOne(
            { _id: resetRecord.userId },
            { $set: { password: hashedPassword } }
        );

        await db.db.collection("passwordReset").updateOne(
            { _id: resetRecord._id },
            { $set: { used: true } }
        );

        return NextResponse.json({ message: "Password updated successfully" });
    } catch (error) {
        console.error("Reset password error:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
