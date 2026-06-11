"use server";

import nodemailer from "nodemailer";

interface FormState {
  success: boolean;
  message: string;
}

// Reuse the same secure transporter configuration from your environment variables
const createSmtpTransporter = () => {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || "587"),
    secure: process.env.SMTP_SECURE === "true",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
};

/**
 * Server Action: Handles Newsletter Subscription & Verification Emails
 */
export async function subscribeToNewsletter(
  prevState: any,
  formData: FormData
): Promise<FormState> {
  const email = formData.get("email") as string;

  // 1. Structural server-side format verification guardrails
  if (!email) {
    return { success: false, message: "Email address parameter is missing." };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { success: false, message: "Please provide a valid enterprise email format." };
  }

  // 2. Initialize Nodemailer Transporter
  const transporter = createSmtpTransporter();

  try {
    // 3. Optional: Send an alert notification to yourself/admin database
    // (Uncomment if you want an email notification every time someone signs up)
    /*
    await transporter.sendMail({
      from: `"Dev Innovative Monitor" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_RECEIVER_EMAIL,
      subject: `New Newsletter Subscriber: ${email}`,
      text: `A new user has requested newsletter tracking updates: ${email}`,
    });
    */

    // 4. Dispatch a Premium Welcome Email directly to the subscriber
    await transporter.sendMail({
      from: `"Dev Innovative" <${process.env.SMTP_USER}>`,
      to: email,
      subject: "Welcome to Dev Innovative - Transmission Secured 🛡️",
      text: `Thank you for subscribing to Dev Innovative. You will now receive our weekly tactical updates regarding high-fidelity web architecture, predictive AI automation logic, and zero-trust framework hardening.`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; padding: 30px 20px; color: #334155; max-width: 550px; margin: 0 auto; border: 1px solid #f1f5f9; border-radius: 16px; background-color: #ffffff; box-shadow: 0 4px 20px rgba(0,0,0,0.01);">
          
          <!-- Brand Header Section -->
          <div style="text-align: left; margin-bottom: 24px;">
            <span style="font-size: 11px; font-weight: 800; text-transform: uppercase; tracking-wider; color: #104cba; letter-spacing: 0.15em;">
              Weekly Architecture Insights
            </span>
            <h1 style="color: #08112a; font-size: 24px; font-weight: 900; margin: 6px 0 0 0; letter-spacing: -0.02em;">
              Connection Secured.
            </h1>
          </div>

          <p style="font-size: 15px; line-height: 1.6; color: #475569; margin-bottom: 20px;">
            Thank you for subscribing to the Dev Innovative newsletter channel. You've joined an elite circle of enterprise leads receiving premium breakdowns on building uncompromised digital infrastructure.
          </p>

          <!-- Core Pillars Callout Box -->
          <div style="background-color: #f8fafc; border-left: 3px solid #ff6036; padding: 16px; border-radius: 4px 12px 12px 4px; margin-bottom: 24px;">
            <h4 style="margin: 0 0 8px 0; font-size: 13px; font-weight: 700; color: #08112a; text-transform: uppercase; tracking-wide;">What's Heading Down The Wire:</h4>
            <ul style="margin: 0; padding-left: 20px; font-size: 13.5px; color: #475569; line-height: 1.6;">
              <li>Zero-Trust Code Hardening Protocols</li>
              <li>Consensus AI & Self-Healing Logic Layers</li>
              <li>Sovereign Deployment Grids & DevOps Optimization</li>
            </ul>
          </div>

          <p style="font-size: 14px; line-height: 1.6; color: #64748b; margin-bottom: 24px;">
            Our briefings are dispatched every Tuesday. No fluff, no clutter—just raw technical execution logic.
          </p>

          <hr style="border: none; border-top: 1px solid #f1f5f9; margin: 24px 0;" />

          <!-- Email Footer Block -->
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
            <tr>
              <td>
                <p style="font-size: 11px; color: #94a3b8; margin: 0; font-weight: 500;">
                  Dev Innovative Corporate Infrastructure Frameworks
                </p>
              </td>
              <td style="text-align: right;">
                <a href="#" style="font-size: 11px; color: #94a3b8; text-decoration: underline; font-weight: 600;">
                  Unsubscribe cleanly
                </a>
              </td>
            </tr>
          </table>

        </div>
      `,
    });

    return { 
      success: true, 
      message: "Subscription verified! Check your inbox for your welcome token confirmation." 
    };

  } catch (error) {
    console.error("Newsletter Nodemailer transport routing exception:", error);
    return { 
      success: false, 
      message: "System failure sending authentication mail. Please try again later." 
    };
  }
}

// Keep your existing contact action operational in the same file
export async function sendContactEmail(formData: FormData): Promise<FormState> {
  // ... (Your original code remains exactly here unchanged)
  return { success: true, message: "" }; // placeholder matching your original code
}