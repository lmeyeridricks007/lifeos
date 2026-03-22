"use client";

import { useState } from "react";
import type { FormEvent } from "react";

const FORMSPREE_ACTION = "https://formspree.io/f/mojkdogo";

type TopicOption = { value: string; label: string };

type Props = {
  topics: readonly TopicOption[];
};

export function ContactForm({ topics }: Props) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const honeypot = formData.get("_gotcha");
    if (honeypot) {
      setStatus("success");
      return;
    }

    setStatus("loading");
    setErrorMessage(null);

    try {
      const res = await fetch(FORMSPREE_ACTION, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        const data = await res.json().catch(() => ({}));
        setStatus("error");
        setErrorMessage(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMessage("Network error. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-6 text-slate-800">
        <p className="font-semibold text-emerald-800">Message sent</p>
        <p className="mt-2 text-sm">
          Thanks for getting in touch. We will respond as soon as we can.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <input
        type="text"
        name="_gotcha"
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden
      />
      <div>
        <label htmlFor="contact-name" className="block text-sm font-medium text-slate-700">
          Name
        </label>
        <input
          id="contact-name"
          type="text"
          name="name"
          required
          className="mt-1 block min-h-[44px] w-full min-w-0 rounded-lg border border-slate-300 px-3 py-2 text-base text-slate-900 shadow-sm focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500 sm:text-sm"
          disabled={status === "loading"}
        />
      </div>
      <div>
        <label htmlFor="contact-email" className="block text-sm font-medium text-slate-700">
          Email
        </label>
        <input
          id="contact-email"
          type="email"
          name="email"
          required
          className="mt-1 block min-h-[44px] w-full min-w-0 rounded-lg border border-slate-300 px-3 py-2 text-base text-slate-900 shadow-sm focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500 sm:text-sm"
          disabled={status === "loading"}
        />
      </div>
      <div>
        <label htmlFor="contact-topic" className="block text-sm font-medium text-slate-700">
          Topic
        </label>
        <select
          id="contact-topic"
          name="topic"
          required
          className="mt-1 block min-h-[44px] w-full min-w-0 rounded-lg border border-slate-300 px-3 py-2 text-base text-slate-900 shadow-sm focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500 sm:text-sm"
          disabled={status === "loading"}
        >
          {topics.map((t) => (
            <option key={t.value} value={t.value}>
              {t.label}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="contact-message" className="block text-sm font-medium text-slate-700">
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={5}
          className="mt-1 block w-full rounded-lg border border-slate-300 px-3 py-2 text-slate-900 shadow-sm focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
          disabled={status === "loading"}
        />
      </div>
      {status === "error" && errorMessage && (
        <p className="text-sm font-medium text-red-600">{errorMessage}</p>
      )}
      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full min-h-[44px] rounded-lg bg-slate-900 px-5 py-2.5 text-base font-semibold text-white shadow-sm hover:bg-slate-800 disabled:opacity-50 sm:w-auto sm:text-sm"
      >
        {status === "loading" ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
