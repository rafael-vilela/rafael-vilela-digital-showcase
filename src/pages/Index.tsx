
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ServiceSection from "@/components/ServiceSection";
import Testimonials from "@/components/Testimonials";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main>
        <Hero />
        
        <ServiceSection 
          id="ecommerce"
          title="Lojas E-commerce"
          description="Desenvolvimento de lojas virtuais completas, com design personalizado, pagamentos integrados e experiência de usuário excepcional para impulsionar suas vendas online."
          projectName="Diogo Reis Casual"
          projectUrl="https://www.diogoreiscasual.shop"
          imageSrc="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
          imageAlt="E-commerce Diogo Reis Casual"
          features={[
            "Design responsivo para desktop e dispositivos móveis",
            "Gateway de pagamento integrado e seguro",
            "Gestão de estoque e pedidos simplificada",
            "Otimização para SEO e velocidade de carregamento",
            "Integração com redes sociais e marketing"
          ]}
          ctaText="Visualizar Site"
          ctaLink="https://www.diogoreiscasual.shop"
        />
        
        <ServiceSection 
          id="websites"
          title="Sites Institucionais"
          description="Criação de sites profissionais que transmitem a identidade da sua empresa ou serviço, com foco em design moderno, navegação intuitiva e conversões."
          projectName="Site da Psicóloga"
          projectUrl="https://beautiful-beignet-41f050.netlify.app"
          imageSrc="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
          imageAlt="Site Institucional de Psicóloga"
          features={[
            "Design personalizado alinhado com sua marca",
            "Sistema de agendamento online",
            "Páginas otimizadas para conversão",
            "Blog integrado para marketing de conteúdo",
            "Compatível com todos os dispositivos"
          ]}
          ctaText="Visualizar Site"
          ctaLink="https://beautiful-beignet-41f050.netlify.app"
          reverse={true}
        />
        
        <ServiceSection 
          id="dashboards"
          title="Dashboards Personalizados"
          description="Desenvolvimento de painéis de controle interativos que transformam dados complexos em visualizações claras para tomada de decisões estratégicas."
          projectName="Dashboard de Dados"
          projectUrl="https://animated-nasturtium-8e6cb5.netlify.app"
          imageSrc="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
          imageAlt="Dashboard Personalizado"
          features={[
            "Visualizações de dados interativas e em tempo real",
            "Painéis configuráveis conforme necessidades específicas",
            "Integração com múltiplas fontes de dados",
            "Exportação de relatórios automatizada",
            "Interface intuitiva para uso diário"
          ]}
          ctaText="Visualizar Dashboard"
          ctaLink="https://animated-nasturtium-8e6cb5.netlify.app"
        />
        
        <Testimonials />
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
