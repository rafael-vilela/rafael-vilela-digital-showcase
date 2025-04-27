
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, Linkedin, WhatsApp } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({ ...prev, service: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    
    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato em breve.",
    });
    
    setFormData({
      name: "",
      email: "",
      service: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="section bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Entre em Contato</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Pronto para elevar sua presença online? Entre em contato para discutirmos seu projeto.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <Card className="shadow-lg border-none animate-fade-in">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold mb-6">Envie uma mensagem</h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <Input
                    type="text"
                    placeholder="Seu nome"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Seu e-mail"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <Select value={formData.service} onValueChange={handleSelectChange}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Tipo de serviço" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ecommerce">E-commerce</SelectItem>
                      <SelectItem value="website">Site Institucional</SelectItem>
                      <SelectItem value="dashboard">Dashboard</SelectItem>
                      <SelectItem value="other">Outro serviço</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Textarea
                    placeholder="Sua mensagem"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full h-32"
                  />
                </div>
                <Button type="submit" className="btn-primary w-full">
                  Enviar Mensagem
                </Button>
              </form>
            </CardContent>
          </Card>
          
          <div className="animate-fade-in animate-delay-200">
            <h3 className="text-2xl font-bold mb-6">Informações de Contato</h3>
            <p className="text-gray-700 mb-8">
              Prefere entrar em contato diretamente? Utilize um dos canais abaixo:
            </p>
            
            <div className="space-y-6">
              <a 
                href="mailto:contato@rafaelvilela.com" 
                className="flex items-center p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-all"
              >
                <div className="h-12 w-12 bg-primary/20 rounded-full flex items-center justify-center mr-4">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">E-mail</p>
                  <p className="text-gray-700">contato@rafaelvilela.com</p>
                </div>
              </a>
              
              <a 
                href="https://wa.me/5531999999999" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-all"
              >
                <div className="h-12 w-12 bg-primary/20 rounded-full flex items-center justify-center mr-4">
                  <WhatsApp className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">WhatsApp</p>
                  <p className="text-gray-700">+55 (31) 99999-9999</p>
                </div>
              </a>
              
              <a 
                href="https://www.linkedin.com/in/rafaelvilela/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-all"
              >
                <div className="h-12 w-12 bg-primary/20 rounded-full flex items-center justify-center mr-4">
                  <Linkedin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">LinkedIn</p>
                  <p className="text-gray-700">/in/rafaelvilela</p>
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
