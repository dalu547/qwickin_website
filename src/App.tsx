import { About } from "./components/About";
import { ContactPage } from "./components/ContactPage";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { HowItWorks } from "./components/HowItWorks";
import { Navbar } from "./components/Navbar";
import { ScrollToTop } from "./components/ScrollToTop";
import { Services } from "./components/Services";
import { ServicesOverview } from "./components/ServicesOverview";
import { ServiceCustomApplications } from "./components/ServiceCustomApplications";
import { ServiceCybersecurity } from "./components/ServiceCybersecurity";
import { ServiceDigitalMarketing } from "./components/ServiceDigitalMarketing";
import { Projects } from "./components/Projects";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Projects />
      <HowItWorks />
      <ServicesOverview />
      <ServiceCustomApplications />
      <ServiceCybersecurity />
      <ServiceDigitalMarketing />
      <ContactPage />
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;
