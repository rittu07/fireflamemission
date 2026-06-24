import React from "react";

interface OrnamentalSeparatorProps {
  className?: string;
}

export const OrnamentalSeparator: React.FC<OrnamentalSeparatorProps> = ({
  className = "",
}) => {
  return (
    <div className={`flex items-center justify-center py-6 text-brand-gold font-serif-cinzel select-none gap-4 ${className}`}>
      <span className="h-[0.5px] w-20 md:w-24 bg-brand-gold/30"></span>
      <span className="text-brand-gold text-lg md:text-xl relative -top-[1px]">❦</span>
      <span className="h-[0.5px] w-20 md:w-24 bg-brand-gold/30"></span>
    </div>
  );
};

export default OrnamentalSeparator;
