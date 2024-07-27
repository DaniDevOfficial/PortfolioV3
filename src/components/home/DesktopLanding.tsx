import { Box, Flex, Icon, IconButton, Image } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import { FaGithub } from 'react-icons/fa'
import FollowMouseIcon from '../util/FollowMouseIcon'
export function DesktopLanding() {

    const socialIcons = [
        {
            name: "Github",
            url: "https://github.com/DaniDevOfficial",
            icon: "https://simpleicons.org/icons/github.svg"
        },
        {
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/daniel-oluwatobi/",
            icon: "https://simpleicons.org/icons/linkedin.svg"
        },
        {
            name: "Twitter",
            url: "https://twitter.com/DaniDevOfficial",
            icon: "https://simpleicons.org/icons/twitter.svg"
        },
        {
            name: "Instagram",
            url: "https://www.instagram.com/danidevofficial/",
            icon: "https://simpleicons.org/icons/instagram.svg"
        }
    ]
    return (
        <>
            <Flex
                flexDir={'row'}
                justifyContent={"space-between"}
                pt={"2rem"}
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
                        <a href="https://github.com/DaniDevOfficial" target="_blank" rel="noopener noreferrer">
                            <Icon
                                height={"30px"}
                                width={"auto"}
                                as={FaGithub} />
                        </a>

                    </Flex>

                    <FollowMouseIcon />
                </Box>
                <Box>
                    wasd
                </Box>
            </Flex>
        </>
    )
}