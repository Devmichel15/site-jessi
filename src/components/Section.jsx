export default function Section({
  children,
  className = "",
  bgColor = "bg-white",
  padding = "py-20 md:py-32",
  id = "",
}) {
  return (
    <section id={id} className={`${bgColor} ${padding} ${className}`}>
      <div className="container mx-auto px-6 md:px-12 lg:px-20">{children}</div>
    </section>
  );
}
