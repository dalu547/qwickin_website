const assetModules = import.meta.glob("./*.{png,jpg,jpeg,webp,svg,avif}", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const availableAssetsByFileName = Object.fromEntries(
  Object.entries(assetModules).map(([path, src]) => [path.split("/").pop() ?? path, src])
);

// Update file names here if your exported assets use different names.
const placeholderFileMap: Record<string, string> = {
  "Hero Product Mockup / Dashboard": "1_Hero Product Mockup Dashboard.png",
  "Custom Application Development Snapshot": "2_Custom Application Development.png",
  "Cybersecurity Solutions Snapshot": "3_Cybersecurity Solutions.png",
  "IT Infrastructure & Support Snapshot": "4_IT Infrastructure & Support.png",
  "How It Works Flow Graphic": "5_How It Works Flow Graphic.png",
  "Qwickin Community Platform Case Study Visual": "6_Qwickin Community Platform.png",
  "SweetIndia Workforce Management Case Study Visual": "7_SweetIndia Workforce Management.png",
  "Construction Workforce Management Case Study Visual": "8_Construction Workforce Management.png",
  "Services Hero Banner / Architecture": "1_Architecture_Solutions Page.png",
  "Custom Mobile & Web Applications Screenshot Placeholder": "2_ Custom Mobile & Web Applications_Solutions Page.png",
  "Business Systems & Automation Screenshot Placeholder": "3_Business Systems & Automation_Solutions Page.png",
  "Cybersecurity & IT Security Screenshot Placeholder": "4_Cybersecurity & IT Security_Solutions Page.png",
  "Cloud & Infrastructure Screenshot Placeholder": "5_Cloud & Infrastructure_Solutions Page.png",
  "Digital Marketing & SEO Screenshot Placeholder": "6_Digital Marketing & SEO_Solutions Page.png",
  "Managed IT & Consulting Screenshot Placeholder": "7_Managed IT & Consulting_Solutions Page.png",
  "Team / Founder Photo Placeholder": "Founder_Company.png",
  "Built by practitioners, not just developers Illustration Placeholder":
    "1_Built by practitioners, not just developers_Resourse_company.png",
  "End-to-end ownership Illustration Placeholder": "2_End-to-end ownership_Resourse_company.png",
  "Security-first mindset Illustration Placeholder": "3_Security-first mindset_Resourse_company.png",
  "Custom > Generic Illustration Placeholder": "4_Generic Illustration Placeholder_Company.png",
  "Map / Location Illustration Placeholder": "qwickin-contact-map-location-illustration-4x3.webp",
  "Support Team Illustration Placeholder": "qwickin-contact-support-team-illustration-1x1.webp",
};

export const resolveGraphicPlaceholder = (label: string) => {
  const fileName = placeholderFileMap[label];
  if (!fileName) return undefined;

  return availableAssetsByFileName[fileName];
};

export const graphicPlaceholderMap = placeholderFileMap;
