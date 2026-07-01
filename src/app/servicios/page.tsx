import Link from "next/link";
import { services } from "@/data/services";
import Breadcrumbs from "@/components/Breadcrumbs";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/Animations";
import Image from "next/image";

export const metadata = {
  title: "Procedimientos y Cirugías | Dr. Daniel Guerra de Coss",
  description: "Conoce los procedimientos quirúrgicos generales y bariátricos realizados por el Dr. Daniel Guerra de Coss.",
};

export default function ServiciosPage() {
  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-6">
        <Breadcrumbs items={[{ label: "Inicio", href: "/" }, { label: "Servicios" }]} />
        
        <FadeUp className="mb-12">
          <h1 className="text-4xl font-black text-slate-900 mt-8 mb-4">Procedimientos Quirúrgicos</h1>
          <p className="text-lg text-slate-600 max-w-3xl">Ofrecemos soluciones quirúrgicas avanzadas con técnicas laparoscópicas de mínima invasión para obesidad, pared abdominal y cirugía digestiva.</p>
        </FadeUp>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {services.map(service => (
            <StaggerItem key={service.id} className="h-full">
              <Link href={`/servicios/${service.slug}`} className="bg-white rounded-[2rem] overflow-hidden shadow-sm border border-slate-100 flex flex-col sm:flex-row h-full group">
                <div className="sm:w-2/5 aspect-square sm:aspect-auto relative overflow-hidden bg-slate-200">
                  <Image 
                    src={service.image} 
                    alt={service.name} 
                    fill
                    sizes="(max-width: 640px) 100vw, 30vw"
                    className="object-cover"
                  />
                </div>
                <div className="sm:w-3/5 p-8 flex flex-col justify-center flex-grow">
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">{service.name}</h2>
                  <p className="text-slate-600 line-clamp-3 mb-6 flex-grow">{service.description}</p>
                  <span className="text-primary font-black flex items-center gap-2 uppercase text-sm tracking-wider">
                    Saber más <span>&rarr;</span>
                  </span>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </div>
  );
}
