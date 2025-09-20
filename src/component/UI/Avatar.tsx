import "../../App.css";

interface AvatarProps {
  src?: string; // Image URL
  alt?: string; // Alternative text
  name?: string; // Optional name for fallback initials
  size?: number; // Size in pixels
}

export default function Avatar({ src, alt, name, size = 40 }: AvatarProps) {
  const initials = name
    ? name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase()
    : "U";

  return (
    <div className="avatar" style={{ width: size, height: size }}>
      {src ? (
        <img src={src} alt={alt || name || "User"} />
      ) : (
        <span className="avatar-fallback">{initials}</span>
      )}
    </div>
  );
}
