import { doctor, offices } from "@/data/doctor";
import Breadcrumbs from "@/components/Breadcrumbs";
import { FaMapMarkerAlt, FaClock, FaPhone, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/Animations";

export const metadata = {
  title: "Contacto y Ubicación | Dr. Daniel Guerra de Coss",
  description: "Agenda tu consulta con el Dr. Daniel Guerra de Coss en la Ciudad de México (Roma Sur/Norte) o Tuxtla Gutiérrez, Chiapas.",
};

export default function ContactoPage() {
  const whatsappUrl = `https://wa.me/${doctor.whatsapp.replace(/\D/g, "")}`;

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-6">
        <Breadcrumbs items={[{ label: "Inicio", href: "/" }, { label: "Contacto" }]} />
        
        <FadeUp className="text-center mb-16 mt-8">
          <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-4 font-serif">Contacto y Ubicación</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto font-light">
            Consulta médica de especialidad y valoraciones bariátricas. Agenda en cualquiera de nuestras tres ubicaciones.
          </p>
        </FadeUp>

        {/* 3 Offices Grid */}
        <StaggerContainer className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
          {offices.map((office, idx) => (
            <StaggerItem key={office.id} className="bg-white rounded-3xl border border-slate-200 shadow-sm p-8 hover:shadow-xl hover:border-accent/40 transition-all duration-350 flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <FaMapMarkerAlt size={20} />
                </div>
                <h3 className="text-xl font-bold text-primary mb-4 font-serif">{office.name}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 font-light">
                  {office.address}, {office.city}, {office.state}, C.P. {office.cp}
                </p>
              </div>

              <div className="border-t border-slate-100 pt-6 mt-6 flex flex-col gap-4">
                <a 
                  href={office.googleMapsUrl} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="w-full text-center py-3 bg-slate-50 hover:bg-primary hover:text-white text-primary text-xs uppercase tracking-widest font-bold border border-slate-200 group-hover:border-primary transition-all duration-300"
                >
                  Ver en Google Maps &rarr;
                </a>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* General Contact Info & Schedules Card */}
        <FadeUp delay={0.3} className="bg-white rounded-3xl border border-slate-200 shadow-md max-w-4xl mx-auto p-10 lg:p-14 hover:shadow-lg transition-shadow duration-300">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-primary mb-6 font-serif">Horarios y Atención</h3>
              <div className="flex gap-4 items-start mb-6">
                <FaClock className="text-accent mt-1 flex-shrink-0" />
                <div className="text-sm">
                  <h4 className="font-bold text-primary uppercase tracking-wider mb-1">Horarios Generales</h4>
                  <p className="text-slate-600 font-light">Lunes a Viernes de 16:00 a 21:00 hrs.</p>
                  <p className="text-slate-600 font-light">Sábados de 09:00 a 17:00 hrs.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <FaEnvelope className="text-accent mt-1 flex-shrink-0" />
                <div className="text-sm">
                  <h4 className="font-bold text-primary uppercase tracking-wider mb-1">Correo Electrónico</h4>
                  <p className="text-slate-600 font-light">{doctor.email}</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary mb-6 font-serif">Contacto Directo</h3>
              <div className="flex flex-col gap-4">
                <a 
                  href={`tel:${doctor.phone}`} 
                  className="flex items-center gap-4 bg-slate-50 border border-slate-200 hover:border-accent/40 p-4 rounded-xl hover:shadow-sm transition-all group"
                >
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent group-hover:scale-110 transition-transform">
                    <FaPhone />
                  </div>
                  <div>
                    <h5 className="font-bold text-primary text-xs uppercase tracking-wider">Llamada o Urgencia</h5>
                    <p className="text-slate-600 text-sm font-light">56 4924 6308</p>
                  </div>
                </a>

                <a 
                  href={whatsappUrl} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="flex items-center gap-4 bg-slate-50 border border-slate-200 hover:border-accent/40 p-4 rounded-xl hover:shadow-sm transition-all group"
                >
                  <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500 group-hover:scale-110 transition-transform">
                    <FaWhatsapp className="text-lg" />
                  </div>
                  <div>
                    <h5 className="font-bold text-primary text-xs uppercase tracking-wider">Mensaje de WhatsApp</h5>
                    <p className="text-slate-600 text-sm font-light">56 4924 6308</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </FadeUp>

      </div>
    </div>
  );
}
