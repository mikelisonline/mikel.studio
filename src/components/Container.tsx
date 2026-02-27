import type { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export default function Container({ children, className = "" }: ContainerProps) {
  return (
    <div className={`px-4 md:px-8 min-[1088px]:px-0 max-w-5xl mx-auto w-full ${className}`}>
      {children}
    </div>
  );
}
