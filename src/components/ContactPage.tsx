import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";

export const ContactPage = () => {
  return (
    <section
      id="contact"
      className="container py-24 sm:py-32 space-y-12"
    >
      <div className="text-center space-y-3">
        <h2 className="text-4xl md:text-5xl font-semibold">
          Get in <span className="text-primary">Touch</span>
        </h2>
        <p className="text-muted-foreground text-xl">
          Tell us what you need and we'll respond within one business day.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Contact Details &amp; Message</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-6 md:grid-cols-[0.9fr,1.1fr] items-start">
          <div className="space-y-4 text-lg text-muted-foreground">
            <div className="space-y-1">
              <div className="font-semibold text-foreground">Phone</div>
              <a href="tel:+61424127808">+61 424 127 808</a>
              <div>Mon - Fri, 9:00 AM - 6:00 PM AEST</div>
            </div>
            <div className="space-y-1">
              <div className="font-semibold text-foreground">Location</div>
              <div>Melbourne, Victoria, Australia</div>
              <div>Serving Melbourne metro and beyond</div>
            </div>
            <div className="space-y-1">
              <div className="font-semibold text-foreground">Email</div>
              <a href="mailto:info@qwickin.com">info@qwickin.com</a>
              <div>We respond within 24 hours</div>
            </div>
            <div className="space-y-1">
              <div className="font-semibold text-foreground">Business Hours</div>
              <div>Monday - Friday: 9:00 AM - 6:00 PM</div>
              <div>Saturday: By Appointment</div>
              <div>Sunday: Closed</div>
              <div>Emergency support for existing clients</div>
            </div>
          </div>

          <div className="space-y-3">
            <div className="text-lg font-semibold text-foreground">Send Message</div>
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="sm:col-span-1">
                <Input placeholder="Your Name *" className="text-lg" />
              </div>
              <div className="sm:col-span-1">
                <Input placeholder="Email Address *" type="email" className="text-lg" />
              </div>
              <div className="sm:col-span-2">
                <Input placeholder="Phone (optional)" type="tel" className="text-lg" />
              </div>
              <div className="sm:col-span-2">
                <textarea
                  className="min-h-[120px] w-full rounded-md border border-input bg-background p-3 text-lg"
                  placeholder="Tell us about your project *"
                />
              </div>
            <label className="sm:col-span-2 flex items-center gap-2 text-base text-muted-foreground">
              <input type="checkbox" className="h-4 w-4" /> I agree to the
              Privacy Policy and consent to Qwickin contacting me about my
              inquiry.
            </label>
              <div className="sm:col-span-2">
                <Button className="w-full md:w-auto">Send Message</Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
