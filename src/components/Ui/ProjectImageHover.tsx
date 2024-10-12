import {useState} from "react";
import {Project} from "../../types/projects"
import {Box, Image} from "@chakra-ui/react"
import {Link} from "react-router-dom";

export function ProjectImageHover({project}: { project: Project }) {
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
                            bgGradient: "linear-gradient(180deg, transparent 60%, rgba(0, 0, 0, 0.6) 100%)",  // Default gradient (bottom 20%)
                            transition: "opacity 0.4s ease", // Transition the opacity
                            opacity: isHovered ? 0.1 : 1,  // Hide when hovered
                            zIndex: 1,
                        }}
                        _after={{
                            content: '""',
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            bgGradient: "linear-gradient(180deg, transparent 20%, rgba(0, 0, 0, 1) 100%)",  // Hover gradient (bottom 50%)
                            transition: "opacity 0.4s ease", // Transition the opacity
                            opacity: isHovered ? 1 : 0.3,  // Show when hovered
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
                        bottom={isHovered ? "10%" : "2%"}  // Moves the text higher on hover
                        left="5%"
                        display="flex"
                        flexDirection="column"
                        alignItems="flex-start"  // Aligns text to the left
                        justifyContent="center"
                        color="white"
                        fontWeight="bold"
                        transition="bottom 0.4s ease, opacity 0.3s ease"
                        zIndex={2}
                        borderRadius="md"
                    >
                        {/* Project Name (Always Visible) */}
                        <Box fontSize="xl">
                            {project.name}
                        </Box>

                        {/* Project Description (Fades in on Hover) */}
                        <Box
                            fontSize="sm"
                            mt={2}
                            maxWidth="80%"
                            height={isHovered ? "100%" : "20px"}  // Fixed height when not hovered
                            opacity={isHovered ? 1 : 0}  // Fade in/out on hover
                            transition="height 0.3s ease, opacity 0.3s ease"  // Transition both properties
                             overflow="hidden"  // Hides content when not visible
                        >
                            { project.name}  {/* Description content here */}
                        </Box>
                    </Box>

                </Box>
            </Link>
        </>
    )
}