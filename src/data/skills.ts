import type { SkillCategory } from "../types";

export const SKILL_CATEGORIES: readonly SkillCategory[] = [
  {
    id: "frontend",
    badge: "I",
    title: "FRONTEND",
    subtitle: "React · TypeScript · UI",
    items: [
      { index: "01", title: "React 18/19", level: "Intermediate" },
      { index: "02", title: "TypeScript", level: "Advanced" },
      { index: "03", title: "CSS Modules / Tailwind", level: "Advanced" },
      { index: "04", title: "Framer Motion", level: "Intermediate" },
      { index: "05", title: "Vite / React Router", level: "Intermediate" },
    ],
  },
  {
    id: "backend",
    badge: "II",
    title: "BACKEND",
    subtitle: "NestJS · Node · APIs",
    items: [
      { index: "01", title: "NestJS", level: "Intermediate" },
      { index: "02", title: "REST & GraphQL", level: "Advanced" },
      { index: "03", title: "Node.js", level: "Advanced" },
      { index: "04", title: "Temporal Workflows", level: "Intermediate" },
      { index: "05", title: "RabbitMQ / Event-driven", level: "Intermediate" },
    ],
  },
  {
    id: "data",
    badge: "III",
    title: "DATA",
    subtitle: "MongoDB · PostgreSQL",
    items: [
      { index: "01", title: "MongoDB / Mongoose", level: "Advanced" },
      { index: "02", title: "PostgreSQL", level: "Intermediate" },
      { index: "03", title: "Prisma ORM", level: "Intermediate" },
    ],
  },
  {
    id: "craft",
    badge: "IV",
    title: "CRAFT",
    subtitle: "Review · Onboarding · Quality",
    items: [
      { index: "01", title: "Code review", level: "Advanced" },
      { index: "02", title: "Onboarding lead", level: "Advanced" },
      { index: "03", title: "Clean architecture", level: "Intermediate" },
      { index: "04", title: "Technical writing", level: "Intermediate" },
    ],
  },
] as const;
