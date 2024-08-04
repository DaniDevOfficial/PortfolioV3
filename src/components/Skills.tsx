import { Flex, Heading, Box, Image, Text, useDisclosure } from '@chakra-ui/react'
import WordCloud from '../assets/wordcloud.svg';
export function Skills() {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <Flex
                justifyContent={"center"}
                alignItems={"center"}
                flexDirection={"column"}
                gap={4}
            >
                <Heading
                    fontSize={"2rem"}
                    color={"text.base"}
                >
                    My {' '}
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
                        Skills
                    </Box>
                    {' '}
                </Heading>
                <Text
                    fontSize={"1.2rem"}
                    color={"text.base"}
                    textAlign={"center"}
                >
                </Text>
                <Box
                    width={"100%"}
                    height={"100%"}
                >
                    <Image
                        h={{ base: "auto", md: "90vh" }}
                        maxH={"800px"}
                        src={WordCloud}
                        alt={"Word Cloud"}
                    />
                </Box>
            </Flex>
        </>
    )
}