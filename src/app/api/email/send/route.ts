import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { generateEmailHtml } from "@/component/_arenox_email_component/page";

export async function POST(req: Request) {
  try {
    const { to, subject, message, fromName } = await req.json();
    const html = generateEmailHtml({
      recipientName: to,
      message: message,
      senderName: fromName,
      companyName: "Arenox Learning Platform",
      ctaText: "View Details",
      ctaLink: "https://areno-x-pmlx.vercel.app/",
    });

    // creating a transporter (using my gmail app and password)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const info = await transporter.sendMail({
      from: `"${fromName}" <${process.env.EMAIL_USER}>`,
      replyTo: to,
      subject: subject,
      text: message,
      html: html,
    });

    return NextResponse.json({ status: "success" });
  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json(
      { status: "error", message: "Failed to send email" },
      { status: 500 },
    );
  }
}
