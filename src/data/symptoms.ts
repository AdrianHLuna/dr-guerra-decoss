import { Symptom } from "@/types/schema";

export const symptoms: Symptom[] = [
  {
    id: "cg-sym-001",
    slug: "dolor-abdominal",
    name: "Dolor Abdominal",
    description: "El dolor abdominal repentino, severo o recurrente es uno de los síntomas de sospecha más importantes de patologías quirúrgicas digestivas. Puede manifestarse como un cólico agudo en la boca del estómago, del lado derecho debajo de las costillas, o dolor generalizado. Nunca debe ser ignorado ni enmascarado con analgésicos sin previa valoración médica, ya que es el principal signo de alarma de apendicitis, colecistitis, obstrucción o hernias estranguladas.",
    causes: [
      "Inflamación aguda de la vesícula biliar (Colecistitis)",
      "Cálculos biliares obstruyendo los conductos (Coledocolitiasis o cólico biliar)",
      "Inflamación aguda del apéndice (Apendicitis aguda)",
      "Irritación o perforación de una úlcera gástrica",
      "Hernias atascadas u obstrucción en el intestino"
    ],
    whyConsult: "Debe consultar de urgencia si el dolor abdominal es continuo por más de 4 horas, si aumenta de intensidad al moverse o toser, si se acompaña de abdomen rígido (duro como una tabla), o si se presenta fiebre y vómitos repetitivos.",
    relatedConditions: ["Abdomen Agudo", "Colecistitis", "Coledocolitiasis", "Pancreatitis", "Hernia Inguinal y de Pared Abdominal"],
    image: "/images/symptoms/dolor-abdominal.jpg",
    seo: {
      title: "Dolor Abdominal Agudo y Sospecha Quirúrgica en CDMX",
      description: "Valoración urgente de dolor abdominal agudo. Evite complicaciones graves de peritonitis. Dr. Daniel Guerra de Coss.",
      keywords: ["dolor abdominal fuerte", "dolor de estomago urgencias", "dolor de apendice o vesicula", "cirujano general cdmx"]
    }
  },
  {
    id: "cg-sym-002",
    slug: "nauseas-y-vomitos",
    name: "Náuseas y Vómitos",
    description: "Las náuseas y el vómito constante son reflejos del sistema digestivo ante una obstrucción intestinal, inflamación severa de órganos abdominales o reflujo severo. Cuando persisten por más de 24 horas y evitan la tolerancia de líquidos, representan un riesgo inminente de deshidratación grave y sugieren padecimientos que podrían requerir intervención quirúrgica inmediata.",
    causes: [
      "Obstrucción intestinal secundaria a hernias o bridas",
      "Apendicitis aguda o colecistitis complicada",
      "Episodios de pancreatitis aguda",
      "Reflujo gastroesofágico severo"
    ],
    whyConsult: "La presencia de vómito biliar (líquido verdoso/amarillento), vómito con sangre o la incapacidad absoluta de retener líquidos durante un día son indicaciones directas para una valoración de urgencia con el cirujano general.",
    relatedConditions: ["Abdomen Agudo", "Colecistitis", "Pancreatitis", "Reflujo Gastroesofágico y Hernia Hiatal"],
    image: "/images/symptoms/nauseas-vomitos.jpg",
    seo: {
      title: "Causas de Náuseas y Vómitos Persistentes | Dr. Guerra",
      description: "El vómito persistente puede indicar obstrucción de intestinos o vesícula inflamada. Agende consulta de valoración.",
      keywords: ["nauseas y vomitos constantes", "vomito biliar causas", "obstruccion intestinal sintomas", "urgencias cirugia cdmx"]
    }
  },
  {
    id: "cg-sym-003",
    slug: "fiebre",
    name: "Fiebre",
    description: "La fiebre es una elevación de la temperatura corporal por encima de 38°C, que actúa como respuesta inmune ante una infección activa o un proceso inflamatorio grave. En patologías digestivas, la fiebre acompañada de dolor de panza suele ser signo de colecistitis supurada, colangitis biliar, peritonitis o apendicitis complicada, representando un cuadro infeccioso que requiere atención médica o quirúrgica inmediata.",
    causes: [
      "Infección e inflamación vesicular aguda (Colecistitis aguda)",
      "Infección de la vía biliar secundaria a cálculos obstruidos (Colangitis)",
      "Infección o perforación intestinal (Apendicitis rota o peritonitis)",
      "Abscesos o quistes sebáceos infectados en la piel"
    ],
    whyConsult: "Si presenta fiebre acompañada de dolor abdominal intenso, escalofríos, piel amarillenta o confusión mental, es una urgencia médica que debe valorarse de inmediato para evitar un shock séptico.",
    relatedConditions: ["Abdomen Agudo", "Colecistitis", "Coledocolitiasis", "Pancreatitis", "Lipomas y Tumores de Piel"],
    image: "/images/symptoms/fiebre.jpg",
    seo: {
      title: "Fiebre y Dolor Abdominal (Infección Quirúrgica) CDMX",
      description: "La fiebre con dolor de abdomen puede sugerir apendicitis o vesícula infectada. Solicite consulta de urgencia.",
      keywords: ["fiebre y dolor abdominal", "fiebre por infeccion de vesicula", "peritonitis fiebre alta", "cirujano de urgencias cdmx"]
    }
  },
  {
    id: "cg-sym-004",
    slug: "hinchazon-abdominal",
    name: "Hinchazón Abdominal",
    description: "La distensión o hinchazón abdominal es el aumento visible del volumen del abdomen producido por acumulación de gas, líquidos o retención del tránsito intestinal. Ocurre con frecuencia en cuadros de estreñimiento severo, incapacidad de expulsar gases, o como consecuencia del sobrepeso crónico, pero en fases agudas puede deberse a un bloqueo o parálisis del intestino (íleo paralítico).",
    causes: [
      "Obstrucción intestinal completa o parcial por hernias o bridas",
      "Acumulación de gases por estreñimiento crónico o mala digestión",
      "Retención de líquidos en la cavidad abdominal (ascitis)",
      "Obesidad clínica y metabólica"
    ],
    whyConsult: "Si la hinchazón abdominal se acompaña de incapacidad absoluta para evacuar o canalizar gases por más de 24 horas, dolor cólico progresivo y vómitos, requiere descartar urgentemente una obstrucción intestinal.",
    relatedConditions: ["Obesidad y Sobrepeso", "Abdomen Agudo", "Hernia Inguinal y de Pared Abdominal"],
    image: "/images/symptoms/hinchazon.jpg",
    seo: {
      title: "Hinchazón Abdominal y Obstrucción Intestinal | Dr. Guerra",
      description: "Distensión del abdomen severa con dolor. Conozca cuándo puede ser una hernia o bloqueo que requiere cirugía.",
      keywords: ["hinchazon abdominal severa", "distension abdominal causas", "obstruccion por hernia", "cirujano de hernias cdmx"]
    }
  },
  {
    id: "cg-sym-005",
    slug: "perdida-de-apetito",
    name: "Pérdida de Apetito",
    description: "La pérdida de apetito (hiporexia o anorexia) es un síntoma inespecífico pero constante en procesos inflamatorios agudos abdominales (como la apendicitis) o en enfermedades crónicas graves. También se presenta frecuentemente en casos de obesidad severa debido a desequilibrios de las hormonas de la saciedad, o ante patologías del cuello como bocio gigante que causan molestia física al comer.",
    causes: [
      "Inflamación abdominal aguda inicial (típico en apendicitis y pancreatitis)",
      "Dificultad mecánica para tragar alimentos (bocio tiroideo o disfagia)",
      "Enfermedades crónicas del hígado o páncreas",
      "Alteraciones metabólicas asociadas a obesidad severa"
    ],
    whyConsult: "Una pérdida de apetito persistente que se acompaña de pérdida involuntaria de peso, náuseas recurrentes o dolor progresivo en el cuello o abdomen debe ser investigada clínicamente.",
    relatedConditions: ["Obesidad y Sobrepeso", "Abdomen Agudo", "Bocio Tiroideo", "Pancreatitis", "Disfagia"],
    image: "/images/symptoms/perdida-apetito.jpg",
    seo: {
      title: "Pérdida de Apetito y Síntomas Gastrointestinales CDMX",
      description: "Hiporexia persistente asociada a dolor. Descarte problemas de tiroides o tracto digestivo con el Dr. Daniel Guerra.",
      keywords: ["perdida de apetito causas", "falta de hambre y dolor", "sintomas de tiroides cuello", "cirujano general cdmx"]
    }
  },
  {
    id: "cg-sym-006",
    slug: "dificultad-para-respirar",
    name: "Dificultad para Respirar",
    description: "La dificultad para respirar (disnea) es la sensación subjetiva de falta de aire. En el contexto de cirugía general y bariátrica, suele presentarse como una limitación física en pacientes con obesidad mórbida debido al exceso de peso sobre el tórax, o por compresión traqueal de bocios gigantes en el cuello. También puede ser signo de sepsis abdominal o shock de origen pancreático.",
    causes: [
      "Obesidad severa que restringe la expansión de los pulmones",
      "Compresión de la tráquea por crecimiento anormal de la tiroides (Bocio)",
      "Respuesta inflamatoria sistémica severa por peritonitis o pancreatitis aguda",
      "Distensión abdominal extrema que empuja el diafragma hacia arriba"
    ],
    whyConsult: "La disnea progresiva en reposo, o la sensación de asfixia al acostarse boca arriba debido a un abultamiento en el cuello (bocio) o exceso de peso corporal, son indicaciones directas para acudir a valoración quirúrgica.",
    relatedConditions: ["Obesidad y Sobrepeso", "Bocio Tiroideo", "Pancreatitis", "Abdomen Agudo"],
    image: "/images/symptoms/dificultad-respirar.jpg",
    seo: {
      title: "Dificultad para Respirar por Obesidad o Bocio CDMX",
      description: "La disnea por sobrepeso o compresión de cuello requiere valoración quirúrgica. Dr. Daniel Guerra de Coss.",
      keywords: ["dificultad para respirar obesidad", "bocio compresion traqueal", "falta de aire al acostarse", "tiroidectomia cdmx"]
    }
  },
  {
    id: "cg-sym-007",
    slug: "shock-o-insuficiencia",
    name: "Shock o Insuficiencia Multiorgánica",
    description: "El shock es un estado crítico en el cual disminuye el flujo sanguíneo hacia los órganos vitales, privándolos de oxígeno. En cirugía general, es la complicación final de infecciones abdominales descontroladas (peritonitis), pancreatitis severa necrotizante, o perforaciones intestinales que evolucionan a shock séptico, requiriendo reanimación inmediata y cirugía de urgencia.",
    causes: [
      "Peritonitis generalizada por perforación de víscera hueca (apéndice o úlcera)",
      "Pancreatitis necrotizante severa con respuesta inflamatoria sistémica",
      "Infección biliar obstructiva grave (Colangitis severa)",
      "Hemorragia gastroesofágica masiva"
    ],
    whyConsult: "La hipotensión severa, confusión mental, respiración muy rápida, frialdad en extremidades y cese de la producción de orina son signos de shock. Requiere llamar a ambulancia u hospitalización de emergencia inmediata.",
    relatedConditions: ["Abdomen Agudo", "Pancreatitis", "Coledocolitiasis"],
    image: "/images/symptoms/shock.jpg",
    seo: {
      title: "Shock Séptico y Emergencias Quirúrgicas en CDMX",
      description: "Insuficiencia multiorgánica por peritonitis o colangitis. Información de urgencia crítica con el Dr. Daniel Guerra.",
      keywords: ["shock septico causas", "peritonitis shock", "insuficiencia organica cirugia", "urgencias medicas cdmx"]
    }
  },
  {
    id: "cg-sym-008",
    slug: "dificultad-para-tragar-sensacion-obstruccion",
    name: "Dificultad para Tragar (Sensación de Obstrucción)",
    description: "La disfagia o dificultad para tragar es la sensación de que la comida o los líquidos se detienen o atoran en su trayecto hacia el estómago. Es un síntoma clave de trastornos del esófago (como acalasia o estenosis) o de compresión externa por parte de una tiroides agrandada (bocio multinodular), y requiere estudio inmediato mediante endoscopia.",
    causes: [
      "Acalasia o espasmo esofágico",
      "Compresión del esófago por bocio tiroideo o nódulos de gran tamaño",
      "Esofagitis cicatrizal por reflujo crónico severo (estenosis esofágica)",
      "Tumores esofágicos benignos o malignos"
    ],
    whyConsult: "Si siente dificultad constante al comer sólidos, dolor al tragar (odinofagia), o si ha tenido que modificar su dieta a puros líquidos para poder alimentarse, acuda de inmediato con el cirujano especialista en aparato digestivo.",
    relatedConditions: ["Disfagia", "Bocio Tiroideo", "Nódulo Tiroideo", "Reflujo Gastroesofágico y Hernia Hiatal"],
    image: "/images/symptoms/dificultad-tragar.jpg",
    seo: {
      title: "Dificultad para Tragar (Disfagia) en Cuello y Esófago CDMX",
      description: "Estudio de causas de comida atorada. Tratamiento de acalasia o bocio con el Dr. Daniel Guerra de Coss.",
      keywords: ["dificultad para tragar comida", "sensacion de obstruccion garganta", "acalasia cirugia", "bocio compresion esofago"]
    }
  },
  {
    id: "cg-sym-009",
    slug: "regurgitacion",
    name: "Regurgitación",
    description: "La regurgitación es el regreso involuntario del contenido del estómago (ácido o alimentos no digeridos) hacia el esófago y la boca, sin esfuerzo ni náuseas. Es el síntoma característico del reflujo gastroesofágico y la hernia hiatal, y también se presenta en trastornos como la acalasia donde la comida no logra entrar al estómago y es expulsada.",
    causes: [
      "Enfermedad por Reflujo Gastroesofágico (ERGE)",
      "Debilidad de la válvula hiatal (Hernia Hiatal)",
      "Retención de comida en el esófago debido a Acalasia",
      "Diverticulo de Zenker"
    ],
    whyConsult: "Debe consultar si la regurgitación es frecuente, se presenta por las noches provocando tos o sensación de ahogo, o si el contenido regurgitado tiene sabor amargo extremo y está lesionando la mucosa de su garganta.",
    relatedConditions: ["Reflujo Gastroesofágico y Hernia Hiatal", "Disfagia"],
    image: "/images/symptoms/regurgitacion.jpg",
    seo: {
      title: "Tratamiento de Regurgitación de Alimento y Ácido en CDMX",
      description: "El regreso de comida o ácido a la boca sugiere hernia hiatal o acalasia. Agende consulta con el Dr. Daniel Guerra.",
      keywords: ["regurgitacion de alimentos", "reflujo acido garganta", "hernia hiatal tratamiento", "miotomia de heller cdmx"]
    }
  },
  {
    id: "cg-sym-010",
    slug: "tos-o-atragantamiento",
    name: "Tos o Atragantamiento",
    description: "La tos crónica o los episodios de atragantamiento al deglutir son mecanismos de defensa de la vía aérea ante la entrada de material extraño. Ocurren de manera secundaria al reflujo gastroesofágico severo nocturno (microaspiración de ácido al pulmón), en pacientes con acalasia grave, o por compresión traqueal ejercida por un bocio en el cuello.",
    causes: [
      "Aspiración silenciosa de ácido estomacal en la noche (reflujo severo)",
      "Trastornos de la deglución y acalasia esofágica",
      "Compresión física de la tráquea por bocio tiroideo multinodular",
      "Esofagitis erosiva"
    ],
    whyConsult: "Si padece tos seca persistente por meses que no cede con tratamientos respiratorios, o si tose frecuentemente mientras come o bebe agua, requiere descartar una causa anatómica digestiva o tiroidea.",
    relatedConditions: ["Reflujo Gastroesofágico y Hernia Hiatal", "Disfagia", "Bocio Tiroideo", "Nódulo Tiroideo"],
    image: "/images/symptoms/tos.jpg",
    seo: {
      title: "Tos Crónica por Reflujo y Atragantamiento al Comer CDMX",
      description: "Tos recurrente de origen digestivo o tiroideo. Descarte reflujo severo o bocio con el Dr. Daniel Guerra de Coss.",
      keywords: ["tos por reflujo gastroesofagico", "atragantarse con saliva causas", "bocio tiroideo tos", "cirujano de esofago cdmx"]
    }
  },
  {
    id: "cg-sym-011",
    slug: "perdida-de-peso",
    name: "Pérdida de Peso",
    description: "La pérdida de peso involuntaria y acelerada es un signo clínico de alerta. Puede deberse a la incapacidad mecánica para comer por disfagia severa, pero también acompaña a enfermedades inflamatorias crónicas, pancreatitis persistente, trastornos de absorción intestinal o sospecha de malignidad en nódulos tiroideos o aparato digestivo.",
    causes: [
      "Incapacidad de alimentarse por disfagia o acalasia avanzada",
      "Trastornos de absorción en el intestino delgado",
      "Cáncer de esófago, estómago o tiroides",
      "Pancreatitis crónica con mala digestión de grasas"
    ],
    whyConsult: "Perder más del 5% del peso corporal en menos de 6 meses de forma involuntaria (sin hacer dieta) es un signo de alarma médica que amerita estudios de diagnóstico urgentes.",
    relatedConditions: ["Disfagia", "Pancreatitis", "Nódulo Tiroideo", "Bocio Tiroideo"],
    image: "/images/symptoms/perdida-peso.jpg",
    seo: {
      title: "Pérdida de Peso Involuntaria y Descarte Quirúrgico CDMX",
      description: "La pérdida de peso rápida sin causa aparente requiere descartar tumores o acalasia. Dr. Daniel Guerra de Coss.",
      keywords: ["perdida de peso involuntaria", "bajar de peso rapido causas", "acalasia perdida de peso", "tiroides bajar de peso"]
    }
  },
  {
    id: "cg-sym-012",
    slug: "sangrado-rectal",
    name: "Sangrado Rectal",
    description: "La presencia de sangre roja brillante durante o después de evacuar (rectorragia) es el signo principal de enfermedades del ano y recto. Aunque usualmente se asocia a hemorroides inflamadas o fisuras anales superficiales, debe ser evaluado sistemáticamente por un cirujano para descartar problemas más internos en el colon.",
    causes: [
      "Venas inflamadas en el canal anal (Hemorroides)",
      "Desgarros en la mucosa anal por estreñimiento (Fisura anal)",
      "Conductos infectados en la zona perianal (Fístula anal)",
      "Pólipos o tumores en el recto y colon"
    ],
    whyConsult: "Siempre que detecte sangrado rectal debe acudir a consulta. Si el sangrado es abundante, de color oscuro, se mezcla con las heces, o viene acompañado de fiebre y debilidad física extrema, acuda a urgencias.",
    relatedConditions: ["Enfermedades del Ano y Recto", "Abdomen Agudo"],
    image: "/images/symptoms/sangrado.jpg",
    seo: {
      title: "Sangrado Rectal al Evacuar y Patología Hemorroidal CDMX",
      description: "Diagnóstico preciso de sangrado rectal. Trate hemorroides y fisuras sin dolor con el Dr. Daniel Guerra de Coss.",
      keywords: ["sangrado al evacuar cdmx", "hemorroides sangrado abundante", "fistula anal sintomas", "especialista en hemorroides"]
    }
  }
];
