import logo from "../assets/qwickin_logo.png";

export const Footer = () => {
  return (
    <footer
      id="footer"
      className="bg-white"
    >
      <hr className="w-11/12 mx-auto border-border" />

      <section className="container py-20 grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8">
        <div className="col-span-full xl:col-span-2">
          <a
            rel="noreferrer noopener"
            href="/"
            className="font-bold text-xl flex"
          >
            <img
              src={logo}
              alt="Qwickin logo"
              className="mr-2 h-6 w-auto"
            />
            Qwickin
          </a>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Company</h3>
          <div>
            <a
              rel="noreferrer noopener"
              href="#overview"
              className="opacity-60 hover:opacity-100"
            >
              Overview
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="#benefits"
              className="opacity-60 hover:opacity-100"
            >
              Why Qwickin
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="#partners"
              className="opacity-60 hover:opacity-100"
            >
              Partners
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Modules</h3>
          <div>
            <a
              rel="noreferrer noopener"
              href="#modules"
              className="opacity-60 hover:opacity-100"
            >
              Jobs
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="#modules"
              className="opacity-60 hover:opacity-100"
            >
              Accommodations
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="#modules"
              className="opacity-60 hover:opacity-100"
            >
              Ads + Locations
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Resources</h3>
          <div>
            <a
              rel="noreferrer noopener"
              href="#howItWorks"
              className="opacity-60 hover:opacity-100"
            >
              How it Works
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="#testimonials"
              className="opacity-60 hover:opacity-100"
            >
              Testimonials
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Get in touch</h3>
          <div>
            <a
              rel="noreferrer noopener"
              href="#cta"
              className="opacity-60 hover:opacity-100"
            >
              Book a demo
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="#cta"
              className="opacity-60 hover:opacity-100"
            >
              Contact sales
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="#cta"
              className="opacity-60 hover:opacity-100"
            >
              Request info
            </a>
          </div>
        </div>
      </section>

      <section className="container pb-14 text-center text-sm text-muted-foreground">
        <h3>&copy; 2024 Qwickin. All rights reserved.</h3>
      </section>
    </footer>
  );
};
