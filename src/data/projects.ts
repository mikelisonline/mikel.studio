export interface Project {
  id: string;
  titleKey: string;
  descriptionKey: string;
  tags: ("design" | "front-end" | "design & front-end" | "founder")[];
  /** Short descriptive label shown on card instead of year */
  typeLabel: string;
  year: number;
  href: string;
  bgColorDark: string;
  logo: string;
}

export const projects: Project[] = [
  {
    id: "traube",
    titleKey: "projects.traube.title",
    descriptionKey: "projects.traube.description",
    tags: ["founder", "design & front-end"],
    typeLabel: "Social platform",
    year: 2024,
    href: "https://traube.club",
    bgColorDark: "oklch(0.32 0.06 295)",
    logo: "/projects/traube.svg",
  },
  {
    id: "padelko",
    titleKey: "projects.padelko.title",
    descriptionKey: "projects.padelko.description",
    tags: ["design & front-end"],
    typeLabel: "Website & platform",
    year: 2024,
    href: "https://padelko.com",
    bgColorDark: "oklch(0.30 0.08 255.5)",
    logo: "/projects/padelko.png",
  },
  {
    id: "uncommon",
    titleKey: "projects.uncommon.title",
    descriptionKey: "projects.uncommon.description",
    tags: ["design & front-end"],
    typeLabel: "Community",
    year: 2023,
    href: "https://www.uncommon.club",
    bgColorDark: "oklch(0.30 0.04 50)",
    logo: "/projects/uncommon.svg",
  },
];
