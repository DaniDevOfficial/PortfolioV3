import { Box } from '@chakra-ui/react';
import { ReactNode } from 'react';

export function TitleMark({ children }: { children: ReactNode }) {
    return <Box as="span" color="primary.700" px="0.12em" position="relative" isolation="isolate"
        _before={{ content: '""', position: 'absolute', insetInline: 0, bottom: '0.05em', height: '0.35em', bg: 'primary.300', opacity: 0.65, zIndex: -1, transition: 'height 0.2s ease' }}
        _hover={{ _before: { height: '0.75em' } }}>{children}</Box>;
}
