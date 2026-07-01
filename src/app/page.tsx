"use client";

import { useState } from "react";
import { doctor, offices, doctorPhotos } from "@/data/doctor";
import { services } from "@/data/services";
import { symptoms } from "@/data/symptoms";
import { diseases } from "@/data/diseases";
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
  FaStar,
  FaUserCheck
} from "react-icons/fa";
import StructuredData from "@/components/StructuredData";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const [activePhotoIndex, setActivePhotoIndex] = useState<number | null>(null);

  const whatsappUrl = `https://wa.me/${doctor.whatsapp.replace(/\D/g, "")}`;

  const handlePrevPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activePhotoIndex !== null) {
      setActivePhotoIndex((prev) => (prev === 0 ? doctorPhotos.length - 1 : prev! - 1));
    }
  };

  const handleNextPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activePhotoIndex !== null) {
      setActivePhotoIndex((prev) => (prev === doctorPhotos.length - 1 ? 0 : prev! + 1));
    }
  };

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
        {/* Soft overlay on mobile to make text highly readable */}
        <div className="absolute inset-0 bg-white/60 lg:bg-transparent z-0" />
        
        <div className="container mx-auto px-6 max-w-7xl relative z-10 flex-grow flex items-end">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end w-full">
            {/* Left Column: Doctor's PNG on desktop */}
            <div className="hidden lg:flex lg:col-span-6 h-full items-end justify-start relative select-none pointer-events-none">
              <div className="relative w-full h-[600px] xl:h-[750px] flex items-end justify-start">
                <Image
                  src="/images/DSC02541 (2).png"
                  alt={`Dr. Daniel Guerra de Coss`}
                  fill
                  sizes="600px"
                  priority
                  className="object-contain object-bottom object-left"
                  style={{
                    maskImage: 'linear-gradient(to right, transparent, black 15%)',
                    WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%)'
                  }}
                />
              </div>
            </div>

            {/* Right Column: Centered Text Content */}
            <div className="lg:col-span-6 bg-white/90 lg:bg-transparent p-8 lg:p-0 border border-slate-200/60 lg:border-0 shadow-lg lg:shadow-none flex flex-col items-center text-center self-center lg:mb-20">
              <span className="text-sm font-bold text-accent uppercase tracking-wider mb-2">
                Tu salud en manos del
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mb-6 font-serif leading-tight uppercase">
                {doctor.title} {doctor.name}
              </h1>
              <p className="text-base sm:text-lg text-stone-750 mb-8 max-w-xl leading-relaxed font-light">
                Evita complicaciones y acude conmigo para un diagnóstico oportuno y recibe el tratamiento idóneo a la enfermedad gastrointestinal, de pared abdominal o metabólica diagnosticada.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-10 py-4 bg-accent hover:bg-primary text-white font-bold text-xs uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-3 shadow-md"
                >
                  <FaCalendarCheck size={14} /> Agendar Cita
                </a>
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

            {/* Card 3: Horarios */}
            <div className="flex items-start gap-4 p-4">
              <FaClock className="text-accent text-3xl flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-primary uppercase text-xs tracking-wider mb-2">Horarios</h3>
                <p className="text-stone-600 text-xs font-light leading-relaxed">
                  Lunes a Viernes: 16:00 a 21:00 hrs
                </p>
                <p className="text-stone-600 text-xs font-light leading-relaxed mt-1">
                  Sábado: 9:00 a 17:00 hrs
                </p>
                <p className="text-stone-500 text-[10px] mt-1">Previa cita programada.</p>
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
              <p className="text-stone-700 font-light leading-relaxed mb-6">
                Soy especialista en cirugía laparoscópica avanzada y de mínima invasión enfocado en enfermedades que afectan el tracto digestivo y la pared abdominal, así como cirugías para el control de la obesidad, utilizando los tratamientos y las técnicas más actualizadas.
              </p>
              <p className="text-stone-700 font-light leading-relaxed mb-8">
                Cuento con un Postgrado en Alta Especialidad en Cirugía Digestiva avalado por la Universidad Nacional Autónoma de México (UNAM) y subespecialidad en cirugía bariátrica y metabólica, brindando atención integral y de alta especialización a pacientes en la Ciudad de México y Chiapas.
              </p>

              {/* Qualifications / Cédulas block */}
              <div className="bg-slate-50 border border-slate-200 p-6 rounded-lg mb-8">
                <h3 className="font-bold text-primary uppercase text-xs tracking-wider mb-4">Cédulas Profesionales</h3>
                <ul className="space-y-3 text-xs text-stone-600">
                  <li className="flex items-center gap-3">
                    <FaCheckCircle className="text-accent flex-shrink-0" />
                    <span><strong>Lic. Médico Cirujano:</strong> Céd. Prof. 11938343 (Universidad Autónoma de Guadalajara)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <FaCheckCircle className="text-accent flex-shrink-0" />
                    <span><strong>Esp. Cirugía Laparoscópica Avanzada:</strong> Céd. Esp. 14368935 (Universidad Nacional Autónoma de México)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <FaCheckCircle className="text-accent flex-shrink-0" />
                    <span><strong>Alta Especialidad:</strong> Reg. C24014424 (Cirugía Digestiva - UNAM)</span>
                  </li>
                </ul>
              </div>

              {/* Memberships info */}
              <p className="text-stone-500 text-xs font-medium italic">
                Miembro certificado por el Consejo Mexicano de Especialistas en la materia y activo en sociedades quirúrgicas nacionales.
              </p>
            </div>

            {/* Right side image */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-[360px] aspect-[4/5] bg-slate-200 border border-slate-300 shadow-md">
                <Image
                  src="/doctor-aboutme.jpg"
                  alt={`Dr. Daniel Guerra de Coss`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 360px"
                  className="object-cover"
                />
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

      {/* 6. TESTIMONIALS SECTION */}
      <section id="testimonios" className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-5xl text-center">
          <span className="text-xs font-bold text-accent uppercase tracking-widest mb-3 block">
            TU OPINIÓN ES
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary font-serif mb-12 uppercase">
            MUY IMPORTANTE
          </h2>

          {/* Testimonial Box */}
          <div className="bg-slate-50 border border-slate-200 p-8 md:p-12 text-left max-w-3xl mx-auto shadow-sm relative">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center text-lg font-bold">
                O
              </div>
              <div>
                <h3 className="font-bold text-primary text-base">Octavio M.</h3>
                <div className="flex items-center gap-2 mt-1">
                  <span className="flex text-yellow-500 gap-0.5">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </span>
                  <span className="text-[10px] text-stone-500 font-bold uppercase flex items-center gap-1">
                    <FaUserCheck className="text-green-600" /> Paciente Verificado
                  </span>
                </div>
              </div>
            </div>
            <p className="text-stone-700 font-light italic leading-relaxed text-sm md:text-base">
              "Excelente especialista. Dedicación y paciencia durante la consulta, muy explicativo y aclaración de dudas. Recomiendo ampliamente al Dr. Daniel Guerra de Coss, solucionó mi problema digestivo de forma profesional."
            </p>
            <div className="mt-8 text-right">
              <a
                href={doctor.sameAs?.[0] || "https://www.doctoralia.com.mx"}
                target="_blank"
                rel="noreferrer"
                className="inline-block px-5 py-2 bg-primary hover:bg-accent text-white font-bold text-xs uppercase tracking-widest transition-all duration-300"
              >
                VER MÁS EN DOCTORALIA
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 7. PAYMENT & INSURANCE SECTION */}
      <section id="pagos-seguros" className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column: Pagos */}
            <div className="bg-white border border-slate-200 p-8 rounded-lg">
              <span className="text-xs font-bold text-stone-500 uppercase tracking-widest mb-3 block">
                PREGUNTA POR
              </span>
              <h2 className="text-2xl font-bold text-primary font-serif mb-6 uppercase">
                FACILIDADES DE PAGO
              </h2>
              <p className="text-stone-600 text-xs font-light leading-relaxed mb-6">
                Ofrecemos opciones cómodas de pago para tus consultas y procedimientos quirúrgicos programados.
              </p>
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

      {/* 8. GALLERY SECTION (Static Grid) */}
      <section id="galeria" className="py-20 bg-white border-t border-slate-200">
        <div className="container mx-auto px-6 max-w-7xl text-center">
          <span className="text-xs font-bold text-stone-500 uppercase tracking-widest mb-3 block">
            Galería de Fotos
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary font-serif mb-12 uppercase">
            NUESTRAS INSTALACIONES
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {doctorPhotos.map((photo, index) => (
              <div
                key={index}
                className="aspect-[4/3] relative cursor-pointer overflow-hidden border border-slate-200 bg-slate-100"
                onClick={() => setActivePhotoIndex(index)}
              >
                <Image
                  src={photo}
                  alt={`Instalaciones Dr. Daniel Guerra - Foto ${index + 1}`}
                  fill
                  sizes="(max-width: 640px) 100vw, 250px"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LIGHTBOX MODAL */}
      {activePhotoIndex !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center select-none"
          onClick={() => setActivePhotoIndex(null)}
        >
          {/* Close button */}
          <button
            className="absolute top-6 right-6 text-white bg-white/10 hover:bg-white/20 w-12 h-12 flex items-center justify-center rounded-full text-2xl font-bold"
            onClick={() => setActivePhotoIndex(null)}
          >
            &times;
          </button>

          {/* Prev button */}
          <button
            className="absolute left-6 text-white bg-white/10 hover:bg-white/20 w-14 h-14 flex items-center justify-center rounded-full text-3xl"
            onClick={handlePrevPhoto}
          >
            &#8249;
          </button>

          {/* Image Container */}
          <div
            className="relative max-w-[90vw] max-h-[80vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={doctorPhotos[activePhotoIndex]}
              alt="Instalaciones - Ampliada"
              width={1200}
              height={900}
              priority
              className="max-w-full max-h-[80vh] w-auto h-auto object-contain shadow-2xl"
            />
            <div className="absolute bottom-[-40px] text-center text-white/60 text-xs font-bold uppercase tracking-widest">
              Foto {activePhotoIndex + 1} de {doctorPhotos.length}
            </div>
          </div>

          {/* Next button */}
          <button
            className="absolute right-6 text-white bg-white/10 hover:bg-white/20 w-14 h-14 flex items-center justify-center rounded-full text-3xl"
            onClick={handleNextPhoto}
          >
            &#8250;
          </button>
        </div>
      )}
    </div>
  );
}
