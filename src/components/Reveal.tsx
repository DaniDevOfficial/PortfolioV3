import { motion, useReducedMotion } from 'framer-motion';
import { CSSProperties, ReactNode } from 'react';

export function Reveal({ children, delay = 0, from = 'bottom', style }: {
    children: ReactNode;
    delay?: number;
    from?: 'bottom' | 'left' | 'right';
    style?: CSSProperties;
}) {
    const reducedMotion = useReducedMotion();
    const offset = from === 'bottom' ? { y: 28, x: 0 } : { x: from === 'left' ? -28 : 28, y: 0 };
    return <motion.div
        style={{ width: '100%', minWidth: 0, ...style }}
        initial={reducedMotion ? false : { opacity: 0, ...offset }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={reducedMotion ? { duration: 0 } : { type: 'spring', stiffness: 100, damping: 20, delay }}
    >{children}</motion.div>;
}
