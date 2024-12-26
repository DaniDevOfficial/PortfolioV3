import { Box, Flex, Heading, Icon, Text, Image, chakra, useDisclosure } from '@chakra-ui/react'
import { MdEmail } from "react-icons/md";
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { getHoverEffectStyles, shine, wave } from '../util/Style';
import Magnetic from '../util/magnetic';
import Slide from '../lib/Slide';
import Bischof  from '../../assets/Util/DavidBischof.jpg'
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
    const colors = ["#3d92cf", "#007BFF", "#00CFFF", "#007BFF", "#3d92cf", "#007BFF", "#00CFFF", "#007BFF"];
    const hoverStyles = getHoverEffectStyles(colors);



    return (
        <>

            <Flex
                flexDir={'row'}
                gap={4}
                justifyContent={"center"}
            >
                <Box>
                    <Slide from={"left"}>
                        <Image
                            src={Bischof}
                            alt={"placeholder"}
                            borderRadius={"3xl"}
                            width={"300px"}
                            transition={"transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out"}
                            _hover={{
                                transform: "scale(1.01) translate(-2px, 2px)",
                                boxShadow: "0 10px 10px rgba(205, 119, 66, 0.15)",
                            }}
                        />
                    </Slide>

                    <Slide from='left'  delay={0.1}>
                        <Flex
                            gap={4}
                            pt={"1rem"}
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
                    </Slide>

                </Box>
                <Box
                    maxW={"400px"}
                    textAlign={"left"}
                >
                    <Slide from='right'>
                        <Heading fontSize="3xl" pb="1rem">
                            Hi, I'm{' '}
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
                                David
                            </Box>
                            {' '}
                            <chakra.a
                                _hover={{
                                    animation: "wave 1s infinite",
                                    display: "inline-block",
                                    transition: "wave 0.2s ease-in-out"
                                }}
                                sx={wave}
                            >
                                👋
                            </chakra.a>
                        </Heading>
                    </Slide>
                    <Slide from='right' delay={0.1} >
                        <Text>
                            I'm a software engineer from Switzerland 🇨🇭 . I'm interested in web development, focusing on the backend and enjoy learning about new technologies.
                        </Text>
                    </Slide>

                        <Slide from='right' delay={0.2}>
                            <Text
                                pt={"1rem"}
                            >
                                I'm currently working as a Intern at {' '}
                                <chakra.a
                                    href={"https://www.andeo.ch"}
                                    color={"#3d92cf"}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    position="relative"
                                    _hover={hoverStyles}
                                    style={hoverStyles}
                                    sx={shine}
                                >
                                    Andeo
                                </chakra.a>
                                .
                            </Text>
                        </Slide>
                </Box>
            </Flex >
        </>
    )
}