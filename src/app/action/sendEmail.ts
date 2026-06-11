
"use server";

import nodemailer from "nodemailer";

interface FormState {
  success: boolean;
  message: string;
}

export async function sendContactEmail(formData: FormData): Promise<FormState> {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const phone = formData.get("phone") as string;
  const message = formData.get("message") as string;
  const captchaToken = formData.get("g-recaptcha-response") as string;

  // 1. Basic server-side verification checks
  if (!name || !email || !phone || !message) {
    return { success: false, message: "Please fill in all required text fields." };
  }

  if (!captchaToken) {
    return { success: false, message: "Missing reCAPTCHA payload security key verification metrics." };
  }

  // 2. Validate token directly against Google's verification API endpoint channel
  try {
    const verificationUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${captchaToken}`;
    const captchaResponse = await fetch(verificationUrl, { method: "POST" });
    const captchaValidationResult = await captchaResponse.json();

    if (!captchaValidationResult.success) {
      return { success: false, message: "Automated bot verification failed. Please try again." };
    }
  } catch (error) {
    console.error("Google reCAPTCHA network validation gateway error:", error);
    return { success: false, message: "Security gateway timeout. Please try again later." };
  }

  // 3. Set up your standard SMTP Transport system configuration
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST, 
    port: parseInt(process.env.SMTP_PORT || "587"),
    secure: process.env.SMTP_SECURE === "true", 
    auth: {
      user: process.env.SMTP_USER, 
      pass: process.env.SMTP_PASS, 
    },
  });

  try {
    // 4. Dispatch data packet parameters
    await transporter.sendMail({
      from: `"${name}" <${process.env.SMTP_USER}>`, 
      to: process.env.CONTACT_RECEIVER_EMAIL, 
      replyTo: email, 
      subject: `New Lead - Inbound Contact Request from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #333; max-width: 600px; border: 1px solid #eee; border-radius: 12px;">
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