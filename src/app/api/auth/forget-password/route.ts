import { NextResponse } from "next/server";
import connect from "@/app/lib/db";
import nodemailer from "nodemailer";



export async function POST(req: Request) {
    try {
        const { email } = await req.json();

        // connecting to database
        const db = await connect();

        // finding user
        const user = await db.db.collection("user").findOne({ email });

        // Always return same messafe (security)
        if (!user) {
            return NextResponse.json({ message: "A reset link has been sent to your mail" })
        }

        // Generate token
        const token = crypto.randomUUID();
        const expiresAt = new Date(Date.now() + 60 * 60 * 1000);

        await db.db.collection("passwordReset").insertOne({
            userID: user?._id,
            email,
            token,
            expiresAt,
            used: false,
        })

        // send email using existing transporter pattern
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASSWORD,
            }
        })

        const resetLink = `${process.env.NEXT_PUBLIC_BETTER_AUTH_URL}/reset-password?token=${token}`;

        
        await transporter.sendMail({
            from: `"Arenox Learning" <${process.env.EMAIL_USER}>`,
            to: email,
            subject: "Password Reset Request",
            html: `
            <div style="font-family: Arial; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2>Reset Your Password</h2>
        <p>Click the button below to reset your password. This link expires in 1 hour.</p>
        <a href="${resetLink}" style="display:inline-block; padding:12px 24px; background:#4F46E5; color:white; border-radius:8px; text-decoration:none;">
          Reset Password
        </a>
        <p style="margin-top:20px; color:#888; font-size:12px;">If you didn't request this, ignore this email.</p>
      </div>
            `,
        })

        return NextResponse.json({ message: "A reset link has been sent to your email." });

    } catch (error) {
        console.error("Forget password error:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }

}



