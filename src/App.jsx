import Hero from "./components/Hero";
import Section from "./components/Section";
import TextBlock from "./components/TextBlock";
import ImageBlock from "./components/ImageBlock";
import { useScrollAnimation } from "./hooks/useScrollAnimation";

function App() {
  // Scroll animation hooks for Sobre section
  const [sobreImageRef, sobreImageVisible] = useScrollAnimation();
  const [sobreTitleRef, sobreTitleVisible] = useScrollAnimation();
  const [sobreText1Ref, sobreText1Visible] = useScrollAnimation();
  const [sobreText2Ref, sobreText2Visible] = useScrollAnimation();
  const [sobreText3Ref, sobreText3Visible] = useScrollAnimation();

  // Missão/Visão/Propósito cards
  const [missaoRef, missaoVisible] = useScrollAnimation();
  const [visaoRef, visaoVisible] = useScrollAnimation();
  const [propositoRef, propositoVisible] = useScrollAnimation();

  // Experiência section
  const [expTitleRef, expTitleVisible] = useScrollAnimation();
  const [expImageRef, expImageVisible] = useScrollAnimation();

  // Projetos section
  const [projetosTitleRef, projetosTitleVisible] = useScrollAnimation();
  const [projetosBoxRef, projetosBoxVisible] = useScrollAnimation();

  // Prêmios section
  const [premiosTitleRef, premiosTitleVisible] = useScrollAnimation();
  const [premiosDescRef, premiosDescVisible] = useScrollAnimation();
  const [premio1Ref, premio1Visible] = useScrollAnimation();
  const [premio2Ref, premio2Visible] = useScrollAnimation();
  const [premio3Ref, premio3Visible] = useScrollAnimation();

  // Angola gallery
  const [angolaTitleRef, angolaTitleVisible] = useScrollAnimation();
  const [angolaDescRef, angolaDescVisible] = useScrollAnimation();
  const [img1Ref, img1Visible] = useScrollAnimation();
  const [img2Ref, img2Visible] = useScrollAnimation();
  const [img3Ref, img3Visible] = useScrollAnimation();
  const [img4Ref, img4Visible] = useScrollAnimation();
  const [img5Ref, img5Visible] = useScrollAnimation();
  const [img6Ref, img6Visible] = useScrollAnimation();

  // Parcerias section
  const [parceriasTitleRef, parceriasTitleVisible] = useScrollAnimation();
  const [parceriasTextRef, parceriasTextVisible] = useScrollAnimation();

  // Mensagem Final
  const [mensagemRef, mensagemVisible] = useScrollAnimation();
  const [assinaturaRef, assinaturaVisible] = useScrollAnimation();

  return (
    <div className="min-h-screen">
      {/* 1. HERO SECTION */}
      <Hero />

      {/* 2. SOBRE / BIOGRAFIA */}
      <Section id="sobre" bgColor="bg-white">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 md:order-1">
            <div
              ref={sobreImageRef}
              className={`overflow-hidden rounded-sm shadow-lg animate-on-scroll animate-scale ${
                sobreImageVisible ? "animate-visible" : ""
              }`}
            >
              <img
                src="/jessi3.jpg"
                alt="Jessi Madalena"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
          <div className="order-1 md:order-2">
            <h2
              ref={sobreTitleRef}
              className={`text-brown-700 mb-8 md:mb-12 animate-on-scroll animate-fade-up ${
                sobreTitleVisible ? "animate-visible" : ""
              }`}
            >
              Sobre Jessi Madalena
            </h2>
            <div className="prose prose-lg md:prose-xl max-w-none leading-loose">
              <p
                ref={sobreText1Ref}
                className={`mb-6 animate-on-scroll animate-fade-up scroll-delay-200 ${
                  sobreText1Visible ? "animate-visible" : ""
                }`}
              >
                Jessi Madalena é uma influenciadora digital angolana,
                empreendedora e uma das principais vozes contemporâneas na
                promoção do turismo e do lifestyle em Angola. Com uma presença
                digital marcante e autêntica, Jessi dedica-se a mostrar ao mundo
                a riqueza cultural, as paisagens deslumbrantes e as experiências
                únicas que Angola tem para oferecer.
              </p>
              <p
                ref={sobreText2Ref}
                className={`mb-6 animate-on-scroll animate-fade-up scroll-delay-300 ${
                  sobreText2Visible ? "animate-visible" : ""
                }`}
              >
                Reconhecida como Embaixadora do Turismo de Angola, Jessi
                Madalena utiliza as suas plataformas para inspirar viajantes,
                promover destinos angolanos e valorizar a identidade do país. O
                seu trabalho vai além da criação de conteúdo: é uma missão de
                representação, orgulho e impacto positivo.
              </p>
              <p
                ref={sobreText3Ref}
                className={`animate-on-scroll animate-fade-up scroll-delay-400 ${
                  sobreText3Visible ? "animate-visible" : ""
                }`}
              >
                Através de parcerias estratégicas, campanhas criativas e
                projetos inovadores, Jessi tem contribuído para posicionar
                Angola como um destino turístico de referência, conectando
                pessoas, histórias e lugares de forma genuína e inspiradora.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* 3. MISSÃO, VISÃO E PROPÓSITO */}
      <Section bgColor="bg-brown-50" id="missao">
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          <div
            ref={missaoRef}
            className={`bg-white p-8 md:p-10 rounded-sm shadow-md hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer animate-on-scroll animate-fade-up ${
              missaoVisible ? "animate-visible" : ""
            }`}
          >
            <h3 className="text-brown-700 mb-4">Missão</h3>
            <p className="leading-loose text-gray-700">
              Promover Angola como destino turístico de excelência, valorizando
              a sua cultura, paisagens e experiências através de conteúdo
              autêntico e inspirador.
            </p>
          </div>
          <div
            ref={visaoRef}
            className={`bg-white p-8 md:p-10 rounded-sm shadow-md hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer animate-on-scroll animate-fade-up scroll-delay-200 ${
              visaoVisible ? "animate-visible" : ""
            }`}
          >
            <h3 className="text-brown-700 mb-4">Visão</h3>
            <p className="leading-loose text-gray-700">
              Ser uma referência na promoção do turismo angolano, inspirando o
              mundo a conhecer, respeitar e valorizar Angola.
            </p>
          </div>
          <div
            ref={propositoRef}
            className={`bg-white p-8 md:p-10 rounded-sm shadow-md hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer animate-on-scroll animate-fade-up scroll-delay-400 ${
              propositoVisible ? "animate-visible" : ""
            }`}
          >
            <h3 className="text-brown-700 mb-4">Propósito</h3>
            <p className="leading-loose text-gray-700">
              Conectar pessoas a Angola através de histórias reais, experiências
              transformadoras e uma representação digna da identidade angolana.
            </p>
          </div>
        </div>
      </Section>

      {/* 4. EXPERIÊNCIA PROFISSIONAL & ATUAÇÃO */}
      <Section id="experiencia">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div
            ref={expTitleRef}
            className={`animate-on-scroll animate-fade-up ${
              expTitleVisible ? "animate-visible" : ""
            }`}
          >
            <TextBlock title="Experiência Profissional & Atuação">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-brown-600 mr-3 text-xl">•</span>
                  <span>
                    Criação de conteúdo turístico autêntico e de alta qualidade
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-brown-600 mr-3 text-xl">•</span>
                  <span>
                    Promoção de destinos angolanos em plataformas digitais
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-brown-600 mr-3 text-xl">•</span>
                  <span>Campanhas estratégicas para marcas e instituições</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brown-600 mr-3 text-xl">•</span>
                  <span>Empreendedorismo no setor do turismo e lifestyle</span>
                </li>
              </ul>
            </TextBlock>
          </div>
          <div
            ref={expImageRef}
            className={`animate-on-scroll animate-scale scroll-delay-200 ${
              expImageVisible ? "animate-visible" : ""
            }`}
          >
            <ImageBlock
              src="/jessi1.jpg"
              alt="Jessi Madalena"
              className="rounded-sm shadow-lg"
            />
          </div>
        </div>
      </Section>

      {/* 5. PROJETOS E NEGÓCIOS */}
      <Section bgColor="bg-brown-700" id="projetos">
        <div className="max-w-3xl mx-auto text-center">
          <h2
            ref={projetosTitleRef}
            className={`text-white mb-8 animate-on-scroll animate-fade-up ${
              projetosTitleVisible ? "animate-visible" : ""
            }`}
          >
            Projetos e Negócios
          </h2>
          <div
            ref={projetosBoxRef}
            className={`bg-white text-brown-900 p-12 md:p-16 rounded-sm shadow-xl animate-on-scroll animate-scale scroll-delay-200 ${
              projetosBoxVisible ? "animate-visible" : ""
            }`}
          >
            <h3 className="text-4xl md:text-5xl mb-6 font-bold">
              Angola Experience
            </h3>
            <p className="text-xl md:text-2xl leading-relaxed font-light">
              Projeto focado em experiências e valorização do turismo angolano.
            </p>
          </div>
        </div>
      </Section>

      {/* 6. PRÊMIOS E RECONHECIMENTOS */}
      <Section bgColor="bg-white" id="premios">
        <div className="max-w-4xl mx-auto text-center">
          <h2
            ref={premiosTitleRef}
            className={`text-brown-700 mb-8 animate-on-scroll animate-fade-up ${
              premiosTitleVisible ? "animate-visible" : ""
            }`}
          >
            Prêmios e Reconhecimentos
          </h2>
          <p
            ref={premiosDescRef}
            className={`mb-12 text-xl leading-relaxed animate-on-scroll animate-fade-up scroll-delay-200 ${
              premiosDescVisible ? "animate-visible" : ""
            }`}
          >
            Jessi Madalena tem sido reconhecida pelo seu trabalho dedicado à
            promoção de Angola, recebendo distinções nacionais e internacionais
            que destacam o seu impacto no setor do turismo e da comunicação
            digital.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div
              ref={premio1Ref}
              className={`text-center animate-on-scroll animate-fade-up scroll-delay-300 ${
                premio1Visible ? "animate-visible" : ""
              }`}
            >
              <div className="flex justify-center mb-4">
                <svg
                  className="w-16 h-16 text-brown-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  />
                </svg>
              </div>
              <h4 className="font-semibold mb-2 text-lg">
                Embaixadora do Turismo
              </h4>
              <p className="text-gray-600">República de Angola</p>
            </div>
            <div
              ref={premio2Ref}
              className={`text-center animate-on-scroll animate-fade-up scroll-delay-400 ${
                premio2Visible ? "animate-visible" : ""
              }`}
            >
              <div className="flex justify-center mb-4">
                <svg
                  className="w-16 h-16 text-brown-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                  />
                </svg>
              </div>
              <h4 className="font-semibold mb-2 text-lg">
                Prêmios e Distinções
              </h4>
              <p className="text-gray-600">Reconhecimento Nacional</p>
            </div>
            <div
              ref={premio3Ref}
              className={`text-center animate-on-scroll animate-fade-up scroll-delay-500 ${
                premio3Visible ? "animate-visible" : ""
              }`}
            >
              <div className="flex justify-center mb-4">
                <svg
                  className="w-16 h-16 text-brown-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h4 className="font-semibold mb-2 text-lg">
                Reconhecimento Internacional
              </h4>
              <p className="text-gray-600">Promoção Global de Angola</p>
            </div>
          </div>
        </div>
      </Section>

      {/* 7. ANGOLA EM FOCO */}
      <Section id="angola" bgColor="bg-brown-700" padding="py-20 md:py-32">
        <div className="text-center mb-16">
          <h2
            ref={angolaTitleRef}
            className={`text-white mb-6 animate-on-scroll animate-fade-up ${
              angolaTitleVisible ? "animate-visible" : ""
            }`}
          >
            Angola em Foco
          </h2>
          <p
            ref={angolaDescRef}
            className={`text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed text-white/90 animate-on-scroll animate-fade-up scroll-delay-200 ${
              angolaDescVisible ? "animate-visible" : ""
            }`}
          >
            Um país de paisagens extraordinárias, cultura vibrante e
            experiências que marcam para sempre.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            ref={img1Ref}
            className={`animate-on-scroll animate-scale ${
              img1Visible ? "animate-visible" : ""
            }`}
          >
            <ImageBlock
              src="/jessinature1.jpg"
              alt="Paisagens de Angola"
              className="h-80 rounded-sm shadow-lg"
              aspectRatio="aspect-square"
              hover={true}
            />
          </div>
          <div
            ref={img2Ref}
            className={`animate-on-scroll animate-scale scroll-delay-100 ${
              img2Visible ? "animate-visible" : ""
            }`}
          >
            <ImageBlock
              src="/jessinature2.jpg"
              alt="Natureza angolana"
              className="h-80 rounded-sm shadow-lg"
              aspectRatio="aspect-square"
              hover={true}
            />
          </div>
          <div
            ref={img3Ref}
            className={`animate-on-scroll animate-scale scroll-delay-200 ${
              img3Visible ? "animate-visible" : ""
            }`}
          >
            <ImageBlock
              src="/jessinature3.jpg"
              alt="Belezas naturais de Angola"
              className="h-80 rounded-sm shadow-lg"
              aspectRatio="aspect-square"
              hover={true}
            />
          </div>
          <div
            ref={img4Ref}
            className={`animate-on-scroll animate-scale scroll-delay-300 ${
              img4Visible ? "animate-visible" : ""
            }`}
          >
            <ImageBlock
              src="/jessihotel1.jpg"
              alt="Turismo em Angola"
              className="h-80 rounded-sm shadow-lg"
              aspectRatio="aspect-square"
              hover={true}
            />
          </div>
          <div
            ref={img5Ref}
            className={`animate-on-scroll animate-scale scroll-delay-400 ${
              img5Visible ? "animate-visible" : ""
            }`}
          >
            <ImageBlock
              src="/jessihotel2.jpg"
              alt="Experiências em Angola"
              className="h-80 rounded-sm shadow-lg"
              aspectRatio="aspect-square"
              hover={true}
            />
          </div>
          <div
            ref={img6Ref}
            className={`animate-on-scroll animate-scale scroll-delay-500 ${
              img6Visible ? "animate-visible" : ""
            }`}
          >
            <ImageBlock
              src="/jessi2.jpeg"
              alt="Cultura angolana"
              className="h-80 rounded-sm shadow-lg"
              aspectRatio="aspect-square"
              hover={true}
            />
          </div>
        </div>
      </Section>

      {/* 8. PARCERIAS E COLABORAÇÕES */}
      <Section bgColor="bg-brown-700 text-white" id="parcerias">
        <div className="max-w-3xl mx-auto text-center">
          <h2
            ref={parceriasTitleRef}
            className={`text-white mb-8 animate-on-scroll animate-fade-up ${
              parceriasTitleVisible ? "animate-visible" : ""
            }`}
          >
            Parcerias e Colaborações
          </h2>
          <p
            ref={parceriasTextRef}
            className={`text-xl md:text-2xl leading-loose animate-on-scroll animate-fade-up scroll-delay-200 ${
              parceriasTextVisible ? "animate-visible" : ""
            }`}
          >
            Jessi Madalena encontra-se aberta a colaborações com marcas,
            instituições e projetos alinhados com turismo, cultura e impacto
            positivo.
          </p>
        </div>
      </Section>

      {/* 9. MENSAGEM FINAL */}
      <Section id="mensagem">
        <div className="max-w-4xl mx-auto">
          <blockquote
            ref={mensagemRef}
            className={`text-2xl md:text-3xl lg:text-4xl leading-relaxed text-center font-light text-brown-800 italic animate-on-scroll animate-fade-up ${
              mensagemVisible ? "animate-visible" : ""
            }`}
          >
            "Angola é um país de histórias, paisagens e experiências que merecem
            ser vistas, vividas e respeitadas. É com orgulho e responsabilidade
            que represento este país extraordinário, partilhando a sua essência
            com o mundo."
          </blockquote>
          <p
            ref={assinaturaRef}
            className={`text-center mt-8 text-xl text-brown-600 animate-on-scroll animate-fade-up scroll-delay-300 ${
              assinaturaVisible ? "animate-visible" : ""
            }`}
          >
            — Jessi Madalena
          </p>
        </div>
      </Section>

      {/* 10. RODAPÉ / CTA */}
      <footer className="bg-black text-white py-16 md:py-20">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 text-center">
          <h3 className="text-3xl md:text-4xl mb-6 font-light">
            Parcerias • Projetos • Colaborações
          </h3>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
            Entre em contacto para desenvolver iniciativas que valorizem Angola.
          </p>
          <a
            href="#"
            className="inline-block bg-purple-600 hover:bg-purple-700 text-white px-10 py-4 rounded-sm text-lg font-medium transition-colors duration-300"
          >
            Entrar em Contacto
          </a>

          <div className="mt-12 pt-8 border-t border-white/20">
            <p className="text-sm text-white/60">
              © {new Date().getFullYear()} Jessi Madalena. Todos os direitos
              reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
