import { useEffect, useState } from 'react'
import { Landing } from '../components/project/Landing'
import { useParams } from 'react-router-dom'
import Projects from "../data/Projects.json"
import { Content } from '../components/project/Content';
import { Box, chakra, Flex, Grid, Heading, useMediaQuery } from '@chakra-ui/react';
import {Project as ProjectType} from '../types/projects';
import { ProjectImageHover } from '../components/Ui/ProjectImageHover';
export function Project() {
    const [randomProjects, setRandomProjects] = useState<ProjectType[]>([]);
    const [thisProject, setThisProject] = useState<ProjectType|undefined>()
    const name = useParams<{ projectName: string }>().projectName;
    const [isWrapped] = useMediaQuery("(max-width: 1000px)");
    useEffect(() => {

        function randomProjects(amount: number) {
            if (Projects.length <= amount) return Projects;
            const projects = [...Projects];
            const randomProjects = [];
            while (randomProjects.length < amount) {
                const randomIndex = Math.floor(Math.random() * projects.length);
                if (projects[randomIndex].id === thisProject?.name) continue;
                randomProjects.push(projects[randomIndex]);
                projects.splice(randomIndex, 1);
            }
            return randomProjects;
        }

        setRandomProjects(randomProjects(2));
    setThisProject(Projects.find(p => p.name.toLowerCase() === name?.toLowerCase()))

    }, [name]);


    if (!name) return null;

    if (!thisProject) return null;

    return (
        <>
            <Landing project={thisProject} />
            <Box
                height={"1px"}
                width={"100%"}
                backgroundColor={"primary.200"}
                margin={"2rem 0"}
            />
            <Content mdFormatedText={thisProject.longText} />
            <Box
                height={"1px"}
                width={"100%"}
                backgroundColor={"primary.200"}
                margin={"2rem 0"}
            />
            <Heading as="h2" size="lg" m={6} textAlign={"center"} >
                Other <chakra.a color={"primary.base"}> Projects</chakra.a>
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