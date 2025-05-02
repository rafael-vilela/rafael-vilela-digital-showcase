
import { Linkedin, Mail, MessageSquare } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  // Função para rolagem suave
  const handleScrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <footer className="bg-gray-900 text-white py-8 md:py-12">
      <div className="container-custom">
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          <div className="animate-fade-up">
            <h3 className="text-xl font-bold mb-3 md:mb-4">Rafael Vilela</h3>
            <p className="text-gray-300 mb-3 md:mb-4 text-sm md:text-base">
              Desenvolvedor especializado em sites institucionais, e-commerce e dashboards personalizados.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/rafael-vilela-45b2a0363" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5 hover:text-primary transition-colors hover-lift" />
              </a>
              <a href="mailto:rafaelvilelaservicos@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Email">
                <Mail className="h-5 w-5 hover:text-primary transition-colors hover-lift" />
              </a>
              <a href="https://wa.me/5512982127115" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <MessageSquare className="h-5 w-5 hover:text-primary transition-colors hover-lift" />
              </a>
            </div>
          </div>
          
          <div className="animate-fade-up animate-delay-100">
            <h3 className="text-xl font-bold mb-3 md:mb-4">Serviços</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#ecommerce" 
                  className="text-gray-300 hover:text-primary transition-colors text-sm md:text-base"
                  onClick={(e) => {
                    e.preventDefault();
                    handleScrollToSection('#ecommerce');
                  }}
                >
                  Lojas E-commerce
                </a>
              </li>
              <li>
                <a 
                  href="#websites" 
                  className="text-gray-300 hover:text-primary transition-colors text-sm md:text-base"
                  onClick={(e) => {
                    e.preventDefault();
                    handleScrollToSection('#websites');
                  }}
                >
                  Sites Institucionais
                </a>
              </li>
              <li>
                <a 
                  href="#dashboards" 
                  className="text-gray-300 hover:text-primary transition-colors text-sm md:text-base"
                  onClick={(e) => {
                    e.preventDefault();
                    handleScrollToSection('#dashboards');
                  }}
                >
                  Dashboards Personalizados
                </a>
              </li>
            </ul>
          </div>
          
          <div className="animate-fade-up animate-delay-200">
            <h3 className="text-xl font-bold mb-3 md:mb-4">Contato</h3>
            <ul className="space-y-2">
              <li className="text-gray-300 text-sm md:text-base">rafaelvilelaservicos@gmail.com</li>
              <li className="text-gray-300 text-sm md:text-base">+55 (12) 98212-7115</li>
              <li>
                <a 
                  href="#contact" 
                  className="text-gray-300 hover:text-primary transition-colors text-sm md:text-base"
                  onClick={(e) => {
                    e.preventDefault();
                    handleScrollToSection('#contact');
                  }}
                >
                  Formulário de contato
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-6 md:mt-8 pt-6 md:pt-8 text-center text-gray-400 animate-fade-up animate-delay-300">
          <p className="text-sm md:text-base">&copy; {currentYear} Rafael Vilela. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
