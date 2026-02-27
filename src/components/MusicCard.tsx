import type { Album } from "@/data/music";

export default function MusicCard({ album }: { album: Album }) {
  return (
    <div className="group hover-lift">
      {/* Album art placeholder */}
      <div className="aspect-square rounded-xl bg-surface overflow-hidden">
        <div className="w-full h-full bg-surface-raised" />
      </div>

      {/* Info */}
      <div className="mt-3">
        <p className="text-sm font-bold text-text-primary truncate">
          {album.artist}
        </p>
        <p className="text-sm text-text-secondary truncate">
          {album.albumName}
        </p>
      </div>
    </div>
  );
}
