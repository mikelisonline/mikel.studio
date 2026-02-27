import type { ReactNode } from "react";

interface CarouselProps {
  children: ReactNode;
  className?: string;
}

export default function Carousel({ children, className = "" }: CarouselProps) {
  return (
    <div
      className={`flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 -mx-6 px-6 scrollbar-hide ${className}`}
    >
      {children}
    </div>
  );
}
