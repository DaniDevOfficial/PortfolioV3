export interface Project {
    id: number;
    name: string;
    description: string;
    longText: string;
    coverImage: string;
    repo: string;
    live?: string;
    tags: string[];
}