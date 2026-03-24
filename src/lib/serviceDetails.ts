export type ServiceSlug =
  | "app-development"
  | "cybersecurity"
  | "cloud-infrastructure"
  | "managed-it"
  | "digital-signage"
  | "web-development";

type ContentItem = {
  title: string;
  description: string;
};

export type ServiceDetail = {
  slug: ServiceSlug;
  title: string;
  pageTitle: string;
  metaDescription: string;
  heroBadge: string;
  heroTitle: string;
  heroSubtitle: string;
  introTitle: string;
  introText: string;
  introImage: string;
  includesTitle: string;
  includes: ContentItem[];
  process: ContentItem[];
  technologies: string[];
  useCases: string[];
};

export const serviceDetails: Record<ServiceSlug, ServiceDetail> = {
  "app-development": {
    slug: "app-development",
    title: "Custom App Development",
    pageTitle: "Custom App Development | QwickIn IT Services",
    metaDescription:
      "End-to-end mobile and web application development for iOS, Android, and the web.",
    heroBadge: "Custom App Development",
    heroTitle: "We turn your idea into a product people actually use.",
    heroSubtitle:
      "End-to-end mobile and web application development for iOS, Android, and the web - from wireframe to App Store, on time and on budget.",
    introTitle: "How we approach custom app development",
    introText:
      "Most businesses today run on software - and the gap between a good idea and a working app is where most projects fail. At QwickIn, we close that gap. We take your requirements, validate them, design clean UX, build robust code, and get you live. No handwaving. No scope creep surprises.",
    introImage:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1200&q=80&fit=crop",
    includesTitle: "What you get with our Custom App Development service",
    includes: [
      {
        title: "Cross-Platform Development",
        description:
          "We build using Flutter and React Native so your app runs natively on iOS and Android from a single codebase - cutting build time and cost without compromising on feel.",
      },
      {
        title: "Full Project Management",
        description:
          "You get a dedicated point of contact from kickoff to launch. We manage scope, timelines, testing, and App Store submission so you do not have to.",
      },
      {
        title: "UI/UX Design Included",
        description:
          "Every engagement includes wireframing and interface design. We build things that work and look like they were made by people who care.",
      },
      {
        title: "API & Backend Development",
        description:
          "We design and build the backend - REST APIs, databases, authentication, push notifications, third-party integrations - everything your app needs to run reliably at scale.",
      },
      {
        title: "Post-Launch Support",
        description:
          "We do not disappear after go-live. We offer ongoing maintenance plans so bugs get fixed, iOS updates do not break things, and new features get shipped.",
      },
      {
        title: "App Store Submission",
        description:
          "We handle the entire App Store and Google Play submission process - certificates, screenshots, metadata, review compliance - saving you days of frustration.",
      },
    ],
    process: [
      {
        title: "Discovery & Scoping",
        description:
          "We meet with you, understand your business, map your user flows, and produce a clear scope document with timeline and fixed-price quote.",
      },
      {
        title: "Design & Prototype",
        description:
          "Our designer builds wireframes and interactive prototypes. You review and approve before a single line of code is written.",
      },
      {
        title: "Build & Iterate",
        description:
          "Development happens in two-week sprints. You see working builds regularly and can provide feedback throughout - not just at the end.",
      },
      {
        title: "Test & Launch",
        description:
          "QA testing across real devices, App Store submission, and a coordinated launch. We stay on call for the first two weeks post-launch.",
      },
    ],
    technologies: [
      "Flutter",
      "React Native",
      "Swift / SwiftUI",
      "Kotlin",
      "Node.js",
      "Python",
      "PostgreSQL",
      "Firebase",
      "AWS / Azure",
    ],
    useCases: [
      "Workforce management and attendance apps",
      "Field operations and logistics tools",
      "Customer-facing booking and e-commerce apps",
      "Internal business process apps",
      "IoT device companion apps",
      "On-demand delivery platforms",
    ],
  },
  cybersecurity: {
    slug: "cybersecurity",
    title: "Cybersecurity",
    pageTitle: "Cybersecurity | QwickIn IT Services",
    metaDescription:
      "Vulnerability assessments, endpoint protection, network monitoring, and staff training for SMB security.",
    heroBadge: "Cybersecurity",
    heroTitle: "Security is not an add-on. It is built in from day one.",
    heroSubtitle:
      "Vulnerability assessments, endpoint protection, network monitoring, and staff training - for Melbourne businesses that cannot afford a breach.",
    introTitle: "How we approach cybersecurity",
    introText:
      "Our founder works full-time as a cybersecurity professional. That is not a marketing line - it means you are getting real, practitioner-grade advice and tooling, not a resold antivirus package. We focus on what actually protects SMBs: finding your gaps before attackers do, locking down your endpoints, and making sure your team does not click the wrong thing.",
    introImage:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&q=80&fit=crop",
    includesTitle: "What you get with our Cybersecurity service",
    includes: [
      {
        title: "Security Audits & Gap Analysis",
        description:
          "We assess your current environment against industry frameworks and produce a plain-English report of risks ranked by severity - with a clear remediation roadmap.",
      },
      {
        title: "Vulnerability Assessments",
        description:
          "We run internal and external scans across your network, endpoints, and web-facing assets to identify exploitable weaknesses before someone else does.",
      },
      {
        title: "Endpoint Protection",
        description:
          "Deployment and management of enterprise-grade EDR (Endpoint Detection & Response) across all company devices - Windows, Mac, and mobile.",
      },
      {
        title: "Network Monitoring",
        description:
          "24/7 monitoring of your network traffic for anomalies, intrusion attempts, and policy violations. You get alerted fast when something is off.",
      },
      {
        title: "Microsoft 365 Security Hardening",
        description:
          "MFA enforcement, conditional access policies, Defender configuration, email filtering, and DLP rules - your M365 tenant locked down properly.",
      },
      {
        title: "Staff Security Awareness Training",
        description:
          "Phishing simulations and training sessions tailored to your team. The biggest attack surface in any business is still the humans.",
      },
    ],
    process: [
      {
        title: "Initial Assessment",
        description:
          "We review your existing infrastructure, policies, and systems. No tools needed from you - we come prepared.",
      },
      {
        title: "Risk Report",
        description:
          "You receive a prioritised risk report within 5 business days. Clear, actionable, no jargon.",
      },
      {
        title: "Remediation",
        description:
          "We implement the fixes - either directly or alongside your existing IT team.",
      },
      {
        title: "Ongoing Monitoring",
        description:
          "Optionally, we move into a retainer for continuous monitoring, patching, and quarterly reviews.",
      },
    ],
    technologies: [
      "Microsoft Defender",
      "CrowdStrike",
      "Tenable / Nessus",
      "Microsoft 365 Security Centre",
      "Azure Sentinel",
      "KnowBe4",
      "Proofpoint",
      "Cisco Meraki",
    ],
    useCases: [
      "Small businesses needing a first proper security review",
      "Medical and legal practices with compliance obligations",
      "Businesses moving to the cloud for the first time",
      "Retailers and e-commerce handling payment data",
      "Companies onboarding remote workers",
      "Businesses recovering from or worried about a breach",
    ],
  },
  "cloud-infrastructure": {
    slug: "cloud-infrastructure",
    title: "Cloud Infrastructure",
    pageTitle: "Cloud Infrastructure | QwickIn IT Services",
    metaDescription:
      "Azure, AWS, and Google Cloud migrations, optimisations, and architecture design for growing businesses.",
    heroBadge: "Cloud Infrastructure",
    heroTitle: "Scalable, cost-efficient cloud - without overprovisioning.",
    heroSubtitle:
      "Azure, AWS, and Google Cloud migrations, optimisations, and architecture design for Australian businesses ready to move beyond on-premise.",
    introTitle: "How we approach cloud infrastructure",
    introText:
      "Most small businesses end up in the cloud eventually - but getting there without a clear plan leads to overspend, security gaps, and migrations that go on forever. We have done this enough times to know the common mistakes. We design your cloud architecture properly from the start, migrate cleanly, and set up cost controls so your bill does not surprise you.",
    introImage:
      "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=1200&q=80&fit=crop",
    includesTitle: "What you get with our Cloud Infrastructure service",
    includes: [
      {
        title: "Cloud Migration Planning",
        description:
          "We assess your current on-premise or hosting setup and produce a detailed migration plan - what moves, when, in what order, and what the risks are at each step.",
      },
      {
        title: "Azure & AWS Architecture Design",
        description:
          "Purpose-built cloud architecture for your workloads - compute, storage, networking, identity, and security - designed for reliability and cost efficiency.",
      },
      {
        title: "Cost Optimisation",
        description:
          "Many businesses are overpaying for cloud they do not fully use. We audit your existing cloud spend and right-size resources, often achieving 20-40% savings.",
      },
      {
        title: "Hybrid Cloud Setup",
        description:
          "Not everything needs to move. We design hybrid architectures that keep the right workloads on-premise while leveraging cloud where it adds genuine value.",
      },
      {
        title: "Cloud Security & Compliance",
        description:
          "Identity and access management, encryption, network segmentation, and audit logging configured to meet Australian data residency and privacy requirements.",
      },
      {
        title: "Backup & Disaster Recovery",
        description:
          "Automated, tested backup and DR solutions. We make sure that when something goes wrong - and it will - you are back online in hours, not days.",
      },
    ],
    process: [
      {
        title: "Discovery",
        description:
          "We map your existing environment - servers, apps, data, dependencies, and licensing - and identify migration complexity.",
      },
      {
        title: "Architecture Design",
        description:
          "We produce a cloud architecture diagram and technical specification for your review and sign-off.",
      },
      {
        title: "Migration",
        description:
          "Phased migration with rollback plans at each stage. Business continuity throughout.",
      },
      {
        title: "Handover & Ongoing Management",
        description:
          "Full documentation handover. Optional managed services for ongoing monitoring, patching, and cost management.",
      },
    ],
    technologies: [
      "Microsoft Azure",
      "Amazon Web Services",
      "Google Cloud Platform",
      "Terraform",
      "Azure DevOps",
      "GitHub Actions",
      "Docker",
      "Kubernetes",
      "Cloudflare",
    ],
    useCases: [
      "Moving off ageing on-premise servers",
      "Migrating from one cloud provider to another",
      "Setting up development and staging environments",
      "Scaling infrastructure to handle business growth",
      "Reducing cloud spend without reducing capability",
      "Meeting data sovereignty requirements in Australia",
    ],
  },
  "managed-it": {
    slug: "managed-it",
    title: "Managed IT Services",
    pageTitle: "Managed IT Services | QwickIn IT Services",
    metaDescription:
      "Proactive monitoring, helpdesk support, patch management, and hardware procurement on fixed monthly retainers.",
    heroBadge: "Managed IT Services",
    heroTitle: "Your IT department - without the overhead.",
    heroSubtitle:
      "Proactive monitoring, helpdesk support, patch management, and hardware procurement on a simple fixed monthly retainer.",
    introTitle: "How we approach managed IT services",
    introText:
      "Running a business is hard enough without worrying about whether your server is about to die or why the printer will not work. Our managed IT service gives you a responsive, knowledgeable IT team available when you need them - for a predictable monthly cost. No per-ticket fees, no surprises, no waiting days for a callback.",
    introImage:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&q=80&fit=crop",
    includesTitle: "What you get with our Managed IT Services service",
    includes: [
      {
        title: "24/7 Proactive Monitoring",
        description:
          "We monitor your servers, endpoints, and network around the clock. Issues are often identified and resolved before they cause downtime - before you even notice.",
      },
      {
        title: "Helpdesk Support",
        description:
          "Local Melbourne-based support via phone, email, and remote session. Your team gets help from people who know your environment, not a generic offshore queue.",
      },
      {
        title: "Patch Management",
        description:
          "We manage OS and software patching across all devices on a scheduled basis - keeping your fleet secure without disrupting your business hours.",
      },
      {
        title: "Hardware Procurement",
        description:
          "We source and configure laptops, desktops, servers, and networking equipment through our distributor relationships - no retail markup, properly configured from day one.",
      },
      {
        title: "Microsoft 365 Management",
        description:
          "User provisioning, licence management, email configuration, SharePoint, Teams setup, and ongoing admin - your M365 tenancy properly looked after.",
      },
      {
        title: "Onsite Support (Melbourne)",
        description:
          "For issues that need hands on keyboards, we come to you. We cover Melbourne's western suburbs and can arrange visits for other areas by arrangement.",
      },
    ],
    process: [
      {
        title: "Environment Audit",
        description:
          "We document your full environment - devices, software, accounts, and infrastructure - so we know exactly what we are managing.",
      },
      {
        title: "Onboarding",
        description:
          "Monitoring agents deployed, helpdesk access set up, escalation paths agreed. Usually complete within one week.",
      },
      {
        title: "Ongoing Management",
        description:
          "Monthly reporting on tickets resolved, patch status, monitoring alerts, and any upcoming hardware refresh needs.",
      },
      {
        title: "Quarterly Review",
        description:
          "We meet each quarter to review performance, discuss upcoming changes, and adjust the retainer if your needs have changed.",
      },
    ],
    technologies: [
      "Microsoft 365",
      "Windows Server",
      "macOS",
      "Datto / Veeam Backup",
      "N-able / NinjaRMM",
      "Cisco Meraki",
      "Fortinet",
      "Dicker Data Supply Chain",
    ],
    useCases: [
      "Businesses of 5-100 staff without a dedicated IT person",
      "Growing businesses whose IT needs have outgrown DIY",
      "Companies needing a reliable IT escalation path",
      "Offices setting up or expanding",
      "Businesses wanting predictable monthly IT costs",
      "Companies supplementing an existing IT team",
    ],
  },
  "digital-signage": {
    slug: "digital-signage",
    title: "Digital Signage (Castivo)",
    pageTitle: "Digital Signage (Castivo) | QwickIn IT Services",
    metaDescription:
      "Castivo digital signage on Android TV with OTP pairing and browser-based content management.",
    heroBadge: "Digital Signage (Castivo)",
    heroTitle: "Your screens, your content - managed from anywhere.",
    heroSubtitle:
      "Our proprietary Castivo platform runs on any Android TV. No media player hardware. No complex setup. Manage all your screens from a clean web dashboard.",
    introTitle: "How we approach digital signage (castivo)",
    introText:
      "Digital signage has traditionally meant expensive hardware, complicated software, and a technician on-site every time you want to change something. Castivo flips this. It installs directly onto any Android TV via a simple OTP pairing code - no media player box required - and lets you update content from anywhere via a web dashboard. Built by QwickIn, it is the digital signage solution we wished existed.",
    introImage:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80&fit=crop",
    includesTitle: "What you get with our Digital Signage (Castivo) service",
    includes: [
      {
        title: "Android TV Native - No Extra Hardware",
        description:
          "Castivo installs directly on your Android TV screen. No separate media player box to buy, mount, or maintain. If your screen runs Android, you are ready to go.",
      },
      {
        title: "OTP Pairing - 60-Second Setup",
        description:
          "Open the Castivo app on your TV, enter the 6-digit pairing code in the web dashboard, and your screen is live. Setup takes under a minute from unboxing.",
      },
      {
        title: "Web Dashboard - Manage from Anywhere",
        description:
          "Add, edit, and schedule content from any browser on any device. Change what is on your screens at any time without visiting the location.",
      },
      {
        title: "Content Scheduling",
        description:
          "Schedule different content for different times of day, days of the week, or specific date ranges. Show your breakfast menu in the morning and dinner menu from 5pm automatically.",
      },
      {
        title: "Multi-Screen Management",
        description:
          "Manage one screen or one hundred from the same dashboard. Group screens by location or zone and push content to all of them simultaneously.",
      },
      {
        title: "Supports Images, Video & Web Content",
        description:
          "Upload images and videos directly, or embed live web content - menus, social feeds, price boards - all displayed cleanly on your screens.",
      },
    ],
    process: [
      {
        title: "Trial Setup",
        description:
          "Start a free trial at castivo.com.au. No credit card required. We will help you get your first screen live within 24 hours.",
      },
      {
        title: "Content Onboarding",
        description:
          "We help you design and upload your initial content if needed - menus, promotions, branding - so screens are ready on day one.",
      },
      {
        title: "Screen Activation",
        description:
          "Enter the OTP on your Android TV screen. It pairs instantly and starts displaying your content.",
      },
      {
        title: "Ongoing Management",
        description:
          "Update content yourself anytime via the dashboard, or we can manage content updates for you as part of a retainer.",
      },
    ],
    technologies: [
      "Android TV",
      "Web Dashboard",
      "REST API",
      "AWS Cloud",
      "HDMI / CEC",
      "Landscape & Portrait Modes",
    ],
    useCases: [
      "Restaurant and cafe menus",
      "Retail promotional displays",
      "Medical practice waiting rooms",
      "Office lobbies and reception areas",
      "Real estate agency property displays",
      "Gym and fitness studio class schedules",
    ],
  },
  "web-development": {
    slug: "web-development",
    title: "Web Development",
    pageTitle: "Web Development | QwickIn IT Services",
    metaDescription:
      "Custom websites and web apps built for speed, SEO, mobile responsiveness, and conversion.",
    heroBadge: "Web Development",
    heroTitle: "Websites that rank, convert, and do not embarrass you.",
    heroSubtitle:
      "Custom websites and web apps built for speed, SEO, and mobile responsiveness - from business websites to full e-commerce platforms.",
    introTitle: "How we approach web development",
    introText:
      "A bad website is worse than no website. It tells every potential customer that you do not take your business seriously. We build websites that load fast, look sharp on every device, show up in Google searches, and actually convert visitors into enquiries. Whether you need a clean business website or a full e-commerce platform, we build it properly.",
    introImage:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80&fit=crop",
    includesTitle: "What you get with our Web Development service",
    includes: [
      {
        title: "Custom Design - Not a Template",
        description:
          "Every website we build starts from your brand, your content, and your goals - not a theme marketplace. You get something that looks like it was made for you.",
      },
      {
        title: "SEO-Ready from Day One",
        description:
          "Semantic HTML, proper heading structure, fast load times, schema markup, Google Search Console setup, and sitemap submission - built in from the start.",
      },
      {
        title: "Mobile-First & Responsive",
        description:
          "Every page is designed and tested on mobile first. Over 60% of web traffic is mobile - your site needs to work perfectly on a 375px screen.",
      },
      {
        title: "Fast Load Times",
        description:
          "Optimised images, minimal dependencies, proper caching, and CDN delivery. Google PageSpeed scores that will not embarrass you.",
      },
      {
        title: "CMS Integration",
        description:
          "We can integrate a content management system so your team can update news, blog posts, and content without touching code - or without calling us.",
      },
      {
        title: "E-Commerce Development",
        description:
          "Shopify, WooCommerce, or custom-built stores with product management, payment gateway integration, inventory tracking, and order management.",
      },
    ],
    process: [
      {
        title: "Strategy & Content",
        description:
          "We define your sitemap, content needs, and call-to-actions before design begins. Good websites start with strategy, not Figma.",
      },
      {
        title: "Design & Review",
        description:
          "We build desktop and mobile designs for your review. You approve before development starts.",
      },
      {
        title: "Development & Testing",
        description:
          "Clean, semantic HTML/CSS with thorough cross-browser and cross-device testing. You get a staging link for final review.",
      },
      {
        title: "Launch & Handover",
        description:
          "Domain, hosting, and DNS sorted. Full handover documentation so you are not dependent on us forever.",
      },
    ],
    technologies: [
      "HTML / CSS / JavaScript",
      "React / Next.js",
      "Shopify",
      "WordPress / WooCommerce",
      "Netlify / Vercel",
      "Cloudflare",
      "Google Analytics 4",
      "Search Console",
    ],
    useCases: [
      "New business needing a professional online presence",
      "Existing website that looks dated or loads slowly",
      "E-commerce store setup or migration",
      "Landing pages for marketing campaigns",
      "Web portals and customer dashboards",
      "Booking and appointment systems",
    ],
  },
};

export const serviceSlugs = Object.keys(serviceDetails) as ServiceSlug[];

export const getServiceBySlug = (slug: string) =>
  serviceDetails[slug as ServiceSlug];
