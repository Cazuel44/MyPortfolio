
import { SkillsSection } from "@/components/skillSection/SkillSection";

const SkillPage = () => {
    return (
        <main className="min-h-screen">

            <section className="relative px-6 md:px-10 py-16 overflow-hidden">

                {/* AMBIENT GLOW */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-orange-500/5 blur-3xl rounded-full pointer-events-none" />

                <div className="relative z-10 max-w-7xl mx-auto">

                    {/* HEADER */}
                    <div className=" mb-16 w-full max-w-3xl rounded-2xl border border-orange-500/10 bg-zinc-900/40 backdrop-blur-md p-8 md:p-10 shadow-[0_0_40px_rgba(249,115,22,0.05)] ">

                        <p className="text-orange-400 font-semibold mb-4 tracking-wide">
                            Tecnologías & Herramientas
                        </p>

                        <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-white">
                            Habilidades
                        </h1>

                        <p className="text-zinc-400 text-lg leading-8">
                            Tecnologías y herramientas con las que trabajo para construir
                            experiencias web modernas, dinámicas y escalables.
                        </p>

                    </div>

                    <SkillsSection />

                </div>

            </section>

        </main>
    );
};

export default SkillPage;