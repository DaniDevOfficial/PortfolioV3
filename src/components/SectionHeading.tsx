import { Box, Heading, Text } from '@chakra-ui/react';
import { TitleMark } from './TitleMark';
import { Reveal } from './Reveal';

export function SectionHeading({ title, description }: { title: string; description?: string }) {
    return <Reveal from="left"><Box mb={{ base: 6, md: 8 }}>
        <Heading as="h2" fontSize={{ base: '2xl', md: '3xl' }} letterSpacing="tight"><TitleMark>{title}</TitleMark></Heading>
        {description && <Text mt={3} fontSize="md" color="gray.600" maxW="60ch" lineHeight={1.7}>{description}</Text>}
    </Box></Reveal>;
}
