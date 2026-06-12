import { Send } from 'lucide-react';
import React, { useState } from 'react';

export function Contact() {
    const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, email, subject, message } = formData;
        const mailtoLink = `mailto:bibekpoudel2056@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`From: ${name} (${email})\n\n${message}`)}`;
        window.location.href = mailtoLink;
    };

    const inputClass =
        'px-4 py-3 rounded-md bg-neutral-900 text-white placeholder-neutral-600 border border-neutral-800 focus:border-neutral-500 focus:outline-none transition-colors text-sm';

    return (
        <section id="contact" className="border-b border-neutral-900">
            <div className="max-w-5xl mx-auto px-6 py-20">
                <p className="font-mono text-xs uppercase tracking-[0.25em] text-neutral-500">07 — Contact</p>
                <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-white">Get in Touch</h2>
                <p className="mt-2 text-sm text-neutral-500 max-w-xl">
                    Whether you want to discuss a role, collaborate on something, or just say hi — my inbox is open.
                </p>

                <form onSubmit={handleSubmit} className="mt-10 max-w-2xl grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        type="text"
                        placeholder="Your Name"
                        required
                        className={`col-span-1 md:col-span-2 ${inputClass}`}
                    />
                    <input
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        type="email"
                        placeholder="Your Email"
                        required
                        className={inputClass}
                    />
                    <input
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        type="text"
                        placeholder="Subject"
                        required
                        className={inputClass}
                    />
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="5"
                        placeholder="Your Message"
                        required
                        className={`col-span-1 md:col-span-2 ${inputClass}`}
                    ></textarea>
                    <button
                        type="submit"
                        className="mt-2 col-span-1 md:col-span-2 bg-white text-black font-medium py-2.5 px-6 rounded-md flex items-center justify-center gap-2 hover:bg-neutral-200 transition-colors text-sm"
                    >
                        <Send size={15} /> Send Message
                    </button>
                </form>
            </div>
        </section>
    );
}
