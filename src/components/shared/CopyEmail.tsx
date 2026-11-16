"use client";

import { useState } from "react";

export default function CopyEmail() {
  const [message, setMessage] = useState("");
  return <div>
    <button type="button" onClick={async () => {
      try { await navigator.clipboard.writeText("vyvsyadav98@proton.me"); setMessage("Email address copied."); }
      catch { setMessage("Copy unavailable. Select the email address above to copy it manually."); }
    }} className="inline-flex min-h-11 items-center rounded-lg border border-neutral-300 px-4 text-sm font-semibold hover:border-black hover:bg-neutral-100">Copy email address</button>
    <p role="status" aria-live="polite" className="mt-2 min-h-6 text-sm text-neutral-600">{message}</p>
  </div>;
}
