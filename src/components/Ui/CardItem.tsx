import { Flex, Text } from "@chakra-ui/react";

export function CardItems({ name, bg }: { name: string; bg: string; }) {
    return (
        <Flex
            textAlign={'center'}
            flexDir={'column'}
            borderRadius={8}
            p={2}
            bg={"background.400"}
            boxShadow={'lg'}
            outline={`2px solid ${bg}`}
            gap={4}
            alignItems="center"
            justifyContent="center"
            transition={'transform 0.3s ease'}
            _hover={{
                transform: 'scale(1.1)',
            }}
        >

            <Text>
                {name}
            </Text>
        </Flex>
    )
}