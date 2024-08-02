import { useState } from "react";
import { Project } from "../../types/projects"
import { Box, Image, Skeleton } from "@chakra-ui/react"
import { Link } from "react-router-dom";
export function ProjectImageHover({ project }: { project: Project }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <>
            <Link to={`/projects/${project.id}`}>
                <Box
                    height={"100%"}
                    width={"100%"}
                    position="relative"
                    overflow="hidden"
                    textAlign={"center"}
                    borderRadius={"md"}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    transition="transform 0.3s"
                    cursor="pointer"
                    boxShadow={"md"}
                >
                    <Box
                        transition="transform 0.3s, filter 0.3s"
                        transform={isHovered ? "scale(1.1)" : "scale(1)"}
                        filter={isHovered ? "blur(5px)" : "blur(0)"}
                        height={"inherit"}
                        width={"inherit"}
                    >
                        <Image
                            src={project.coverImage}
                            alt={project.name}
                            width="100%"
                            height="100%"
                            objectFit="cover"

                        />
                    </Box>
                    <Box
                        position="absolute"
                        top="5%"
                        left="5%"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        color="white"
                        fontWeight={"bold"}
                        transition="opacity 0.3s"
                        p={2}
                        bg="rgba(0,0,0,0.3)"
                        borderRadius="md"
                    >
                        {project.name}
                    </Box>
                    <Box
                        position="absolute"
                        top="50%"
                        right="50%"
                        transform={"translate(50%, -50%)"}
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        color="white"
                        fontWeight={"bold"}
                        opacity={isHovered ? 1 : 0}
                        transition="opacity 0.3s"
                        p={2}
                        bg="rgba(0,0,0,0.3)"
                        borderRadius="md"
                    >
                        Click for more Information
                    </Box>
                </Box>

            </Link>
        </>
    )
}