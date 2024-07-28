import { Grid, GridItem, Box, Heading, Text, useDisclosure } from '@chakra-ui/react';
import React, { useState } from 'react';

const languages = [
    { name: 'Java', info: 'I used Java during my time at BBW, where I used it to learn programming.', bg: '#f58220', colStart: 1, colEnd: 3, rowStart: 1, rowEnd: 2 },
    { name: 'TypeScript', info: 'Currently I use TypeScript for Web-based Projects. I like its type system and how it is a better JavaScript.', bg: '#387cc8', colStart: 1, colEnd: 3, rowStart: 2, rowEnd: 4 },
    { name: 'JavaScript', info: 'Initially used JavaScript for getting better at the web together with React.', bg: '#f8e233', colStart: 3, colEnd: 5, rowStart: 3, rowEnd: 5 },
    { name: 'Python', info: 'For animation and algorithms.', bg: 'linear-gradient(to bottom right, #3772a5 40%, #ffd342 60%)', colStart: 1, colEnd: 2, rowStart: 4, rowEnd: 5 },
    { name: 'PHP', info: 'I use PHP for my professional work.', bg: '#8e96bf', colStart: 2, colEnd: 3, rowStart: 4, rowEnd: 5 },
    { name: 'CSS', info: 'Before I discovered Styling Libraries I used CSS for styling all my web pages.', bg: '#326af1', colStart: 3, colEnd: 4, rowStart: 1, rowEnd: 3 },
    { name: 'HTML', info: 'HTML is simply important.', bg: '#e4552c', colStart: 4, colEnd: 5, rowStart: 1, rowEnd: 3 },
];



const LanguageGridItem = ({ name, info, bg, colStart, colEnd, rowStart, rowEnd, isHovered, onHover, onLeave }: {
    name: string;
    info: string;
    bg: string;
    colStart: number;
    colEnd: number;
    rowStart: number;
    rowEnd: number;
    isHovered: boolean;
    onHover: () => void;
    onLeave: () => void;
}) => (
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
            bg="rgba(0, 0, 0, 0.2)"
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
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <Box
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            flexDirection={'column'}
        >
            <Heading as="h2" size="xl" mb={4}>
                Most Used {' '}
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
                    Languages
                </Box>
            </Heading>
            <Text fontSize="xx-small" mb={4}>
                The bigger the box, the more I used the language.
            </Text>
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
