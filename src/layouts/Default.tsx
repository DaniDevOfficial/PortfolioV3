import { Outlet, ScrollRestoration } from "react-router-dom";
import { Container, Flex, chakra } from "@chakra-ui/react";
import { Navbar } from "../components/nav/Navbar";



export function DefaultLayout() {

    return (
        <>
            <chakra.div width={"100%"} bg={"background.base"} pb={"10vh"}>
                <Navbar />
                <chakra.div minHeight={"100vh"} width={"100%"}  >
                    <chakra.main marginBottom={"2rem"} >
                        <Container maxW={"5xl"} color="text.base">
                            <Flex
                                flexDir={"column"}
                                alignItems={"center"}
                            >
                                <Outlet />
                            </Flex>
                        </Container>
                    </chakra.main>
                </chakra.div>

                <ScrollRestoration />
            </chakra.div>
        
        </>
    );
}
