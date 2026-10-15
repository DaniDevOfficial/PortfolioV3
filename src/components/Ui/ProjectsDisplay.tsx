import { Box, Button, Flex, Heading, Image, SimpleGrid, Tag, Text, Wrap, WrapItem } from '@chakra-ui/react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { Project } from '../../types/projects';
import { Reveal } from '../Reveal';

export function ProjectsDisplay({ projects }: { projects: Project[] }) {
    return <SimpleGrid columns={{ base: 1, md: 2 }} gap={{ base: 6, md: 8 }} w="full">
        {projects.map((project, index) => <Reveal key={project.id} delay={(index % 2) * 0.12}><Box as="article" key={project.id} data-group="" display="block" border="1px solid" borderColor="primary.100" borderRadius="xl" overflow="hidden" bg="whiteAlpha.600" transition="border-color 0.2s" _hover={{ borderColor: 'primary.400' }} _focusVisible={{ outline: '3px solid', outlineColor: 'primary.600', outlineOffset: '4px' }}>
            <Box overflow="hidden" aspectRatio={16 / 10} bg="primary.50" position="relative">
                <Image src={project.coverImage} alt={`${project.name} preview`} loading="lazy" w="full" h="full" objectFit="cover" transition="transform 0.25s" _groupHover={{ transform: 'scale(1.025)' }} sx={{ '@media (prefers-reduced-motion: reduce)': { transition: 'none', transform: 'none !important' } }} />
                <Box position="absolute" inset={0} bgGradient="linear(to-b, transparent 15%, blackAlpha.900 100%)" pointerEvents="none" />
                <Box position="absolute" bottom="10%" left="5%" right="5%" color="white">
                    <Heading as="h3" fontSize="xl" mb={3}>{project.name}</Heading>
                    <Wrap spacing={2}>{project.tags.slice(0, 4).map(tag => <WrapItem key={tag}><Tag size="sm" bg="blackAlpha.600" border="1px solid" borderColor={project.colorScheme || 'primary.300'} color="white" px={2} py={1}>{tag}</Tag></WrapItem>)}</Wrap>
                </Box>
            </Box>
            <Box p={{ base: 5, md: 6 }}>
                <Text fontSize="md" color="gray.600" lineHeight={1.7} mb={4}>{project.description}</Text>
                <Flex gap={3} wrap="wrap" mt={5}>
                    {project.repo && <Button as="a" href={project.repo} target="_blank" rel="noopener noreferrer" variant="outline" borderColor="primary.300" size="sm" leftIcon={<FaGithub />} aria-label={`Visit ${project.name} on GitHub`}>GitHub</Button>}
                    {project.live && <Button as="a" href={project.live} target="_blank" rel="noopener noreferrer" bg="primary.700" color="white" _hover={{ bg: 'primary.800' }} size="sm" rightIcon={<FaExternalLinkAlt />} aria-label={`Visit ${project.name} live`}>Live demo</Button>}
                </Flex>
            </Box>
        </Box></Reveal>)}
    </SimpleGrid>;
}
