import { DoctorProfile } from "@/types/schema";

export const doctor: DoctorProfile = {
  name: "Daniel Guerra de Coss",
  title: "Dr.",
  specialty: "Cirugía General",
  specialistTitle: "Cirujano General y Bariatra",
  subspecialty: "Alta Especialidad en Cirugía de Tracto Digestivo Superior",
  cedula: "11938343", // Médico Cirujano - UAG
  cedulaEspecialidad: "14368935", // Especialidad en Cirugía General - UNAM
  cofepris: undefined, // Omitido según instrucciones del usuario (sin COFEPRIS ficticio)
  phone: "5649246308",
  whatsapp: "5649246308",
  email: "contacto@drgerradecoss.com",
  address: "Tuxpan 16, Consultorio 703, Torre Médica Tuxpan, Colonia Roma Sur, Delegación Cuauhtémoc",
  city: "Ciudad de México",
  state: "CDMX",
  country: "México",
  googleMapsUrl: "https://maps.google.com/?q=Dr.+Daniel+Guerra+de+Coss+Tuxpan+16+Ciudad+de+Mexico",
  consultationPrice: 1200,
  paymentMethods: ["Tarjeta de Crédito", "Tarjeta de Débito", "Efectivo", "Transferencia"],
  insurances: [], // Omitido/pendiente según instrucciones
  schedule: "Lunes a viernes de 16:00 a 21:00. Sábados de 9:00 a 17:00",
  photo: "/images/doctor.png",
  bio: "El Dr. Daniel Guerra de Coss es un destacado Cirujano General con Alta Especialidad en Cirugía del Tracto Digestivo Superior y una sólida formación en Cirugía Bariátrica. Egresado de la Universidad Autónoma de Guadalajara (UAG) y especializado por la Universidad Nacional Autónoma de México (UNAM), el Dr. Guerra de Coss cuenta con más de 15 años de trayectoria profesional. Ha brindado atención médica a más de 18,000 pacientes y realizado con éxito más de 2,000 cirugías gastrointestinales y metabólicas, consolidándose como un referente en el tratamiento quirúrgico de la obesidad y de patologías complejas del sistema digestivo.",
  philosophy: "Cirugía general y bariátrica de alta precisión, enfocada en la seguridad del paciente y en un abordaje mínimamente invasivo para una pronta recuperación.",
  experience: [
    {
      year: "Trayectoria Profesional",
      title: "Cirujano General y Especialista en Tracto Digestivo",
      description: "Más de 15 años de experiencia clínica atendiendo patologías del aparato digestivo y pared abdominal con abordaje laparoscópico avanzado.",
    },
    {
      year: "Volumen Quirúrgico",
      title: "Más de 2,000 cirugías realizadas con éxito",
      description: "Especialista con amplia destreza técnica en procedimientos de manga gástrica, restitución de tránsito intestinal y resección de patologías tumorales.",
    },
    {
      year: "Atención Clínica",
      title: "Más de 18,000 pacientes atendidos",
      description: "Consulta médica especializada enfocada en el diagnóstico preciso y el acompañamiento humano pre y postoperatorio."
    }
  ],
  certifications: [
    {
      name: "Cédula Profesional General",
      institution: "Universidad Autónoma de Guadalajara (UAG) - Céd. 11938343",
    },
    {
      name: "Cédula de Especialidad en Cirugía General",
      institution: "Universidad Nacional Autónoma de México (UNAM) - Céd. 14368935",
    },
    {
      name: "Cédula de Alta Especialidad en Cirugía de Tracto Digestivo Superior",
      institution: "Cédula Reg. C24014424",
    }
  ],
  education: [
    {
      degree: "Médico Cirujano",
      institution: "Universidad Autónoma de Guadalajara (UAG)",
      year: "Egreso",
    },
    {
      degree: "Especialidad en Cirugía General",
      institution: "Universidad Nacional Autónoma de México (UNAM)",
      year: "Egreso",
    },
    {
      degree: "Alta Especialidad en Cirugía de Tracto Digestivo Superior",
      institution: "Universidad Nacional Autónoma de México (UNAM)",
      year: "Egreso",
    }
  ],
  sameAs: [
    "https://www.facebook.com/DrGuerraDeCoss"
  ]
};

// Array de consultorios para mapeo detallado
export const offices = [
  {
    id: "office-1",
    name: "Consultorio Principal - Torre Médica Tuxpan",
    address: "Tuxpan 16, Consultorio 703, Torre Médica Tuxpan, Colonia Roma Sur, Delegación Cuauhtémoc",
    city: "Ciudad de México",
    state: "CDMX",
    cp: "06760",
    phone: "56 4924 6308",
    whatsapp: "56 4924 6308",
    googleMapsUrl: "https://maps.google.com/?q=Tuxpan+16,+Roma+Sur,+Cuauht%C3%A9moc,+06760+Ciudad+de+M%C3%A9xico"
  },
  {
    id: "office-2",
    name: "Hospital Ángeles Roma",
    address: "Consultorio 203, Calle Querétaro 58, Colonia Roma Norte, Delegación Cuauhtémoc",
    city: "Ciudad de México",
    state: "CDMX",
    cp: "06700",
    phone: "56 4924 6308",
    whatsapp: "56 4924 6308",
    googleMapsUrl: "https://maps.google.com/?q=Hospital+Angeles+Roma,+Calle+Quer%C3%A9taro+58,+Roma+Norte,+06700+Ciudad+de+M%C3%A9xico"
  },
  {
    id: "office-3",
    name: "Clínica de Colon y Recto",
    address: "21a Poniente Sur 103, Penipak",
    city: "Tuxtla Gutiérrez",
    state: "Chiapas",
    cp: "29060",
    phone: "56 4924 6308",
    whatsapp: "56 4924 6308",
    googleMapsUrl: "https://maps.google.com/?q=21a+poniente+Sur+103,+Penipak,+29060+Tuxtla+Guti%C3%A9rrez,+Chiapas"
  }
];
