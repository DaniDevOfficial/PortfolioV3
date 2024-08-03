import React, { useEffect, useState } from 'react'
import { Landing } from '../components/project/Landing'
import { useParams } from 'react-router-dom'
import Projects from "../data/Projects.json"
import { Content } from '../components/project/Content';
import { Box } from '@chakra-ui/react';
import { Project as ProjectType } from '../types/projects';
import { ProjectImageHover } from '../components/Projects/ProjectImageHover';
export function Project() {
    const [randomProjects, setRandomProjects] = useState<ProjectType[]>([]);
    const id = useParams<{ projectId: string }>().projectId;

    useEffect(() => {

        function get3RandomProjects() {
            if (Projects.length <= 3) return Projects;
            const projects = [...Projects];
            const randomProjects = [];
            while (randomProjects.length < 3) {
                const randomIndex = Math.floor(Math.random() * projects.length);
                if (projects[randomIndex].id === id) continue;
                randomProjects.push(projects[randomIndex]);
                projects.splice(randomIndex, 1);
            }
            return randomProjects;
        }

        setRandomProjects(get3RandomProjects())

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
            <Box
                display={"flex"}
                justifyContent={"space-around"}
                alignItems={"center"}
                flexWrap={"wrap"}
            >
                {randomProjects.map((project, index) => (
                    <Box key={index} margin={"1rem"}>
                        <ProjectImageHover project={project} />
                    </Box>
                ))}
            </Box>
        </>
    )
}