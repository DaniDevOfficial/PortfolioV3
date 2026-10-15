import { Box, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { Project } from '../types/projects';
import { ProjectsDisplay } from './Ui/ProjectsDisplay';
import { SectionHeading } from './SectionHeading';

export function FeaturedProjects({ projects }: { projects: Project[] }) {
    return <Box as="section" w="full" id="featured-projects">
        <SectionHeading title="Selected projects" description="A few things I've worked on, from investment tracking to multiplayer games." />
        <ProjectsDisplay projects={projects.filter(project => ['1', '2'].includes(project.id))} />
        <Button as={Link} to="/projects" variant="outline" borderColor="primary.300" mt={8}>View all projects →</Button>
    </Box>;
}
