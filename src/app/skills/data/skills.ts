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

export const skills = [
    {
        category: "Frontend",
        items: [
            {
                label: "HTML",
                icon: SiHtml5,
                color: "text-orange-500",
                level: 40
            },
            {
                label: "CSS",
                icon: SiCss,
                color: "text-blue-500",
                level: 35
            },
            {
                label: "JavaScript",
                icon: SiJavascript,
                color: "text-yellow-400",
                level: 30
            },
            {
                label: "React",
                icon: SiReact,
                color: "text-cyan-400",
                level: 30
            },
            {
                label: "Next.js",
                icon: SiNextdotjs,
                color: "text-white",
                level: 25
            },
            {
                label: "TypeScript",
                icon: SiTypescript,
                color: "text-blue-400",
                level: 25
            },
        ],
    },

    {
        category: "Styling",
        items: [
            {
                label: "Tailwind CSS",
                icon: SiTailwindcss,
                color: "text-cyan-400",
                level: 20
            },
        ],
    },

    {
        category: "Mobile",
        items: [
            {
                label: "React Native",
                icon: SiReactos,
                color: "text-cyan-400",
                level: 10
            },
        ],
    },

    {
        category: "Backend",
        items: [
            {
                label: "Node.js",
                icon: SiNodedotjs,
                color: "text-green-500",
                level: 20
            },
        ],
    },

    {
        category: "Tools",
        items: [
            {
                label: "Git",
                icon: SiGit,
                color: "text-orange-600",
                level: 30
            },
            {
                label: "GitHub",
                icon: SiGithub,
                color: "text-white",
                level: 35
            },
        ],
    },
];