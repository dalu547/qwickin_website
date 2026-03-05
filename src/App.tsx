import { Navigate, Route, Routes } from "react-router-dom";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { RouteScrollTop } from "@/components/layout/RouteScrollTop";
import { AboutPage } from "@/pages/AboutPage";
import { ContactPage } from "@/pages/ContactPage";
import { HomePage } from "@/pages/HomePage";
import { ServicesPage } from "@/pages/ServicesPage";

function App() {
  return (
    <>
      <RouteScrollTop />
      <Routes>
        <Route element={<SiteLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/platform" element={<Navigate to="/services#platform" replace />} />
          <Route path="/solutions" element={<Navigate to="/services" replace />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/resources" element={<Navigate to="/about#resources" replace />} />
          <Route path="/company" element={<Navigate to="/about" replace />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
