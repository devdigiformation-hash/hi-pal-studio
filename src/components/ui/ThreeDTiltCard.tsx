import React, { useState, useRef } from 'react';

interface ThreeDTiltCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
  maxTilt?: number;
}

export default function ThreeDTiltCard({
  children,
  className = '',
  glowColor = 'rgba(47, 224, 200, 0.4)',
  maxTilt = 4,
}: ThreeDTiltCardProps) {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [transform, setTransform] = useState('perspective(1800px) rotateX(0deg) rotateY(0deg)');
  const [glarePosition, setGlarePosition] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -maxTilt;
    const rotateY = ((x - centerX) / centerX) * maxTilt;

    setTransform(`perspective(1800px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.006, 1.006, 1.006)`);
    setGlarePosition({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: 0.12,
    });
  };

  const handleMouseLeave = () => {
    setTransform('perspective(1800px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)');
    setGlarePosition((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform,
        transition: 'transform 0.25s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.25s ease, border-color 0.25s ease',
        transformStyle: 'preserve-3d',
        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.018) 42%, rgba(10, 15, 28, 0.78) 100%)',
        boxShadow: 'inset 0 1px 1px 0 rgba(255, 255, 255, 0.24), inset 0 -1px 1px 0 rgba(0, 0, 0, 0.35), 0 20px 45px -12px rgba(0, 0, 0, 0.65), 0 2px 8px -2px rgba(0, 0, 0, 0.4)',
      }}
      className={`group relative overflow-hidden rounded-[22px] border border-white/[0.12] backdrop-blur-[28px] saturate-[190%] hover:border-white/[0.28] ${className}`}
    >
      {/* iOS 18 Specular Top-Edge Refraction Highlight */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent z-30 transition-opacity duration-300 group-hover:via-white/85"
      />

      {/* Liquid Glass Internal Sheen */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/[0.06] via-transparent to-black/25 z-10"
      />

      {/* 3D Specular Glare */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-20 transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle 320px at ${glarePosition.x}% ${glarePosition.y}%, ${glowColor}, transparent 70%)`,
          opacity: glarePosition.opacity,
        }}
      />
      <div className="relative z-20">{children}</div>
    </div>
  );
}
