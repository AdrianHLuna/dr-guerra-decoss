import Link from "next/link";
import { doctor, offices } from "@/data/doctor";
import { FaMapMarkerAlt, FaPhone, FaWhatsapp, FaEnvelope, FaFacebook, FaInstagram, FaGlobe } from "react-icons/fa";

export default function Footer() {
  const whatsappUrl = `https://wa.me/${doctor.whatsapp.replace(/\D/g, "")}`;

  return (
    <footer className="bg-primary text-slate-400 pt-16 pb-10 border-t border-slate-800">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Widget 1: DIRECCIÓN */}
          <div>
            <h3 className="text-white text-xs font-bold uppercase tracking-widest mb-6 border-b border-slate-800 pb-3">
              DIRECCIÓN
            </h3>
            <div className="flex flex-col gap-4 text-xs leading-relaxed">
              {offices.map((office) => (
                <div key={office.id} className="flex gap-3">
                  <FaMapMarkerAlt className="text-accent mt-0.5 flex-shrink-0 text-base" />
                  <div>
                    <h4 className="font-bold text-white mb-1">{office.name}</h4>
                    <p className="font-light">{office.address}, {office.city}, {office.state}.</p>
                    <a 
                      href={office.googleMapsUrl} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="text-accent hover:underline text-[10px] uppercase font-bold tracking-wider mt-1.5 block"
                    >
                      VER MAPA &rarr;
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Widget 2: CONTACTO */}
          <div>
            <h3 className="text-white text-xs font-bold uppercase tracking-widest mb-6 border-b border-slate-800 pb-3">
              CONTACTO
            </h3>
            <div className="flex flex-col gap-4 text-xs">
              <div className="flex items-center gap-3">
                <FaPhone className="text-accent text-base flex-shrink-0" />
                <div>
                  <p className="font-light text-slate-500">CITAS Y URGENCIAS:</p>
                  <p className="text-white font-bold text-sm tracking-wider mt-0.5">
                    {doctor.phone.replace(/(\d{2})(\d{4})(\d{4})/, "$1 $2 $3")}
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <FaWhatsapp className="text-accent text-lg flex-shrink-0" />
                <div>
                  <p className="font-light text-slate-500">WHATSAPP:</p>
                  <a 
                    href={whatsappUrl} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="text-white font-bold hover:text-accent transition-colors"
                  >
                    Enviar Mensaje &rarr;
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <FaEnvelope className="text-accent text-base flex-shrink-0" />
                <div>
                  <p className="font-light text-slate-500">CORREO ELECTRÓNICO:</p>
                  <a href={`mailto:${doctor.email}`} className="text-white font-bold hover:text-accent transition-colors">
                    {doctor.email}
                  </a>
                </div>
              </div>

              <div className="mt-4 flex gap-4 text-lg">
                {doctor.sameAs?.map((link, idx) => (
                  <a 
                    key={idx} 
                    href={link} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="text-slate-400 hover:text-white transition-colors"
                    aria-label="Social Link"
                  >
                    {link.includes("facebook") ? <FaFacebook /> : link.includes("instagram") ? <FaInstagram /> : <FaGlobe />}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Widget 3: HORARIOS */}
          <div>
            <h3 className="text-white text-xs font-bold uppercase tracking-widest mb-6 border-b border-slate-800 pb-3">
              HORARIOS
            </h3>
            <div className="flex flex-col gap-4 text-xs leading-relaxed">
              <div>
                <h4 className="font-bold text-white mb-1">Lunes a Viernes</h4>
                <p className="font-light">16:00 a 21:00 hrs</p>
              </div>
              <div>
                <h4 className="font-bold text-white mb-1">Sábado</h4>
                <p className="font-light">9:00 a 17:00 hrs</p>
              </div>
              <div className="mt-4 border-t border-slate-800 pt-4">
                <h4 className="font-bold text-white mb-2 text-[10px] uppercase tracking-wider">Métodos de Pago Aceptados</h4>
                <div className="flex flex-wrap gap-1.5">
                  {doctor.paymentMethods.map(method => (
                    <span key={method} className="bg-slate-900 border border-slate-800 text-[9px] uppercase font-bold tracking-wider px-2 py-1 text-slate-400">
                      {method}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Area: Legal details & copyright */}
        <div className="border-t border-slate-800 pt-8 text-center text-xs flex flex-col gap-3 font-light">
          <p className="text-slate-400 text-[10px] tracking-wide uppercase">
            CÉDULA PROFESIONAL: <strong className="font-medium text-white">{doctor.cedula}</strong> (UAG) &nbsp;|&nbsp; 
            CÉDULA ESPECIALIDAD: <strong className="font-medium text-white">{doctor.cedulaEspecialidad}</strong> (UNAM) &nbsp;|&nbsp; 
            ALTA ESPECIALIDAD: <strong className="font-medium text-white">C24014424</strong> (UNAM)
          </p>
          <p className="text-stone-500 text-[9px] tracking-wider uppercase mt-1">
            © {new Date().getFullYear()} DR. DANIEL GUERRA DE COSS. TODOS LOS DERECHOS RESERVADOS. &nbsp;|&nbsp; 
            <Link href="/aviso-de-privacidad" className="hover:text-white underline">Aviso de Privacidad</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
