export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Subtle Zoom */}
      <div className="absolute inset-0 z-0">
        <img
          src="/jessinature1.jpg"
          alt="Jessi Madalena em Angola"
          className="w-full h-full object-cover animate-subtle-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50"></div>
      </div>

      {/* Content with Entrance Animations */}
      <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-20 text-center text-white">
        {/* Title - First to appear */}
        <h1 className="hero-element animate-fade-in-up text-6xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight">
          JESSI MADALENA
        </h1>

        {/* Subtitle - Second with delay */}
        <p className="hero-element animate-fade-in-up animation-delay-200 text-xl md:text-2xl lg:text-3xl mb-8 font-light tracking-wide">
          Influenciadora Digital • Turismo • Lifestyle
        </p>

        {/* Tagline - Third with delay */}
        <div className="hero-element animate-fade-in-up animation-delay-400 inline-block px-8 py-3 bg-brown-600/90 backdrop-blur-sm rounded-sm mb-12">
          <p className="text-lg md:text-xl font-medium">
            Embaixadora do Turismo de Angola
          </p>
        </div>

        {/* Description - Fourth with delay and CTA hover effect */}
        <p className="hero-element animate-fade-in-up animation-delay-600 text-lg md:text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed font-light">
          Promovendo Angola através de experiências reais, cultura, paisagens e
          histórias que inspiram o mundo a conhecer o país.
        </p>
      </div>
    </section>
  );
}
