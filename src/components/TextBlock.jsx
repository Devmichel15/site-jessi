export default function TextBlock({
  title,
  children,
  titleClassName = "",
  contentClassName = "",
  align = "left",
}) {
  const alignClass = align === "center" ? "text-center mx-auto" : "";

  return (
    <div className={`max-w-4xl ${alignClass}`}>
      {title && (
        <h2 className={`text-brown-700 mb-8 md:mb-12 ${titleClassName}`}>
          {title}
        </h2>
      )}
      <div
        className={`prose prose-lg md:prose-xl max-w-none leading-loose ${contentClassName}`}
      >
        {children}
      </div>
    </div>
  );
}
