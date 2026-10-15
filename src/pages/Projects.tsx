import { Box } from '@chakra-ui/react';
import ProjectsData from '../data/Projects.json';
import { ProjectsDisplay } from '../components/Ui/ProjectsDisplay';
import { SectionHeading } from '../components/SectionHeading';

export function Projects() {
    return <Box w="full" maxW="960px" mx="auto" px={{ base: 2, md: 4 }} py={{ base: 4, md: 8 }}>
        <SectionHeading title="Projects" description="A selection of my personal and group projects." />
        <ProjectsDisplay projects={ProjectsData.filter(project => !['4', '5'].includes(project.id))} />
    </Box>;
}