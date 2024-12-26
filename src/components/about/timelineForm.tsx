import React, { useState } from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { TimelineItem, TimelineItemElement } from "./timelineItem";
import { motion, AnimatePresence } from "framer-motion"; // Import framer-motion

const MotionFlex = motion(Flex);

enum Side {
    Job = "job",
    Education = "education",
}

export function TimelineForm() {
    const [activeSide, setActiveSide] = useState<Side>(Side.Job);

    const jobTimeLine: TimelineItemElement[] = [
        {
            date: "Aug 2024 - present",
            image: "https://icongeneratorai.com/static/preferences.svg",
            bigText: "Andeo AG",
            smallText: "Intern",
        },
        {
            date: "Aug 2021 - Jul 2024",
            image: "https://icongeneratorai.com/static/preferences.svg",
            bigText: "IMS",
            smallText: "Student EFZ",
        },
        {
            date: "2020",
            image: "https://icongeneratorai.com/static/preferences.svg",
            bigText: "First Job",
            smallText: "I started my first .",
        },
        {
            date: "2021",
            image: "https://icongeneratorai.com/static/preferences.svg",
            bigText: "Freelancing",
            smallText: "I started freelancing in .",
        },
        {
            date: "2022",
            image: "https://icongeneratorai.com/static/preferences.svg",
            bigText: "Future",
            smallText: "I'm excited to see .",
        },
    ];

    const educationTimeline: TimelineItemElement[] = [
        {
            date: "Aug 2021 - Jul 2024",
            image: "https://icongeneratorai.com/static/preferences.svg",
            bigText: "IMS",
            smallText: "Student EFZ",
        },
        {
            date: "2020",
            image: "https://icongeneratorai.com/static/preferences.svg",
            bigText: "First Job",
            smallText: "I started my first .",
        },
        {
            date: "2021",
            image: "https://icongeneratorai.com/static/preferences.svg",
            bigText: "Freelancing",
            smallText: "I started freelancing in .",
        },
        {
            date: "2022",
            image: "https://icongeneratorai.com/static/preferences.svg",
            bigText: "Future",
            smallText: "I'm excited to see .",
        },
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
                            onClick={() => setActiveSide(Side.Job)}
                            cursor={"pointer"}
                            color={activeSide === Side.Job ? "primary.700" : "text.base"}
                            textAlign={"center"}
                            bgColor={activeSide === Side.Job ? "primary.200" : "transparent"}
                            transition={"background-color 0.3s ease 0s, color 0.2s ease 0s"}
                            _hover={{
                                bgColor: "primary.300",
                            }}
                            padding={"0.5rem"}
                            borderRadius={"10px"}
                        >
                            Job
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
                            borderRadius={"10px"}
                        >
                            Education
                        </Text>
                    </Box>
                </Flex>

                <Flex
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
                    maxHeight={"500px"}
                    overflow={"hidden"}
                >
                    <AnimatePresence mode="wait">
                        <MotionFlex
                            key={activeSide}
                            initial={{ opacity: 0, y: 0, x: 10 }}
                            animate={{ opacity: 1, y: 0, x: 0 }}
                            exit={{ opacity: 0, y: 0, x: -10 }}
                            transition={{ duration: 0.2 }}
                            flexDir={"column"}
                            gap={"20px"}
                        >
                            {activeSide === Side.Job &&
                                jobTimeLine.map((timelineElement, index) => (
                                    <TimelineItem
                                        timelineInfo={timelineElement}
                                        shouldRenderLine={index !== jobTimeLine.length - 1}
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
                </Flex>
            </Flex>
        </>
    );
}
