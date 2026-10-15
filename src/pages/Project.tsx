import { Box, Button, Link, Stack, Text } from '@chakra-ui/react';
import { Link as RouterLink, useParams } from 'react-router-dom';
import Projects from '../data/Projects.json';
import { Landing } from '../components/project/Landing';
import { Content } from '../components/project/Content';
import { ProjectsDisplay } from '../components/Ui/ProjectsDisplay';
import { SectionHeading } from '../components/SectionHeading';
import { Reveal } from '../components/Reveal';

export function Project() {
    const { projectName } = useParams<{ projectName: string }>();
    const project = Projects.find(item => item.name.toLowerCase() === projectName?.toLowerCase());
    if (!project) return <Stack py={12} spacing={4} align="flex-start">
        <Text>Project not found.</Text>
        <Button as={RouterLink} to="/projects" variant="outline">Back to projects</Button>
    </Stack>;
    const otherProjects = Projects.filter(item => item.id !== project.id && !['4', '5'].includes(item.id)).slice(0, 2);
    return <Stack key={project.id} w="full" maxW="960px" mx="auto" px={{ base: 2, md: 4 }} py={{ base: 4, md: 8 }} spacing={{ base: 10, md: 14 }}>
        <Link as={RouterLink} to="/projects" fontSize="sm" color="primary.700" alignSelf="flex-start">← All projects</Link>
        <Landing project={project} />
        <Box borderTop="1px solid" borderColor="primary.100" pt={{ base: 8, md: 12 }}>
            <Reveal><Content mdFormatedText={project.longText} /></Reveal>
        </Box>
        {otherProjects.length > 0 && <Box as="section" borderTop="1px solid" borderColor="primary.100" pt={{ base: 8, md: 12 }}>
            <SectionHeading title="Other projects" />
            <ProjectsDisplay projects={otherProjects} />
        </Box>}
    </Stack>;
}