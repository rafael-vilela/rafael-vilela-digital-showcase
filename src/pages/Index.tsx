
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ServiceSection from "@/components/ServiceSection";
import Testimonials from "@/components/Testimonials";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1">
        <Hero />
        
        <ServiceSection 
          id="ecommerce"
          title="Lojas E-commerce"
          description="Criação de lojas virtuais completas com design personalizado, integração de pagamentos seguros e uma experiência de usuário única para maximizar suas vendas online e engajamento."
          projectName="Diogo Reis Casual"
          projectUrl="https://www.diogoreiscasual.shop"
          imageSrc="https://i.imgur.com/f2GpldQ.png"
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
          imageSrc="https://i.imgur.com/HqqpL6w.png"
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
          imageSrc="https://i.imgur.com/F0K17b7.png"
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
      <WhatsAppButton />
    </div>
  );
};

export default Index;
