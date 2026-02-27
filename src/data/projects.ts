export interface Project {
  id: string;
  titleKey: string;
  descriptionKey: string;
  tags: ("development" | "design" | "both")[];
  year: number;
  href: string;
  bgColor: string;
  bgColorDark: string;
}

export const projects: Project[] = [
  {
    id: "project-one",
    titleKey: "projects.project-one.title",
    descriptionKey: "projects.project-one.description",
    tags: ["development"],
    year: 2025,
    href: "#",
    bgColor: "oklch(0.7 0.13 255.5)",
    bgColorDark: "oklch(0.35 0.08 255.5)",
  },
  {
    id: "project-two",
    titleKey: "projects.project-two.title",
    descriptionKey: "projects.project-two.description",
    tags: ["design"],
    year: 2024,
    href: "#",
    bgColor: "oklch(0.81 0.11 295)",
    bgColorDark: "oklch(0.35 0.06 295)",
  },
  {
    id: "project-three",
    titleKey: "projects.project-three.title",
    descriptionKey: "projects.project-three.description",
    tags: ["both"],
    year: 2024,
    href: "#",
    bgColor: "oklch(0.75 0.16 155)",
    bgColorDark: "oklch(0.35 0.1 155)",
  },
];
