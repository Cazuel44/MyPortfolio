import Image from "next/image";
import { Project } from "@/types/projects";
import { ContentCard } from "./ContentCard";
import Link from "next/link";

type ProjectCardProps = {
    project: Project;
};

export const ProjectCard = ({ project }: ProjectCardProps) => {
    return (
        <Link href={`/projects/${project.slug}`}>
            <ContentCard className="overflow-hidden p-0">

                {/* Imagen de portada */}
                {project.images?.[0] && (
                    <div className="relative w-full h-[180px] sm:h-[220px] overflow-hidden">
                        <Image
                            src={project.images[0]}
                            alt={project.title}
                            fill
                            className="object-cover transition-transform duration-300 hover:scale-105"
                        />
                    </div>
                )}

                {/* Contenido */}
                <div className="p-5">
                    <h2 className="text-xl sm:text-2xl font-bold text-orange-400">
                        {project.title}
                    </h2>

                    <p className="mt-3 text-zinc-300 text-sm sm:text-base leading-relaxed">
                        {project.shortDescription}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-4">
                        {project.technologies.map((tech) => (
                            <span
                                key={tech}
                                className="
                                    px-3 py-1 rounded-full text-xs sm:text-sm
                                    bg-orange-500/10 border border-orange-500/20
                                    text-orange-300
                                "
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </ContentCard>
        </Link>
    );
};