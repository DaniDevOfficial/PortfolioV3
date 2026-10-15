import { Box, Button, Flex, Heading, Image, Stack, Tag, Text, Wrap, WrapItem } from '@chakra-ui/react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { Project } from '../../types/projects';
import { Reveal } from '../Reveal';
import { TitleMark } from '../TitleMark';

export function Landing({ project }: { project: Project }) {
    return <Stack as="section" spacing={{ base: 6, md: 8 }}>
        <Reveal from="left">
            <Heading as="h1" fontSize={{ base: '4xl', md: '5xl' }} lineHeight={1.2} letterSpacing="tight"><TitleMark>{project.name}</TitleMark></Heading>
        </Reveal>
        <Flex direction={{ base: 'column', md: 'row' }} gap={{ base: 6, md: 10 }} align="center">
            <Reveal delay={0.1} style={{ flex: 1 }}>
                <Box>
                    <Image src={project.coverImage} alt={`${project.name} preview`} w="full" h="auto" borderRadius="xl" boxShadow="lg" />
                </Box>
            </Reveal>
            <Reveal from="right" delay={0.18} style={{ flex: 1 }}>
                <Stack spacing={5}>
                    <Text fontSize={{ base: 'md', md: 'lg' }} lineHeight={1.8} color="gray.700">{project.description}</Text>
                    <Wrap spacing={2}>{project.tags.map(tag => <WrapItem key={tag}><Tag bg="primary.50" color="primary.800" px={3} py={2}>{tag}</Tag></WrapItem>)}</Wrap>
                    <Flex gap={3} wrap="wrap">
                        {project.live && <Button as="a" href={project.live} target="_blank" rel="noopener noreferrer" bg="primary.700" color="white" _hover={{ bg: 'primary.800' }} rightIcon={<FaExternalLinkAlt />}>Visit live site</Button>}
                        {project.repo && <Button as="a" href={project.repo} target="_blank" rel="noopener noreferrer" variant="outline" borderColor="primary.300" leftIcon={<FaGithub />}>GitHub</Button>}
                    </Flex>
                </Stack>
            </Reveal>
        </Flex>
    </Stack>;
}
