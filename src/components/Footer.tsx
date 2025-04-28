
import { Linkedin, Mail, MessageSquare } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container-custom">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="animate-fade-up">
            <h3 className="text-xl font-bold mb-4">Rafael Vilela</h3>
            <p className="text-gray-300 mb-4">
              Desenvolvedor especializado em sites institucionais, e-commerce e dashboards personalizados.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/rafael-pereira-37557322b" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5 hover:text-primary transition-colors hover-lift" />
              </a>
              <a href="mailto:rafavpereira1@gmail.com" aria-label="Email">
                <Mail className="h-5 w-5 hover:text-primary transition-colors hover-lift" />
              </a>
              <a href="https://wa.me/12982127115" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <MessageSquare className="h-5 w-5 hover:text-primary transition-colors hover-lift" />
              </a>
            </div>
          </div>
          
          <div className="animate-fade-up animate-delay-100">
            <h3 className="text-xl font-bold mb-4">Serviços</h3>
            <ul className="space-y-2">
              <li><a href="#ecommerce" className="text-gray-300 hover:text-primary transition-colors">Lojas E-commerce</a></li>
              <li><a href="#websites" className="text-gray-300 hover:text-primary transition-colors">Sites Institucionais</a></li>
              <li><a href="#dashboards" className="text-gray-300 hover:text-primary transition-colors">Dashboards Personalizados</a></li>
            </ul>
          </div>
          
          <div className="animate-fade-up animate-delay-200">
            <h3 className="text-xl font-bold mb-4">Contato</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">rafavpereira1@gmail.com</li>
              <li className="text-gray-300">+55 (12) 98212-7115</li>
              <li><a href="#contact" className="text-gray-300 hover:text-primary transition-colors">Formulário de contato</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 animate-fade-up animate-delay-300">
          <p>&copy; {currentYear} Rafael Vilela. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
