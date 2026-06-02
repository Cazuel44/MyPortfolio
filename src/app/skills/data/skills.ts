import { Skill } from "@/types/skills";

import {
    SiHtml5,
    SiCss,
    SiJavascript,
    SiReact,
    SiNextdotjs,
    SiTypescript,
    SiTailwindcss,
    SiReactos,
    SiGit,
    SiGithub,
    SiNodedotjs
} from "react-icons/si";


export const skills: Skill[] = [
    {
        id: "html",
        label: "HTML",
        icon: SiHtml5,
        color: "text-orange-500",
        level: "Básico"
    },
    {
        id: "css",
        label: "CSS",
        icon: SiCss,
        color: "text-blue-500",
        level: "Básico"
    },
    {
        id: "javascript",
        label: "JavaScript",
        icon: SiJavascript,
        color: "text-yellow-400",
        level: "Básico"
    },
    {
        id: "react",
        label: "React",
        icon: SiReact,
        color: "text-cyan-400",
        level: "Básico"
    },
    {
        id: "nextjs",
        label: "Next.js",
        icon: SiNextdotjs,
        color: "text-white",
        level: "Básico"
    },
    {
        id: "typescript",
        label: "TypeScript",
        icon: SiTypescript,
        color: "text-blue-400",
        level: "Básico"
    },
    {
        id: "tailwind",
        label: "Tailwind CSS",
        icon: SiTailwindcss,
        color: "text-cyan-400",
        level: "Básico"
    },
    {
        id: "react-native",
        label: "React Native",
        icon: SiReactos,
        color: "text-cyan-400",
        level: "Básico"
    },
    {
        id: "nodejs",
        label: "Node.js",
        icon: SiNodedotjs,
        color: "text-green-500",
        level: "Básico"
    },
    {
        id: "git",
        label: "Git",
        icon: SiGit,
        color: "text-orange-600",
        level: "Básico"
    },
    {
        id: "github",
        label: "GitHub",
        icon: SiGithub,
        color: "text-white",
        level: "Básico"
    }
];