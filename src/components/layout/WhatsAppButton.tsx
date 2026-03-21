const WA_URL =
  "https://wa.me/61424127808?text=Hi%20QwickIn%2C%20I%27d%20like%20to%20enquire%20about%20your%20services";

const WhatsAppIcon = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="white"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path d="M16 1C7.716 1 1 7.716 1 16c0 2.628.663 5.1 1.824 7.264L1 31l7.95-2.083A14.942 14.942 0 0016 31c8.284 0 15-6.716 15-15S24.284 1 16 1zm0 27.273a12.232 12.232 0 01-6.243-1.707l-.448-.266-4.636 1.215 1.237-4.52-.292-.463A12.224 12.224 0 013.727 16C3.727 9.212 9.212 3.727 16 3.727S28.273 9.212 28.273 16 22.788 28.273 16 28.273z" />
    <path d="M22.754 19.178c-.337-.169-1.99-.982-2.299-1.094-.308-.113-.533-.169-.757.169-.225.337-.87 1.094-1.066 1.319-.196.224-.393.252-.729.084-.337-.169-1.423-.524-2.71-1.67-1.001-.892-1.677-1.993-1.873-2.33-.196-.337-.021-.52.147-.687.152-.152.337-.394.506-.59.169-.197.225-.338.337-.563.113-.225.057-.422-.028-.59-.084-.17-.757-1.826-1.037-2.5-.273-.656-.55-.567-.757-.577-.196-.009-.42-.011-.645-.011-.225 0-.59.084-.899.422-.308.337-1.178 1.151-1.178 2.807s1.206 3.257 1.375 3.482c.168.225 2.373 3.621 5.749 5.079.803.347 1.43.554 1.919.709.806.257 1.541.22 2.121.134.647-.097 1.99-.813 2.27-1.6.281-.787.281-1.462.197-1.6-.084-.14-.308-.225-.645-.394z" />
  </svg>
);

export const WhatsAppButton = () => (
  <a
    href={WA_URL}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Chat with us on WhatsApp"
    className="group fixed bottom-5 right-5 z-[9999] flex h-[60px] w-[60px] items-center justify-center rounded-full transition-transform duration-200 hover:scale-110 active:scale-95 sm:h-[60px] sm:w-[60px]"
    style={{
      background: "#25D366",
      boxShadow: "0 4px 12px rgba(0,0,0,0.25)",
      // 64px touch target on mobile via min-h/min-w handled below
    }}
  >
    {/* Mobile touch target boost */}
    <span className="absolute inset-0 -m-0.5 rounded-full sm:hidden" />

    <WhatsAppIcon />

    {/* Tooltip */}
    <span className="pointer-events-none absolute bottom-full right-0 mb-3 whitespace-nowrap rounded-lg bg-[#1A1A1A] px-3 py-1.5 text-xs font-medium text-white opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100">
      Chat with us on WhatsApp
      {/* Arrow */}
      <span className="absolute -bottom-1 right-5 h-2 w-2 rotate-45 bg-[#1A1A1A]" />
    </span>
  </a>
);
