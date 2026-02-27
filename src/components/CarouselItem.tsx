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
      className={`carousel-item snap-start pt-6 pb-16 ${className}`}
      style={
        {
          "--col-span-large": colSpan.large,
          "--col-span-medium": colSpan.medium,
          "--col-span-small": colSpan.small,
        } as React.CSSProperties
      }
    >
      {children}
    </div>
  );
}
