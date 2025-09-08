"use client";
import React from "react";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import ContactForm from "@/components/form/contact/contact";

const Contact = () => {
    return (
        <GoogleReCaptchaProvider reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!} scriptProps={{ async: true }}>
            <ContactForm />
        </GoogleReCaptchaProvider>
    );
};

export default Contact;