import React from 'react'
import { Project } from '../../types/projects'
import { useMediaQuery, Flex, Box, Grid } from '@chakra-ui/react';
import { ProjectImageHover } from './ProjectImageHover';

export function ProjectsDisplay({ projects }: { projects: Project[] }) {
    const [isWrapped] = useMediaQuery("(max-width: 800px)");

    return (
        <>
            {isWrapped ? (
                <Flex direction="column" gap={6}>
                    {projects.map((project) => (
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
                        {projects.map((project, index) => (
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
        </>
    )
}