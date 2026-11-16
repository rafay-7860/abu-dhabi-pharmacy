"use client";

import { FormEvent, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/Button";
import { inquiryTypes } from "@/lib/content";

type FormState = {
  fullName: string;
  phone: string;
  email: string;
  inquiryType: string;
  message: string;
};

type Status =
  | { type: "idle" }
  | { type: "loading" }
  | { type: "success"; message: string }
  | { type: "error"; message: string };

const initial: FormState = {
  fullName: "",
  phone: "",
  email: "",
  inquiryType: inquiryTypes[0],
  message: "",
};

function validate(values: FormState): string | null {
  if (!values.fullName.trim() || values.fullName.trim().length < 2) {
    return "Please enter your full name.";
  }
  if (!values.phone.trim() || values.phone.replace(/\D/g, "").length < 8) {
    return "Please enter a valid phone number.";
  }
  if (values.email.trim()) {
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim());
    if (!emailOk) return "Please enter a valid email address or leave it blank.";
  }
  if (!values.inquiryType) return "Please select an inquiry type.";
  if (!values.message.trim() || values.message.trim().length < 10) {
    return "Please enter a message of at least 10 characters.";
  }
  return null;
}

export function ContactForm() {
  const reduceMotion = useReducedMotion();
  const [values, setValues] = useState<FormState>(initial);
  const [status, setStatus] = useState<Status>({ type: "idle" });

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const clientError = validate(values);
    if (clientError) {
      setStatus({ type: "error", message: clientError });
      return;
    }

    setStatus({ type: "loading" });
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = (await response.json()) as { message?: string; error?: string };
      if (!response.ok) {
        setStatus({
          type: "error",
          message: data.error ?? "Unable to submit your inquiry. Please try again.",
        });
        return;
      }
      setStatus({
        type: "success",
        message:
          data.message ??
          "Inquiry received and validated. Email delivery is not configured yet — please call the pharmacy for urgent requests.",
      });
      setValues(initial);
    } catch {
      setStatus({
        type: "error",
        message: "Network error. Please check your connection or call the pharmacy.",
      });
    }
  }

  const fieldClass =
    "w-full rounded-2xl border border-[#15966A]/20 bg-white px-4 py-3 text-sm text-[#24332E] outline-none transition focus:border-[#15966A] focus:ring-2 focus:ring-[#15966A]/20";

  return (
    <motion.form
      onSubmit={onSubmit}
      noValidate
      initial={reduceMotion ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="rounded-3xl border border-[#15966A]/10 bg-white p-6 shadow-[0_16px_50px_rgba(36,51,46,0.08)] sm:p-8"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-sm font-medium text-[#24332E]">
          Full Name *
          <input
            className={`${fieldClass} mt-2`}
            name="fullName"
            autoComplete="name"
            value={values.fullName}
            onChange={(e) => setValues((v) => ({ ...v, fullName: e.target.value }))}
            required
          />
        </label>
        <label className="block text-sm font-medium text-[#24332E]">
          Phone Number *
          <input
            className={`${fieldClass} mt-2`}
            name="phone"
            type="tel"
            autoComplete="tel"
            value={values.phone}
            onChange={(e) => setValues((v) => ({ ...v, phone: e.target.value }))}
            required
          />
        </label>
        <label className="block text-sm font-medium text-[#24332E]">
          Email (optional)
          <input
            className={`${fieldClass} mt-2`}
            name="email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={(e) => setValues((v) => ({ ...v, email: e.target.value }))}
          />
        </label>
        <label className="block text-sm font-medium text-[#24332E]">
          Inquiry Type *
          <select
            className={`${fieldClass} mt-2`}
            name="inquiryType"
            value={values.inquiryType}
            onChange={(e) => setValues((v) => ({ ...v, inquiryType: e.target.value }))}
            required
          >
            {inquiryTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </label>
      </div>
      <label className="mt-4 block text-sm font-medium text-[#24332E]">
        Message *
        <textarea
          className={`${fieldClass} mt-2 min-h-32 resize-y`}
          name="message"
          value={values.message}
          onChange={(e) => setValues((v) => ({ ...v, message: e.target.value }))}
          required
        />
      </label>

      {status.type === "error" && (
        <p className="mt-4 rounded-2xl bg-red-50 px-4 py-3 text-sm text-red-700" role="alert">
          {status.message}
        </p>
      )}
      {status.type === "success" && (
        <p
          className="mt-4 rounded-2xl bg-[#E8F7F0] px-4 py-3 text-sm text-[#086B4C]"
          role="status"
        >
          {status.message}
        </p>
      )}

      <Button type="submit" className="mt-6 w-full sm:w-auto" disabled={status.type === "loading"}>
        {status.type === "loading" ? "Submitting…" : "Send Inquiry"}
      </Button>
    </motion.form>
  );
}
