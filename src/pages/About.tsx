import React from 'react'
import {Flex} from "@chakra-ui/react";
import {TimelineItem, TimelineItemElement} from "../components/about/timelineItem.tsx";

export function About() {

    const timelineElements: TimelineItemElement[] = [
        {
            date: "Aug 2024 - present",
            image: "https://icongeneratorai.com/static/preferences.svg",
            bigText: "Andeo AG",
            smallText: "Intern"
        },
        {
            date: "Aug 2021 - Jul 2024",
            image: "https://icongeneratorai.com/static/preferences.svg",
            bigText: "IMS",
            smallText: "Student EFZ"
        },
        {
            date: "2020",
            image: "https://icongeneratorai.com/static/preferences.svg",
            bigText: "First Job",
            smallText: "I started my first ."
        },
        {
            date: "2021",
            image: "https://icongeneratorai.com/static/preferences.svg",
            bigText: "Freelancing",
            smallText: "I started freelancing in ."
        },
        {
            date: "2022",
            image: "https://icongeneratorai.com/static/preferences.svg",
            bigText: "Future",
            smallText: "I'm excited to see ."
        }
    ]

    return (
        <>
            <Flex
                justifyContent={"center"}
                flexDir={"column"}
                alignItems={"flex-start"}
                position={'relative'}
                gap={"20px"}
            >
                {timelineElements.map((timelineElement, index) => {
                    return <TimelineItem timelineInfo={timelineElement} shouldRenderLine={index !== timelineElements.length - 1}/>
                })}
            </Flex>
        </>
    )
}