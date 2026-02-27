"use client";

import { type ReactNode } from "react";
import { Drawer } from "vaul";

interface DrawerWrapperProps {
  trigger: ReactNode;
  children: ReactNode;
  title?: string;
  description?: string;
}

export default function DrawerWrapper({
  trigger,
  children,
  title,
  description,
}: DrawerWrapperProps) {
  return (
    <Drawer.Root>
      <Drawer.Trigger asChild>{trigger}</Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 z-40 bg-black/60" />
        <Drawer.Content className="fixed inset-x-0 bottom-0 z-50 flex max-h-[85vh] flex-col rounded-t-2xl bg-surface outline-none">
          {/* Close button */}
          <div className="flex items-center justify-end p-4 pb-0">
            <Drawer.Close asChild>
              <button
                className="rounded-full p-2 text-text-secondary transition-colors hover:bg-surface-raised hover:text-text-primary cursor-pointer"
                aria-label="Close"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </Drawer.Close>
          </div>

          {/* Content */}
          <div className="overflow-y-auto px-6 pb-8">
            {title && (
              <Drawer.Title className="text-xl font-bold text-text-primary mb-1">
                {title}
              </Drawer.Title>
            )}
            {description && (
              <Drawer.Description className="text-sm font-mono text-text-secondary mb-6">
                {description}
              </Drawer.Description>
            )}
            {children}
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
