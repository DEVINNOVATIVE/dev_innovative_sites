"use server";

import nodemailer from "nodemailer";

// Simple validation interface
interface FormState {
  success: boolean;
  message: string;
}

export async function sendContactEmail(formData: FormData): Promise<FormState> {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const phone = formData.get("phone") as string;
  const message = formData.get("message") as string;

  // 1. Basic server-side verification checks
  if (!name || !email || !phone || !message) {
    return { success: false, message: "Please fill in all required text fields." };
  }

  // 2. Set up your standard SMTP Transport system configuration
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST, // e.g., smtp.gmail.com
    port: parseInt(process.env.SMTP_PORT || "587"),
    secure: process.env.SMTP_SECURE === "true", // true for port 465, false for 587
    auth: {
      user: process.env.SMTP_USER, // Your authentication email account
      pass: process.env.SMTP_PASS, // App-specific security password
    },
  });

  try {
    // 3. Dispatch data packet parameters
    await transporter.sendMail({
      from: `"${name}" <${process.env.SMTP_USER}>`, 
      to: process.env.CONTACT_RECEIVER_EMAIL, // Email address where you want to receive inquiries
      replyTo: email, // Direct reply path to client email address input
      subject: `New Lead - Inbound Contact Request from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #333; max-width: 600px; border: 1px solid #eee; rounded: 12px;">
          <h2 style="color: #104cba; margin-bottom: 20px;">New Inbound Message</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Phone:</strong> ${phone}</p>
          <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap; background: #f9f9f9; padding: 15px; border-radius: 8px; line-height: 1.6;">${message}</p>
        </div>
      `,
    });

    return { success: true, message: "Your message has been sent successfully!" };
  } catch (error) {
    console.error("Nodemailer routing failure context capture:", error);
    return { success: false, message: "System error down the wire. Please try again later." };
  }
}