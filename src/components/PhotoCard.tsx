import type { Photo } from "@/data/photos";

export default function PhotoCard({ photo }: { photo: Photo }) {
  return (
    <div className="group hover-lift">
      <div className="aspect-[3/4] rounded-xl bg-surface overflow-hidden">
        <div className="w-full h-full bg-surface-raised" />
      </div>
    </div>
  );
}
