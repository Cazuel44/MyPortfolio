import { IconType } from "react-icons";

export type SkillLevel = "Básico" | "Intermedio" | "Avanzado";

export type SkillCategory =
    | "Frontend"
    | "Backend"
    | "Estilos"
    | "Herramientas";

export type Skill = {
    id: string;
    label: string;
    icon: IconType;
    color: string;
    level: SkillLevel;
};

export type SkillGroup = {
    title: SkillCategory;
    skills: Skill[];
};

/* export type Skill = {
    id?: string;
    label: string;
    icon: IconType;
    color: string;
    level: SkillLevel;
} */