"use client";

import { useState } from "react";
import { doctor, offices } from "@/data/doctor";
import { services } from "@/data/services";
import { symptoms } from "@/data/symptoms";
import { diseases } from "@/data/diseases";
import { testimonials } from "@/data/testimonials";
import {
  FaCalendarCheck,
  FaWhatsapp,
  FaPhone,
  FaMapMarkerAlt,
  FaClock,
  FaCheckCircle,
  FaShieldAlt,
  FaCreditCard,
  FaMoneyBillWave,
  FaExchangeAlt,
  FaArrowRight,
  FaArrowLeft,
  FaStar,
  FaUserCheck
} from "react-icons/fa";
import StructuredData from "@/components/StructuredData";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const [expandedBio, setExpandedBio] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const whatsappUrl = `https://wa.me/${doctor.whatsapp.replace(/\D/g, "")}`;

  const homeSchema = {
    "@context": "https://schema.org",
    "@type": "Physician",
    name: `${doctor.title} ${doctor.name}`,
    description: doctor.bio,
    medicalSpecialty: doctor.specialty,
    telephone: doctor.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: doctor.address,
      addressLocality: doctor.city,
      addressRegion: doctor.state,
    },
    priceRange: `$${doctor.consultationPrice} MXN`,
  };

  return (
    <div className="min-h-screen bg-white font-sans text-stone-800 selection:bg-accent/30">
      <StructuredData data={homeSchema} />

      <section className="relative min-h-[calc(100vh-120px)] lg:h-[calc(100vh-120px)] flex flex-col justify-between bg-slate-50 border-b border-slate-200 pt-16 pb-0 bg-[url('/blurred-office-bg.png')] bg-cover bg-center bg-no-repeat">
        {/* Soft overlay on all viewports to make text highly readable */}
        <div className="absolute inset-0 z-0" />
        
        <div className="container mx-auto px-6 max-w-7xl relative z-10 flex-grow flex items-end">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end w-full">
            {/* Left Column: Doctor's PNG on desktop */}
            <div className="hidden lg:flex lg:col-span-6 h-full items-end justify-start relative select-none pointer-events-none">
              <div className="relative w-full h-[600px] xl:h-[750px] flex items-end justify-start">
                <Image
                  src="/hero.jpg"
                  alt={`Dr. Daniel Guerra de Coss`}
                  fill
                  sizes="600px"
                  priority
                  className="object-cover object-center"
                />
              </div>
            </div>

            {/* Right Column: Centered Text Content */}
            <div className="lg:col-span-6 bg-white/95 backdrop-blur-md p-8 lg:p-12 border border-slate-200/60 shadow-xl rounded-3xl flex flex-col items-center text-center self-center lg:mb-20">
              <span className="text-sm font-bold text-accent uppercase tracking-wider mb-2">
                Tu salud en manos del especialista
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mb-4 font-serif leading-tight uppercase">
                {doctor.title} {doctor.name}
              </h1>
              <h2 className="text-lg sm:text-xl font-bold text-stone-650 mb-4 uppercase tracking-wide">
                Recupera tu peso, tu salud y tu calidad de vida
              </h2>
              <div className="flex flex-col gap-4 justify-center items-center w-full">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-10 py-4 bg-accent hover:bg-primary text-white font-bold text-xs uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-3 shadow-md w-full sm:w-auto animate-bounce-subtle"
                >
                  <FaCalendarCheck size={14} /> Agendar Cita
                </a>
                <p className="text-xs text-stone-500 font-medium max-w-sm mt-1 leading-relaxed">
                  Utiliza tu seguro de gastos médicos para tu cirugía bariátrica o gastrointestinal.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 3-Column Info Cards Widget */}
        <div className="container mx-auto px-6 max-w-7xl relative z-10 mt-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-white p-6 border border-slate-200 shadow-lg">
            {/* Card 1: Dirección */}
            <div className="flex items-start gap-4 p-4">
              <FaMapMarkerAlt className="text-accent text-3xl flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-primary uppercase text-xs tracking-wider mb-2">Dirección</h3>
                <p className="text-stone-600 text-xs font-light leading-relaxed">
                  <strong>CDMX:</strong> Tuxpan 16, Consultorio 703, Torre Médica Tuxpan, Col. Roma Sur.
                </p>
                <p className="text-stone-600 text-xs font-light leading-relaxed mt-1">
                  <strong>Chiapas:</strong> 21a Poniente Sur 103, Penipak, Tuxtla Gutiérrez.
                </p>
              </div>
            </div>

            {/* Card 2: Teléfonos */}
            <div className="flex items-start gap-4 p-4 border-y md:border-y-0 md:border-x border-slate-100">
              <FaPhone className="text-accent text-3xl flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-primary uppercase text-xs tracking-wider mb-2">Teléfonos</h3>
                <p className="text-stone-600 text-xs font-light leading-relaxed">
                  <strong>Citas y Urgencias:</strong>
                </p>
                <p className="text-primary font-bold text-sm tracking-wider mt-1">
                  {doctor.phone.replace(/(\d{2})(\d{4})(\d{4})/, "$1 $2 $3")}
                </p>
                <p className="text-stone-500 text-[10px] mt-1">Disponible para atención y urgencias médicas.</p>
              </div>
            </div>

            {/* Card 3: Citas */}
            <div className="flex items-start gap-4 p-4">
              <FaClock className="text-accent text-3xl flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-primary uppercase text-xs tracking-wider mb-2">Citas</h3>
                <p className="text-stone-650 text-xs font-semibold leading-relaxed">
                  Toda consulta es previa cita. Favor de consultar disponibilidad.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SOBRE MÍ SECTION (Classic Layout) */}
      <section id="sobre-mi" className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left side text */}
            <div className="lg:col-span-7">
              <span className="text-xs font-bold text-accent uppercase tracking-widest mb-3 block">
                Sobre mí
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-primary font-serif mb-6 uppercase">
                DR. DANIEL GUERRA DE COSS
              </h2>
              <div className="h-1 w-20 bg-accent mb-8" />
              <div className="space-y-4 text-stone-700 font-light leading-relaxed mb-8 text-sm sm:text-base">
                <p>
                  Soy Médico por la prestigiosa Universidad Autónoma De Guadalajara en Guadalajara Jalisco, en donde formé bases sólidas para mi camino como médico. Ahí decidí que quería ser especialista.
                </p>
                <p>
                  Por lo que para alcanzar mi sueño me mudé a la Ciudad de México en donde cursé la especialidad de: <strong>&ldquo;Cirugía General&rdquo;</strong> en el hospital más grande de México y Latinoamérica, el &ldquo;Hospital General de México Dr. Eduardo Liceaga&rdquo;, el cual es avalado por la UNAM. En este hospital atendemos pacientes con hernias de pared abdominal, problemas intestinales o traumatismos de urgencia, y fue en esta especialidad que decidí enfocarme en tratar las alteraciones del tracto digestivo y resolverlas por mínima invasión.
                </p>
                
                {expandedBio && (
                  <div className="space-y-4 pt-4 border-t border-slate-100">
                    <p>
                      Por lo tanto, decidí realizar el Alta Especialidad en: <strong>&ldquo;Cirugía Laparoscópica Avanzada de Tracto Digestivo Superior&rdquo;</strong> en el hospital que ahora considero mi segunda casa, el &ldquo;Hospital General de México Dr. Eduardo Liceaga&rdquo;, también avalado por la UNAM, atendiendo siempre con la mayor calidad y calidez a los pacientes.
                    </p>
                    <p>
                      Al término de mis estudios opté por subespecializarme en una rama particular como ninguna otra al ver el serio problema de sobrepeso y obesidad al cual nos enfrentamos en México y en el mundo; cursé la Subespecialidad en: <strong>&ldquo;Cirugía Bariátrica y Metabólica&rdquo;</strong> en el prestigioso &ldquo;Hospital General de México Dr. Eduardo Liceaga&rdquo;, curso avalado por la UNAM, en donde vemos el tracto digestivo pero ahora desde la otra cara de la moneda: el exceso de peso asociado a la alimentación. Operando a los pacientes por mínima invasión logramos reiniciar el peso del paciente y recuperar la salud que a lo largo de los años perdió, siempre con la mayor calidad y calidez humana.
                    </p>
                    <p className="font-bold text-primary">
                      Hoy en día soy orgullosamente uno de los únicos médicos en el país que cuenta con 3 especialidades, por lo cual estoy capacitado para ofrecerte un tratamiento integral esperando siempre obtener los mejores resultados.
                    </p>
                  </div>
                )}

                <button
                  onClick={() => setExpandedBio(!expandedBio)}
                  className="mt-2 text-accent font-bold hover:text-primary transition-colors text-xs uppercase tracking-wider flex items-center gap-1 cursor-pointer focus:outline-none"
                >
                  {expandedBio ? "Ver menos ▲" : "Ver más ▼"}
                </button>
              </div>

              {/* Trayectoria / Estadísticas */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="bg-slate-50 border border-slate-200 p-5 rounded-2xl flex flex-col justify-center">
                  <span className="text-3xl font-black text-accent mb-1">+10 Años</span>
                  <span className="text-xs text-stone-600 font-bold uppercase tracking-wider leading-relaxed">De experiencia realizando medicina de alta especialidad</span>
                </div>
                <div className="bg-slate-50 border border-slate-200 p-5 rounded-2xl flex flex-col justify-center">
                  <span className="text-3xl font-black text-accent mb-1">+6 Años</span>
                  <span className="text-xs text-stone-600 font-bold uppercase tracking-wider leading-relaxed">De experiencia realizando procedimientos de alta complejidad</span>
                </div>
                <div className="bg-slate-50 border border-slate-200 p-5 rounded-2xl flex flex-col justify-center">
                  <span className="text-3xl font-black text-accent mb-1">+1,000</span>
                  <span className="text-xs text-stone-600 font-bold uppercase tracking-wider leading-relaxed">Procedimientos de cirugía laparoscópica avanzada</span>
                </div>
                <div className="bg-slate-50 border border-slate-200 p-5 rounded-2xl flex flex-col justify-center">
                  <span className="text-3xl font-black text-accent mb-1">+200</span>
                  <span className="text-xs text-stone-600 font-bold uppercase tracking-wider leading-relaxed">Procedimientos de cirugía bariátrica y metabólica por mínima invasión</span>
                </div>
              </div>

              {/* Memberships info */}
              <p className="text-stone-500 text-xs font-medium italic">
                Miembro certificado por el Consejo Mexicano de Especialistas en la materia y activo en sociedades quirúrgicas nacionales.
              </p>
            </div>

            {/* Right side image & Credentials Logos */}
            <div className="lg:col-span-5 flex flex-col items-center gap-6">
              <div className="relative w-full max-w-[360px] aspect-[4/5] bg-slate-200 border border-slate-300 shadow-md rounded-2xl overflow-hidden">
                <Image
                  src="/aboutme.jpg"
                  alt={`Dr. Daniel Guerra de Coss`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 360px"
                  className="object-cover"
                />
              </div>

              {/* Institution and Certification Logos */}
              <div className="w-full max-w-[360px] bg-slate-50 border border-slate-200/80 p-6 rounded-2xl">
                <h4 className="text-xs font-bold text-primary uppercase tracking-widest mb-4 text-center">
                  Instituciones Académicas
                </h4>
                <div className="grid grid-cols-2 gap-4 items-center justify-items-center mb-6">
                  <div className="h-14 w-full relative flex items-center justify-center bg-white p-2 border border-slate-100 rounded-xl shadow-xs" title="Universidad Autónoma de Guadalajara">
                    <Image
                      src="/images/uag.png"
                      alt="UAG - Universidad Autónoma de Guadalajara"
                      width={120}
                      height={44}
                      className="object-contain max-h-10"
                    />
                  </div>
                  <div className="h-14 w-full relative flex items-center justify-center bg-white p-2 border border-slate-100 rounded-xl shadow-xs" title="Universidad Nacional Autónoma de México">
                    <Image
                      src="/images/unam.png"
                      alt="UNAM - Universidad Nacional Autónoma de México"
                      width={120}
                      height={44}
                      className="object-contain max-h-10"
                    />
                  </div>
                </div>

                <h4 className="text-xs font-bold text-primary uppercase tracking-widest mb-4 text-center">
                  Certificaciones Médicas
                </h4>
                <div className="grid grid-cols-2 gap-4 items-center justify-items-center">
                  <div className="h-14 w-full relative flex items-center justify-center bg-white p-2 border border-slate-100 rounded-xl shadow-xs" title="Colegio Mexicano de Cirugía General">
                    <Image
                      src="/images/cmcg.png"
                      alt="Colegio Mexicano de Cirugía General"
                      width={120}
                      height={44}
                      className="object-contain max-h-10"
                    />
                  </div>
                  <div className="h-14 w-full relative flex items-center justify-center bg-white p-2 border border-slate-100 rounded-xl shadow-xs" title="Colegio Mexicano de Cirugía para la Obesidad y Enfermedades Metabólicas">
                    <Image
                      src="/images/cmcoem.png"
                      alt="Colegio Mexicano de Cirugía para la Obesidad y Enfermedades Metabólicas"
                      width={120}
                      height={44}
                      className="object-contain max-h-10"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SIGUIENTES SÍNTOMAS SECTION */}
      <section id="sintomas" className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-6 max-w-7xl text-center">
          <span className="text-xs font-bold text-accent uppercase tracking-widest mb-3 block">
            Presentas alguno de los
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary font-serif mb-12 uppercase">
            SIGUIENTES SÍNTOMAS
          </h2>

          {/* Grid of Symptoms (simplified styled cards) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto mb-12">
            {symptoms.slice(0, 5).map((sym) => (
              <div key={sym.id} className="bg-white border border-slate-200 p-6 flex flex-col justify-between">
                <div className="relative w-full aspect-[4/3] bg-slate-100 mb-4 overflow-hidden">
                  <Image
                    src={sym.image}
                    alt={sym.name}
                    fill
                    sizes="(max-width: 640px) 100vw, 150px"
                    className="object-cover"
                  />
                </div>
                <div className="flex-grow flex flex-col justify-between">
                  <h3 className="text-sm font-bold text-primary uppercase tracking-wider mb-2">{sym.name}</h3>
                  <p className="text-stone-600 text-[11px] font-light leading-relaxed mb-4 line-clamp-3">{sym.description}</p>
                  <Link href={`/sintomas/${sym.slug}`} className="text-accent text-[10px] font-bold uppercase tracking-wider hover:underline">
                    Saber más &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Warning Banner */}
          <div className="bg-accent text-white py-6 px-8 max-w-4xl mx-auto mb-8 shadow-sm">
            <h3 className="text-lg md:text-xl font-bold uppercase tracking-widest">
              NO LO DEJES PASAR • TU SALUD ES MI PRIORIDAD
            </h3>
          </div>

          {/* 3 Buttons Row */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-md mx-auto">
            <Link
              href="/sintomas"
              className="w-full sm:w-auto px-6 py-3 bg-primary hover:bg-accent text-white font-bold text-xs uppercase tracking-widest transition-all duration-300 text-center"
            >
              SABER MÁS
            </Link>
            <a
              href={`tel:${doctor.phone}`}
              className="w-full sm:w-auto px-6 py-3 bg-white hover:bg-slate-100 text-primary border border-slate-350 font-bold text-xs uppercase tracking-widest transition-all duration-300 text-center"
            >
              LLÁMANOS
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-bold text-xs uppercase tracking-widest transition-all duration-300 text-center flex items-center justify-center gap-2"
            >
              <FaWhatsapp size={14} /> WHATSAPP
            </a>
          </div>
        </div>
      </section>

      {/* 4. PADECIMIENTOS MAS COMUNES SECTION */}
      <section id="padecimientos" className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-7xl text-center">
          <span className="text-xs font-bold text-stone-500 uppercase tracking-widest mb-3 block">
            Estos son algunos de los
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary font-serif mb-12 uppercase">
            PADECIMIENTOS MAS COMUNES
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {diseases.slice(0, 4).map((disease) => (
              <div key={disease.id} className="bg-white border border-slate-200 flex flex-col justify-between text-left">
                <div className="relative w-full aspect-[16/10] bg-slate-100 overflow-hidden border-b border-slate-200">
                  <Image
                    src={disease.image}
                    alt={disease.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 250px"
                    className="object-cover"
                  />
                </div>
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="text-base font-bold text-primary uppercase tracking-wider mb-3">{disease.name}</h3>
                    <p className="text-stone-600 text-xs font-light leading-relaxed mb-6">
                      {disease.description.substring(0, 130)}...
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 border-t border-slate-100 pt-4">
                    <Link
                      href={`/enfermedades/${disease.slug}`}
                      className="text-accent text-[11px] font-bold uppercase tracking-wider hover:underline block text-center"
                    >
                      Saber más &rarr;
                    </Link>
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full py-2 bg-primary hover:bg-accent text-white font-bold text-[10px] uppercase tracking-widest transition-all duration-300 text-center block"
                    >
                      Agendar Cita
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/enfermedades"
              className="inline-flex items-center gap-2 text-primary hover:text-accent font-bold uppercase tracking-widest text-xs"
            >
              Ver todas las enfermedades <FaArrowRight size={10} />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. SERVICES SECTION */}
      <section id="servicios" className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-6 max-w-7xl text-center">
          <span className="text-xs font-bold text-stone-500 uppercase tracking-widest mb-3 block">
            PRINCIPALES SERVICIOS
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary font-serif mb-12 uppercase">
            CON LOS QUE TE PUEDO AYUDAR
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {services.slice(0, 4).map((service) => (
              <div key={service.id} className="bg-white border border-slate-200 flex flex-col justify-between text-left">
                <div className="relative w-full aspect-[16/10] bg-slate-100 overflow-hidden border-b border-slate-200">
                  <Image
                    src={service.image}
                    alt={service.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 250px"
                    className="object-cover"
                  />
                </div>
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="text-base font-bold text-primary uppercase tracking-wider mb-3">{service.name}</h3>
                    <p className="text-stone-600 text-xs font-light leading-relaxed mb-6">
                      {service.description}
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 border-t border-slate-100 pt-4">
                    <Link
                      href={`/servicios/${service.slug}`}
                      className="text-accent text-[11px] font-bold uppercase tracking-wider hover:underline block text-center"
                    >
                      Saber más &rarr;
                    </Link>
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full py-2 bg-primary hover:bg-accent text-white font-bold text-[10px] uppercase tracking-widest transition-all duration-300 text-center block"
                    >
                      Agendar Cita
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/servicios"
              className="inline-flex items-center gap-2 text-primary hover:text-accent font-bold uppercase tracking-widest text-xs"
            >
              Ver todos los servicios <FaArrowRight size={10} />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. TESTIMONIALS & SUCCESS CASES SECTION */}
      <section id="testimonios" className="py-20 bg-white overflow-hidden border-t border-slate-200">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <span className="text-xs font-bold text-accent uppercase tracking-widest mb-3 block">
              Casos de Éxito y Reseñas
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary font-serif uppercase">
              Testimonios de Pacientes Reales
            </h2>
            <p className="text-stone-500 text-sm mt-3 max-w-2xl mx-auto font-light">
              Opiniones recopiladas de nuestro perfil verificado en Google Maps. Resultados reales de pacientes que han transformado su peso, salud y calidad de vida.
            </p>
          </div>

          {/* Testimonial Panel */}
          <div className="relative max-w-6xl mx-auto">
            {/* Main Testimonial Card */}
            <div className="bg-slate-50 border border-slate-200 rounded-[2rem] p-8 md:p-12 shadow-md">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Left side: Review Text */}
                <div className="lg:col-span-7 flex flex-col justify-between h-full">
                  <div>
                    {/* Stars and Verification status */}
                    <div className="flex flex-wrap items-center gap-4 mb-6">
                      <div className="flex text-yellow-500 gap-1">
                        {Array.from({ length: testimonials[activeTestimonial].rating }).map((_, i) => (
                          <FaStar key={i} />
                        ))}
                      </div>
                      <span className="text-[10px] text-stone-500 font-bold uppercase flex items-center gap-1 bg-white px-3 py-1 rounded-full border border-slate-100 shadow-xs">
                        <FaUserCheck className="text-green-600" /> Reseña en Google Maps
                      </span>
                    </div>

                    {/* Testimonial Text */}
                    <blockquote className="text-stone-700 font-light italic leading-relaxed text-base md:text-lg mb-8">
                      &ldquo;{testimonials[activeTestimonial].text}&rdquo;
                    </blockquote>
                  </div>

                  <div>
                    {/* Patient Profile */}
                    <h3 className="font-bold text-primary text-lg uppercase tracking-wide">
                      {testimonials[activeTestimonial].name}
                    </h3>
                    <p className="text-accent text-xs font-bold uppercase tracking-wider mt-1">
                      Procedimiento: {testimonials[activeTestimonial].procedure}
                    </p>
                    {testimonials[activeTestimonial].achievement && (
                      <p className="text-stone-600 text-xs font-semibold mt-1">
                        Logro: {testimonials[activeTestimonial].achievement}
                      </p>
                    )}
                    <p className="text-stone-500 text-[10px] uppercase tracking-wider mt-1">
                      {testimonials[activeTestimonial].timeframe}
                    </p>
                  </div>
                </div>

                {/* Right side: Before/After Comparison Image */}
                <div className="lg:col-span-5 flex flex-col items-center">
                  <div className="relative w-full aspect-[4/3] bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
                    {testimonials[activeTestimonial].beforeImage && testimonials[activeTestimonial].afterImage ? (
                      <div className="grid grid-cols-2 h-full divide-x divide-slate-100">
                        <div className="relative h-full w-full">
                          <Image
                            src={testimonials[activeTestimonial].beforeImage}
                            alt={`Antes - ${testimonials[activeTestimonial].name}`}
                            fill
                            sizes="(max-width: 1024px) 50vw, 200px"
                            className="object-cover"
                          />
                          <div className="absolute bottom-3 left-3 bg-primary/95 backdrop-blur-xs text-white text-[9px] font-black px-2.5 py-1 rounded-md uppercase tracking-widest shadow-sm">
                            Antes
                          </div>
                        </div>
                        <div className="relative h-full w-full">
                          <Image
                            src={testimonials[activeTestimonial].afterImage}
                            alt={`Después - ${testimonials[activeTestimonial].name}`}
                            fill
                            sizes="(max-width: 1024px) 50vw, 200px"
                            className="object-cover"
                          />
                          <div className="absolute bottom-3 right-3 bg-accent/95 backdrop-blur-xs text-white text-[9px] font-black px-2.5 py-1 rounded-md uppercase tracking-widest shadow-sm">
                            Después
                          </div>
                        </div>
                      </div>
                    ) : (
                      <>
                        <Image
                          src={testimonials[activeTestimonial].image}
                          alt={`Progreso de ${testimonials[activeTestimonial].name}`}
                          fill
                          sizes="(max-width: 1024px) 100vw, 400px"
                          className="object-contain p-2"
                        />
                        {/* Before & After labels */}
                        <div className="absolute bottom-3 left-3 bg-primary/90 backdrop-blur-xs text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                          Antes
                        </div>
                        <div className="absolute bottom-3 right-3 bg-accent/90 backdrop-blur-xs text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                          Después
                        </div>
                      </>
                    )}
                  </div>
                  <p className="text-[10px] text-stone-500 italic mt-3 text-center">
                    {testimonials[activeTestimonial].beforeImage && testimonials[activeTestimonial].afterImage
                      ? "Fotografía clínica real compartida por el paciente en Google Maps."
                      : "Representación esquemática del progreso clínico bariatríco."}
                  </p>
                </div>
              </div>
            </div>

            {/* Carousel Controls */}
            <div className="flex justify-between items-center mt-8 px-4">
              <div className="flex gap-2">
                <button
                  onClick={() => setActiveTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))}
                  className="w-12 h-12 rounded-full border border-slate-250 bg-white hover:bg-slate-50 text-primary flex items-center justify-center transition-all shadow-xs cursor-pointer focus:outline-none"
                  aria-label="Anterior testimonio"
                >
                  <FaArrowLeft size={14} />
                </button>
                <button
                  onClick={() => setActiveTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))}
                  className="w-12 h-12 rounded-full border border-slate-250 bg-white hover:bg-slate-50 text-primary flex items-center justify-center transition-all shadow-xs cursor-pointer focus:outline-none"
                  aria-label="Siguiente testimonio"
                >
                  <FaArrowRight size={14} />
                </button>
              </div>

              {/* Dots indicator */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all cursor-pointer ${
                      index === activeTestimonial ? "bg-accent w-6" : "bg-slate-250 hover:bg-slate-400"
                    }`}
                    aria-label={`Ir al testimonio ${index + 1}`}
                  />
                ))}
              </div>

              {/* Source Link */}
              <a
                href={testimonials[activeTestimonial].sourceUrl}
                target="_blank"
                rel="noreferrer"
                className="hidden sm:inline-flex items-center gap-2 text-xs font-bold text-accent hover:text-primary transition-colors uppercase tracking-widest"
              >
                Ver reseña original <FaArrowRight size={10} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 7. PAYMENT & INSURANCE SECTION */}
      <section id="pagos-seguros" className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column: Costo de Consulta */}
            <div className="bg-white border border-slate-200 p-8 rounded-lg">
              <span className="text-xs font-bold text-stone-500 uppercase tracking-widest mb-3 block">
                Valoración Médica
              </span>
              <h2 className="text-2xl font-bold text-primary font-serif mb-2 uppercase">
                Costo de la Consulta
              </h2>
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-4xl font-black text-primary font-sans">$1,200</span>
                <span className="text-sm text-stone-500 font-bold uppercase tracking-wider">MXN</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="bg-slate-50 p-4 border border-slate-200 text-center rounded-lg">
                  <FaMoneyBillWave className="text-accent text-xl mx-auto mb-2" />
                  <h4 className="font-bold text-primary text-[9px] uppercase tracking-wider">Efectivo</h4>
                </div>
                <div className="bg-slate-50 p-4 border border-slate-200 text-center rounded-lg">
                  <FaExchangeAlt className="text-accent text-xl mx-auto mb-2" />
                  <h4 className="font-bold text-primary text-[9px] uppercase tracking-wider">Trf.</h4>
                </div>
                <div className="bg-slate-50 p-4 border border-slate-200 text-center rounded-lg">
                  <FaCreditCard className="text-accent text-xl mx-auto mb-2" />
                  <h4 className="font-bold text-primary text-[9px] uppercase tracking-wider">Crédito</h4>
                </div>
                <div className="bg-slate-50 p-4 border border-slate-200 text-center rounded-lg">
                  <FaCreditCard className="text-accent text-xl mx-auto mb-2" />
                  <h4 className="font-bold text-primary text-[9px] uppercase tracking-wider">Débito</h4>
                </div>
              </div>
            </div>

            {/* Right Column: Seguros */}
            <div className="bg-primary text-white p-8 rounded-lg flex flex-col justify-between relative overflow-hidden">
              <FaShieldAlt className="absolute -right-8 -bottom-8 text-8xl opacity-10" />
              <div>
                <span className="text-xs font-bold text-accent uppercase tracking-widest mb-3 block">
                  APOYO EN TRÁMITES
                </span>
                <h2 className="text-2xl font-bold font-serif mb-6 uppercase">
                  SEGUROS MÉDICOS
                </h2>
                <p className="text-slate-300 text-xs font-light leading-relaxed mb-6">
                  Aceptamos and apoyamos con el trámite de reembolso y programaciones con aseguradoras de gastos médicos mayores. Consúltanos para brindarte la asesoría adecuada.
                </p>
              </div>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto px-6 py-3 bg-accent hover:bg-white hover:text-primary text-white font-bold text-xs uppercase tracking-widest transition-all duration-300 text-center block mt-4"
              >
                Consultar Aseguradoras
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 8. CALL TO ACTION SECTION */}
      <section className="py-20 bg-gradient-to-br from-primary via-slate-900 to-primary text-white relative overflow-hidden">
        {/* Decorative background blur objects */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/30 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-6 max-w-5xl relative z-10 text-center">
          <span className="text-xs font-bold text-accent uppercase tracking-widest mb-3 block">
            Atención Médica Especializada
          </span>
          <h2 className="text-4xl sm:text-5xl font-black mb-4 font-serif uppercase tracking-tight">
            Dr. Daniel Guerra De Coss
          </h2>
          <p className="text-slate-350 text-sm max-w-xl mx-auto mb-10 leading-relaxed font-light">
            Especialista certificado con amplia experiencia y equipamiento de vanguardia para brindarte un tratamiento seguro y de mínima invasión.
          </p>

          {/* Specialties List */}
          <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 flex flex-col justify-between">
              <FaCheckCircle className="text-accent text-2xl mx-auto mb-3" />
              <h4 className="font-bold text-sm tracking-wide text-white uppercase">Cirugía General y Laparoscopía Avanzada</h4>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 flex flex-col justify-between">
              <FaCheckCircle className="text-accent text-2xl mx-auto mb-3" />
              <h4 className="font-bold text-sm tracking-wide text-white uppercase">Cirugía Bariátrica y Metabólica</h4>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 flex flex-col justify-between">
              <FaCheckCircle className="text-accent text-2xl mx-auto mb-3" />
              <h4 className="font-bold text-sm tracking-wide text-white uppercase">Cirugía Digestiva de Mínima Invasión</h4>
            </div>
          </div>

          {/* Contact Actions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto items-stretch">
            {/* Citas */}
            <div className="bg-white text-slate-900 rounded-3xl p-8 shadow-2xl flex flex-col items-center justify-between border-4 border-accent/25 hover:scale-[1.02] transition-all duration-300">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                  <FaCalendarCheck className="text-accent text-2xl" />
                </div>
                <h3 className="text-xs font-black uppercase tracking-wider text-slate-500 mb-1">Agenda tu Cita</h3>
                <p className="text-2xl font-black text-primary tracking-wide mb-6">564 924 63 08</p>
              </div>
              <div className="flex gap-3 w-full mt-auto">
                <a
                  href="https://wa.me/525649246308"
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-3 px-4 bg-green-600 hover:bg-green-700 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-colors flex items-center justify-center gap-2"
                >
                  <FaWhatsapp size={14} /> WhatsApp
                </a>
                <a
                  href="tel:5649246308"
                  className="flex-1 py-3 px-4 bg-primary hover:bg-accent text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-colors flex items-center justify-center gap-2"
                >
                  <FaPhone size={12} /> Llamar
                </a>
              </div>
            </div>

            {/* Urgencias */}
            <div className="bg-red-950/40 text-white rounded-3xl p-8 border border-red-500/30 shadow-2xl flex flex-col items-center justify-between hover:scale-[1.02] transition-all duration-300">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center mb-4">
                  <FaPhone className="text-red-500 text-xl animate-pulse" />
                </div>
                <h3 className="text-xs font-black uppercase tracking-wider text-red-450 mb-1 text-red-400">Atención de Urgencias</h3>
                <p className="text-2xl font-black text-red-500 tracking-wide mb-6">961 693 9460</p>
              </div>
              <a
                href="tel:9616939460"
                className="w-full py-3 px-6 bg-red-650 hover:bg-red-700 bg-red-600 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-colors flex items-center justify-center gap-2 mt-auto"
              >
                <FaPhone size={12} /> Llamar Urgencias
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
