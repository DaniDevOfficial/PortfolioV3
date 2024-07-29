import { useState } from "react";
import { Project } from "../../types/projects"
import { Box, Image } from "@chakra-ui/react"
export function ProjectImageHover({ project }: { project: Project }) {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <>
            <Box
                position="relative"
                overflow="hidden"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <Box
                    transition="transform 0.3s, filter 0.3s"
                    transform={isHovered ? "scale(1.1)" : "scale(1)"}
                    filter={isHovered ? "blur(5px)" : "blur(0)"}
                >
                    <Image
                        src={project.coverImage}
                        alt={project.name}
                        w="100%"
                        h="auto"
                    />
                </Box>
                <Box
                    position="absolute"
                    top="0"
                    left="10px"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    color="white"
                    opacity={1}
                    transition="opacity 0.3s"
                    _hover={{
                        opacity: 1
                    }}
                >
                    {project.name}
                </Box>
            </Box>

        </>
    )
}