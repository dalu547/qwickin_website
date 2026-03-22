"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const STORAGE_KEY = "qwickin_cookie_consent";

export const CookieConsent = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem(STORAGE_KEY)) {
      const t = setTimeout(() => setVisible(true), 800);
      return () => clearTimeout(t);
    }
  }, []);

  const accept = () => {
    localStorage.setItem(STORAGE_KEY, "accepted");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie consent"
      className="fixed bottom-0 left-0 right-0 z-[10000] border-t border-[#E5E5E5] bg-white px-4 py-4 shadow-[0_-4px_24px_rgba(0,0,0,0.1)]"
    >
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-[#555555]">
          This website uses cookies to improve your experience. By continuing, you agree to our{" "}
          <Link
            href="/privacy-policy"
            className="text-[#7CBD5E] underline underline-offset-2 hover:text-[#9ed885]"
          >
            Privacy Policy
          </Link>
          .
        </p>
        <button
          type="button"
          onClick={accept}
          className="flex-shrink-0 rounded-[4px] bg-[#7CBD5E] px-5 py-2 text-sm font-semibold text-[#1A1A1A] transition-colors duration-200 hover:bg-[#5AA64A]"
        >
          Accept
        </button>
      </div>
    </div>
  );
};
