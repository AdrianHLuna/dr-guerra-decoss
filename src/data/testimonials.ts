export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  text: string;
  procedure: string;
  timeframe: string;
  achievement?: string;
  image: string; // Imagen comparativa o de caso de éxito
  beforeImage?: string;
  afterImage?: string;
  sourceUrl: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "test-1",
    name: "Alejandra Rodríguez García",
    rating: 5,
    text: "Uno de los mejores doctores, me cambió totalmente la vida. Empecé pesando 180 kilos, mi cirugía fue el 8 de septiembre y ahora 8 meses después ya peso 99 kilos. Mi proceso aún sigue pero me siento más feliz y cómoda. Y ya son muy notables los resultados.",
    procedure: "Bariátrica / Manga Gástrica",
    timeframe: "8 meses post-op",
    achievement: "Pérdida de 81 kg y contando",
    image: "/images/antes-despues/alejandra.png",
    beforeImage: "/images/antes-despues/alejandra_antes.png",
    afterImage: "/images/antes-despues/alejandra_despues.png",
    sourceUrl: "https://www.google.com/maps/contrib/102627776554936739919/place/ChIJF9W1KYr_0YUR5d-AxezYrLY/@19.4064244,-99.167754,17z/data=!4m6!1m5!8m4!1e1!2s102627776554936739919!3m1!1e1?hl=es-419&entry=ttu&g_ep=EgoyMDI2MDYyOS4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    id: "test-2",
    name: "Mayreth G. Pérez O.",
    rating: 5,
    text: "Me agradó el servicio, la eficacia y el trato servicial y digno que me brindó el Dr. Guerra de Coss, sobre todo con el profesionalismo con el que lo hace, explicándote qué tratamiento es adecuado para ti en base a tus necesidades y expectativas. Yo soy paciente post-operada hace 7 meses de una manga gástrica, donde he bajado de peso pero ha mejorado mucho mi estado de salud.",
    procedure: "Cirugía de Manga Gástrica",
    timeframe: "7 meses post-op",
    achievement: "Mejora significativa en salud general",
    image: "/images/antes-despues/mayreth.png",
    beforeImage: "/images/antes-despues/mayreth_antes.png",
    afterImage: "/images/antes-despues/mayreth_despues.png",
    sourceUrl: "https://www.google.com/maps/contrib/110427244676088303413/place/ChIJF9W1KYr_0YUR5d-AxezYrLY/@19.4064294,-99.1703289,16z/data=!4m6!1m5!8m4!1e2!2s110427244676088303413!3m1!1e1?hl=es-419&entry=ttu&g_ep=EgoyMDI2MDYyOS4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    id: "test-3",
    name: "Raquel Fabián",
    rating: 5,
    text: "El doctor Guerra es un excelente cirujano, me realizó una cirugía bariátrica y los resultados son los esperados, quedé realmente satisfecha. Un profesional de la salud al que recomiendo ampliamente.",
    procedure: "Cirugía Bariátrica",
    timeframe: "Paciente de control",
    achievement: "Resultados y metas cumplidas al 100%",
    image: "/images/antes-despues/raquel.png",
    beforeImage: "/images/antes-despues/raquel_antes.png",
    afterImage: "/images/antes-despues/raquel_despues.png",
    sourceUrl: "https://www.google.com/maps/contrib/102572759641259998512/place/ChIJF9W1KYr_0YUR5d-AxezYrLY/@19.4064244,-99.167754,17z/data=!4m6!1m5!8m4!1e1!2s102572759641259998512!3m1!1e1?hl=es-419&entry=ttu&g_ep=EgoyMDI2MDYyOS4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    id: "test-4",
    name: "Liliana Fernández",
    rating: 5,
    text: "Excelente médico, gran persona. Ya hace un año de mi cirugía y todo está perfecto. Mi glucosa ha bajado demasiado, un año entero sin medicamentos. Perdí kilos y gané muchísima salud.",
    procedure: "Bariátrica / Control Metabólico",
    timeframe: "1 año post-op",
    achievement: "Remisión de glucosa y cero medicamentos",
    image: "/images/antes-despues/liliana_real.png",
    sourceUrl: "https://www.google.com/maps/contrib/115726704649893343325/reviews?hl=es-419"
  },
  {
    id: "test-5",
    name: "Cecilia Almaraz",
    rating: 5,
    text: "Mi agradecimiento total al doctor Daniel Guerra de Coss, cambió mi vida. Me realizó un bypass, excelente atención, trato súper profesional, calidez humana, siempre al pendiente. Totalmente recomendado, es el mejor cirujano.",
    procedure: "Cirugía de Bypass Gástrico",
    timeframe: "Control metabólico",
    achievement: "Cambio de vida y excelente seguimiento",
    image: "/images/antes-despues/cecilia.png",
    beforeImage: "/images/antes-despues/cecilia_despues.png",
    afterImage: "/images/antes-despues/cecilia_antes.png",
    sourceUrl: "https://www.google.com/maps/contrib/107253798368284817827/place/ChIJF9W1KYr_0YUR5d-AxezYrLY/@19.4064294,-99.1703289,16z/data=!4m6!1m5!8m4!1e1!2s107253798368284817827!3m1!1e1?hl=es-419&entry=ttu&g_ep=EgoyMDI2MDYyOS4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    id: "test-6",
    name: "Jaqueline Olarte",
    rating: 5,
    text: "Todo el agradecimiento del mundo al Dr. Guerra, él cambió mi vida por completo. No pueden estar en mejores manos, es el mejor del mundo, gracias Dr. Guerra no tengo cómo pagar esta nueva oportunidad de vida.",
    procedure: "Bariátrica y Metabólica",
    timeframe: "Seguimiento médico",
    achievement: "Nueva oportunidad de vida",
    image: "/images/antes-despues/jaqueline.png",
    beforeImage: "/images/antes-despues/jaqueline_antes.png",
    afterImage: "/images/antes-despues/jaqueline_despues.png",
    sourceUrl: "https://www.google.com/maps/contrib/108646423658753688515/place/ChIJF9W1KYr_0YUR5d-AxezYrLY/@19.6693026,-98.5642027,10z/data=!4m6!1m5!8m4!1e1!2s108646423658753688515!3m1!1e1?hl=es-419&entry=ttu&g_ep=EgoyMDI2MDYyOS4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    id: "test-7",
    name: "Sari Ramírez",
    rating: 5,
    text: "Excelente lugar. La atención del Dr. Guerra es sumamente profesional; destaca por su ética y calidez humana. Estoy muy agradecida con él por su excelente trato y por estar siempre al pendiente de sus pacientes. ¡Totalmente recomendado! Gracias por ser parte de este cambio tan importante para mí.",
    procedure: "Bariátrica y Metabólica",
    timeframe: "Control post-op",
    achievement: "Cambio de vida y excelente trato",
    image: "/images/antes-despues/sari_antes.png", // Fallback a la primera
    beforeImage: "/images/antes-despues/sari_antes.png",
    afterImage: "/images/antes-despues/sari_despues.png",
    sourceUrl: "https://www.google.com/maps/contrib/107459025085063266734/place/ChIJF9W1KYr_0YUR5d-AxezYrLY/@19.491372,-99.0011832,12z/data=!4m4!1m3!8m2!1e1!2s107459025085063266734?hl=es-419&entry=ttu&g_ep=EgoyMDI2MDYyOS4wIKXMDSoASAFQAw%3D%3D"
  }
];
