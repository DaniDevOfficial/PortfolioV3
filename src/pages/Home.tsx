import { Landing } from '../components/Landing'
import { Skills } from '../components/Skills'
import { Flex } from '@chakra-ui/react'

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
            </Flex>
        </>
    )
}