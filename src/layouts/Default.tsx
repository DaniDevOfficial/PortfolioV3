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
                        <Container maxW={"container.xl"} color="#141414" fontSize={"1.4rem"}  px={"2.5vw"} >
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
