import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const projectCards = [
  {
    title: "Qwickin Community Platform",
    category: "Mobile & Web Application",
    description:
      "Multi-feature community app connecting local residents and businesses.",
    href: "/projects/qwickin-community-platform",
  },
  {
    title: "SweetIndia Workforce Management",
    category: "Business System",
    description:
      "Location-based employee tracking for multi-branch food business.",
    href: "/projects/sweetindia-workforce",
  },
  {
    title: "Construction Workforce Management",
    category: "Internal Application",
    description:
      "Daily attendance and team tracking for construction crews.",
    href: "/projects/construction-workforce",
  },
  {
    title: "Cybersecurity Implementations",
    category: "Cybersecurity",
    description:
      "Security implementations across education, councils, and SMEs.",
    href: "/projects/cybersecurity-implementations",
  },
];

const projectHighlights = [
  {
    title: "Qwickin Community Platform",
    challenge:
      "Communities were fragmented across multiple platforms with no centralized hub.",
    solution:
      "Built a mobile-first platform with jobs, events, marketplace, business directory, and accommodation listings.",
    result:
      "1,500+ active users, 250+ job postings in 6 months, 4.7/5 app rating.",
  },
  {
    title: "SweetIndia Workforce System",
    challenge:
      "Manual attendance tracking caused payroll errors and 10+ hours/week of admin.",
    solution:
      "Location-based check-in/out system with supervisor controls and automated reports.",
    result:
      "99% payroll accuracy and $2,000+/month savings in admin time.",
  },
  {
    title: "Construction Workforce App",
    challenge:
      "No centralized workforce visibility across job sites and manual reporting.",
    solution:
      "Mobile-optimized attendance app with site assignment, reporting, and photo documentation.",
    result:
      "5 minutes per site per day, improved compliance, and better project costing.",
  },
  {
    title: "Cybersecurity Implementations",
    challenge:
      "Organizations needed enterprise-grade security without enterprise-sized teams.",
    solution:
      "Microsoft security stack deployments, Essential 8 alignment, and ongoing advisory.",
    result:
      "Reduced attack surface, improved compliance, and stronger incident response.",
  },
];

export const Projects = () => {
  return (
    <section
      id="projects"
      className="container py-24 sm:py-32 space-y-16"
    >
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <h2 className="text-3xl md:text-4xl font-semibold">Our Work</h2>
        <p className="text-muted-foreground text-lg">
          Real projects. Real businesses. Real impact.
        </p>
        <p className="text-muted-foreground">
          We've delivered custom applications, cybersecurity solutions, and
          digital transformations for businesses across Melbourne and beyond.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-3">
        {["All Projects", "Applications", "Cybersecurity", "Automation", "Infrastructure"].map(
          (label) => (
            <span
              key={label}
              className="rounded-full border border-border bg-white px-4 py-2 text-sm text-muted-foreground"
            >
              {label}
            </span>
          )
        )}
      </div>

      <div className="space-y-8">
        <h3 className="text-2xl md:text-3xl font-semibold text-center">
          Featured Projects
        </h3>
        <div className="grid gap-6 md:grid-cols-2">
          {projectCards.map((project) => (
            <Card key={project.title}>
              <div className="h-40 rounded-t-2xl bg-gradient-to-br from-[#7CBD5E]/20 via-white to-[#F5F5F5] flex items-center justify-center text-sm text-muted-foreground">
                Project preview
              </div>
              <CardHeader className="space-y-2">
                <span className="text-xs uppercase tracking-[0.2em] text-primary">
                  {project.category}
                </span>
                <CardTitle className="text-xl">{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-muted-foreground">
                <p>{project.description}</p>
                <Button asChild variant="outline">
                  <a href={project.href}>View Project</a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="space-y-8">
        <h3 className="text-2xl md:text-3xl font-semibold text-center">
          Project Highlights
        </h3>
        <div className="grid gap-6 md:grid-cols-2">
          {projectHighlights.map((project) => (
            <Card key={project.title}>
              <CardHeader>
                <CardTitle className="text-lg">{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-muted-foreground">
                <p>
                  <span className="font-semibold text-foreground">
                    Challenge:{" "}
                  </span>
                  {project.challenge}
                </p>
                <p>
                  <span className="font-semibold text-foreground">
                    Solution:{" "}
                  </span>
                  {project.solution}
                </p>
                <p>
                  <span className="font-semibold text-foreground">
                    Result:{" "}
                  </span>
                  {project.result}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="bg-primary/10 rounded-3xl p-8 text-center space-y-4">
        <h3 className="text-2xl md:text-3xl font-semibold">
          Have a Project in Mind?
        </h3>
        <p className="text-muted-foreground">
          Let's discuss how we can build something exceptional for your
          business.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button asChild className="px-8">
            <a href="#contact">Start Your Project</a>
          </Button>
          <Button asChild variant="outline" className="px-8">
            <a href="#consultation">Schedule Consultation</a>
          </Button>
        </div>
      </div>
    </section>
  );
};
