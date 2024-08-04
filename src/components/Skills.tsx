import { Flex, Heading, Box, Image, Text } from '@chakra-ui/react'
import WordCloud from '../../public/assets/wordcloud.svg';
export function Skills() {

    return (
        <>
            <Flex
                justifyContent={"center"}
                alignItems={"center"}
                flexDirection={"column"}
                gap={4}
                pt={"2rem"}
            >
                <Heading
                    fontSize={"2rem"}
                    color={"text.base"}
                >
                    Skills
                </Heading>
                <Text
                    fontSize={"1.2rem"}
                    color={"text.base"}
                    textAlign={"center"}
                >
                    Here are some of the technologies I have worked with
                </Text>
                <Box
                    width={"100%"}
                    height={"100%"}
                >
                    <Image
                        src={WordCloud}
                        alt={"Word Cloud"}
                    />
                </Box>
            </Flex>
        </>
    )
}