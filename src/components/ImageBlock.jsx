export default function ImageBlock({
  src,
  alt,
  className = "",
  aspectRatio = "aspect-video",
  objectFit = "object-cover",
  hover = false,
}) {
  const hoverClasses = hover
    ? "hover:scale-105 hover:shadow-2xl transition-all duration-300"
    : "";

  return (
    <div className={`overflow-hidden ${className}`}>
      <img
        src={src}
        alt={alt}
        className={`w-full h-full ${aspectRatio} ${objectFit} ${hoverClasses}`}
      />
    </div>
  );
}
