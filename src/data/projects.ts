export interface Project {
  id: string;
  titleKey: string;
  descriptionKey: string;
  tags: ("design" | "front-end" | "design & front-end")[];
  year: number;
  href: string;
  bgColorDark: string;
}

export const projects: Project[] = [
  {
    id: "traube",
    titleKey: "projects.traube.title",
    descriptionKey: "projects.traube.description",
    tags: ["design & front-end"],
    year: 2024,
    href: "https://traube.club",
    bgColorDark: "oklch(0.32 0.06 295)",
  },
  {
    id: "padelko",
    titleKey: "projects.padelko.title",
    descriptionKey: "projects.padelko.description",
    tags: ["design & front-end"],
    year: 2024,
    href: "https://padelko.com",
    bgColorDark: "oklch(0.30 0.08 255.5)",
  },
  {
    id: "uncommon",
    titleKey: "projects.uncommon.title",
    descriptionKey: "projects.uncommon.description",
    tags: ["design & front-end"],
    year: 2023,
    href: "https://www.uncommon.club",
    bgColorDark: "oklch(0.30 0.04 50)",
  },
];
