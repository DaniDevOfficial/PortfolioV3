import React from 'react'
import { Project } from '../../types/projects'
import { Box, Button, Flex, Heading, Icon, Text, Image, useDisclosure } from '@chakra-ui/react'
import { Tag } from '../util/Tag';
import Magnetic from '../util/magnetic';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

export function Landing({ project }: { project: Project }) {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <Box display={{ base: 'block', lg: 'none' }}>
                {/* <MobileLanding /> */}
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
                        {project.name}
                    </Box>
                </Heading>
                <Flex
                    justifyContent="space-between"
                    gap={6}
                    flexDir={"column"}

                >
                    <Box mt={4} minW={"50%"}>
                        <Image
                            src={project.coverImage}
                            alt={project.name}
                            borderRadius={"1rem"}
                            boxShadow={"xl"}
                        />

                    </Box>
                    <Flex
                        flexWrap="wrap"
                        justifyContent={"center"}

                    >
                        {project.tags.map((tag) => (
                            <Tag tag={tag} />
                        ))}
                    </Flex>
                    <Box>
                        <Text fontSize={"1.4rem"} mt={6} ml={"0.5rem"} textAlign={"center"} >
                            {project.description}
                        </Text>
                    </Box>
                </Flex>
                <Flex
                    my={6}
                    gap={4}
                    alignItems={"center"}
                    justifyContent={"center"}
                >
                    {project.live && (

                        <a href={project.live} target="_blank" rel="noopener noreferrer">
                            <Button colorScheme="orange">
                                <Box
                                    display={"flex"}
                                    alignItems={"center"}
                                    justifyContent={"center"}
                                    gap={2}
                                >
                                    Visit Live Site {' '} <Icon as={FaExternalLinkAlt} />
                                </Box>
                            </Button>
                        </a>
                    )}
                    {project.repo && (
                        <Magnetic>
                            <a href={project.repo} target="_blank" rel="noopener noreferrer">
                                <Icon
                                    mt={2}
                                    as={FaGithub}
                                    height={"30px"}
                                    width={"auto"}
                                    transition={"color 0.3s ease-in-out"}
                                    _hover={{
                                        color: "accent.base"
                                    }}
                                />
                            </a>
                        </Magnetic>
                    )}
                </Flex>
            </Box>
            <Box display={{ base: 'none', lg: 'block' }}>
                {/* <DesktopLanding /> */}
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
                        {project.name}
                    </Box>
                </Heading>
                <Flex
                    justifyContent="space-between"
                    gap={6}


                >
                    <Box mt={4} minW={"50%"}>
                        <Image
                            src={project.coverImage}
                            alt={project.name}
                            borderRadius={"1rem"}
                            boxShadow={"xl"}
                        />

                    </Box>
                    <Box>
                        <Text fontSize={"1.4rem"} mt={6} ml={"0.5rem"} >
                            {project.description}
                        </Text>
                        <Flex
                            flexWrap="wrap"
                        >
                            {project.tags.map((tag) => (
                                <Tag tag={tag} />
                            ))}
                        </Flex>
                    </Box>
                </Flex>
                <Flex
                    my={6}
                    gap={4}
                    alignItems={"center"}

                >
                    {project.live && (

                        <a href={project.live} target="_blank" rel="noopener noreferrer">
                            <Button colorScheme="orange">
                                <Box
                                    display={"flex"}
                                    alignItems={"center"}
                                    justifyContent={"center"}
                                    gap={2}
                                >
                                    Visit Live Site {' '} <Icon as={FaExternalLinkAlt} />
                                </Box>
                            </Button>
                        </a>
                    )}
                    {project.repo && (
                        <Magnetic>
                            <a href={project.repo} target="_blank" rel="noopener noreferrer">
                                <Icon
                                    mt={2}
                                    as={FaGithub}
                                    height={"30px"}
                                    width={"auto"}
                                    transition={"color 0.3s ease-in-out"}
                                    _hover={{
                                        color: "accent.base"
                                    }}
                                />
                            </a>
                        </Magnetic>
                    )}
                </Flex>
            </Box>
        </>
    )
}