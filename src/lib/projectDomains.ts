import projectDomainsJson from "@/lib/projectDomains.json";

export type ProjectDomainSlug =
  | "construction"
  | "consumer"
  | "enterprise"
  | "healthcare"
  | "hospitality"
  | "transport";

type DomainProject = {
  name: string;
  badge: string;
  image: string;
  imageAlt: string;
  description: string;
  impact: string;
  pills: string[];
};

type DomainCapability = {
  title: string;
  description: string;
};

export type ProjectDomain = {
  slug: ProjectDomainSlug;
  pageTitle: string;
  domainTitle: string;
  heroBadge: string;
  heroSubtitle: string;
  overview: string;
  projects: DomainProject[];
  capabilities: DomainCapability[];
  note: string;
};

export const projectDomains = projectDomainsJson as Record<ProjectDomainSlug, ProjectDomain>;

export const projectDomainOrder: ProjectDomainSlug[] = [
  "healthcare",
  "construction",
  "hospitality",
  "consumer",
  "enterprise",
  "transport",
];

export const getProjectDomainBySlug = (slug: string) =>
  projectDomains[slug as ProjectDomainSlug];
