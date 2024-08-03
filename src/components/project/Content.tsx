import { Box, chakra } from '@chakra-ui/react'
import React from 'react'
import ReactMarkdown from "react-markdown";
import ChakraUIRenderer from "chakra-ui-markdown-renderer";

export function Content({ mdFormatedText }: { mdFormatedText: string }) {
    return (
        <>
            <Box
                textAlign={"left"}
                wordBreak={"break-word"}
            >
                {mdFormatedText.split("\n").map((paragraph: string, index: number) => (
                    <chakra.div key={index}>
                        <ReactMarkdown
                            skipHtml
                            components={ChakraUIRenderer()}
                            key={index}
                        >
                            {paragraph}
                        </ReactMarkdown>
                    </chakra.div>
                ))}

            </Box>
        </>
    )
}