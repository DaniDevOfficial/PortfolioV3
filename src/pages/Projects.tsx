import { Image, Text, Link, ListItem, UnorderedList, useMediaQuery, Box } from "@chakra-ui/react"
import { ProjectImageHover } from "../components/Projects/ProjectImageHover"
import { Project } from "../types/projects"
export function Projects() {
    const [isWrapped] = useMediaQuery("(max-width: 800px)");

    const projects: Project[] = [
        {
            id: 1,
            name: "Project 1",
            description: "Description 1",
            longText: "Long text 1",
            technologies: ["Tech 1", "Tech 2"],
            coverImage: "https://moyadaniel.com/_astro/onderweg.CqxgaDvo_Z1YOOcF.webp",
            additionalImages: ["Additional image 1", "Additional image 2"],
            github: "Github 1",
            live: "Live 1",
            tags: ["Tag 1", "Tag 2"]
        },
        {
            id: 2,
            name: "Project 2",
            description: "Description 2",
            longText: "Long text 2",
            technologies: ["Tech 1", "Tech 2"],
            coverImage: "https://moyadaniel.com/_astro/onderweg.CqxgaDvo_Z1YOOcF.webp",
            additionalImages: ["Additional image 1", "Additional image 2"],
            github: "Github 2",
            tags: ["Tag 1", "Tag 2"]
        },
        {
            id: 2,
            name: "Project 2",
            description: "Description 2",
            longText: "Long text 2",
            technologies: ["Tech 1", "Tech 2"],
            coverImage: "https://moyadaniel.com/_astro/onderweg.CqxgaDvo_Z1YOOcF.webp",
            additionalImages: ["Additional image 1", "Additional image 2"],
            github: "Github 2",
            tags: ["Tag 1", "Tag 2"]
        },
        {
            id: 2,
            name: "Project 2",
            description: "Description 2",
            longText: "Long text 2",
            technologies: ["Tech 1", "Tech 2"],
            coverImage: "https://moyadaniel.com/_astro/onderweg.CqxgaDvo_Z1YOOcF.webp",
            additionalImages: ["Additional image 1", "Additional image 2"],
            github: "Github 2",
            tags: ["Tag 1", "Tag 2"]
        },
        {
            id: 2,
            name: "Project 2",
            description: "Description 2",
            longText: "Long text 2",
            technologies: ["Tech 1", "Tech 2"],
            coverImage: "https://moyadaniel.com/_astro/onderweg.CqxgaDvo_Z1YOOcF.webp",
            additionalImages: ["Additional image 1", "Additional image 2"],
            github: "Github 2",
            tags: ["Tag 1", "Tag 2"]
        },
        {
            id: 2,
            name: "Project 2",
            description: "Description 2",
            longText: "Long text 2",
            technologies: ["Tech 1", "Tech 2"],
            coverImage: "https://moyadaniel.com/_astro/onderweg.CqxgaDvo_Z1YOOcF.webp",
            additionalImages: ["Additional image 1", "Additional image 2"],
            github: "Github 2",
            tags: ["Tag 1", "Tag 2"]
        },
        {
            id: 2,
            name: "Project 2",
            description: "Description 2",
            longText: "Long text 2",
            technologies: ["Tech 1", "Tech 2"],
            coverImage: "https://moyadaniel.com/_astro/onderweg.CqxgaDvo_Z1YOOcF.webp",
            additionalImages: ["Additional image 1", "Additional image 2"],
            github: "Github 2",
            tags: ["Tag 1", "Tag 2"]
        }
    ]
    return (
        <>
            <Box
                w={"50%"}
            >
                <ProjectImageHover project={projects[0]} />
            </Box>
            
            {/* Wrap the list of projects in a fragment 
            <UnorderedList
                display="grid"
                gridTemplateColumns="repeat(auto-fit, minmax(250px, 1fr))"
                gap="50px"
                maxWidth="90vw"
                listStyleType="none"
                padding="0"
            >
                {projects.map((project, index) => (
                    <ListItem
                        w="calc(50% - 50px)"
                        key={index}
                        marginTop={index % 2 === 0 ? "20px" : "0"} // Apply top margin to every even index
                    >
                        <ProjectImageHover project={project} />
                    </ListItem>
                ))}
            </UnorderedList>
                    */}
        </>

    )
}