type MusicBadgeProps = {
  track: string;
  artist: string;
  albumArt: string;
};

export default function MusicBadge({
  track,
  artist,
  albumArt,
}: MusicBadgeProps) {
  return (
    <div className="flex items-center gap-3">
      <img
        src={albumArt}
        alt={`${track} album art`}
        className="h-10 w-10 rounded-full object-cover shrink-0"
        loading="lazy"
      />
      <div className="min-w-0">
        <div className="text-ink text-xs font-medium truncate">{track}</div>
        <div className="text-ink/50 text-xs truncate">{artist}</div>
      </div>
    </div>
  );
}
