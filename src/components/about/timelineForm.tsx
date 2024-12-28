import {useState} from "react";
import {Box, Flex, Heading, Text, useDisclosure} from "@chakra-ui/react";
import {TimelineItem, TimelineItemElement} from "./timelineItem";
import {AnimatePresence, motion} from "framer-motion";
import FullWidthSlide from "../lib/FullWidhtSlide.tsx";
import Slide from "../lib/Slide.tsx";

const MotionFlex = motion(Flex);

enum Side {
    Work = "job",
    Education = "education",
}

export function TimelineForm() {
    const [activeSide, setActiveSide] = useState<Side>(Side.Work);
    const {isOpen, onOpen, onClose} = useDisclosure();

    const workTimeLine: TimelineItemElement[] = [
        {
            date: "Aug 2024 - present",
            image: "https://icongeneratorai.com/static/preferences.svg",
            bigText: "Andeo AG",
            smallText: "Intern",
        }
    ];

    const educationTimeline: TimelineItemElement[] = [
        {
            date: "Aug 2021 - Jun 2024",
            image: "https://icongeneratorai.com/static/preferences.svg",
            bigText: "IMS",
            smallText: "Student EFZ",
        },
        {
            date: "Aug 2018 - Jun 2021",
            image: "https://icongeneratorai.com/static/preferences.svg",
            bigText: "Sekundarstufe",
            smallText: "Niveau A",
        }
    ];

    return (
        <>
            <Flex
                flexDir={"column"}
                gap={"1rem"}
                alignItems={"center"}
                justifyContent={"center"}
                width={"100%"}
                maxWidth={"700px"}
            >
                <Slide from='bottom'>
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
                            Journey
                        </Box>
                        {' '} So Far
                    </Heading>
                </Slide>


                <FullWidthSlide>

                    <Flex
                        borderRadius={"10px"}
                        padding={"1rem"}
                        justifyContent={"space-between"}
                        bgColor={"background.700"}
                        width={"100%"}
                        gap={"1rem"}
                    >
                        <Box width={"100%"}>
                            <Text
                                fontSize={"md"}
                                onClick={() => setActiveSide(Side.Work)}
                                cursor={"pointer"}
                                color={activeSide === Side.Work ? "primary.700" : "text.base"}
                                textAlign={"center"}
                                bgColor={activeSide === Side.Work ? "primary.200" : "transparent"}
                                transition={"background-color 0.3s ease 0s, color 0.2s ease 0s"}
                                _hover={{
                                    bgColor: "primary.300",
                                }}
                                outline={'1px solid'}
                                outlineColor={'primary.400'}
                                padding={"0.5rem"}
                                borderRadius={"10px"}
                            >
                                Work
                            </Text>
                        </Box>
                        <Box width={"100%"}>
                            <Text
                                fontSize={"md"}
                                onClick={() => setActiveSide(Side.Education)}
                                cursor={"pointer"}
                                color={activeSide === Side.Education ? "primary.700" : "text.base"}
                                textAlign={"center"}
                                bgColor={activeSide === Side.Education ? "primary.200" : "transparent"}
                                padding={"0.5rem"}
                                transition={"background-color 0.3s ease 0s, color 0.2s ease 0s"}
                                _hover={{
                                    bgColor: "primary.300",
                                }}
                                outline={'1px solid'}
                                outlineColor={'primary.400'}
                                borderRadius={"10px"}
                            >
                                Education
                            </Text>
                        </Box>
                    </Flex>
                </FullWidthSlide>
                <FullWidthSlide delay={0.1}>
                    <MotionFlex
                        justifyContent={"center"}
                        flexDir={"column"}
                        alignItems={"flex-start"}
                        position={"relative"}
                        gap={"20px"}
                        padding={"1rem"}
                        width={"100%"}
                        outline={"1px solid"}
                        outlineColor={"primary.200"}
                        borderRadius={"10px"}
                        overflow={"hidden"}
                        initial={{height: "auto"}}
                        animate={{height: activeSide === Side.Work ? `${workTimeLine.length * 100}px` : `${educationTimeline.length * 100}px`}}
                        transition={{height: {duration: 0.3}}}
                    >
                        <AnimatePresence mode="wait">
                            <MotionFlex
                                key={activeSide}
                                initial={{opacity: 0, y: 0, x: 0}}
                                animate={{opacity: 1, y: 0, x: 0}}
                                exit={{opacity: 0, y: 0, x: 0}}
                                transition={{duration: 0.2}}
                                flexDir={"column"}
                                gap={"20px"}
                            >
                                {activeSide === Side.Work &&
                                    workTimeLine.map((timelineElement, index) => (
                                        <TimelineItem
                                            timelineInfo={timelineElement}
                                            shouldRenderLine={index !== workTimeLine.length - 1}
                                        />
                                    ))}

                                {activeSide === Side.Education &&
                                    educationTimeline.map((timelineElement, index) => (
                                        <TimelineItem
                                            timelineInfo={timelineElement}
                                            shouldRenderLine={index !== educationTimeline.length - 1}
                                        />
                                    ))}
                            </MotionFlex>
                        </AnimatePresence>
                    </MotionFlex>
                </FullWidthSlide>
            </Flex>
        </>
    );
}
