"use client";

import type { ReactNode } from "react";
import Container from "./Container";
import SectionHeader from "./SectionHeader";

interface CarouselProps {
  children: ReactNode;
  headlineKey: string;
  descriptionKey?: string;
  linkHref?: string;
  linkLabelKey?: string;
  /** Number of grid columns each item spans at large/medium/small */
  colSpan?: { large: number; medium: number; small: number };
}

export default function Carousel({
  children,
  headlineKey,
  descriptionKey,
  linkHref,
  linkLabelKey,
  colSpan = { large: 4, medium: 8, small: 10 },
}: CarouselProps) {
  return (
    <section>
      <Container>
        <SectionHeader
          labelKey={headlineKey}
          descriptionKey={descriptionKey}
          linkHref={linkHref}
          linkLabelKey={linkLabelKey}
        />
      </Container>
      <div
        className="carousel-grid scrollbar-hide"
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
    </section>
  );
}
