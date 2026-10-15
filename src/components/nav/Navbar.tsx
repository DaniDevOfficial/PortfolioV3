import { Button, Container, Flex, Link } from '@chakra-ui/react';
import { Link as RouterLink, useLocation } from 'react-router-dom';

export function Navbar() {
    const { pathname } = useLocation();
    return <Container as="nav" aria-label="Main navigation" maxW="container.lg" px={{ base: 5, md: 8 }} py={5}>
        <Flex align="center" justify="space-between" gap={4}>
            <Link as={RouterLink} to="/" fontWeight="bold" fontSize={{ base: 'md', md: 'lg' }} _hover={{ color: 'primary.700', textDecoration: 'none' }}>David Bischof</Link>
            <Flex align="center" gap={{ base: 3, md: 6 }} fontSize="sm" fontWeight="medium">
                {[{ label: 'Home', to: '/', active: pathname === '/' }, { label: 'Projects', to: '/projects', active: pathname.startsWith('/projects') }].map(item => <Link as={RouterLink} to={item.to} key={item.to} py={2} color={item.active ? 'primary.700' : 'gray.600'} aria-current={item.active ? 'page' : undefined} _hover={{ color: 'primary.700' }}>{item.label}</Link>)}
                <Button as="a" href="mailto:bischof.david.db@gmail.com" size="sm" variant="outline" borderColor="primary.300" display={{ base: 'none', sm: 'inline-flex' }}>Contact</Button>
            </Flex>
        </Flex>
    </Container>;
}
