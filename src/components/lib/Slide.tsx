import { motion } from "framer-motion";
import React from "react";

type Props = {
    children: React.ReactNode;
    from?: "top" | "top-right" | "top-left" | "bottom" | "bottom-right" | "bottom-left" | "left" | "right";
    delay?: number;
};

const getCoordinates = (position: string) => {
    switch (position) {
        case "top":
            return { translateY: -90 };
        case "top-right":
            return { translateY: -90, translateX: 90 };
        case "top-left":
            return { translateY: -90, translateX: -90 };
        case "bottom":
            return { translateY: 90 };
        case "bottom-right":
            return { translateY: 90, translateX: 90 };
        case "bottom-left":
            return { translateY: 90, translateX: -90 };
        case "left":
            return { translateX: -90 };
        case "right":
            return { translateX: 90 };
        default:
            return { translateX: 0, translateY: 0 };
    }
};

export default function Slide({ children, from = "right", delay = 0 }: Props) {
    const fromCoordinates = getCoordinates(from);
    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, ...fromCoordinates },
                visible: { opacity: 1, translateX: 0, translateY: 0 },
            }}
            transition={{
                type: "spring",
                duration: 0.15,
                damping: 10,
                delay: delay,
                stiffness: 200,
            }}
            initial="hidden"
            animate="visible"
        >
            {children}
        </motion.div>
    );
}
