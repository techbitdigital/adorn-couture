"use client";
import { useState } from "react";
import { courses } from "@/lib/data/courses";
import Button from "@/components/ui/Button";
import { Input, Select, Textarea } from "@/components/ui/Input";

export default function ApplyPage() {
  const [status, setStatus] = useState("idle");
  const [form, setForm] = useState({
    fullName: "", email: "", phone: "", course: "", experienceLevel: "", message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ fullName: "", email: "", phone: "", course: "", experienceLevel: "", message: "" });
      } else { setStatus("error"); }
    } catch { setStatus("error"); }
  };

  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="bg-cream-dark pt-16 pb-16">
        <div className="container-custom">
          <p className="text-xs tracking-[0.3em] uppercase text-wine-DEFAULT mb-3">Adorn Couture Academy</p>
          <h1 className="font-serif text-display-md text-gray-900 mb-4">Apply Now</h1>
          <p className="text-gray-500 max-w-xl">Take the first step toward your fashion career. Fill out the form below and we will be in touch within 48 hours.</p>
        </div>
      </div>
      <div className="container-custom section-padding">
        <div className="max-w-2xl mx-auto">
          {status === "success" ? (
            <div className="text-center py-20">
              <h2 className="font-serif text-3xl text-gray-900 mb-4">Application Submitted!</h2>
              <p className="text-gray-500 mb-8">Thank you for applying. We will review your application and get back to you within 48 hours.</p>
              <button onClick={() => setStatus("idle")} className="text-wine-DEFAULT text-sm underline underline-offset-4">Submit another application</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <Input label="Full Name" id="fullName" name="fullName" value={form.fullName} onChange={handleChange} placeholder="Enter your full name" required />
              <Input label="Email Address" id="email" name="email" type="email" value={form.email} onChange={handleChange} placeholder="Enter your email" required />
              <Input label="Phone Number" id="phone" name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="+234 800 000 0000" required />
              <Select label="Course" id="course" name="course" value={form.course} onChange={handleChange} required>
                <option value="">Select a course</option>
                {courses.map((c) => (
                  <option key={c.id} value={c.slug}>{c.title}</option>
                ))}
              </Select>
              <Select label="Experience Level" id="experienceLevel" name="experienceLevel" value={form.experienceLevel} onChange={handleChange} required>
                <option value="">Select your experience level</option>
                <option value="no-experience">No Experience</option>
                <option value="some-experience">Some Experience</option>
                <option value="intermediate">Intermediate</option>
                <option value="professional">Professional</option>
              </Select>
              <Textarea label="Tell us about yourself (optional)" id="message" name="message" value={form.message} onChange={handleChange} placeholder="Share your background and goals..." rows={4} />
              {status === "error" && (
                <p className="text-sm text-red-500">Something went wrong. Please try again.</p>
              )}
              <Button type="submit" size="lg" fullWidth disabled={status === "loading"} className="bg-wine-DEFAULT text-white hover:bg-wine-dark mt-2">
                {status === "loading" ? "Submitting..." : "Submit Application"}
              </Button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}