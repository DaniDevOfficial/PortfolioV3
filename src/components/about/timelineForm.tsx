import { Box, Flex, Heading, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from '@chakra-ui/react';
import { SectionHeading } from '../SectionHeading';

const work = [
    { date: 'Aug 2025 – present', title: 'Andeo AG', description: 'Junior Software Engineer · Part-time' },
    { date: 'Aug 2024 – Jul 2025', title: 'Andeo AG', description: 'Software Engineering Intern' },
];
const education = [
    { date: 'Present', title: 'ZHAW', description: "Bachelor's student" },
    { date: 'Aug 2021 – Jun 2024', title: 'IMS', description: 'Student EFZ' },
    { date: 'Aug 2018 – Jun 2021', title: 'Sekundarstufe', description: 'Niveau A' },
];

export function TimelineForm() {
    return <Box as="section" w="full">
        <SectionHeading title="Experience & education" />
        <Tabs colorScheme="primary" variant="soft-rounded">
            <TabList gap={2} mb={6} aria-label="Experience and education"><Tab>Work</Tab><Tab>Education</Tab></TabList>
            <TabPanels>
                {[work, education].map((items, panel) => <TabPanel key={panel} p={0}>
                    <Box border="1px solid" borderColor="primary.100" borderRadius="xl" p={{ base: 5, md: 8 }} bg="whiteAlpha.500">
                        {items.map((item, index) => <Flex key={`${item.title}-${item.date}`} gap={{ base: 4, md: 6 }}>
                            <Flex direction="column" align="center" pt={1.5} flexShrink={0}>
                                <Box w={3} h={3} borderRadius="full" bg="primary.500" />
                                {index < items.length - 1 && <Box flex={1} w="1px" bg="primary.200" mt={2} mb={2} />}
                            </Flex>
                            <Box pb={index < items.length - 1 ? 8 : 0}>
                                <Text fontSize="sm" color="gray.600" mb={1}>{item.date}</Text>
                                <Heading as="h3" fontSize="lg" mb={1}>{item.title}</Heading>
                                <Text fontSize="md" color="gray.600" lineHeight={1.6}>{item.description}</Text>
                            </Box>
                        </Flex>)}
                    </Box>
                </TabPanel>)}
            </TabPanels>
        </Tabs>
    </Box>;
}
