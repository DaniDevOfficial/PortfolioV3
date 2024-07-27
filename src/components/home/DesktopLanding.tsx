import { Box, Flex, Heading, Icon, Text, Image, chakra, useDisclosure } from '@chakra-ui/react'
import { MdEmail } from "react-icons/md";
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { useState } from 'react';
export function DesktopLanding() {

    const socialIcons = [
        {
            name: "Github",
            url: "https://github.com/DaniDevOfficial",
            icon: FaGithub
        },
        {
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/david-bischof-b6129b288/",
            icon: FaLinkedin
        },

        {
            name: "Email",
            url: "mailto:bischof.david.db@gmail.com",
            icon: MdEmail
        }
    ]

    const { isOpen, onOpen, onClose } = useDisclosure();

    // Conditional style for the highlight effect
    const highlightStyle = {
        zIndex: 5,
        overflow: 'hidden',
        padding: '0 0.2rem', // Adjust padding to fit the highlight
    };

    const highlightBeforeStyle: React.CSSProperties = {
        position: 'absolute',
        bottom: 3,
        left: 0,
        height: isOpen ? '100%' : '50%',
        width: '100%',
        background: 'linear-gradient(180deg, transparent 50%, orange 0%)', // Adjust color here
        opacity: 0.5,
        zIndex: -1,
        transition: 'height 0.3s ease',
    };

    return (
        <>

            <Flex
                flexDir={'row'}
                gap={4}
                justifyContent={"center"}
                pt={"2rem"}
                outline={"1px solid red"}
            >
                <Box>
                    <Image
                        src={"https://media.licdn.com/dms/image/D4E03AQHQ6IkpHCiLGw/profile-displayphoto-shrink_800_800/0/1711049197562?e=1727308800&v=beta&t=LSFmyCflFVw14w3wRmugUfmT8zI7gJQ_vfzkknCzz34"}
                        alt={"placeholder"}
                        borderRadius={"3xl"}
                        width={"300px"}
                    />
                    <Flex
                        gap={4}
                        pt={"1rem"}
                    >
                        {socialIcons.map((socialIcon, index) => (
                            <a href={socialIcon.url} key={index} target="_blank" rel="noopener noreferrer">
                                <Icon
                                    as={socialIcon.icon}
                                    height={"30px"}
                                    width={"auto"}
                                />
                            </a>
                        ))}

                    </Flex>

                </Box>
                <Box
                    maxW={"400px"}
                    textAlign={"left"}
                >
                    <Heading fontSize="3xl" pb="1rem">
                        Hi, I'm{' '}
                        <Box
                            as="span"
                            color="primary.base"
                            position="relative"
                            onMouseEnter={onOpen}
                            onMouseLeave={onClose}
                            style={highlightStyle}
                        >
                            <Box
                                as="span"
                                style={highlightBeforeStyle}
                            />
                            David
                        </Box>
                        {' '}👋
                    </Heading>
                    <Text>
                        I'm a software engineer from Switzerland 🇨🇭 . I'm passionate about web development and enjoy learning new things.
                    </Text>

                    <Text
                        pt={"1rem"}
                    >
                        I'm currently working as a Intern at <chakra.a href={"https://www.andeo.ch"} color={"#3d92cf"} target="_blank" rel="noopener noreferrer">Andeo</chakra.a>.
                    </Text>
                </Box>
            </Flex >
        </>
    )
}