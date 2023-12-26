"use server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);


export const sendEmail = async (formData: FormData) => {
    const message = formData.get('message');
    const name = formData.get('email');

    resend.emails.send({
        from: 'onboarding@resend.dev',
        to: 'ltryczynski1@gmail.com',
        subject: 'Message from contact form',
        text: 'Hello world!'
    })
};
