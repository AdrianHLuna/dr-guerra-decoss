import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { FadeUp } from "@/components/Animations";
import { FaStethoscope, FaCheckCircle, FaArrowRight } from "react-icons/fa";

export const metadata = {
  title: "Padecimientos y Enfermedades | Dr. Daniel Guerra de Coss",
  description: "Información médica sobre condiciones del aparato digestivo, hernias y obesidad tratadas por el Dr. Daniel Guerra de Coss.",
};

export default function EnfermedadesPage() {
  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-6 max-w-5xl">
        <Breadcrumbs items={[{ label: "Inicio", href: "/" }, { label: "Enfermedades" }]} />
        
        <FadeUp className="mb-12">
          <h1 className="text-4xl font-black text-slate-900 mt-8 mb-4">Enfermedades que trato</h1>
          <p className="text-lg text-slate-600 max-w-3xl">Conoce más sobre las condiciones gastrointestinales, metabólicas y de pared abdominal que diagnosticamos y tratamos con el mayor nivel científico y humano.</p>
        </FadeUp>

        <div className="space-y-12">
          {/* Categoría 1: Cirugía Laparoscópica Avanzada */}
          <FadeUp className="bg-white rounded-[2rem] border border-slate-100 shadow-sm p-8 md:p-12">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                <FaStethoscope className="text-xl" />
              </div>
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 uppercase">
                Cirugía Laparoscópica Avanzada
              </h2>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <li className="bg-slate-50 border border-slate-200/60 rounded-2xl p-5 hover:bg-slate-100 transition-colors">
                <Link href="/enfermedades/vesicula-biliar-y-colelitiasis" className="flex items-center justify-between text-slate-800 font-bold group">
                  <span>Vesícula biliar y colelitiasis</span>
                  <span className="text-accent group-hover:translate-x-1 transition-transform">&rarr;</span>
                </Link>
              </li>
              <li className="bg-slate-50 border border-slate-200/60 rounded-2xl p-5 hover:bg-slate-100 transition-colors">
                <Link href="/enfermedades/hernia-inguinal" className="flex items-center justify-between text-slate-800 font-bold group">
                  <span>Hernia inguinal</span>
                  <span className="text-accent group-hover:translate-x-1 transition-transform">&rarr;</span>
                </Link>
              </li>
              <li className="bg-slate-50 border border-slate-200/60 rounded-2xl p-5 hover:bg-slate-100 transition-colors">
                <Link href="/enfermedades/hernia-umbilical" className="flex items-center justify-between text-slate-800 font-bold group">
                  <span>Hernia umbilical</span>
                  <span className="text-accent group-hover:translate-x-1 transition-transform">&rarr;</span>
                </Link>
              </li>
              <li className="bg-slate-50 border border-slate-200/60 rounded-2xl p-5 hover:bg-slate-100 transition-colors">
                <Link href="/enfermedades/apendicitis-aguda" className="flex items-center justify-between text-slate-800 font-bold group">
                  <span>Apendicitis aguda</span>
                  <span className="text-accent group-hover:translate-x-1 transition-transform">&rarr;</span>
                </Link>
              </li>
            </ul>
          </FadeUp>

          {/* Categoría 2: Cirugía Digestiva */}
          <FadeUp className="bg-white rounded-[2rem] border border-slate-100 shadow-sm p-8 md:p-12">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <FaCheckCircle className="text-xl" />
              </div>
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 uppercase">
                Cirugía Digestiva
              </h2>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <li className="bg-slate-50 border border-slate-200/60 rounded-2xl p-5 hover:bg-slate-100 transition-colors">
                <Link href="/enfermedades/hernia-hiatal-y-funduplicatura-laparoscopica" className="flex items-center justify-between text-slate-800 font-bold group">
                  <span>Hernia hiatal y Funduplicatura Laparoscópica</span>
                  <span className="text-accent group-hover:translate-x-1 transition-transform">&rarr;</span>
                </Link>
              </li>
              <li className="bg-slate-50 border border-slate-200/60 rounded-2xl p-5 hover:bg-slate-100 transition-colors">
                <Link href="/enfermedades/reflujo-gastroesofagico" className="flex items-center justify-between text-slate-800 font-bold group">
                  <span>Reflujo gastroesofágico</span>
                  <span className="text-accent group-hover:translate-x-1 transition-transform">&rarr;</span>
                </Link>
              </li>
              <li className="bg-slate-50 border border-slate-200/60 rounded-2xl p-5 hover:bg-slate-100 transition-colors">
                <Link href="/enfermedades/gastritis" className="flex items-center justify-between text-slate-800 font-bold group">
                  <span>Gastritis</span>
                  <span className="text-accent group-hover:translate-x-1 transition-transform">&rarr;</span>
                </Link>
              </li>
              <li className="bg-slate-50 border border-slate-200/60 rounded-2xl p-5 hover:bg-slate-100 transition-colors">
                <Link href="/enfermedades/volvulo-gastrico" className="flex items-center justify-between text-slate-800 font-bold group">
                  <span>Vólvulo gástrico</span>
                  <span className="text-accent group-hover:translate-x-1 transition-transform">&rarr;</span>
                </Link>
              </li>
              <li className="bg-slate-50 border border-slate-200/60 rounded-2xl p-5 hover:bg-slate-100 transition-colors">
                <Link href="/enfermedades/tumores-esofagicos" className="flex items-center justify-between text-slate-800 font-bold group">
                  <span>Tumores esofágicos</span>
                  <span className="text-accent group-hover:translate-x-1 transition-transform">&rarr;</span>
                </Link>
              </li>
              <li className="bg-slate-50 border border-slate-200/60 rounded-2xl p-5 hover:bg-slate-100 transition-colors">
                <Link href="/enfermedades/tumores-gastricos" className="flex items-center justify-between text-slate-800 font-bold group">
                  <span>Tumores gástricos</span>
                  <span className="text-accent group-hover:translate-x-1 transition-transform">&rarr;</span>
                </Link>
              </li>
              <li className="bg-slate-50 border border-slate-200/60 rounded-2xl p-5 hover:bg-slate-100 transition-colors">
                <Link href="/enfermedades/acalasia-y-miotomia-esofagica" className="flex items-center justify-between text-slate-800 font-bold group">
                  <span>Acalasia y miotomía esofágica</span>
                  <span className="text-accent group-hover:translate-x-1 transition-transform">&rarr;</span>
                </Link>
              </li>
              <li className="bg-slate-50 border border-slate-200/60 rounded-2xl p-5 hover:bg-slate-100 transition-colors">
                <Link href="/enfermedades/disfagia" className="flex items-center justify-between text-slate-800 font-bold group">
                  <span>Disfagia</span>
                  <span className="text-accent group-hover:translate-x-1 transition-transform">&rarr;</span>
                </Link>
              </li>
            </ul>
          </FadeUp>

          {/* Categoría 3: Cirugía Bariátrica y Metabólica */}
          <FadeUp className="bg-white rounded-[2rem] border border-slate-100 shadow-sm p-8 md:p-12">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                <FaArrowRight className="text-lg rotate-45" />
              </div>
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 uppercase">
                Cirugía Bariátrica y Metabólica
              </h2>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <li className="bg-slate-50 border border-slate-200/60 rounded-2xl p-5 hover:bg-slate-100 transition-colors">
                <Link href="/enfermedades/obesidad-y-sobrepeso" className="flex items-center justify-between text-slate-800 font-bold group">
                  <span>Sobrepeso y Obesidad</span>
                  <span className="text-accent group-hover:translate-x-1 transition-transform">&rarr;</span>
                </Link>
              </li>
              <li className="bg-slate-50 border border-slate-200/60 rounded-2xl p-5 hover:bg-slate-100 transition-colors">
                <Link href="/servicios/manga-gastrica" className="flex items-center justify-between text-slate-800 font-bold group">
                  <span>Manga gástrica</span>
                  <span className="text-accent group-hover:translate-x-1 transition-transform">&rarr;</span>
                </Link>
              </li>
              <li className="bg-slate-50 border border-slate-200/60 rounded-2xl p-5 hover:bg-slate-100 transition-colors">
                <Link href="/enfermedades/bypass-gastrico" className="flex items-center justify-between text-slate-800 font-bold group">
                  <span>Bypass gástrico</span>
                  <span className="text-accent group-hover:translate-x-1 transition-transform">&rarr;</span>
                </Link>
              </li>
              <li className="bg-slate-50 border border-slate-200/60 rounded-2xl p-5 hover:bg-slate-100 transition-colors">
                <Link href="/enfermedades/cirugia-revisional" className="flex items-center justify-between text-slate-800 font-bold group">
                  <span>Cirugía revisional</span>
                  <span className="text-accent group-hover:translate-x-1 transition-transform">&rarr;</span>
                </Link>
              </li>
              <li className="bg-slate-50 border border-slate-200/60 rounded-2xl p-5 hover:bg-slate-100 transition-colors">
                <Link href="/enfermedades/cirugia-ileal-sasi" className="flex items-center justify-between text-slate-800 font-bold group">
                  <span>Cirugía ileal (SASI)</span>
                  <span className="text-accent group-hover:translate-x-1 transition-transform">&rarr;</span>
                </Link>
              </li>
              <li className="bg-slate-50 border border-slate-200/60 rounded-2xl p-5 hover:bg-slate-100 transition-colors">
                <Link href="/enfermedades/balon-gastrico" className="flex items-center justify-between text-slate-800 font-bold group">
                  <span>Balón gástrico</span>
                  <span className="text-accent group-hover:translate-x-1 transition-transform">&rarr;</span>
                </Link>
              </li>
            </ul>
          </FadeUp>
        </div>
      </div>
    </div>
  );
}
