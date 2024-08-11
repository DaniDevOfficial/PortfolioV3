import React from 'react';
import { Project } from '../../types/projects';
import { Box, Button, Flex, Heading, Icon, Text, Image, useDisclosure } from '@chakra-ui/react';
import { Tag } from '../util/Tag';
import Magnetic from '../util/magnetic';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import Slide from '../lib/Slide';

// Header Component
function ProjectHeader({ name, isOpen, onOpen, onClose }: { name: string, isOpen: boolean, onOpen: () => void, onClose: () => void }) {
    return (
        <Heading as="h1" fontSize={"xxx-large"} textAlign={"center"} mt={6}>
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
                {name}
            </Box>
        </Heading>
    );
}

// Image Component
function ProjectImage({ src, alt }: { src: string, alt: string }) {
    return (
        <Box mt={4} minW={{ base: "100%", lg: "100%" }} maxW={{ lg: "50%" }}>
            <Image
                src={src}
                alt={alt}
                borderRadius={"1rem"}
                boxShadow={"xl"}
            />
        </Box>
    );
}

// Tags Component
function ProjectTags({ tags }: { tags: string[] }) {
    return (
        <Flex flexWrap="wrap" justifyContent={{ base: "center", lg: "flex-start" }}>
            {tags.map((tag, index) => (
                <Box key={index}>
                    <Tag tag={tag} />
                </Box>
            ))}
        </Flex>
    );
}

// Description Component
function ProjectDescription({ description }: { description: string }) {
    return (
        <Box>
            <Text fontSize={"1.4rem"} mt={6} ml={"0.5rem"} textAlign={{ base: "center", lg: "left" }}>
                {description}
            </Text>
        </Box>
    );
}

// Links Component
function ProjectLinks({ live, repo }: { live?: string, repo: string }) {
    return (
        <Flex my={6} gap={4} alignItems={"center"} justifyContent={"center"}>
            {live && (
                <a href={live} target="_blank" rel="noopener noreferrer">
                    <Button colorScheme="orange">
                        <Box display={"flex"} alignItems={"center"} justifyContent={"center"} gap={2}>
                            Visit Live Site <Icon as={FaExternalLinkAlt} />
                        </Box>
                    </Button>
                </a>
            )}
            {repo && (
                <Magnetic>
                    <a href={repo} target="_blank" rel="noopener noreferrer">
                        <Icon
                            mt={2}
                            as={FaGithub}
                            height={"30px"}
                            width={"auto"}
                            transition={"color 0.3s ease-in-out"}
                            _hover={{ color: "accent.base" }}
                        />
                    </a>
                </Magnetic>
            )}
        </Flex>
    );
}

// Main Landing Component
export function Landing({ project }: { project: Project }) {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <Box display={{ base: 'block', lg: 'none' }}>
                {/* <MobileLanding /> */}
                <Slide from='bottom'>
                    <ProjectHeader name={project.name} isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
                </Slide>
                <Flex justifyContent="space-between" gap={6} flexDir={"column"}>
                    <Slide from='left' delay={0.1}>
                        <ProjectImage src={project.coverImage} alt={project.name} />
                    </Slide>
                    <Slide from='right'>
                        <ProjectTags tags={project.tags} />
                    </Slide>
                    <Slide from='left' delay={0.1}>
                        <ProjectDescription description={project.description} />
                    </Slide>
                </Flex>
                <Slide from='right'>
                    <ProjectLinks live={project.live} repo={project.repo} />
                </Slide>
            </Box>
            <Box display={{ base: 'none', lg: 'block' }}>
                {/* <DesktopLanding /> */}
                <Slide from='left'>
                    <ProjectHeader name={project.name} isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
                </Slide>
                <Flex justifyContent="space-between" gap={6}>
                    <Slide from='left' delay={0.1}>
                        <ProjectImage src={project.coverImage} alt={project.name} />
                    </Slide>
                    <Box>
                        <Slide from='right' delay={0.1}>
                            <ProjectDescription description={project.description} />
                        </Slide>
                        <Slide from='right' delay={0.2}>
                            <ProjectTags tags={project.tags} />
                        </Slide>
                    </Box>
                </Flex>
                <Slide from='left' delay={0.2}>
                    <Flex justifyContent="left">
                        <ProjectLinks live={project.live} repo={project.repo} />
                    </Flex>
                </Slide>
            </Box>
        </>
    );
}

