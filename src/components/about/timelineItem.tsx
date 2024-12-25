import {Box, Flex, Image, Text} from "@chakra-ui/react";

export interface TimelineItemElement {
    date: string;
    image: string;
    bigText: string;
    smallText: string;
}


export function TimelineItem({timelineInfo, shouldRenderLine}: {
    timelineInfo: TimelineItemElement,
    shouldRenderLine: boolean
}) {
    return (
        <Flex
            alignItems={'center'}
            position={'relative'}
            marginBottom={'7px'}
            gap={5}
        >

            <Image
                src={timelineInfo.image}
                width={'50px'}
                height={'50px'}
                borderRadius={'50%'}
                outline={'1px solid'}
                outlineColor={'primary.500'}
                zIndex={1}

            />
            <Flex
                flexDir={'column'}
            >
                <Text
                    fontSize={'small'}
                    color={'text.100'}
                    lineHeight={1}

                >
                    {timelineInfo.date}
                </Text>
                <Text
                    fontSize={'medium'}
                    lineHeight={1}
                    color={'text.600'}
                >
                    {timelineInfo.bigText}
                </Text>
                <Text
                    lineHeight={1}
                    fontSize={'small'}
                    color={'text.100'}
                >
                    {timelineInfo.smallText}
                </Text>
            </Flex>
            {shouldRenderLine && <Box
                width={'2px'}
                height={'26px'}
                backgroundColor={'primary.500'}
                position={'absolute'}
                left={'24px'}
                top={'50px'}
                zIndex={0}
            />
            }
        </Flex>
    );
}

