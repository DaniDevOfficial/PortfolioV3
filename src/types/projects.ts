export interface Project {
    id: string;
    name: string;
    description: string;
    longText: string;
    coverImage: string;
    repo: string;
    live?: string;
    colorScheme?: string;
    tags: string[];
}