import {useState} from "react";
import {Project} from "../../types/projects"
import {Box, Image} from "@chakra-ui/react"
import {Link} from "react-router-dom";

export function ProjectImageHover({project}: { project: Project }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <>
            <Link to={`/projects/${project.name}`}>
                <Box
                    height={"100%"}
                    width={"100%"}
                    position="relative"
                    overflow="hidden"
                    textAlign={"center"}
                    borderRadius={"md"}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    transition="transform 0.3s, box-shadow 0.3s"
                    cursor="pointer"
                    boxShadow={"md"}

                    _hover={{
                        transform: "scale(1.02)",
                        boxShadow: "0 20px 20px rgba(0, 0, 0, 0.25)",
                    }}                >
                    <Box
                        transition="transform 0.3s"
                        transform={isHovered ? "scale(1.1)" : "scale(1)"}

                        height={"inherit"}
                        width={"inherit"}
                        _before={{
                            content: '""',
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            bgGradient: "linear-gradient(180deg, transparent 60%, rgba(0, 0, 0, 0.6) 100%)",
                            transition: "opacity 0.3s ease",
                            opacity: isHovered ? 0.1 : 1,
                            zIndex: 1,
                        }}
                        _after={{
                            content: '""',
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            bgGradient: "linear-gradient(180deg, transparent 20%, rgba(0, 0, 0, 1) 100%)",
                            transition: "opacity 0.3s ease",
                            opacity: isHovered ? 1 : 0.3,
                            zIndex: 1,
                        }}
                    >
                        <Image
                            src={project.coverImage}
                            alt={project.name}
                            width="100%"
                            height="100%"
                            objectFit="cover"
                            zIndex={0}

                        />
                    </Box>

                    <Box
                        position="absolute"
                        bottom={isHovered ? "10%" : "-30px"}
                        left="5%"
                        display="flex"
                        flexDirection="column"
                        alignItems="flex-start"
                        justifyContent="center"
                        color="white"
                        fontWeight="bold"
                        transition="bottom 0.4s ease, opacity 0.3s ease"
                        zIndex={2}
                        borderRadius="md"
                    >
                        <Box fontSize="xl">
                            {project.name}
                        </Box>

                        <Box
                            fontSize="sm"
                            mt={2}
                            height={isHovered ? "100%" : "40px"}
                            opacity={isHovered ? 1 : 0}
                            transition="height 0.3s ease, opacity 0.3s ease"
                             overflow="hidden"
                        >
                            <Box display="flex" mt={2}>
                                {project.tags.slice(0, 4).map((tag, index) => (
                                    <Box
                                        key={index}
                                        px={2}
                                        py={1}
                                        border="2px solid"
                                        borderColor={project.colorScheme || "gray.500"}
                                        color="white"
                                        borderRadius="md"
                                        fontSize="sm"
                                        mr={2}
                                    >
                                        {tag}
                                    </Box>
                                ))}
                            </Box>
                        </Box>
                    </Box>

                </Box>
            </Link>
        </>
    )
}