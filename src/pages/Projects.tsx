import { Text, useMediaQuery, Box, Grid, Flex, Heading, useDisclosure } from "@chakra-ui/react"
import { ProjectImageHover } from "../components/Projects/ProjectImageHover"
import ProjectsData from "../data/Projects.json"
export function Projects() {
    const [isWrapped] = useMediaQuery("(max-width: 800px)");
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <Box>
            <Box
                textAlign={isWrapped ? "center" : "left"}
                my={6}
            >

                <Heading as="h1" size="xl" mt={6}>
                    My
                    <Box
                        as="span"
                        color="primary.base"
                        position="relative"
                        onMouseEnter={onOpen}
                        onMouseLeave={onClose}
                        zIndex={5}
                        overflow={'hidden'}
                        padding={'0 0.2rem'}
                    >
                        <Box
                            as="span"
                            position={'absolute'}
                            bottom={1}
                            left={0}
                            height={isOpen ? '100%' : '50%'}
                            width={'100%'}
                            background={'linear-gradient(180deg, transparent 50%, orange 0%)'}
                            opacity={0.5}
                            zIndex={-1}
                            transition={'height 0.3s ease'}
                        />
                        Projects
                    </Box>

                </Heading>
                <Text mt={4} maxW={isWrapped ? "80%" : "30%"} ml={isWrapped ? "10%" : "0"} textAlign={isWrapped ? "center" : "left"} >
                    Here are some of the projects I've worked on. Click on them to learn more about them.
                </Text>
            </Box>
            {isWrapped ? (
                <Flex direction="column" gap={6}>
                    {ProjectsData.map((project) => (
                        <Box
                            key={project.id}
                            h={"300px"}
                        >
                            <ProjectImageHover project={project} />
                        </Box>
                    ))}
                </Flex>
            ) : (
                <>
                    <Grid templateColumns="repeat(2, 1fr)" gap={6}>
                        {ProjectsData.map((project, index) => (
                            <Box
                                key={project.id}
                                mt={index % 2 === 0 ? "75px" : "0"}
                                w="calc(100% - 50px)"
                                h={"300px"}
                            >
                                <ProjectImageHover project={project} />
                            </Box>
                        ))}
                    </Grid>
                </>
            )}
        </Box>
    )
}