export type Project = {
    slug: string;
    title: string;
    shortDescription: string;
    technologies: string[];
    images?: string[];
    codeSections?: {
        title: string;
        description: string;
        images: string[];
    }[];
    projectType?: string;
    role?: string;
    team?: string;
    challenge?: string;
    tasks?: string[];
    githubUrl?: string;
    liveUrl?: string;
    keyLearning?: string;
}