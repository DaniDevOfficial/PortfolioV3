import { Flex, Icon, Link } from '@chakra-ui/react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import Magnetic from './util/magnetic';

const socials = [
    { name: 'GitHub', href: 'https://github.com/DaniDevOfficial', icon: FaGithub },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/david-bischof-b6129b288/', icon: FaLinkedin },
    { name: 'Email', href: 'mailto:bischof.david.db@gmail.com', icon: MdEmail },
];

export function SocialLinks() {
    return <Flex gap={5} align="center">
        {socials.map(social => <Magnetic key={social.name}>
            <Link href={social.href} aria-label={social.name} title={social.name} isExternal={!social.href.startsWith('mailto:')} display="inline-flex" alignItems="center" justifyContent="center" w={11} h={11} borderRadius="full" color="text.base" _hover={{ color: 'primary.600', bg: 'primary.50' }}>
                <Icon as={social.icon} boxSize={6} />
            </Link>
        </Magnetic>)}
    </Flex>;
}
