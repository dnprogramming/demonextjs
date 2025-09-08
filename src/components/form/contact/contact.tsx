"use client";
import React from "react";
import styles from "./contact.module.css";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

const ContactForm = () => {
    const { executeRecaptcha } = useGoogleReCaptcha();

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!executeRecaptcha) {
            console.log('reCAPTCHA not ready');
            return;
        }

        const token = await executeRecaptcha('contact_form');
        const formData = new FormData(event.target as HTMLFormElement);
        const name = formData.get("name")?.toString() || "";
        const email = formData.get("email")?.toString() || "";
        const message = formData.get("message")?.toString() || "";
        const sanitizedEmail = email.trim().toLowerCase();
        const sanitizedName = name.trim();
        const sanitizedMessage = message.trim();
        if (!sanitizedEmail || !sanitizedName || !sanitizedMessage) {
            alert("Please fill in all fields.");
            return;
        }
        if (message.length < 10) {
            alert("Message must be at least 10 characters long.");
            return;
        }
        if (message.length > 500) {
            alert("Message must be less than 500 characters long.");
            return;
        }
        if (name.length < 2) {
            alert("Name must be at least 2 characters long.");
            return;
        }
        if (name.length > 50) {
            alert("Name must be less than 50 characters long.");
            return;
        }
        if (email.length < 5) {
            alert("Email must be at least 5 characters long.");
            return;
        }
        const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(sanitizedEmail);
        if (!isValidEmail) {
            alert("Please enter a valid email address.");
            return;
        }
        if (message.includes("<") || message.includes(">")) {
            alert("Invalid characters in message.");
            return;
        }
        const tokenResponse = await fetch("/api/verify", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ token }),
        });
        const tokenResult = await tokenResponse.json();
        if (!tokenResult.success) {
            alert("reCAPTCHA verification failed. Please try again.");
            return;
        }
        try {
            const response = await fetch("/api/sendemail", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email: sanitizedEmail, name: sanitizedName, message: sanitizedMessage }),
            });

            const result = await response.json();
            if (result.success) {
                alert("Email sent successfully!");
            } else {
                alert("Failed to send email. Please try again.");
            }
        } catch (error) {
            console.error("Error sending email:", error);
            alert("Failed to send email. Please try again later.");
        }
    };

    return (
        <div className={styles.contact}>
            <h1>Contact Us</h1>
            <p>If you have any questions or comments, please feel free to reach out to us!</p>
            <form className={styles.contactForm} onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required />
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />
                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" required></textarea>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default ContactForm;