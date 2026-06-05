import Image from "next/image";

import { projects } from "../data/projectsData";
import { Section } from "@/components/section/Section";
import { ContentCard } from "@/components/cards/ContentCard";
import { ProjectGallery } from "@/components/projectsGallery/projectsGallery";
import { ProjectsCodeSection } from "@/components/projectsGallery/projectsCodeSection";

type Props = {
    params: Promise<{
        slug: string;
    }>;
};

const ProjectPage = async ({ params }: Props) => {
    const { slug } = await params;

    const project = projects.find(
        (project) => project.slug === slug
    );

    if (!project) {
        return (
            <Section title="Proyecto no encontrado">
                <ContentCard>
                    <p>El proyecto solicitado no existe.</p>
                </ContentCard>
            </Section>
        );
    }

    return (
        <Section title={project.title}>
            <div className="space-y-8">

                {/* Imagen principal */}
                {project.images?.[0] && (
                    <ContentCard>
                        <div className="max-w-4xl mx-auto">
                            <Image
                                src={project.images[0]}
                                alt={project.title}
                                width={1200}
                                height={675}
                                className="w-full h-auto rounded-xl border border-orange-500/10"
                            />
                        </div>
                    </ContentCard>
                )}

                {/* Información general */}
                <ContentCard>
                    <h2 className="text-2xl font-semibold text-orange-400 mb-4">
                        Descripción
                    </h2>

                    <p className="text-zinc-300 leading-relaxed">
                        {project.shortDescription}
                    </p>

                    <div className="mt-6 grid md:grid-cols-2 gap-4">
                        {project.projectType && (
                            <div>
                                <h3 className="text-orange-400 font-medium">
                                    Tipo de proyecto
                                </h3>

                                <p className="text-zinc-300">
                                    {project.projectType}
                                </p>
                            </div>
                        )}
                        {project.role && (
                            <div>
                                <h3 className="text-orange-400 font-medium">
                                    Rol
                                </h3>

                                <p className="text-zinc-300">
                                    {project.role}
                                </p>
                            </div>
                        )}

                        {project.team && (
                            <div>
                                <h3 className="text-orange-400 font-medium">
                                    Equipo
                                </h3>

                                <p className="text-zinc-300">
                                    {project.team}
                                </p>
                            </div>
                        )}
                    </div>
                </ContentCard>

                {/* Tecnologías */}
                <ContentCard>
                    <h2 className="text-2xl font-semibold text-orange-400 mb-4">
                        Tecnologías utilizadas
                    </h2>

                    <div className="flex flex-wrap gap-3">
                        {project.technologies.map((tech) => (
                            <span
                                key={tech}
                                className="
                                    px-3
                                    py-1
                                    rounded-full
                                    bg-orange-500/10
                                    border
                                    border-orange-500/20
                                    text-orange-300
                                    text-sm
                                "
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </ContentCard>

                {/* Desafío */}
                {project.challenge && (
                    <ContentCard>
                        <h2 className="text-2xl font-semibold text-orange-400 mb-4">
                            Desafío técnico
                        </h2>

                        <p className="text-zinc-300 leading-relaxed">
                            {project.challenge}
                        </p>
                    </ContentCard>
                )}

                {/* Contribuciones */}
                {project.tasks && (
                    <ContentCard>
                        <h2 className="text-2xl font-semibold text-orange-400 mb-4">
                            Tareas realizadas
                        </h2>

                        <ul className="space-y-3 text-zinc-300">
                            {project.tasks.map((task) => (
                                <li
                                    key={task}
                                    className="flex items-start gap-2"
                                >
                                    <span className="text-orange-400">
                                        ✓
                                    </span>

                                    <span>{task}</span>
                                </li>
                            ))}
                        </ul>
                    </ContentCard>
                )}

                {/* Galería */}
                {project.images && project.images.length > 0 && (
                    <ContentCard>
                        <ProjectGallery
                            images={project.images}
                            title={project.title}
                        />
                    </ContentCard>
                )}

                {/* Capturas técnicas */}
                {project.codeSections && (
                    <ContentCard>
                        <h2 className="text-2xl font-semibold text-orange-400 mb-6">
                            Evidencia técnica
                        </h2>

                        <div className="space-y-10">
                            {project.codeSections.map((section, index) => (
                                <ProjectsCodeSection
                                    key={index}
                                    section={section}
                                />
                            ))}
                        </div>
                    </ContentCard>
                )}

                {/* Aprendizaje */}
                {project.keyLearning && (
                    <ContentCard>
                        <h2 className="text-2xl font-semibold text-orange-400 mb-4">
                            Aprendizaje clave
                        </h2>

                        <p className="text-zinc-300 leading-relaxed">
                            {project.keyLearning}
                        </p>
                    </ContentCard>
                )}

            </div>
        </Section>
    );
};

export default ProjectPage;