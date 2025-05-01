import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
interface ServiceSectionProps {
  id: string;
  title: string;
  description: string;
  projectName: string;
  projectUrl?: string;
  imageSrc: string;
  imageAlt: string;
  features: string[];
  ctaText: string;
  ctaLink: string;
  reverse?: boolean;
}
const ServiceSection = ({
  id,
  title,
  description,
  projectName,
  projectUrl,
  imageSrc,
  imageAlt,
  features,
  reverse = false
}: ServiceSectionProps) => {
  return <section id={id} className="section bg-white">
      <div className="container-custom">
        <div className={cn("grid md:grid-cols-2 gap-12 items-center", reverse ? "md:flex-row-reverse" : "")}>
          <div className="service-info animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">{title}</h2>
            <p className="text-lg text-gray-700 mb-6">{description}</p>
            
            {projectName && <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Projeto em Destaque:</h3>
                <p className="font-medium text-primary mb-3">{projectName}</p>
                {projectUrl && <a href={projectUrl} target="_blank" rel="noopener noreferrer" className="inline-block">
                    <Button variant="outline" className="hover-transform text-base bg-gray-300 hover:bg-gray-200">Visualizar Projeto</Button>
                  </a>}
              </div>}
            
            <div className="mb-6">
              <h4 className="text-lg font-semibold mb-2">Características:</h4>
              <ul className="space-y-2">
                {features.map((feature, index) => <li key={index} className="flex items-start animate-fade-up" style={{
                animationDelay: `${index * 100}ms`
              }}>
                    <span className="inline-block h-5 w-5 rounded-full bg-primary/20 text-primary flex items-center justify-center mr-2 mt-1">
                      <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span>{feature}</span>
                  </li>)}
              </ul>
            </div>
          </div>
          
          <div className={cn("service-image animate-fade-up animate-delay-200", reverse ? "md:order-first" : "")}>
            <div className="relative">
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full"></div>
              <div className="relative rounded-xl overflow-hidden shadow-lg hover-transform">
                <img src={imageSrc} alt={imageAlt} className="w-full h-auto object-cover" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                  <h3 className="text-white font-semibold text-xl">{projectName}</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default ServiceSection;