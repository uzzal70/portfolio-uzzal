import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message, honeypot } = body;

    // Spam protection check
    if (honeypot) {
      return NextResponse.json(
        { success: false, message: "Spam detected." },
        { status: 400 }
      );
    }

    // Validation
    if (!name || typeof name !== "string" || name.trim().length < 2) {
      return NextResponse.json(
        { success: false, message: "Please provide a valid name (at least 2 characters)." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== "string" || !emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    if (!subject || typeof subject !== "string" || subject.trim().length < 3) {
      return NextResponse.json(
        { success: false, message: "Please provide a subject line." },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || message.trim().length < 10) {
      return NextResponse.json(
        { success: false, message: "Message must be at least 10 characters long." },
        { status: 400 }
      );
    }

    // In a production environment with SENDGRID_API_KEY, RESEND_API_KEY, or SMTP credentials configured,
    // the email transport would dispatch here.
    // We log the inquiry safely on the server side:
    console.log("[Contact Inquiry Received]", {
      name: name.trim(),
      email: email.trim(),
      subject: subject.trim(),
      messageLength: message.length,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json(
      {
        success: true,
        message: "Thank you for reaching out! Your message has been received, and I will get back to you shortly.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("[Contact API Error]", error);
    return NextResponse.json(
      { success: false, message: "An unexpected error occurred. Please try again later or email directly." },
      { status: 500 }
    );
  }
}

