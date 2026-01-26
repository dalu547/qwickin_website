import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";

const quickLinks = [
  { title: "View Our Services", href: "#services-overview" },
  { title: "See Our Work", href: "#projects" },
  { title: "Read About Us", href: "#about" },
];

const faqs = [
  {
    q: "How quickly will you respond?",
    a: "We respond to all inquiries within 24 hours, typically same business day.",
  },
  {
    q: "Is the initial consultation really free?",
    a: "Yes, completely free with no obligation. We'll provide honest recommendations.",
  },
  {
    q: "Can we meet in person?",
    a: "Absolutely. We're Melbourne-based and happy to meet face-to-face for local clients.",
  },
  {
    q: "Do you work with businesses outside Melbourne?",
    a: "Yes. We work with businesses throughout Australia and internationally.",
  },
];

export const ContactPage = () => {
  return (
    <section
      id="contact"
      className="container py-24 sm:py-32 space-y-16"
    >
      <div className="text-center space-y-3">
        <h2 className="text-3xl md:text-4xl font-semibold">Get in Touch</h2>
        <p className="text-muted-foreground text-lg">
          Let's discuss how we can help your business with the right technology
          solutions.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1fr,1.1fr]">
        <Card>
          <CardHeader>
            <CardTitle>Contact Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm text-muted-foreground">
            <div>
              <div className="font-semibold text-foreground">Phone</div>
              <a href="tel:+61424127808">+61 424 127 808</a>
              <div>Monday - Friday, 9:00 AM - 6:00 PM AEST</div>
            </div>
            <div>
              <div className="font-semibold text-foreground">Email</div>
              <a href="mailto:info@qwickin.com">info@qwickin.com</a>
              <div>We respond within 24 hours</div>
            </div>
            <div>
              <div className="font-semibold text-foreground">Location</div>
              <div>Melbourne, Victoria, Australia</div>
              <div>Serving Melbourne metro and beyond</div>
            </div>
            <div>
              <div className="font-semibold text-foreground">Business Hours</div>
              <div>Monday - Friday: 9:00 AM - 6:00 PM</div>
              <div>Saturday: By Appointment</div>
              <div>Sunday: Closed</div>
              <div>Emergency support available 24/7 for existing clients</div>
            </div>
          </CardContent>
        </Card>

        <Card className="flex items-center justify-center min-h-[280px] bg-muted/60 text-sm text-muted-foreground">
          Map embed placeholder (Melbourne)
        </Card>
      </div>

      <div className="space-y-6">
        <h3 className="text-2xl md:text-3xl font-semibold text-center">
          Send Us a Message
        </h3>
        <Card className="max-w-3xl mx-auto">
          <CardContent className="grid gap-4 pt-6">
            <Input placeholder="Your Name *" />
            <Input placeholder="Company Name" />
            <Input placeholder="Email Address *" type="email" />
            <Input placeholder="Phone Number" type="tel" />
            <div className="text-sm text-muted-foreground">
              I'm Interested In *
            </div>
            <div className="grid gap-2 text-sm text-muted-foreground">
              {[
                "Custom Application Development",
                "Business Systems & Automation",
                "Cybersecurity & IT Security",
                "Cloud & Infrastructure",
                "Digital Marketing & SEO",
                "Managed IT & Consulting",
                "Not sure - need advice",
              ].map((label) => (
                <label key={label} className="flex items-center gap-2">
                  <input type="checkbox" className="h-4 w-4" /> {label}
                </label>
              ))}
            </div>
            <Input placeholder="How Did You Hear About Us?" />
            <textarea
              className="min-h-[140px] rounded-md border border-input bg-background p-3 text-sm"
              placeholder="Tell Us About Your Project *"
            />
            <div className="text-sm text-muted-foreground">
              Preferred Contact Method
            </div>
            <div className="flex gap-3 text-sm text-muted-foreground">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="h-4 w-4" /> Email
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" className="h-4 w-4" /> Phone
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" className="h-4 w-4" /> Either
              </label>
            </div>
            <Input placeholder="When Would You Like to Start?" />
            <label className="flex items-center gap-2 text-sm text-muted-foreground">
              <input type="checkbox" className="h-4 w-4" /> I agree to the
              Privacy Policy and consent to Qwickin contacting me about my
              inquiry.
            </label>
            <Button className="w-full md:w-auto">Send Message</Button>
          </CardContent>
        </Card>
      </div>

      <div
        id="consultation"
        className="bg-primary/10 rounded-3xl p-8 text-center space-y-4"
      >
        <h3 className="text-2xl md:text-3xl font-semibold">
          Schedule a Free Consultation
        </h3>
        <p className="text-muted-foreground">
          Complimentary 30-45 minute consultations to explore solutions with no
          pressure.
        </p>
        <div className="grid gap-2 text-sm text-muted-foreground">
          <span>✓ Honest assessment of your needs</span>
          <span>✓ Practical advice and recommendations</span>
          <span>✓ Clear next steps if you want to proceed</span>
        </div>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button asChild className="px-8">
            <a href="tel:+61424127808">Call Now: +61 424 127 808</a>
          </Button>
          <Button asChild variant="outline" className="px-8">
            <a href="mailto:info@qwickin.com">Email to Schedule</a>
          </Button>
          <Button asChild variant="ghost" className="px-8">
            <a href="#contact">Fill Out Form Above</a>
          </Button>
        </div>
      </div>

      <div className="space-y-8">
        <h3 className="text-2xl md:text-3xl font-semibold text-center">
          Why Work With Qwickin
        </h3>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            "Fast response within 24 hours",
            "No obligation, honest advice",
            "Local Melbourne expertise",
            "Transparent pricing",
          ].map((item) => (
            <Card key={item}>
              <CardContent className="pt-6 text-sm text-muted-foreground">
                {item}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="space-y-6">
        <h3 className="text-2xl md:text-3xl font-semibold text-center">
          Quick Links
        </h3>
        <div className="grid gap-6 md:grid-cols-3">
          {quickLinks.map((link) => (
            <Card key={link.title}>
              <CardHeader>
                <CardTitle className="text-lg">{link.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <Button asChild variant="outline">
                  <a href={link.href}>Go</a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="space-y-6">
        <h3 className="text-2xl md:text-3xl font-semibold text-center">
          Connect With Us
        </h3>
        <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
          <a href="#">LinkedIn</a>
          <a href="#">Facebook</a>
          <a href="#">Instagram</a>
          <a href="#">WhatsApp Business</a>
        </div>
      </div>

      <div className="space-y-6">
        <h3 className="text-2xl md:text-3xl font-semibold text-center">
          Common Contact Questions
        </h3>
        <div className="grid gap-4 md:grid-cols-2">
          {faqs.map((faq) => (
            <Card key={faq.q}>
              <CardHeader>
                <CardTitle className="text-base">{faq.q}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                {faq.a}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="bg-muted/60 rounded-3xl p-8 text-center space-y-4">
        <h3 className="text-2xl md:text-3xl font-semibold">
          Ready to Get Started?
        </h3>
        <p className="text-muted-foreground">
          The first step is simple—reach out. We'll schedule a time to discuss
          your needs.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button asChild className="px-8">
            <a href="tel:+61424127808">Call +61 424 127 808</a>
          </Button>
          <Button asChild variant="outline" className="px-8">
            <a href="mailto:info@qwickin.com">Email info@qwickin.com</a>
          </Button>
          <Button asChild variant="ghost" className="px-8">
            <a href="#contact">Fill Out Form ↑</a>
          </Button>
        </div>
      </div>
    </section>
  );
};
