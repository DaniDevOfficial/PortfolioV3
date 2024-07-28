import { Grid, GridItem, Box } from '@chakra-ui/react';
import React, { useState } from 'react';

const languages = [
    { name: 'Java', info: 'I used it during my time at the BBW.', bg: '#f58220', colStart: 1, colEnd: 3, rowStart: 1, rowEnd: 2 },
    { name: 'TypeScript', info: 'Currently using for all my Web Projects. I like the type System and its just better JS.', bg: '#387cc8', colStart: 1, colEnd: 3, rowStart: 2, rowEnd: 4 },
    { name: 'JavaScript', info: 'Before TS I mostly used JavaScript to learn things like DSA or used it in React.', bg: '#f8e233', colStart: 3, colEnd: 5, rowStart: 3, rowEnd: 5 },
    { name: 'Python', info: 'I use it for some animations and some Algorithms.', bg: 'linear-gradient(to bottom right, #3772a5 40%, #ffd342 60%)', colStart: 1, colEnd: 2, rowStart: 4, rowEnd: 5 },
    { name: 'PHP', info: 'For my Job.', bg: '#8e96bf', colStart: 2, colEnd: 3, rowStart: 4, rowEnd: 5 },
    { name: 'CSS', info: 'Just for styling before Tailwind and ChakraUI.', bg: '#326af1', colStart: 3, colEnd: 4, rowStart: 1, rowEnd: 3 },
    { name: 'HTML', info: 'Its simply HTML...', bg: '#e4552c', colStart: 4, colEnd: 5, rowStart: 1, rowEnd: 3 },
];


const LanguageGridItem = ({ name, info, bg, colStart, colEnd, rowStart, rowEnd, isHovered, onHover, onLeave }) => (
    <GridItem
        position="relative"
        borderRadius={8}
        colStart={colStart}
        colEnd={colEnd}
        rowStart={rowStart}
        rowEnd={rowEnd}
        bg={bg}
        display="flex"
        alignItems="center"
        justifyContent="center"
        outline={'2px solid white'}
        transition={'transform 0.3s ease, outline 0.3s ease, z-index 0.1s ease'}
        zIndex={0}
        _hover={{
            zIndex: 1,
            transform: 'scale(1.05)',
            outline: '2px solid white',
        }}
        onMouseEnter={onHover}
        onMouseLeave={onLeave}
    >
        <Box
            position="absolute"
            color="white"
            textShadow="0 0 2px black"
            fontSize="lg"
            fontWeight="bold"
            visibility={isHovered ? 'hidden' : 'visible'}
        >
            {name}
        </Box>
        <Box
            bg="rgba(0, 0, 0, 0.7)"
            color="white"
            textAlign={'center'}
            maxW={'90%'}
            p={2}
            borderRadius="md"
            fontSize="sm"
            opacity={isHovered ? 1 : 0}
            visibility={isHovered ? 'visible' : 'hidden'}
            transition="opacity 0.3s ease, visibility 0.3s ease"
        >
            {info}
        </Box>
    </GridItem>
);

export function LanguagesDesktop() {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <Box
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            flexDirection={'column'}
        >
            <Grid
                h="394px"
                w={"700px"}
                templateColumns="repeat(4, 1fr)"
                templateRows="repeat(4, 1fr)"
                gap={"7px"}
            >
                {languages.map((language, index) => (
                    <LanguageGridItem
                        key={index}
                        name={language.name}
                        info={language.info}
                        bg={language.bg}
                        colStart={language.colStart}
                        colEnd={language.colEnd}
                        rowStart={language.rowStart}
                        rowEnd={language.rowEnd}
                        isHovered={hoveredIndex === index}
                        onHover={() => setHoveredIndex(index)}
                        onLeave={() => setHoveredIndex(null)}
                    />
                ))}
            </Grid>
        </Box>
    );
}
