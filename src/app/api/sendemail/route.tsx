import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    try {
        const { email, name, message } = await request.json();

        const response = await resend.emails.send({
            from: process.env.FROM_EMAIL!,
            replyTo: email,
            to: process.env.TO_EMAIL!,
            subject: 'New message from contact form',
            html: `<p><strong>Name:</strong> ${name}</p>
                   <p><strong>Email:</strong> ${email}</p>
                   <p><strong>Message:</strong> ${message}</p>`,
        });

        return NextResponse.json({ success: true, response });
    } catch (error) {
        console.error("Error sending email:", error);
        return NextResponse.json({ success: false, error: "Failed to send email" }, { status: 500 });
    }
}