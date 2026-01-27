import { About } from "./components/About";
import { ContactPage } from "./components/ContactPage";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { HowItWorks } from "./components/HowItWorks";
import { Navbar } from "./components/Navbar";
import { ScrollToTop } from "./components/ScrollToTop";
import { Services } from "./components/Services";
import { Projects } from "./components/Projects";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <HowItWorks />
      <Projects />
      <ContactPage />
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;
