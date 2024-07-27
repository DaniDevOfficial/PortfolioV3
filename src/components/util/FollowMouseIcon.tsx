import React, { useRef, useState, useEffect } from 'react';
import { Box, Icon, Text } from '@chakra-ui/react';
import { FaGithub } from 'react-icons/fa';

function FollowMouseIcon() {
    const [distance, setDistance] = useState(0);
    const [iconPosition, setIconPosition] = useState({  x: 0, y: 0 });
    const iconRef = useRef(null);
    const [clientX, setClientX] = useState(0);
    const [clientY, setClientY] = useState(0);


    function calculateDistance(x1, y1, x2, y2) {
        return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
    }

    useEffect(() => {
        const handleMouseMove = (event) => {
            const { clientX, clientY } = event;
            setClientX(clientX);
            setClientY(clientY);
            console.log(clientX, clientY);
            setDistance(calculateDistance(clientX, clientY, iconPosition.x, iconPosition.y));
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    useEffect(() => {
        if (iconRef.current) {
            const rect = (iconRef.current as HTMLElement).getBoundingClientRect();
            const center = {
                x: rect.left + rect.width / 2,
                y: rect.top + rect.height / 2
            };
            setIconPosition({
                y: center.y,
                x: center.x
            });
        }
    }, []);

    return (
        <Box position="relative" display="inline-block">
            <Box
                as="a"
                href="https://github.com/DaniDevOfficial"
                target="_blank"
                rel="noopener noreferrer"
                position="relative"
                display="inline-block"
            >
                <div
                    ref={iconRef}
                >

                    <Icon
                        as={FaGithub}
                        height="30px"
                        width="auto"
                    />
                </div>
            </Box>
            <Text>
                Distance: {Math.round(distance)} px
            </Text>
            <Text >
                X: {clientX} px
            </Text>
            <Text >
                Y: {clientY} px
            </Text>
            <Text>
                Icon position: x - {iconPosition.x}px, y - {iconPosition.y}px
            </Text>
        </Box>
    );
}

export default FollowMouseIcon;
