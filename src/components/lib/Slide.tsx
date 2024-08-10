import { motion, useAnimation, useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";

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
            return { translateY: 45 };
        case "bottom-right":
            return { translateY: 45, translateX: 90 };
        case "bottom-left":
            return { translateY: 45, translateX: -90 };
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

    const ref = useRef(null);
    const isInview = useInView(ref, { once: true });
    const controls = useAnimation();

    useEffect(() => {
        if (isInview) {
            controls.start("visible");
        }
    }, [isInview]);

    return (
        <motion.div
            ref={ref}
            variants={{
                hidden: { opacity: 0, ...fromCoordinates },
                visible: { opacity: 1, translateX: 0, translateY: 0 },
            }}
            transition={{
                type: "spring",
                duration: 0.15,
                damping: 15,
                delay: delay,
                stiffness: 200,
            }}
            initial="hidden"
            animate={controls}
        >
            {children}
        </motion.div>
    );
}
