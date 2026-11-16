import { NextResponse } from "next/server";
import { inquiryTypes } from "@/lib/content";

type ContactPayload = {
  fullName?: string;
  phone?: string;
  email?: string;
  inquiryType?: string;
  message?: string;
};

function isInquiryType(value: string): boolean {
  return (inquiryTypes as readonly string[]).includes(value);
}

export async function POST(request: Request) {
  let body: ContactPayload;

  try {
    body = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const fullName = body.fullName?.trim() ?? "";
  const phone = body.phone?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const inquiryType = body.inquiryType?.trim() ?? "";
  const message = body.message?.trim() ?? "";

  if (fullName.length < 2) {
    return NextResponse.json(
      { error: "Please enter your full name." },
      { status: 400 },
    );
  }

  if (phone.replace(/\D/g, "").length < 8) {
    return NextResponse.json(
      { error: "Please enter a valid phone number." },
      { status: 400 },
    );
  }

  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { error: "Please enter a valid email address or leave it blank." },
      { status: 400 },
    );
  }

  if (!isInquiryType(inquiryType)) {
    return NextResponse.json(
      { error: "Please select a valid inquiry type." },
      { status: 400 },
    );
  }

  if (message.length < 10) {
    return NextResponse.json(
      { error: "Please enter a message of at least 10 characters." },
      { status: 400 },
    );
  }

  // Validated payload is accepted. Email delivery is not wired yet —
  // integrate Resend/Formspree/SMTP here when credentials are available.
  console.info("[contact-inquiry]", {
    fullName,
    phone,
    email: email || null,
    inquiryType,
    messageLength: message.length,
    receivedAt: new Date().toISOString(),
  });

  return NextResponse.json({
    ok: true,
    message:
      "Your inquiry was received and validated. Email delivery is not configured on this website yet — for urgent requests, please call Abu Dhabi Pharmacy at +971 2 886 5628.",
  });
}
