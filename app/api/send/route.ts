import EmailTemplate from '@/components/email-template';
import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
    const { name, email, phone, message, company, country } = await req.json();

    try {
        // @ts-ignore
        const data = await resend.emails.send({
            from: `${String(process.env.EMAIL_FROM_NAME)} <${String(process.env.EMAIL_FROM_ADDRESS)}>`,
            to: [String(process.env.ADMIN_EMAIL)],
            subject: `${name} has a message!`,
            react: EmailTemplate({ name: `${name}`, email: `${email}`, phone: `${phone}`, company: `${company}`, country: `${country}`, message: `${message}`}),
        });

        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ error });
    }
}
