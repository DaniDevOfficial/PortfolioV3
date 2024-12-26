import React from 'react'
import {Box, Flex} from "@chakra-ui/react";
import {TimelineForm} from "../components/about/timelineForm.tsx";

export function About() {


    return (
        <Flex
            flexDir={"column"}
            alignItems={"center"}
            marginTop={"2rem"}
            width={"100%"}
        >
            <TimelineForm />
        </Flex>
    )
}