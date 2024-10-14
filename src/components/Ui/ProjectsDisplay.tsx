import { Project } from '../../types/projects'
import { useMediaQuery, Flex, Box, Grid } from '@chakra-ui/react';
import { ProjectImageHover } from './ProjectImageHover';
import Slide from '../lib/Slide';

export function ProjectsDisplay({ projects }: { projects: Project[] }) {
    const [isWrapped] = useMediaQuery("(max-width: 900px)");

    return (
        <>
            {isWrapped ? (
                <Flex direction="column" gap={6} overflow={"auto"}>
                    {projects.map((project, index) => (
                        <Slide from={index % 2 == 0 ? 'left' : 'right'}>
                            <Box
                                key={project.id}
                                h={"300px"}
                            >
                                <ProjectImageHover project={project} />
                            </Box>
                        </Slide>
                    ))}
                </Flex>
            ) : (
                <>
                    <Grid templateColumns="repeat(2, 1fr)" gap={6} overflow={"hidden"}>
                        {projects.map((project, index) => (

                            <Slide from={index % 2 == 0 ? 'left' : 'right'} delay={(index % 4) / 10}>
                                <Box
                                    key={project.id}
                                    mt={index % 2 === 0 ? "75px" : "0"}
                                    w="calc(100% - 50px)"
                                    h={"300px"}
                                >
                                    <ProjectImageHover project={project} />
                                </Box>
                            </Slide>
                        ))}
                    </Grid>
                </>
            )}
        </>
    )
}