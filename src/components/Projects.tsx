import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const projectCards = [
  {
    title: "Qwickin Community Platform",
    category: "Mobile & Web App",
    description: "Community app with jobs, events, marketplace, and listings.",
  },
  {
    title: "SweetIndia Workforce Management",
    category: "Business System",
    description: "Location-based attendance and payroll-ready reporting.",
  },
  {
    title: "Construction Workforce Management",
    category: "Internal App",
    description: "Mobile attendance tracking across distributed job sites.",
  },
];

export const Projects = () => {
  return (
    <section
      id="projects"
      className="container py-24 sm:py-32 space-y-12"
    >
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <h2 className="text-3xl md:text-4xl font-semibold">Our Work</h2>
        <p className="text-muted-foreground text-lg">
          Real projects. Real businesses. Real impact.
        </p>
      </div>

      <div className="space-y-8">
        <div className="grid gap-6 md:grid-cols-2">
          {projectCards.map((project) => (
            <Card key={project.title}>
              <CardHeader className="space-y-2">
                <span className="text-xs uppercase tracking-[0.2em] text-primary">
                  {project.category}
                </span>
                <CardTitle className="text-xl">{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                <p>{project.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
