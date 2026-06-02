import { IconType } from "react-icons";

export type SkillLevel = "Básico" | "Intermedio" | "Avanzado";

export type Skill = {
    id?: string;
    label: string;
    icon: IconType;
    color: string;
    level: SkillLevel;
}