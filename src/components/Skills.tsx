import { Box, Heading, SimpleGrid, Tag, Wrap, WrapItem } from '@chakra-ui/react';
import { SectionHeading } from './SectionHeading';

const groups = [
    { title: 'Backend', items: ['Node.js', 'Express', 'Java', 'REST APIs', 'MySQL', 'Firebase'] },
    { title: 'Frontend', items: ['TypeScript', 'React', 'JavaScript', 'HTML & CSS'] },
    { title: 'Tools', items: ['Git', 'Docker', 'Vite'] },
];

export function Skills() {
    return <Box as="section" w="full">
        <SectionHeading title="Skills & tools" />
        <SimpleGrid columns={{ base: 1, md: 3 }} gap={6}>
            {groups.map(group => <Box key={group.title} p={6} border="1px solid" borderColor="primary.100" borderRadius="xl" bg="whiteAlpha.500">
                <Heading as="h3" fontSize="lg" mb={4}>{group.title}</Heading>
                <Wrap spacing={2}>{group.items.map(item => <WrapItem key={item}><Tag bg="background.base" color="primary.800" px={3} py={2} borderRadius="md">{item}</Tag></WrapItem>)}</Wrap>
            </Box>)}
        </SimpleGrid>
    </Box>;
}
