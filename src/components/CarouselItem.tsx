import type { ReactNode } from "react";

interface CarouselItemProps {
  children: ReactNode;
  colSpan?: { large: number; medium: number; small: number };
  className?: string;
}

export default function CarouselItem({
  children,
  colSpan = { large: 4, medium: 8, small: 10 },
  className = "",
}: CarouselItemProps) {
  return (
    <div
      className={`snap-start pt-6 pb-16 ${className}`}
      style={{
        gridColumn: `span ${colSpan.large}`,
      }}
    >
      {children}
    </div>
  );
}
