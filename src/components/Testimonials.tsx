
import { Card, CardContent } from "@/components/ui/card";

interface Testimonial {
  id: number;
  name: string;
  company: string;
  content: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Diogo Reis",
    company: "Diogo Reis Casual",
    content: "Rafael desenvolveu nossa loja virtual com um design incrível e funcionalidade perfeita. As vendas aumentaram significativamente desde o lançamento!"
  },
  {
    id: 2,
    name: "Dra. Mariana Silva",
    company: "Psicóloga",
    content: "Meu site institucional ficou exatamente como eu imaginava. O agendamento online facilitou muito a vida dos meus pacientes. Recomendo fortemente!"
  },
  {
    id: 3,
    name: "Carlos Mendes",
    company: "Análise de Dados LTDA",
    content: "O dashboard personalizado que o Rafael criou revolucionou a forma como visualizamos nossos dados de negócio. Interface intuitiva e dados sempre atualizados."
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="section bg-blue-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">O Que Dizem os Clientes</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Conheça a opinião de quem já transformou sua presença digital com minhas soluções.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="animate-fade-in border-none shadow-md hover:shadow-lg transition-all duration-300">
              <CardContent className="pt-6">
                <div className="mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="inline-block h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 italic mb-6">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-primary/20 text-primary flex items-center justify-center mr-3">
                    <span className="font-semibold text-lg">{testimonial.name.charAt(0)}</span>
                  </div>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.company}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
