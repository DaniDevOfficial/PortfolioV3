import { Box, Flex, Icon } from '@chakra-ui/react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { MdEmail } from "react-icons/md";
import Magnetic from '../util/magnetic';

export function Footer() {

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
    return (
        <>
            <Flex
                justifyContent={{ base: "center", md: "space-between" }}
                bg={"background.base"}
                color={"text.base"}
                width={"100%"}
                my={4}
                px={{ base: 4, md: 8 }}
                fontSize={"1.4rem"}
                flexDirection={{ base: "column", md: "row" }}
>
                <Flex
                    justifyContent={"center"}
                    alignItems={"center"}
                    gap={4}
                    flexWrap={"wrap"}
                >
                    <Box
                        as='a'
                        href="https://davidbischof.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        cursor={"pointer"}
                        _hover={{ letterSpacing: "0.05em", fontWeight: "bold", color: "accent.base" }}
                        transition="transform 0.3s ease-in-out, letter-spacing 0.2s ease-in-out, font-weight 0.2s ease-in-out, color 0.2s ease-in-out"
                    >
                        David Bischof
                    </Box>
                    <Box>
                        © 2024 Dani Dev
                    </Box>
                </Flex>

                <Flex
                    justifyContent={"center"}
                    alignItems={"center"}
                    gap={4}
                >
                    {socialIcons.map((socialIcon, index) => (
                        <Magnetic key={index}>
                            <a href={socialIcon.url} key={index} target="_blank" rel="noopener noreferrer">
                                <Icon
                                    as={socialIcon.icon}
                                    height={"30px"}
                                    width={"auto"}
                                    transition={"color 0.3s ease-in-out"}
                                    _hover={{
                                        color: "accent.base"
                                    }}
                                />
                            </a>
                        </Magnetic>
                    ))}
                </Flex>

            </Flex>
        </>
    )
}