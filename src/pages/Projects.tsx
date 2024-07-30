import { Image, Text, Link, ListItem, UnorderedList, useMediaQuery, Box, Grid, Flex } from "@chakra-ui/react"
import { ProjectImageHover } from "../components/Projects/ProjectImageHover"
import { Project } from "../types/projects"
export function Projects() {
    const [isWrapped] = useMediaQuery("(max-width: 800px)");

    const projects: Project[] = [
        {
            id: 1,
            name: "InView",
            description: "Description 1",
            longText: "Long text 1",
            technologies: ["Tech 1", "Tech 2"],
            coverImage: "../../assets/1.png",
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
            coverImage: "../../assets/test2.png",
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
        <Box>
            {isWrapped ? (
                <Flex direction="column" gap={6}>
                    {projects.map((project, index) => (
                        <Box
                            key={project.id}
                            mt={index % 2 === 0 ? "75px" : "0"}
                        >
                            <ProjectImageHover project={project} />
                        </Box>
                    ))}
                </Flex>
            ) : (
                <Grid templateColumns="repeat(2, 1fr)" gap={6}>
                    {projects.map((project, index) => (
                        <Box
                            key={project.id}
                            mt={index % 2 === 0 ? "75px" : "0"}
                            w="calc(100% - 50px)"
                            h={"300px"}
                        >
                            <ProjectImageHover project={project}   />
                        </Box>
                    ))}
                </Grid>
            )}
        </Box>
    )
}