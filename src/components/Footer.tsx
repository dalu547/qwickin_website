import logo from "../assets/qwickin_logo.png";
import appStoreBadge from "../assets/appstore.png";
import playStoreBadge from "../assets/playstore.png";

export const Footer = () => {
  return (
    <footer
      id="footer"
      className="bg-white"
    >
      <hr className="w-11/12 mx-auto border-border" />

      <section className="container py-6 flex flex-col gap-4 text-base text-muted-foreground md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col gap-3">
          <a
            rel="noreferrer noopener"
            href="/"
            className="flex items-center gap-3"
          >
            <img src={logo} alt="Qwickin logo" className="h-6 w-auto" />
            <span className="font-semibold text-foreground">Qwickin</span>
          </a>
          <div className="flex flex-col gap-2">
            <span className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
              Download now
            </span>
            <div className="flex flex-wrap gap-2">
              <a
                rel="noreferrer noopener"
                href="#"
                className="flex items-center gap-2 rounded-md border border-border px-3 py-2 text-xs text-foreground"
              >
                <img
                  src={appStoreBadge}
                  alt="Download on the App Store"
                  className="h-8 w-auto"
                />
              </a>
              <a
                rel="noreferrer noopener"
                href="#"
                className="flex items-center gap-2 rounded-md border border-border px-3 py-2 text-xs text-foreground"
              >
                <img
                  src={playStoreBadge}
                  alt="Get it on Google Play"
                  className="h-8 w-auto"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-1 md:items-end">
          <a
            rel="noreferrer noopener"
            href="tel:+61424127808"
            className="hover:text-foreground"
          >
            +61 424 127 808
          </a>
          <a
            rel="noreferrer noopener"
            href="mailto:info@qwickin.com"
            className="hover:text-foreground"
          >
            info@qwickin.com
          </a>
        </div>
      </section>

      <section className="container pb-8 flex items-center justify-center text-base text-muted-foreground">
        <span>&copy; 2025 Qwickin IT Services. All rights reserved.</span>
      </section>
    </footer>
  );
};
