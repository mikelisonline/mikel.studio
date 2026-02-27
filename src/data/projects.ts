export interface Project {
  id: string;
  titleKey: string;
  descriptionKey: string;
  tags: ("development" | "design" | "both")[];
  year: number;
  href: string;
}

export const projects: Project[] = [
  {
    id: "project-one",
    titleKey: "projects.project-one.title",
    descriptionKey: "projects.project-one.description",
    tags: ["development"],
    year: 2025,
    href: "#",
  },
  {
    id: "project-two",
    titleKey: "projects.project-two.title",
    descriptionKey: "projects.project-two.description",
    tags: ["design"],
    year: 2024,
    href: "#",
  },
  {
    id: "project-three",
    titleKey: "projects.project-three.title",
    descriptionKey: "projects.project-three.description",
    tags: ["both"],
    year: 2024,
    href: "#",
  },
];
