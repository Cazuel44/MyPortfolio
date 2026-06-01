
export type ContactRequestBody = {
    name: string;
    email: string;
    message: string;
    website?: string;
};

export type ContactCardProps = {
    icon: React.ReactNode;
    title: string;
    description: string;
    href?: string;
    onClick?: () => void;
    accent?: "github" | "linkedin" | "email";
};