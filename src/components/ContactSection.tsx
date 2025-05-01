
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Mail, MessageSquare, Linkedin } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    segment: "",
    service: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleWhatsAppRedirect = () => {
    const { name, segment, service } = formData;
    const message = `Olá, meu nome é ${name || '[Nome]'}. Tenho um negócio no segmento de ${segment || '[Segmento]'} e gostaria de um orçamento para ${service || '[Tipo de Serviço]'}.`;
    
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/5512982127115?text=${encodedMessage}`;
    
    window.open(whatsappURL, '_blank');
  };

  return (
    <section id="contact" className="section bg-white">
      <div className="container-custom">
        <div className="text-center mb-12 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Entre em Contato</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Pronto para elevar sua presença online? Entre em contato para discutirmos seu projeto.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <Card className="shadow-lg border-none animate-fade-up">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold mb-6">Solicitar Orçamento</h3>
              <div className="space-y-5">
                <div>
                  <Input
                    type="text"
                    placeholder="Seu nome"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full"
                  />
                </div>
                <div>
                  <Input
                    type="text"
                    placeholder="Segmento do seu negócio"
                    name="segment"
                    value={formData.segment}
                    onChange={handleChange}
                    className="w-full"
                  />
                </div>
                <div>
                  <Select value={formData.service} onValueChange={(value) => handleSelectChange('service', value)}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Tipo de serviço" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="E-commerce">Loja E-commerce</SelectItem>
                      <SelectItem value="Site Institucional">Site Institucional</SelectItem>
                      <SelectItem value="Dashboard">Dashboard Personalizado</SelectItem>
                      <SelectItem value="Outro serviço">Outro serviço</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button 
                  onClick={handleWhatsAppRedirect} 
                  className="btn-primary w-full"
                >
                  Solicitar Orçamento via WhatsApp
                </Button>
              </div>
            </CardContent>
          </Card>
          
          <div className="animate-fade-up animate-delay-200">
            <h3 className="text-2xl font-bold mb-6">Informações de Contato</h3>
            <p className="text-gray-700 mb-8">
              Prefere entrar em contato diretamente? Utilize um dos canais abaixo:
            </p>
            
            <div className="space-y-6">
              <a 
                href="mailto:rafavpereira1@gmail.com" 
                className="flex items-center p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-all hover-transform"
              >
                <div className="h-12 w-12 bg-primary/20 rounded-full flex items-center justify-center mr-4">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">E-mail</p>
                  <p className="text-gray-700">rafavpereira1@gmail.com</p>
                </div>
              </a>
              
              <a 
                href="https://wa.me/12982127115" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-all hover-transform"
              >
                <div className="h-12 w-12 bg-primary/20 rounded-full flex items-center justify-center mr-4">
                  <MessageSquare className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">WhatsApp</p>
                  <p className="text-gray-700">+55 (12) 98212-7115</p>
                </div>
              </a>
              
              <a 
                href="https://www.linkedin.com/in/rafael-pereira-37557322b" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-all hover-transform"
              >
                <div className="h-12 w-12 bg-primary/20 rounded-full flex items-center justify-center mr-4">
                  <Linkedin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">LinkedIn</p>
                  <p className="text-gray-700">/in/rafael-pereira-37557322b</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
