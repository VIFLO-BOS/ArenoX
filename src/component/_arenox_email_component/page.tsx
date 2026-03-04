import React from "react";

interface Arenox_Email_TemplateProps {
  recipientName: string;
  message: string;
  companyName?: string;
  senderName?: string;
  ctaText?: string;
  ctaLink?: string;
}

export function generateEmailHtml({
  recipientName,
  message,
  companyName = "Arenox Learning Platform",
  senderName = "The Arenox Team",
  ctaText = "View Details",
  ctaLink = "#",
}: Arenox_Email_TemplateProps) {
  return `
    <div style="width: 100%; padding: 40px 20px; background-color: #0f2027; font-family: Arial, sans-serif;">
      <table width="100%" style="max-width: 600px; margin: 0 auto; border-collapse: collapse;">
        <tbody>
          <tr>
            <td style="background-color: #1e3c72; border-radius: 16px; padding: 30px; color: #e8f1ff; border: 1px solid #2a5298;">
              <h1 style="margin: 0 0 20px 0; font-size: 28px; font-weight: bold; text-align: center; background: linear-gradient(90deg, #d4af37, #f6e27a); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
                ${companyName}
              </h1>
              <div style="height: 2px; background: linear-gradient(to right, transparent, #d4af37, transparent); margin: 20px 0;"></div>
              <p style="margin: 0 0 15px 0;">Hello ${recipientName},</p>
              <p style="margin: 0 0 20px 0; line-height: 1.6;">${message}</p>
              <p style="margin: 0 0 30px 0;">
                <a href="${ctaLink}" style="display: inline-block; padding: 12px 28px; border-radius: 30px; background-color: #d4af37; color: #0f2027; font-weight: bold; text-decoration: none; font-size: 14px;">
                  ${ctaText}
                </a>
              </p>
              <p style="margin: 0;">Best regards,<br /><span style="color: #f6e27a; font-weight: bold;">${senderName}</span></p>
            </td>
          </tr>
          <tr>
            <td style="padding-top: 20px; text-align: center; font-size: 12px; color: #a0c4ff;">
              © ${new Date().getFullYear()} ${companyName}. All rights reserved.
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  `;
}
