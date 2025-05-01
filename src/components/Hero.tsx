
import { Button } from "@/components/ui/button";
import TypeAnimation from "./TypeAnimation";

const Hero = () => {
  const typingPhrases = [
    "experiências digitais",
    "resultados concretos",
    "projetos memoráveis",
    "soluções personalizadas",
    "crescimento real",
  ];

  // Função para rolagem suave
  const handleScrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-16 md:pt-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4 leading-tight text-gray-900">
              Transformando ideias em{" "}
              <span className="text-primary">
                <TypeAnimation 
                  phrases={typingPhrases}
                  typingSpeed={80}
                  deletingSpeed={40}
                  delayBetweenPhrases={1500}
                />
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-6 md:mb-8 max-w-lg">
              Sou desenvolvedor web especializado em sites institucionais, lojas e-commerce e dashboards personalizados para elevar seu negócio online.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 md:mt-8">
              <a 
                href="#ecommerce" 
                className="btn-primary hover-transform text-center py-2 md:py-3 text-sm sm:text-base"
                onClick={(e) => {
                  e.preventDefault();
                  handleScrollToSection('ecommerce');
                }}
              >
                Ver Serviços
              </a>
              <a 
                href="#contact" 
                className="btn-outline hover-transform text-center py-2 md:py-3 text-sm sm:text-base"
                onClick={(e) => {
                  e.preventDefault();
                  handleScrollToSection('contact');
                }}
              >
                Entre em Contato
              </a>
            </div>
          </div>
          <div className="animate-fade-in animate-delay-200 flex justify-center">
            <div className="relative w-full max-w-md mx-auto">
              <div className="absolute -top-4 sm:-top-6 -right-4 sm:-right-6 w-16 sm:w-24 h-16 sm:h-24 bg-primary/20 rounded-full"></div>
              <div className="absolute -bottom-4 sm:-bottom-6 -left-4 sm:-left-6 w-12 sm:w-16 h-12 sm:h-16 bg-primary/30 rounded-full"></div>
              <div className="bg-gradient-to-br from-white to-gray-100 p-4 sm:p-6 rounded-xl shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Web Development"
                  className="rounded-lg w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
