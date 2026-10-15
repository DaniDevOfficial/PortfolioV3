import { Button, Container, Flex, Text } from '@chakra-ui/react';
import { SocialLinks } from '../SocialLinks';

export function Footer() {
    return <Container as="footer" maxW="container.lg" px={{ base: 5, md: 8 }} py={7}>
        <Flex direction={{ base: 'column', sm: 'row' }} justify="space-between" align={{ base: 'flex-start', sm: 'center' }} gap={4} fontSize="sm" color="gray.600">
            <Text>© {new Date().getFullYear()} David Bischof</Text>
            <Flex gap={5} wrap="wrap" align="center">
                <Button as="a" href="mailto:bischof.david.db@gmail.com" variant="outline" size="sm" borderColor="primary.300" color="primary.700" _hover={{ bg: 'primary.50' }}>Get in touch →</Button>
                <SocialLinks />
            </Flex>
        </Flex>
    </Container>;
}
