import { Outlet, ScrollRestoration } from "react-router-dom";
import { Container, chakra } from "@chakra-ui/react";
import { Navbar } from "../components/nav/Navbar";



export function DefaultLayout() {
    
    return (
        <chakra.div width={"100%"}>
            <Navbar />
            <chakra.div minHeight={"100vh"} width={"100%"} bg={"background.base"}>
                <chakra.main marginBottom={"2rem"} >

                    <Container maxW={"5xl"} color="text.base">
                        <Outlet />
                    </Container>
                </chakra.main>
            </chakra.div>

            <ScrollRestoration />
        </chakra.div>
    );
}
