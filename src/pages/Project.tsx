import React, { useEffect, useState } from 'react'
import { Landing } from '../components/project/Landing'
import { useParams } from 'react-router-dom'
import Projects from "../data/Projects.json"
import { Content } from '../components/project/Content';
import { Box, Flex, Grid, Heading, useMediaQuery } from '@chakra-ui/react';
import { Project as ProjectType } from '../types/projects';
import { ProjectImageHover } from '../components/Projects/ProjectImageHover';
export function Project() {
    const [randomProjects, setRandomProjects] = useState<ProjectType[]>([]);
    const id = useParams<{ projectId: string }>().projectId;
    const [isWrapped] = useMediaQuery("(max-width: 1000px)");

    useEffect(() => {

        function randomProjects(amount: number) {
            if (Projects.length <= amount) return Projects;
            const projects = [...Projects];
            const randomProjects = [];
            while (randomProjects.length < amount) {
                const randomIndex = Math.floor(Math.random() * projects.length);
                if (projects[randomIndex].id === id) continue;
                randomProjects.push(projects[randomIndex]);
                projects.splice(randomIndex, 1);
            }
            return randomProjects;
        }

        setRandomProjects(randomProjects(2));

    }, []);


    if (!id) return null;
    const thisProject = Projects.find(p => p.id === id)

    if (!thisProject) return null;
    // find 3 random projects



    return (
        <>
            <Landing project={thisProject} />
            {/* hr */}
            <Box
                height={"1px"}
                width={"100%"}
                backgroundColor={"primary.200"}
                margin={"2rem 0"}
            />
            <Content mdFormatedText={thisProject.longText} />
            {/* hr */}
            <Box
                height={"1px"}
                width={"100%"}
                backgroundColor={"primary.200"}
                margin={"2rem 0"}
            />
            {/* 3 random projects */}
            <Heading as="h2" size="lg" m={6} textAlign={"center"}>
                Other Projects
            </Heading>
            <Box
                display={"flex"}
                justifyContent={"space-around"}
                alignItems={"center"}
            >


                {isWrapped ? (
                    <Flex direction="column" gap={6}>
                        {randomProjects.map((project) => (
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
                            {randomProjects.map((project, index) => (
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
        </>
    )
}