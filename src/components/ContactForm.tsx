"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { sendContactEmail } from "@/actions/contact";
import { useFormStatus } from "react-dom";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="group flex items-center justify-center gap-2 rounded-xl bg-white text-black font-display font-medium px-8 py-4 transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
    >
      {pending ? (
        <span className="inline-block h-4 w-4 rounded-full border-2 border-black/30 animate-spin" />
      ) : (
        <Send className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
      )}
      {pending ? "Sending…" : "Send message"}
    </button>
  );
}

export default function ContactForm() {
  const [state, setState] = useState<{ success?: boolean; error?: string } | null>(null);

  async function handleSubmit(formData: FormData) {
    setState(null);
    const result = await sendContactEmail(formData);
    setState(result);
    if (result.success) {
      formData.delete("name");
      formData.delete("email");
      formData.delete("project");
    }
  }

  return (
    <form
      className="space-y-5"
      action={handleSubmit}
      onSubmit={(e) => e.preventDefault()}
    >
      {state?.error && (
        <p className="rounded-xl bg-red-500/10 px-4 py-3 text-sm text-red-400">
          {state.error}
        </p>
      )}
      {state?.success && (
        <p className="rounded-xl bg-emerald-500/10 px-4 py-3 text-sm text-emerald-400">
          ✓ Message sent. Thanks — I&apos;ll be in touch soon.
        </p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <label className="block">
          <span className="block text-xs text-white-muted uppercase tracking-wide mb-2">
            Name
          </span>
          <input
            name="name"
            type="text"
            required
            placeholder="Your name"
            className="w-full rounded-xl bg-bg-elev/50 border border-default px-4 py-3 text-white placeholder:text-white-dim transition-colors focus:border-hover outline-none"
          />
        </label>
        <label className="block">
          <span className="block text-xs text-white-muted uppercase tracking-wide mb-2">
            Email
          </span>
          <input
            name="email"
            type="email"
            required
            placeholder="you@example.com"
            className="w-full rounded-xl bg-bg-elev/50 border border-default px-4 py-3 text-white placeholder:text-white-dim transition-colors focus:border-hover outline-none"
          />
        </label>
      </div>
      <label className="block">
        <span className="block text-xs text-white-muted uppercase tracking-wide mb-2">
          Project
        </span>
        <textarea
          name="project"
          rows={5}
          required
          placeholder="Tell me about your project..."
          className="w-full resize-none rounded-xl bg-bg-elev/50 border border-default px-4 py-3 text-white placeholder:text-white-dim transition-colors focus:border-hover outline-none"
        />
      </label>

      <SubmitButton />
    </form>
  );
}
