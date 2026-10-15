import { FeaturedProjects } from '../components/FeaturedProjects'
import { Landing } from '../components/Landing'
import { Skills } from '../components/Skills'
import { Flex } from '@chakra-ui/react'
import Projects from '../data/Projects.json'
import {TimelineForm} from "../components/about/timelineForm.tsx";
import { Reveal } from '../components/Reveal';
export function HomePage() {

    return (
        <>
            <Flex
                flexDir={"column"}
                alignItems={"center"}
                gap={{ base: 14, md: 20 }}
                w="full"
                maxW="960px"
                mx="auto"
                px={{ base: 2, md: 4 }}
            >
               
                <Landing />
                <FeaturedProjects projects={Projects} />
                <Reveal><TimelineForm /></Reveal>
                <Reveal><Skills /></Reveal>
            </Flex>
        </>
    )
}
