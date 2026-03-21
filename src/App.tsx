import { Route, Routes } from "react-router-dom";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { RouteScrollTop } from "@/components/layout/RouteScrollTop";
import { HomePage } from "@/pages/HomePage";
import { ServicesPage } from "@/pages/ServicesPage";
import { ProjectsPage } from "@/pages/ProjectsPage";
import { PartnersPage } from "@/pages/PartnersPage";
import { LocationsPage } from "@/pages/LocationsPage";
import { ContactPage } from "@/pages/ContactPage";
import { PrivacyPolicyPage } from "@/pages/PrivacyPolicyPage";
import { NotFoundPage } from "@/pages/NotFoundPage";

function App() {
  return (
    <>
      <RouteScrollTop />
      <Routes>
        <Route element={<SiteLayout />}>
          <Route path="/"             element={<HomePage />} />
          <Route path="/services"     element={<ServicesPage />} />
          <Route path="/projects"     element={<ProjectsPage />} />
          <Route path="/partners"     element={<PartnersPage />} />
          <Route path="/locations"    element={<LocationsPage />} />
          <Route path="/contact"      element={<ContactPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="*"             element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
