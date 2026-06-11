"use client";

import React from "react";

/**
 * Reusable glass‑morphism card.
 *
 * - No change to your palette or fonts – it simply wraps its children
 *   with a semi‑transparent, backdrop‑blurred container.
 * - Accepts optional `className` to allow further styling from the
 *   caller (e.g. adding a subtle shadow or hover effect).
 */
export default function GlassCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`bg-background-dark-surface/60 backdrop-blur-3xl rounded-[2.5rem] p-8 md:p-12 border border-primary-violet-light/15 shadow-[0_40px_100px_-20px_rgba(124,58,237,0.4)] relative overflow-hidden group ${className}`}
    >
      {/* Glass overlay – subtle glossy edge with violet-gold shimmer */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-violet-light/5 via-transparent to-accent-gold/5 pointer-events-none z-0" />
      {children}
    </div>
  );
}
