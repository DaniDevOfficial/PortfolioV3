import { Box, Button, Flex, Heading, Text, useDisclosure } from '@chakra-ui/react';
import { Project } from '../types/projects'
import { ProjectsDisplay } from './Ui/ProjectsDisplay';
import { Link } from 'react-router-dom';

export function FeaturedProjects({ projects }: { projects: Project[] }) {
    const featuredProjectsIds = ['1', '2'];
    const featuredProjects = projects.filter(project => featuredProjectsIds.includes(project.id));
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <Flex
                justifyContent={"center"}
                alignItems={"center"}
                flexDirection={"column"}
                gap={4}
            >
                <Heading
                    fontSize={"2rem"}
                    color={"text.base"}
                >
                    Featured {' '}
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
                    {' '}
                </Heading>
                <Text
                    fontSize={"1.2rem"}
                    color={"gray.600"}
                    textAlign={"center"}
                >
                    Here are some of the projects I have worked on.
                </Text>

                <ProjectsDisplay projects={featuredProjects} />

                <Button as={Link} to="/projects" colorScheme="primary" size="lg" mt={4}>
                    View All Projects
                </Button>
            </Flex>
        </>
    )
}