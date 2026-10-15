import { Button, Flex, Heading, Image, Link, Stack, Text, chakra } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import { SocialLinks } from './SocialLinks';
import { TitleMark } from './TitleMark';
import { Reveal } from './Reveal';
import Bischof from '../assets/Util/DavidBischof.jpg';
import { getHoverEffectStyles, shine, wave } from './util/Style';

const gradient = getHoverEffectStyles(['#3d92cf', '#007BFF', '#00CFFF', '#007BFF', '#3d92cf']);

export function Landing() {
    return (
        <Flex as="section" align="center" direction={{ base: 'column-reverse', md: 'row' }} gap={{ base: 8, md: 14 }} py={{ base: 6, md: 12 }} w="full">
            <Reveal from="left" style={{ flex: 1 }}>
            <Stack spacing={6} textAlign={{ base: 'center', md: 'left' }}>
                <Reveal delay={0.08}>
                <Heading as="h1" fontSize={{ base: '4xl', md: '5xl' }} lineHeight={1.15} letterSpacing="tight">
                    Hi, I'm <TitleMark>David</TitleMark>{' '}
                    <chakra.span display="inline-block" animation="wave 2s infinite" transformOrigin="70% 70%" sx={{ ...wave, '@media (prefers-reduced-motion: reduce)': { animation: 'none' } }} aria-hidden="true">👋</chakra.span>
                </Heading>
                </Reveal>
                <Reveal delay={0.16}>
                <Stack spacing={3} maxW="540px" fontSize={{ base: 'md', md: 'lg' }} lineHeight={1.8}>
                    <Text>I'm David Bischof, a Junior Software Engineer at Andeo AG, focused on backend development.</Text>
                    <Text>I work part-time while studying for my bachelor's degree at{' '}
                        <Link href="https://www.zhaw.ch/" isExternal style={gradient} sx={{ ...shine, '@media (prefers-reduced-motion: reduce)': { animation: 'none' } }}>ZHAW</Link>.
                    </Text>
                </Stack>
                </Reveal>
                <Reveal delay={0.24}>
                <Flex gap={3} wrap="wrap" justify={{ base: 'center', md: 'flex-start' }}>
                    <Button as={RouterLink} to="/projects" colorScheme="primary" bg="primary.700" color="white" _hover={{ bg: 'primary.800' }} rightIcon={<FaArrowRight />} size="lg">View projects</Button>
                    <Button as="a" href="mailto:bischof.david.db@gmail.com" variant="outline" borderColor="primary.300" size="lg">Contact me</Button>
                </Flex>
                </Reveal>
                <Reveal delay={0.32}>
                <Flex justify={{ base: 'center', md: 'flex-start' }}>
                    <SocialLinks />
                </Flex>
                </Reveal>
            </Stack>
            </Reveal>
            <Reveal from="right" delay={0.1} style={{ width: 'auto', flexShrink: 0 }}>
            <Image src={Bischof} alt="David Bischof" w={{ base: '220px', md: '300px' }} maxW="full" borderRadius="2xl" flexShrink={0} />
            </Reveal>
        </Flex>
    );
}
