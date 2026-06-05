

import Image from "next/image";
import { projects } from "../projects/data/projectsData";
import { ProjectCard } from "@/components/cards/ProjectCard";
import { Section } from "@/components/section/Section";


const Projects = () => {
    return (
        <Section title="Mis Proyectos">
            <div className="w-full flex justify-center">
                <div className="grid gap-8 w-full max-w-5xl">
                    {projects.map((project) => (
                        <ProjectCard
                            key={project.slug}
                            project={project}
                        />
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default Projects;