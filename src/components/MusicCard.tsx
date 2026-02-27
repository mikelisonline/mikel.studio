import type { Album } from "@/data/music";

export default function MusicCard({ album }: { album: Album }) {
  return (
    <div className="group flex-shrink-0 snap-start w-48 sm:w-56 transition-all duration-200 hover:-translate-y-1">
      {/* Album art placeholder */}
      <div className="aspect-square rounded-lg bg-white/[0.03] border border-border mb-3 transition-colors group-hover:border-muted/50" />

      {/* Info */}
      <p className="text-sm font-medium text-foreground truncate">
        {album.artist}
      </p>
      <p className="text-sm text-muted truncate">{album.albumName}</p>
    </div>
  );
}
