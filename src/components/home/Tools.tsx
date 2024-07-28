import {  Box, Heading, useDisclosure, Flex } from '@chakra-ui/react';
import { CardItems } from '../Ui/CardItem';

const languages = [
    { name: 'Java',  bg: '#f58220',},
    { name: 'TypeScript',  bg: '#387cc8', },
    { name: 'Python',  bg: '#3772a5',  },
    { name: 'PHP',  bg: '#8e96bf'},
    { name: 'CSS', bg: '#326af1'}, 
    { name: 'HTML', bg: '#e4552c', },
];



export function LanguagesDesktop() {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <Box
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            flexDirection={'column'}

        >
            <Heading as="h2" size="xl" mb={4}>
                Commonly Used {' '}
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
                    Tools
                </Box>
            </Heading>
            <Flex
                flexWrap={'wrap'}
                gap={4}
                justifyContent={'center'}
                alignItems={'stretch'}
            >
                {languages.map((language, index) => (
                    <CardItems key={index} {...language} />
                ))}
            </Flex>
        </Box>
    );
}
