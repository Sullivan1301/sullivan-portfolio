"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionRevealProps {
    children: ReactNode;
    width?: "fit-content" | "100%";
}

export const SectionReveal = ({ children, width = "100%" }: SectionRevealProps) => {
    return (
        <div style={{ position: "relative", width, overflow: "hidden" }}>
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
            >
                {children}
            </motion.div>
        </div>
    );
};

export const TextReveal = ({ children }: { children: ReactNode }) => {
    return (
        <div style={{ position: "relative", width: "fit-content", overflow: "hidden" }}>
            <motion.div
                variants={{
                    hidden: { y: "100%" },
                    visible: { y: 0 },
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
                {children}
            </motion.div>
        </div>
    );
};