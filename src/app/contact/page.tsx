"use client";
/* import {Navbar} from "@/components/layout/Navbar"; */
import { SiGithub, SiGmail, } from "react-icons/si";
import { FaLinkedin, } from "react-icons/fa";
import { useState } from "react";
import { ContactModal } from "@/components/contact/ContactModal";
import { ContactCard } from "@/components/cards/ContactCard";
import { Section } from "@/components/section/Section";


const ContactPage = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <main className="min-h-screen">

            <Section title="Contacto & Redes" className="text-center">

                {/* TEXTO INTRO */}
                <div className="max-w-3xl mx-auto text-center mb-12">
                    <p className="text-lg text-zinc-400 leading-8">
                        Actualmente continúo desarrollándome como frontend developer,
                        enfocado en construir interfaces modernas utilizando React,
                        Next.js y TypeScript.

                        Puedes explorar mi código, repositorios y evolución técnica
                        a través de las siguientes plataformas.
                    </p>
                </div>

                {/* CARDS GRID */}
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 justify-items-center">

                    <ContactCard
                        icon={<SiGithub />}
                        title="GitHub"
                        description="Revisa mis repositorios, arquitectura frontend,
                                    consumo de APIs y proyectos personales en desarrollo."
                        href="https://github.com/Cazuel44"
                    />

                    <ContactCard
                        icon={<FaLinkedin />}
                        title="LinkedIn"
                        description="Conecta conmigo profesionalmente y conoce
                                    más sobre mi formación, habilidades y
                                    desarrollo como developer."
                        href="https://linkedin.com/in/..."
                    />

                    <ContactCard
                        icon={<SiGmail />}
                        title="Email"
                        description="Disponible para oportunidades laborales,
                                    colaboración en proyectos y desarrollo
                                    de aplicaciones web."
                        onClick={() => setIsModalOpen(true)}
                    />

                </div>

                <ContactModal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                />

            </Section>

        </main>
    );
};

export default ContactPage;