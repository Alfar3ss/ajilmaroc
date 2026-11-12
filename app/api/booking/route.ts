import { NextResponse } from "next/server";

const receiverEmail = process.env.BOOKING_RECEIVER_EMAIL || "ichchoun@gmail.com";
const gmailUser = process.env.GMAIL_USER || "";
const gmailPass = process.env.GMAIL_PASS || "";
const senderEmail = process.env.GMAIL_SENDER_EMAIL || gmailUser;

function bookingEmailHtml(body: any) {
  return `
    <div style="font-family:system-ui, sans-serif; line-height:1.6; color:#111;">
      <h2>New Booking Request</h2>
      <p><strong>Name:</strong> ${body.name}</p>
      <p><strong>Email:</strong> ${body.email}</p>
      <p><strong>Phone:</strong> ${body.phone || "N/A"}</p>
      <p><strong>Tour:</strong> ${body.tour}</p>
      <p><strong>Date:</strong> ${body.date || "Not specified"}</p>
      <p><strong>People:</strong> ${body.people || "Not specified"}</p>
      <p><strong>Message:</strong> ${body.message || "No message provided."}</p>
    </div>
  `;
}

function confirmationEmailHtml(body: any) {
  return `
    <div style="font-family:system-ui, sans-serif; line-height:1.6; color:#111;">
      <h2>Thank you for your booking request</h2>
      <p>Hi ${body.name},</p>
      <p>We have received your request for the <strong>${body.tour}</strong> tour.</p>
      <p>Here are the details you submitted:</p>
      <p><strong>Date:</strong> ${body.date || "Not specified"}</p>
      <p><strong>People:</strong> ${body.people || "Not specified"}</p>
      <p><strong>Message:</strong> ${body.message || "No message provided."}</p>
      <p>Our team will contact you shortly to confirm availability and finalize your booking.</p>
      <p>Thank you for choosing AjilMaroc.</p>
    </div>
  `;
}

async function sendEmails(body: any) {
  if (!gmailUser || !gmailPass) {
    console.error("Gmail SMTP is not configured. Set GMAIL_USER and GMAIL_PASS in .env.");
    return { success: false, error: "Gmail SMTP not configured." };
  }

  try {
    const { createTransport } = await import("nodemailer");
    const transporter = createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: gmailUser,
        pass: gmailPass,
      },
    });

    await transporter.sendMail({
      from: senderEmail,
      to: receiverEmail,
      subject: `AjiLMaroc: New Booking ${body.tour}`,
      html: bookingEmailHtml(body),
      replyTo: body.email,
    });

    await transporter.sendMail({
      from: senderEmail,
      to: body.email,
      subject: `AjiLMaroc: Your booking request for ${body.tour}`,
      html: confirmationEmailHtml(body),
      replyTo: receiverEmail,
    });

    console.log("Booking emails sent successfully:", {
      to_receiver: receiverEmail,
      to_customer: body.email,
      from: senderEmail,
    });
    return { success: true };
  } catch (emailError) {
    console.error("Email sending exception:", emailError);
    return { success: false, error: String(emailError) };
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const name = typeof body.name === "string" ? body.name.trim() : "";
    const email = typeof body.email === "string" ? body.email.trim() : "";
    const tourCategory = typeof body.tourCategory === "string" ? body.tourCategory : "";
    const tour = typeof body.tour === "string" ? body.tour.trim() : "";
    const date = typeof body.date === "string" ? body.date.trim() : "";
    const people = typeof body.people === "string" ? body.people.trim() : "";
    const phone = typeof body.phone === "string" ? body.phone.trim() : "";
    const message = typeof body.message === "string" ? body.message.trim() : "";

    const finalTour = tour || (tourCategory === "personalized" ? "Personalized Trip" : "");

    // Validate required fields
    if (!name || !email || !finalTour) {
      return NextResponse.json(
        { error: "Missing required booking fields: name, email, and tour are required." },
        { status: 400 }
      );
    }

    if (tourCategory === "personalized" && !message) {
      return NextResponse.json(
        { error: "Please provide a message describing your personalized trip request." },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format." },
        { status: 400 }
      );
    }

    const normalizedBody = {
      name,
      email,
      phone,
      tour: finalTour,
      date,
      people,
      message,
      tourCategory,
    };

    const emailResult = await sendEmails(normalizedBody);
    if (!emailResult.success) {
      return NextResponse.json(
        { error: emailResult.error || "Failed to send booking emails." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Booking request received successfully.",
        booking: {
          name: body.name,
          email: body.email,
          phone: body.phone,
          tour: body.tour,
          date: body.date,
          people: body.people,
          message: body.message,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Unexpected booking API error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again." },
      { status: 500 }
    );
  }
}
