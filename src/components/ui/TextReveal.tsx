"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface TextRevealProps {
    children: ReactNode;
    className?: string;
    delay?: number;
}

export default function TextReveal({ children, className = "", delay = 0 }: TextRevealProps) {
    return (
        <div className={`overflow-hidden ${className}`}>
            <motion.div
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{
                    duration: 0.8,
                    delay,
                    ease: [0.22, 1, 0.36, 1]
                }}
            >
                {children}
            </motion.div>
        </div>
    );
}
