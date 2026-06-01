import { SectionProps } from "@/types/section";

export const Section = ({
    title,
    children,
    className = "",
}: SectionProps) => {
    return (
        <section className={`px-10 py-10 ${className}`}>
            {title && (
                <h1 className="text-orange-400 font-semibold text-4xl md:text-5xl tracking-tight mb-6">
                    {title}
                </h1>
            )}

            {children}
        </section>
    );
};