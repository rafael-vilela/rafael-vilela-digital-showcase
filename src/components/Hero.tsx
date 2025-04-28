
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight text-gray-900">
              Transformando ideias em <span className="text-primary">experiências digitais</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-lg">
              Sou desenvolvedor web especializado em sites institucionais, lojas e-commerce e dashboards personalizados para elevar seu negócio online.
            </p>
            <div className="flex gap-4 mt-8">
              <a href="#ecommerce" className="btn-primary hover-transform">
                Ver Serviços
              </a>
              <a href="#contact" className="btn-outline hover-transform">
                Entre em Contato
              </a>
            </div>
          </div>
          <div className="animate-fade-in animate-delay-200 flex justify-center">
            <div className="relative">
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/20 rounded-full"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-primary/30 rounded-full"></div>
              <div className="bg-gradient-to-br from-white to-gray-100 p-6 rounded-xl shadow-xl">
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
