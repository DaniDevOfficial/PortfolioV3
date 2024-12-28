import { FeaturedProjects } from '../components/FeaturedProjects'
import { Landing } from '../components/Landing'
import { Skills } from '../components/Skills'
import { Flex } from '@chakra-ui/react'
import Projects from '../data/Projects.json'
import {TimelineForm} from "../components/about/timelineForm.tsx";
export function HomePage() {

    return (
        <>
            <Flex
                flexDir={"column"}
                alignItems={"center"}
                gap={20}
            >
               
                <Landing />
                <Skills />
                <TimelineForm />
                <FeaturedProjects projects={Projects} />
            </Flex>
        </>
    )
}