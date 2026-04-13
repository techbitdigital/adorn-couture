"use client";
import { useState } from "react";
import Button from "@/components/ui/Button";
import { Input, Textarea } from "@/components/ui/Input";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

const contactInfo = [
  { icon: MapPin, label: "Address", value: "Lagos, Nigeria" },
  { icon: Phone, label: "Phone", value: "+234 800 000 0000" },
  { icon: Mail, label: "Email", value: "hello@adorncouture.com" },
];

export default function ContactPage() {
  const [status, setStatus] = useState("idle");
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", phone: "", subject: "", message: "" });
      } else { setStatus("error"); }
    } catch { setStatus("error"); }
  };

  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="bg-cream-dark pt-16 pb-16">
        <div className="container-custom">
          <p className="text-xs tracking-[0.3em] uppercase text-wine-DEFAULT mb-3">Get In Touch</p>
          <h1 className="font-serif text-display-md text-gray-900 mb-4">Contact Us</h1>
          <p className="text-gray-500 max-w-xl">We would love to hear from you. Reach out for orders, academy inquiries, or any questions.</p>
        </div>
      </div>
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-1">
            <h2 className="font-serif text-2xl text-gray-900 mb-8">Reach Us</h2>
            <div className="flex flex-col gap-6 mb-10">
              {contactInfo.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-cream-dark flex items-center justify-center shrink-0">
                      <Icon size={16} className="text-wine-DEFAULT" />
                    </div>
                    <div>
                      <p className="text-xs tracking-[0.2em] uppercase text-gray-400 mb-1">{item.label}</p>
                      <p className="text-sm text-gray-700">{item.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <a href="https://wa.me/2348000000000?text=Hello%20Adorn%20Couture!" target="_blank" rel="noopener noreferrer">
              <Button variant="whatsapp" size="lg" fullWidth>
                <MessageCircle size={16} className="mr-2" />
                Chat on WhatsApp
              </Button>
            </a>
          </div>
          <div className="lg:col-span-2">
            {status === "success" ? (
              <div className="text-center py-20">
                <h2 className="font-serif text-3xl text-gray-900 mb-4">Message Sent!</h2>
                <p className="text-gray-500 mb-8">Thank you for reaching out. We will get back to you within 24 hours.</p>
                <button onClick={() => setStatus("idle")} className="text-wine-DEFAULT text-sm underline underline-offset-4">Send another message</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input label="Your Name" id="name" name="name" value={form.name} onChange={handleChange} placeholder="Full name" required />
                  <Input label="Email Address" id="email" name="email" type="email" value={form.email} onChange={handleChange} placeholder="your@email.com" required />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input label="Phone (optional)" id="phone" name="phone" value={form.phone} onChange={handleChange} placeholder="+234 800 000 0000" />
                  <Input label="Subject" id="subject" name="subject" value={form.subject} onChange={handleChange} placeholder="What is this about?" required />
                </div>
                <Textarea label="Message" id="message" name="message" value={form.message} onChange={handleChange} placeholder="Tell us more..." rows={6} required />
                {status === "error" && (
                  <p className="text-sm text-red-500">Something went wrong. Please try again.</p>
                )}
                <Button type="submit" size="lg" disabled={status === "loading"} className="bg-wine-DEFAULT text-white hover:bg-wine-dark self-start px-12">
                  {status === "loading" ? "Sending..." : "Send Message"}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}