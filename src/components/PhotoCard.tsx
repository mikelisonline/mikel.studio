import type { Photo } from "@/data/photos";

export default function PhotoCard({ photo }: { photo: Photo }) {
  return (
    <div className="group flex-shrink-0 snap-start w-64 sm:w-72 transition-all duration-200 hover:-translate-y-1">
      {/* Photo placeholder */}
      <div className="aspect-[4/3] rounded-lg bg-white/[0.03] border border-border transition-colors group-hover:border-muted/50" />
    </div>
  );
}
