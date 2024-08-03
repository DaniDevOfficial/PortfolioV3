import { Box } from '@chakra-ui/react';
import React from 'react';

export function Tag({ tag }: { tag: string }) {
    return (
        <Box 
            display="inline-block" 
            padding="0.5rem 1rem"
            margin="0.5rem" 
            borderRadius="0.5rem" 
            backgroundColor="gray.500" 
            color="white"
            fontWeight="bold"
            transition="background-color 0.3s ease-in-out"
            _hover={
                {
                    backgroundColor: "gray.600"
                }
            }
        >
            {tag}
        </Box>
    );
}
