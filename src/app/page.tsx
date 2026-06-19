"use client";

import { useState, useEffect } from "react";
import { doctor, offices, doctorPhotos } from "@/data/doctor";
import { services } from "@/data/services";
import { symptoms } from "@/data/symptoms";
import { diseases } from "@/data/diseases";
import {
  FaCalendarCheck,
  FaWhatsapp,
  FaAward,
  FaUniversity,
  FaCertificate,
  FaHospitalSymbol,
  FaMoneyBillWave,
  FaExchangeAlt,
  FaCreditCard,
  FaShieldAlt,
  FaCheckCircle,
  FaStethoscope,
  FaHeartbeat,
  FaArrowRight
} from "react-icons/fa";
import StructuredData from "@/components/StructuredData";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  const [activePhotoIndex, setActivePhotoIndex] = useState<number | null>(null);
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);

  const heroImages = [
    "/doctor-hero.jpg",
    "/doctor-hero-2.jpg",
    "/doctor-hero-3.jpg"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHeroIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

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

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  } as any;

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  } as any;

  return (
    <div className="min-h-screen bg-background font-sans selection:bg-accent/30 bg-mesh-grid relative">
      <StructuredData data={homeSchema} />

      {/* Glow effects - Midnight Obsidian & Dark Navy */}
      <div className="absolute top-0 right-0 -z-20 w-full h-full overflow-hidden pointer-events-none opacity-40">
        <motion.div
          className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-accent/15 rounded-full blur-[140px] animate-surgical-glow"
        />
        <motion.div
          className="absolute bottom-[20%] left-[-10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px]"
          animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
      </div>

      {/* 1. HERO SECTION */}
      <section className="relative min-h-[calc(100vh-120px)] flex items-center pt-12 pb-24">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">

            {/* Left: Copy */}
            <motion.div className="flex-grow lg:w-7/12 text-center lg:text-left z-10" initial="hidden" animate="visible" variants={fadeUp}>
              <motion.span
                className="inline-block px-5 py-2 bg-white text-primary font-bold text-xs uppercase tracking-widest mb-6 border border-primary/20 shadow-sm"
              >
                {doctor.specialty} • {doctor.subspecialty}
              </motion.span>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary leading-tight tracking-tight mb-6 font-serif">
                Cirugía Bariátrica y Digestiva <br />
                <span className="text-accent">para recuperar tu salud y bienestar.</span>
              </h1>

              <p className="text-base sm:text-lg text-stone-700 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
                Tratamiento laparoscópico avanzado para la obesidad (Manga Gástrica), reflujo, hernias y enfermedades de vesícula en Ciudad de México y Tuxtla Gutiérrez.
              </p>

              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                <a href={whatsappUrl} target="_blank" rel="noreferrer" className="px-10 py-4.5 bg-primary hover:bg-accent text-white font-bold text-xs uppercase tracking-widest transition-all duration-300 border border-primary hover:border-accent flex items-center justify-center gap-3 shadow-lg shadow-primary/20">
                  <FaCalendarCheck size={14} /> Agendar Valoración
                </a>
                <a href="#procedimientos" className="px-10 py-4.5 bg-white hover:bg-stone-50 text-primary font-bold text-xs uppercase tracking-widest transition-all duration-300 border border-border flex items-center justify-center gap-3">
                  Ver Procedimientos
                </a>
              </div>
            </motion.div>

            {/* Right: Doctor's Professional Photo */}
            <motion.div
              className="lg:w-5/12 w-full h-[450px] lg:h-[600px] relative mt-10 lg:mt-0"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="w-full h-full relative overflow-hidden rounded-[3rem] border-4 border-white shadow-2xl group bg-slate-100">
                {heroImages.map((src, index) => (
                  <motion.img
                    key={src}
                    src={src}
                    alt={`Dr. Daniel Guerra de Coss`}
                    className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: index === currentHeroIndex ? 1 : 0 }}
                    transition={{ duration: 1.0, ease: "easeInOut" }}
                  />
                ))}

                {/* Carousel Indicators */}
                <div className="absolute top-6 right-6 flex gap-2 z-20 bg-black/20 backdrop-blur-md px-3 py-2 rounded-full border border-white/10">
                  {heroImages.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentHeroIndex(idx)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === currentHeroIndex ? "bg-white scale-125 shadow-sm" : "bg-white/40 hover:bg-white/70"
                        }`}
                      aria-label={`Ir a foto ${idx + 1}`}
                    />
                  ))}
                </div>

                {/* Floating academic overlay */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md border border-white/20 p-6 rounded-3xl shadow-lg flex justify-between items-center z-10">
                  <div>
                    <h3 className="text-lg font-serif text-primary font-bold">{doctor.title} {doctor.name}</h3>
                    <p className="text-[10px] text-stone-500 uppercase tracking-widest font-semibold mt-1">{doctor.specialistTitle}</p>
                  </div>
                  <span className="text-[10px] font-bold text-accent tracking-widest uppercase border border-accent/25 px-3 py-1.5 rounded-full">
                    UAG • UNAM
                  </span>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 2. BIO & CREDENTIALS */}
      <section className="py-28 bg-white border-y border-border">
        <div className="container mx-auto px-6">
          <motion.div
            className="flex flex-col lg:flex-row gap-16 max-w-7xl mx-auto"
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
          >

            {/* Left Column: Photo & Bio Card */}
            <motion.div className="lg:w-2/5 flex flex-col gap-8" variants={fadeUp}>
              {/* Doctor's Photo in About Me */}
              <div className="w-full h-[400px] relative overflow-hidden rounded-[2.5rem] border-4 border-white shadow-xl bg-slate-100 group">
                <img
                  src="/doctor-aboutme.jpg"
                  alt={`Dr. Daniel Guerra de Coss en consulta`}
                  className="w-full h-full object-cover object-top group-hover:scale-102 transition-transform duration-700"
                />
              </div>

              {/* Philosophy Card */}
              <div className="border border-primary/10 bg-slate-50/50 p-10 lg:p-12 flex flex-col justify-between h-auto shadow-sm rounded-3xl">
                <span className="text-[10px] font-bold text-accent uppercase tracking-widest mb-6 block">Filosofía Médica</span>
                <p className="text-xl font-serif text-primary italic leading-relaxed mb-6">
                  "{doctor.philosophy}"
                </p>
                <div className="h-[1px] w-12 bg-accent mb-6" />
                <div>
                  <h4 className="font-bold text-primary text-sm uppercase tracking-wider mb-1">{doctor.title} {doctor.name}</h4>
                  <p className="text-[11px] text-stone-500 uppercase tracking-widest">{doctor.subspecialty}</p>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Experience & Academics */}
            <div className="lg:w-3/5 flex flex-col justify-center">
              <motion.h3 variants={fadeUp} className="text-3xl font-serif text-primary mb-8 font-bold flex items-center gap-3">
                <span className="h-1.5 w-1.5 bg-accent rounded-full" /> Trayectoria y Acreditaciones
              </motion.h3>

              <motion.p variants={fadeUp} className="text-stone-700 font-light leading-relaxed mb-12 text-sm sm:text-base">
                {doctor.bio}
              </motion.p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div variants={fadeUp} className="p-8 border border-border hover:border-accent/30 transition-all duration-300 bg-white shadow-sm flex flex-col justify-between rounded-2xl">
                  <FaUniversity className="text-accent text-3xl mb-6" />
                  <div>
                    <h4 className="font-bold text-primary text-sm uppercase tracking-widest mb-2">Formación Académica</h4>
                    <p className="text-xs text-stone-600 font-light leading-relaxed">
                      Médico Cirujano por la Universidad Autónoma de Guadalajara (UAG) y Especialista en Cirugía General por la Universidad Nacional Autónoma de México (UNAM).
                    </p>
                  </div>
                </motion.div>

                <motion.div variants={fadeUp} className="p-8 border border-border hover:border-accent/30 transition-all duration-300 bg-white shadow-sm flex flex-col justify-between rounded-2xl">
                  <FaHospitalSymbol className="text-accent text-3xl mb-6" />
                  <div>
                    <h4 className="font-bold text-primary text-sm uppercase tracking-widest mb-2">Alta Especialidad</h4>
                    <p className="text-xs text-stone-600 font-light leading-relaxed">
                      Especialización de posgrado en Cirugía del Tracto Digestivo Superior acreditada por la UNAM (Reg. C24014424).
                    </p>
                  </div>
                </motion.div>

                <motion.div variants={fadeUp} className="p-8 border border-border hover:border-accent/30 transition-all duration-300 bg-white shadow-sm md:col-span-2 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 rounded-2xl">
                  <div className="flex items-center gap-4">
                    <FaCertificate className="text-accent text-3xl flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-primary text-sm uppercase tracking-widest mb-1">Cédulas Profesionales Oficiales</h4>
                      <p className="text-xs text-stone-500 font-light">Médico: 11938343 &nbsp;|&nbsp; Especialidad: 14368935 &nbsp;|&nbsp; Alta Especialidad: C24014424</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

          </motion.div>
        </div>
      </section>

      {/* 3. TESTIMONIALS / BEFORE & AFTER (Manga Gástrica Cases) */}
      <section className="py-24 bg-slate-50 border-b border-border">
        <div className="container mx-auto px-6">
          <motion.div className="text-center mb-16" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <span className="text-[10px] font-bold text-accent uppercase tracking-widest mb-3 block">Casos de Éxito</span>
            <h2 className="text-4xl font-serif text-primary mb-4 font-bold">Resultados Reales de Pacientes</h2>
            <p className="text-stone-600 max-w-2xl mx-auto font-light text-sm">
              Conozca el cambio de salud y estilo de vida tras someterse al procedimiento de Manga Gástrica.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto bg-white rounded-3xl border border-slate-200 p-8 lg:p-12 shadow-md">
            <div className="flex flex-col md:flex-row gap-12 items-center">

              {/* Before and After Visuals */}
              <div className="w-full md:w-1/2 flex gap-4">
                <div className="w-1/2 bg-slate-100 border border-slate-200 p-6 text-center rounded-2xl">
                  <span className="text-[10px] uppercase font-bold text-stone-400 block mb-2">Antes de la Cirugía</span>
                  <div className="h-40 bg-slate-200 rounded-lg flex items-center justify-center text-slate-400 font-bold mb-4">
                    <span>115 kg</span>
                  </div>
                  <p className="text-[11px] text-stone-500 font-light">IMC: 38.4 <br /> (Obesidad Grado II)</p>
                </div>
                <div className="w-1/2 bg-primary/5 border border-primary/20 p-6 text-center rounded-2xl">
                  <span className="text-[10px] uppercase font-bold text-primary block mb-2">Después (12 meses)</span>
                  <div className="h-40 bg-primary/10 rounded-lg flex items-center justify-center text-primary font-bold mb-4">
                    <span>72 kg</span>
                  </div>
                  <p className="text-[11px] text-primary font-bold">IMC: 24.1 <br /> (Peso Saludable)</p>
                </div>
              </div>

              {/* Case Details */}
              <div className="w-full md:w-1/2 flex flex-col justify-center">
                <span className="inline-block self-start px-3 py-1 bg-emerald-500/10 text-emerald-600 text-[10px] uppercase font-bold tracking-wider mb-4">Remisión Metabólica</span>
                <h3 className="text-2xl font-bold text-primary font-serif mb-4">Cambio de Vida Radical</h3>
                <p className="text-stone-600 font-light text-sm leading-relaxed mb-6">
                  \"Después de años de padecer presión alta y dolor severo en las rodillas que limitaba mi movilidad, decidí operarme de manga gástrica con el Dr. Daniel Guerra. A un año del procedimiento, he perdido 43 kg, he dejado de tomar medicamentos para la presión y he recuperado por completo mi energía.\"
                </p>
                <div className="border-t border-slate-100 pt-4 text-xs font-light text-slate-400">
                  <p className="font-bold text-primary">Rommel G. (Paciente de Manga Gástrica)</p>
                  <p className="italic mt-1">* Paciente real. Los resultados individuales pueden variar en cada caso.</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 4. DISEASES SECTION */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <motion.div className="text-center mb-16" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <span className="text-[10px] font-bold text-accent uppercase tracking-widest mb-3 block">Criterio Diagnóstico</span>
            <h2 className="text-4xl font-serif text-primary mb-4 font-bold">Padecimientos y Afecciones Comunes</h2>
            <p className="text-stone-600 max-w-2xl mx-auto font-light text-sm">
              Tratamiento definitivo para patologías de pared abdominal, digestivas y metabólicas.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer}
          >
            {diseases.slice(0, 5).map((disease) => (
              <motion.div key={disease.id} variants={fadeUp} className="h-full">
                <Link href={`/enfermedades/${disease.slug}`} className="bg-slate-50/50 border border-slate-200 hover:border-accent/40 overflow-hidden flex flex-col justify-between h-full group hover:shadow-md hover:bg-white transition-all duration-300 rounded-3xl">
                  <div className="aspect-[16/10] relative overflow-hidden bg-slate-100">
                    <img
                      src={disease.image}
                      alt={disease.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="inline-block px-3 py-1 bg-white/90 backdrop-blur-sm text-accent font-bold text-[9px] uppercase tracking-wider shadow-sm rounded-full">
                        Patología
                      </span>
                    </div>
                  </div>
                  <div className="p-8 flex-grow flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-serif text-primary mb-3 font-bold group-hover:text-accent transition-colors">{disease.name}</h3>
                      <p className="text-stone-600 text-xs font-light leading-relaxed mb-6">{disease.description.substring(0, 140)}...</p>
                    </div>
                    <div className="border-t border-slate-100 pt-4 flex flex-wrap gap-2">
                      {disease.treatments.slice(0, 2).map((t, idx) => (
                        <span key={idx} className="bg-white text-stone-500 text-[9px] uppercase font-bold tracking-wider px-2.5 py-1 border border-slate-200">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-12">
            <Link href="/enfermedades" className="inline-flex items-center gap-2 text-primary hover:text-accent font-bold uppercase tracking-widest text-xs">
              Ver todas las enfermedades <FaArrowRight size={10} />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. PROCEDURES (SERVICES) SECTION */}
      <section id="procedimientos" className="py-24 bg-slate-50 border-y border-border">
        <div className="container mx-auto px-6">
          <motion.div className="text-center mb-16" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <span className="text-[10px] font-bold text-accent uppercase tracking-widest mb-3 block">Servicios Quirúrgicos</span>
            <h2 className="text-4xl font-serif text-primary mb-4 font-bold">Procedimientos y Cirugías Destacadas</h2>
            <p className="text-stone-600 max-w-2xl mx-auto font-light text-sm">
              Cirugía general y bariátrica mediante técnicas laparoscópicas avanzadas de mínima invasión.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto"
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer}
          >
            {services.slice(0, 5).map((service) => (
              <motion.div key={service.id} variants={fadeUp} className="h-full">
                <Link href={`/servicios/${service.slug}`} className="bg-white border border-slate-200 hover:border-accent/30 flex flex-col sm:flex-row h-full group hover:shadow-lg transition-all duration-300 rounded-3xl overflow-hidden">
                  <div className="sm:w-5/12 aspect-[16/10] sm:aspect-auto relative overflow-hidden bg-slate-100 min-h-[200px]">
                    <img
                      src={service.image}
                      alt={service.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="inline-block px-3 py-1 bg-white/90 backdrop-blur-sm text-primary font-bold text-[9px] uppercase tracking-wider shadow-sm rounded-full">
                        Servicio
                      </span>
                    </div>
                  </div>
                  <div className="sm:w-7/12 p-8 flex flex-col justify-between flex-grow">
                    <div>
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-[9px] font-bold text-stone-400 uppercase tracking-widest">Procedimiento Quirúrgico</span>
                        {service.priceRange && (
                          <span className="text-[10px] font-bold bg-primary/5 text-primary px-3 py-1 rounded-full">{service.priceRange}</span>
                        )}
                      </div>
                      <h3 className="text-xl font-serif text-primary mb-3 font-bold group-hover:text-accent transition-colors">{service.name}</h3>
                      <p className="text-stone-600 text-xs font-light leading-relaxed mb-6">{service.description}</p>
                    </div>
                    <span className="text-accent font-bold text-[10px] uppercase tracking-widest group-hover:underline">
                      Ver Detalles &rarr;
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 6. SYMPTOMS SECTION */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <motion.div className="text-center mb-16" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <span className="text-[10px] font-bold text-accent uppercase tracking-widest mb-3 block">Signos de Alarma</span>
            <h2 className="text-4xl font-serif text-primary mb-4 font-bold">Cuándo Programar una Valoración</h2>
            <p className="text-stone-600 max-w-2xl mx-auto font-light text-sm">
              Identifique los síntomas gastrointestinales y de pared abdominal que requieren de un cirujano especialista.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-7xl mx-auto"
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer}
          >
            {symptoms.slice(0, 5).map((sym) => (
              <motion.div key={sym.id} variants={fadeUp} className="h-full">
                <Link href={`/sintomas/${sym.slug}`} className="bg-slate-50/50 border border-slate-200 hover:border-accent/40 overflow-hidden flex flex-col justify-between h-full group transition-all duration-300 rounded-2xl">
                  <div className="aspect-[4/3] relative overflow-hidden bg-slate-100">
                    <img
                      src={sym.image}
                      alt={sym.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="inline-block px-2.5 py-0.5 bg-white/90 backdrop-blur-sm text-accent font-bold text-[8px] uppercase tracking-wider shadow-sm rounded-full">
                        Síntoma
                      </span>
                    </div>
                  </div>
                  <div className="p-6 flex-grow flex flex-col justify-between">
                    <div>
                      <h3 className="text-base font-serif text-primary mb-2 font-bold group-hover:text-accent transition-colors">{sym.name}</h3>
                      <p className="text-stone-500 text-[11px] font-light leading-relaxed mb-6 line-clamp-3">{sym.description}</p>
                    </div>
                    <span className="text-accent font-bold text-[9px] uppercase tracking-widest">
                      Valorar síntoma &rarr;
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 7. INVESTMENT, METHODS & ASSURANCE */}
      <section className="py-28 bg-slate-50 border-t border-border">
        <div className="container mx-auto px-6">
          <motion.div className="text-center mb-20" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <span className="text-[10px] font-bold text-accent uppercase tracking-widest mb-3 block">Transparencia y Formas de Pago</span>
            <h2 className="text-4xl font-serif text-primary mb-4 font-bold">Inversión en su Salud</h2>
            <p className="text-stone-600 max-w-2xl mx-auto font-light text-sm">
              Detalle de costos de consulta médica especializada y facilidades de pago para procedimientos.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 max-w-6xl mx-auto"
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer}
          >

            {/* Left Block: Precio & Metodos (Spans 7 cols) */}
            <motion.div variants={fadeUp} className="lg:col-span-7 flex flex-col gap-6 h-full">

              {/* Costo Box */}
              <div className="border border-slate-200 bg-white p-8 flex flex-col sm:flex-row items-center justify-between gap-6 hover:border-accent/30 transition-all duration-300 group rounded-2xl">
                <div>
                  <h3 className="text-xl font-serif text-primary font-bold mb-1">Costo de Consulta de Valoración</h3>
                  <p className="text-xs text-stone-500 font-light">Valoración clínica presencial detallada e historia clínica.</p>
                </div>
                <div className="inline-flex items-baseline gap-1.5 bg-slate-50 px-6 py-4 border border-slate-200 shadow-sm group-hover:scale-105 transition-transform duration-300">
                  <span className="text-3xl font-bold text-primary">${doctor.consultationPrice}</span>
                  <span className="text-stone-400 font-bold uppercase tracking-wider text-[10px]">MXN</span>
                </div>
              </div>

              {/* Metodos Box */}
              <div className="border border-slate-200 bg-white p-8 flex-grow flex flex-col justify-center rounded-2xl">
                <p className="text-[10px] font-bold text-stone-400 uppercase tracking-widest mb-6 block">Métodos de Pago Aceptados</p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <div className="bg-slate-50 p-5 border border-slate-200 text-center hover:border-accent transition-all duration-300 rounded-xl">
                    <FaMoneyBillWave className="text-accent text-xl mx-auto mb-2" />
                    <h4 className="font-bold text-primary text-[10px] uppercase tracking-wider">Efectivo</h4>
                  </div>
                  <div className="bg-slate-50 p-5 border border-slate-200 text-center hover:border-accent transition-all duration-300 rounded-xl">
                    <FaExchangeAlt className="text-accent text-xl mx-auto mb-2" />
                    <h4 className="font-bold text-primary text-[10px] uppercase tracking-wider">Transferencia</h4>
                  </div>
                  <div className="bg-slate-50 p-5 border border-slate-200 text-center hover:border-accent transition-all duration-300 rounded-xl">
                    <FaCreditCard className="text-accent text-xl mx-auto mb-2" />
                    <h4 className="font-bold text-primary text-[10px] uppercase tracking-wider">T. Crédito</h4>
                  </div>
                  <div className="bg-slate-50 p-5 border border-slate-200 text-center hover:border-accent transition-all duration-300 rounded-xl">
                    <FaCreditCard className="text-accent text-xl mx-auto mb-2" />
                    <h4 className="font-bold text-primary text-[10px] uppercase tracking-wider">T. Débito</h4>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Block: Seguro/Presupuesto (Spans 5 cols) */}
            <motion.div variants={fadeUp} className="lg:col-span-5 bg-primary text-white p-10 shadow-xl relative overflow-hidden flex flex-col justify-between group rounded-3xl">
              <FaShieldAlt className="absolute -right-8 -bottom-8 text-8xl opacity-10 group-hover:scale-125 transition-transform duration-700 ease-out" />

              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 border border-white/20 mb-6 backdrop-blur-sm">
                  <FaShieldAlt className="text-accent" />
                  <span className="font-bold text-[9px] tracking-widest uppercase">Gastos Médicos Mayores</span>
                </div>

                <h3 className="text-2xl font-serif font-bold mb-4">Seguros y Presupuestos</h3>
                <p className="text-slate-300 text-xs font-light mb-8 leading-relaxed">
                  ¿Cuenta con un seguro de gastos médicos mayores o requiere un presupuesto quirúrgico para su aseguradora? Apoyamos en la gestión de su trámite médico de manera transparente.
                </p>

                <div className="bg-white/5 p-6 border border-white/10 mb-8 rounded-xl text-xs font-light text-slate-300">
                  <p>Consulte con nuestro personal la cobertura de reembolso o pago directo de su seguro médico particular durante su cita.</p>
                </div>
              </div>

              <a href={whatsappUrl} target="_blank" rel="noreferrer" className="relative z-10 w-full bg-accent hover:bg-white hover:text-primary text-white font-bold text-xs uppercase tracking-widest py-4.5 text-center transition-all duration-300 shadow-md">
                Preguntar por mi Seguro
              </a>
            </motion.div>

          </motion.div>
        </div>
      </section>

      {/* 8. LOCATIONS SECTION (CDMX / Chiapas) */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <motion.div className="text-center mb-16" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <span className="text-[10px] font-bold text-accent uppercase tracking-widest mb-3 block">Nuestras Clínicas</span>
            <h2 className="text-4xl font-serif text-primary mb-4 font-bold">Consultorios Médicos de Especialidad</h2>
            <p className="text-stone-600 max-w-2xl mx-auto font-light text-sm">
              Instalaciones confortables y seguras en la Ciudad de México y Tuxtla Gutiérrez, Chiapas.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {offices.map((office) => (
              <div key={office.id} className="border border-slate-200 p-8 rounded-2xl bg-slate-50/50 flex flex-col justify-between">
                <div>
                  <h4 className="text-lg font-bold text-primary font-serif mb-2">{office.name}</h4>
                  <p className="text-slate-600 text-xs font-light leading-relaxed mb-4">{office.address}, {office.city}, {office.state}</p>
                </div>
                <div className="border-t border-slate-100 pt-4 flex justify-between items-center text-xs font-bold uppercase tracking-wider text-accent">
                  <a href={office.googleMapsUrl} target="_blank" rel="noreferrer" className="hover:underline">Ver en Mapa &rarr;</a>
                  <a href={`tel:${office.phone.replace(/\s+/g, "")}`} className="text-primary hover:text-accent">{office.phone}</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. GALLERY SECTION */}
      <section className="py-24 bg-slate-50 border-t border-border overflow-hidden">
        <div className="container mx-auto px-6">
          <motion.div className="text-center mb-16" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <span className="text-[10px] font-bold text-accent uppercase tracking-widest mb-3 block">Galería Profesional</span>
            <h2 className="text-4xl font-serif text-primary mb-4 font-bold">El Doctor en su Entorno</h2>
            <p className="text-stone-600 max-w-2xl mx-auto font-light text-sm">
              Instalaciones, consulta y práctica médica de alta especialidad.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto"
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer}
          >
            {doctorPhotos.map((photo, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                className={`h-full cursor-pointer overflow-hidden rounded-3xl border border-slate-200 shadow-sm bg-white hover:shadow-lg transition-all duration-300 group ${index === 0 ? "sm:col-span-2 sm:row-span-2 aspect-[4/3] sm:aspect-auto" : "aspect-[4/3]"
                  }`}
                onClick={() => setActivePhotoIndex(index)}
              >
                <div className="relative w-full h-full overflow-hidden">
                  <img
                    src={photo}
                    alt={`Dr. Daniel Guerra - Foto ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="bg-white/90 backdrop-blur-sm text-primary text-[10px] font-bold uppercase tracking-widest px-4 py-2 shadow-md">
                      Ver Imagen
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* LIGHTBOX MODAL */}
      {activePhotoIndex !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center select-none"
          onClick={() => setActivePhotoIndex(null)}
        >
          {/* Close button */}
          <button
            className="absolute top-6 right-6 text-white/85 hover:text-white bg-white/10 hover:bg-white/20 w-12 h-12 flex items-center justify-center rounded-full transition-all text-2xl font-bold"
            onClick={() => setActivePhotoIndex(null)}
          >
            &times;
          </button>

          {/* Prev button */}
          <button
            className="absolute left-6 text-white/85 hover:text-white bg-white/10 hover:bg-white/20 w-14 h-14 flex items-center justify-center rounded-full transition-all text-3xl"
            onClick={handlePrevPhoto}
          >
            &#8249;
          </button>

          {/* Image Container */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative max-w-[90vw] max-h-[80vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={doctorPhotos[activePhotoIndex]}
              alt="Dr. Daniel Guerra - Vista Previa"
              className="max-w-full max-h-[80vh] object-contain shadow-2xl rounded-2xl border border-white/10"
            />
            <div className="absolute bottom-[-40px] left-0 right-0 text-center text-white/60 text-[11px] font-bold tracking-widest uppercase">
              Foto {activePhotoIndex + 1} de {doctorPhotos.length}
            </div>
          </motion.div>

          {/* Next button */}
          <button
            className="absolute right-6 text-white/85 hover:text-white bg-white/10 hover:bg-white/20 w-14 h-14 flex items-center justify-center rounded-full transition-all text-3xl"
            onClick={handleNextPhoto}
          >
            &#8250;
          </button>
        </motion.div>
      )}

    </div>
  );
}
