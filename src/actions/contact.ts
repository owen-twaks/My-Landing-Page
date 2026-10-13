"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const project = formData.get("project") as string;

  if (!name || !email || !project) {
    return { success: false, error: "All fields are required." };
  }

  try {
    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: process.env.CONTACT_TO_EMAIL || "you@example.com",
      replyTo: email,
      subject: `New portfolio inquiry from ${name}`,
      html: `
        <p style="font-family:system-ui;font-size:16px;color:#111;">
          <strong>Name:</strong> ${name}
        </p>
        <p style="font-family:system-ui;font-size:16px;color:#111;">
          <strong>Email:</strong> ${email}
        </p>
        <p style="font-family:system-ui;font-size:16px;color:#111;">
          <strong>Project:</strong><br>${project.replace(/\n/g, "<br>")}
        </p>
      `,
    });

    return { success: true };
  } catch (error) {
    console.error("Resend error:", error);
    return {
      success: false,
      error:
        process.env.NODE_ENV === "production"
          ? "Something went wrong. Please try again later."
          : "Dev mode: set RESEND_API_KEY to send real emails. Logged: " +
            (error as { message?: string }).message,
    };
  }
}
