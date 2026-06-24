import React from "react";

interface PaperCardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  hoverGlow?: boolean;
}

export const PaperCard: React.FC<PaperCardProps> = ({
  children,
  className = "",
  onClick,
  hoverGlow = true,
}) => {
  return (
    <div
      onClick={onClick}
      className={`relative p-6 bg-brand-parchment border border-brand-gold/30 bg-opacity-70 ${
        onClick ? "cursor-pointer" : ""
      } ${
        hoverGlow ? "gold-glow-hover" : ""
      } ${className}`}
      style={{
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", // strictly rectangular
      }}
    >
      {/* Decorative double border on the inside of the card */}
      <div className="absolute inset-[3px] border border-brand-gold/15 pointer-events-none"></div>
      
      {/* Main content wrapper */}
      <div className="relative z-10 h-full flex flex-col">
        {children}
      </div>
    </div>
  );
};

export default PaperCard;
