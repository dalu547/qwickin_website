import { useNavigate } from "react-router-dom";
import logoImg from "@/assets/logo/QwickIn_Logo_NoTagline_DarkBG.png";

export const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#1A1A1A] px-4 text-center">
      {/* Logo */}
      <img src={logoImg} alt="QwickIn" className="h-9 w-auto object-contain" />

      {/* 404 label */}
      <p className="mt-10 text-xs font-bold uppercase tracking-widest text-[#7CBD5E]">
        404 — Page Not Found
      </p>

      {/* Headline */}
      <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white md:text-5xl">
        Oops, page not found.
      </h1>

      {/* Subtext */}
      <p className="mt-4 max-w-sm text-base text-[#888]">
        Let's get you back on track.
      </p>

      {/* CTA */}
      <button
        type="button"
        onClick={() => navigate("/")}
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#7CBD5E] px-7 py-3.5 text-sm font-semibold text-[#1A1A1A] transition-all duration-200 hover:bg-[#5AA64A] hover:scale-105"
        style={{ boxShadow: "0 0 28px rgba(124,189,94,0.35)" }}
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path d="M10 3L5 8L10 13" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        Back to Homepage
      </button>
    </div>
  );
};
