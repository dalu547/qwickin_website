import { Outlet } from "react-router-dom";
import { Footer } from "@/components/layout/Footer";
import { Navigation } from "@/components/layout/Navigation";

export const SiteLayout = () => {
  return (
    <div className="min-h-screen bg-[#1A1A1A] text-white">
      <Navigation />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
