import logo from "../assets/qwickin_logo.png";

export const Footer = () => {
  return (
    <footer
      id="footer"
      className="bg-white"
    >
      <hr className="w-11/12 mx-auto border-border" />

      <section className="container py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-x-12 gap-y-10">
        <div className="flex flex-col gap-3">
          <a
            rel="noreferrer noopener"
            href="/"
            className="font-bold text-xl flex items-center"
          >
            <img
              src={logo}
              alt="Qwickin logo"
              className="mr-2 h-6 w-auto"
            />
            Qwickin
          </a>
          <p className="text-sm text-muted-foreground max-w-sm">
            Technology. Security. Solutions that work.
          </p>
          <h3 className="font-bold text-lg">Company</h3>
          <a
            rel="noreferrer noopener"
            href="#about"
            className="opacity-60 hover:opacity-100"
          >
            About Qwickin
          </a>
          <a
            rel="noreferrer noopener"
            href="#why-qwickin"
            className="opacity-60 hover:opacity-100"
          >
            Why Choose Us
          </a>
          <a
            rel="noreferrer noopener"
            href="#services-overview"
            className="opacity-60 hover:opacity-100"
          >
            Our Process
          </a>
          <a
            rel="noreferrer noopener"
            href="#contact"
            className="opacity-60 hover:opacity-100"
          >
            Careers
          </a>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Services</h3>
          <a
            rel="noreferrer noopener"
            href="#custom-applications"
            className="opacity-60 hover:opacity-100"
          >
            Custom Applications
          </a>
          <a
            rel="noreferrer noopener"
            href="#services-overview"
            className="opacity-60 hover:opacity-100"
          >
            Business Automation
          </a>
          <a
            rel="noreferrer noopener"
            href="#cybersecurity"
            className="opacity-60 hover:opacity-100"
          >
            Cybersecurity
          </a>
          <a
            rel="noreferrer noopener"
            href="#services-overview"
            className="opacity-60 hover:opacity-100"
          >
            Cloud Infrastructure
          </a>
          <a
            rel="noreferrer noopener"
            href="#digital-marketing"
            className="opacity-60 hover:opacity-100"
          >
            Digital Marketing
          </a>
          <a
            rel="noreferrer noopener"
            href="#services-overview"
            className="opacity-60 hover:opacity-100"
          >
            Managed IT
          </a>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Work & Insights</h3>
          <a
            rel="noreferrer noopener"
            href="#projects"
            className="opacity-60 hover:opacity-100"
          >
            Our Projects
          </a>
          <a
            rel="noreferrer noopener"
            href="#projects"
            className="opacity-60 hover:opacity-100"
          >
            Case Studies
          </a>
          <a
            rel="noreferrer noopener"
            href="#clients"
            className="opacity-60 hover:opacity-100"
          >
            Industries We Serve
          </a>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Get in Touch</h3>
          <a
            rel="noreferrer noopener"
            href="tel:+61424127808"
            className="opacity-60 hover:opacity-100"
          >
            +61 424 127 808
          </a>
          <a
            rel="noreferrer noopener"
            href="mailto:info@qwickin.com"
            className="opacity-60 hover:opacity-100"
          >
            info@qwickin.com
          </a>
          <span className="text-sm text-muted-foreground">
            Melbourne, Victoria, Australia
          </span>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Connect</h3>
          <a
            rel="noreferrer noopener"
            href="#"
            className="opacity-60 hover:opacity-100"
          >
            LinkedIn
          </a>
          <a
            rel="noreferrer noopener"
            href="#"
            className="opacity-60 hover:opacity-100"
          >
            Facebook
          </a>
          <a
            rel="noreferrer noopener"
            href="#"
            className="opacity-60 hover:opacity-100"
          >
            Instagram
          </a>
          <a
            rel="noreferrer noopener"
            href="#"
            className="opacity-60 hover:opacity-100"
          >
            WhatsApp Business
          </a>
        </div>
      </section>

      <section className="container pb-14 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <span>&copy; 2025 Qwickin IT Services. All rights reserved.</span>
        <div className="flex items-center gap-4">
          <a
            rel="noreferrer noopener"
            href="/privacy"
            className="hover:text-foreground"
          >
            Privacy Policy
          </a>
          <a
            rel="noreferrer noopener"
            href="/terms"
            className="hover:text-foreground"
          >
            Terms of Service
          </a>
        </div>
      </section>
    </footer>
  );
};
