type CardProps = {
    children: React.ReactNode;
    className?: string;
};

export const ContentCard = ({ children, className = "" }: CardProps) => {
    return (
        <div
            className={`bg-zinc-900/40 border border-orange-500/10 backdrop-blur-sm rounded-2xl p-8 ${className}`}
        >
            {children}
        </div>
    );
};