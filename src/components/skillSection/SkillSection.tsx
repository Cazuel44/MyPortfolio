import { skills } from "@/app/skills/data/skills";

export const SkillsSection = () => {
    return (
        <div className="space-y-16">

            {skills.map((group) => (
                <div
                    key={group.category}
                    className="relative overflow-hidden rounded-[32px] border border-orange-500/10 bg-zinc-950/40 backdrop-blur-xl p-8"
                >

                    {/* BACKGROUND GLOW */}
                    <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/30 via-black/10 to-zinc-950/30 pointer-events-none" />

                    {/* AMBIENT LIGHT */}
                    <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] -translate-x-1/2 -translate-y-1/2 bg-orange-500/5 blur-3xl rounded-full pointer-events-none" />

                    <div className="relative z-10">

                        {/* Categoría */}
                        <h2 className="text-3xl font-bold tracking-tight mb-8 border-b border-orange-500/10 pb-4 text-white">
                            {group.category}
                        </h2>

                        {/* Pills */}
                        <div className="flex flex-wrap gap-5">

                            {group.items.map((skill) => (
                                <div
                                    key={skill.label}
                                    className="flex flex-col gap-4 bg-zinc-900/60 border border-orange-500/10 backdrop-blur-md rounded-2xl px-5 py-5 hover:border-orange-400/30 hover:bg-zinc-900/80 hover:-translate-y-1 transition-all duration-300 cursor-default group w-[190px]"
                                >

                                    {/* ICON + LABEL */}
                                    <div className="flex items-center gap-3">

                                        <skill.icon className={`text-2xl ${skill.color} group-hover:scale-110 transition-all duration-300`} />

                                        <span className="font-semibold text-zinc-100 tracking-tight">
                                            {skill.label}
                                        </span>

                                    </div>

                                    {/* PROGRESS BAR */}
                                    <div className="w-full bg-zinc-800 rounded-full h-2 overflow-hidden">

                                        <div
                                            className="bg-orange-400 h-2 rounded-full transition-all duration-500 shadow-lg shadow-orange-500/30"
                                            style={{
                                                width: `${skill.level}%`
                                            }}
                                        />

                                    </div>

                                    {/* PERCENT */}
                                    <span className="text-xs text-right text-zinc-400 group-hover:text-orange-300 transition-colors duration-300">
                                        {skill.level}%
                                    </span>

                                </div>
                            ))}

                        </div>

                    </div>

                </div>
            ))}

        </div>
    );
};

