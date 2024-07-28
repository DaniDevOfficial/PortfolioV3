import { Box, Heading, Text, useBreakpointValue } from '@chakra-ui/react'
import React from 'react'
import { DesktopLanding } from './home/DesktopLanding'
import { MobileLanding } from './home/MobileLanding'
export function Landing() {

    return (
        <>
            <Box display={{ base: 'block', md: 'none' }}>
                <MobileLanding />
            </Box>
            <Box display={{ base: 'none', md: 'block' }}>
                <DesktopLanding />
            </Box>
        </>
    )
}