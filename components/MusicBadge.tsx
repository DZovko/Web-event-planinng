type MusicBadgeProps = {
  track: string;
  artist: string;
  albumArt: string;
  variant?: "light" | "dark";
  size?: "sm" | "lg";
};

export default function MusicBadge({
  track,
  artist,
  albumArt,
  variant = "light",
  size = "sm",
}: MusicBadgeProps) {
  const isDark = variant === "dark";
  const isLg = size === "lg";

  return (
    <div className="flex items-center gap-3">
      <img
        src={albumArt}
        alt={`${track} album art`}
        className={`rounded-full object-cover shrink-0 border border-gold/40 ${
          isLg ? "h-16 w-16" : "h-10 w-10"
        }`}
        loading="lazy"
      />
      <div className="min-w-0">
        <div
          className={`font-medium truncate ${isLg ? "text-base md:text-lg" : "text-xs"} ${
            isDark ? "text-white" : "text-ink"
          }`}
        >
          {track}
        </div>
        <div
          className={`truncate ${isLg ? "text-sm" : "text-xs"} ${
            isDark ? "text-white/50" : "text-ink/50"
          }`}
        >
          {artist}
        </div>
      </div>
    </div>
  );
}
