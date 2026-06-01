import { ContactCardProps } from "@/types/contact";

export const ContactCard = ({
    icon,
    title,
    description,
    href,
    onClick,
}: ContactCardProps) => {

    const baseClass = "group relative overflow-hidden bg-zinc-900/50 border border-orange-500/10 backdrop-blur-md rounded-[28px] p-8 hover:border-orange-400/30 hover:bg-zinc-900/70 hover:-translate-y-2 transition-all duration-500";

    const content = (
        <>
            <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/20 via-transparent to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <div className="relative z-10 flex flex-col items-center text-center">
                <div className="text-5xl mb-6 text-white group-hover:text-orange-300 transition-colors duration-300">
                    {icon}
                </div>

                <h2 className="text-2xl font-bold mb-4 text-white">
                    {title}
                </h2>

                <p className="text-zinc-400 leading-7 group-hover:text-zinc-300 transition-colors duration-300">
                    {description}
                </p>
            </div>
        </>
    );

    if (onClick) {
        return (
            <button onClick={onClick} className={`${baseClass} text-left`}>
                {content}
            </button>
        );
    }

    return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={baseClass}>
            {content}
        </a>
    );
};