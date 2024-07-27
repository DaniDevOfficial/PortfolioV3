import { Flex, chakra, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

export function Navbar() {
    const routes = [
        {
            name: "Home",
            path: "/"
        },
        {
            name: "Projects",
            path: "/projects"
        },
        {
            name: "About",
            path : "/about"
        }
    ]
    return (
        <>
            <chakra.div
            >
                <chakra.nav
                    bg={"background.base"}
                    color={"text.base"}
                    padding={"1rem"}
                    position={"sticky"}
                    top={0}
                    zIndex={10}

                >

                    <Flex justifyContent="space-between" alignItems="center">
                        <chakra.h1>Dani Dev</chakra.h1>
                        <Flex
                            flexDir={"row"}
                            gap={4}
                        >
                            {routes.map((route) => {
                                return (
                                    <Text
                                        as={Link}
                                        to={route.path}
                                        key={route.name}
                                        cursor={"pointer"}
                                        _hover={{ letterSpacing: "0.2em", fontWeight: "bold", color: "accent.base" }}
                                        transition="transform 0.3s ease-in-out, letter-spacing 0.2s ease-in-out, font-weight 0.2s ease-in-out, color 0.2s ease-in-out"
                                    >
                                        {route.name}
                                    </Text>
                                )
                            })}
                        </Flex>
                    </Flex>

                </chakra.nav>
            </chakra.div>

        </>
    )
}