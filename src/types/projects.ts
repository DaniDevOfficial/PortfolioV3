export interface Project {
    id: number;
    name: string;
    description: string;
    longText: string;
    technologies: string[];
    coverImage: string;
    additionalImages: string[];
    github: string;
    live?: string;
    tags: string[];
}