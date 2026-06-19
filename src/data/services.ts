import { MedicalService } from "@/types/schema";

export const services: MedicalService[] = [
  {
    id: "cg-ser-001",
    slug: "manga-gastrica",
    name: "Manga Gástrica (Gastrectomía Vertical en Manga)",
    description: "Procedimiento de cirugía bariátrica mínimamente invasivo para la pérdida de peso efectiva y el control de enfermedades metabólicas.",
    longDescription: "La Manga Gástrica es una técnica quirúrgica bariátrica realizada por laparoscopia (mínima invasión) en la cual se remueve aproximadamente el 80% del volumen del estómago, dejándolo en forma de un tubo o 'manga' vertical. Esto restringe físicamente la cantidad de alimento que el paciente puede consumir en una comida y reduce drásticamente los niveles de la hormona grelina (la hormona que estimula el apetito), lo que produce una saciedad temprana y duradera. Es el estándar de oro actual para tratar la obesidad clínica y revertir enfermedades metabólicas asociadas como la diabetes tipo 2 y la hipertensión.",
    type: "hospitalario",
    anesthesiaType: "Anestesia General",
    duration: "60 a 90 minutos",
    recoveryTime: "7 a 10 días para actividades ligeras",
    isPainful: false, // Manejo con analgesia multimodal
    benefits: [
      "Pérdida promedio del 60% al 80% del exceso de peso corporal en un año.",
      "Mejoría o remisión completa de la Diabetes Tipo 2 en un alto porcentaje de casos.",
      "Normalización de la presión arterial y disminución del riesgo cardiovascular.",
      "Reducción sustancial del dolor articular y mejoría de la apnea del sueño.",
      "Abordaje laparoscópico con mínimas cicatrices, menor dolor y rápida recuperación."
    ],
    postOpRecommendations: [
      "Seguir estrictamente el plan de progresión de dieta (líquida, puré, blanda y sólida).",
      "Consumir suplementos vitamínicos y de minerales diarios bajo indicación médica.",
      "Caminar diariamente desde el primer día postoperatorio; evitar cargar objetos pesados durante 4 semanas.",
      "Mantener hidratación constante a pequeños sorbos."
    ],
    priceRange: "Desde $80,000 MXN",
    technicalSpecs: {
      "Técnica Quirúrgica": "Laparoscópica de 4 a 5 puertos",
      "Dispositivos de Engrapado": "Grapadoras quirúrgicas automáticas con refuerzo de sutura",
      "Estancia Hospitalaria": "1 a 2 noches recomendadas"
    },
    relatedConditions: ["obesidad-y-sobrepeso"],
    image: "/images/services/manga-gastrica.jpg",
    seo: {
      title: "Manga Gástrica en CDMX | Promoción Cirugía Bariátrica",
      description: "Cirugía de manga gástrica laparoscópica. Pérdida de peso segura con el Dr. Daniel Guerra de Coss. Precios desde $80,000 MXN.",
      keywords: ["manga gastrica costo mexico", "operacion manga gastrica cdmx", "cirujano bariatra cdmx", "cirugia de la obesidad"]
    }
  },
  {
    id: "cg-ser-002",
    slug: "restitucion-de-transito-intestinal",
    name: "Restitución de Tránsito Intestinal",
    description: "Cirugía reconstructiva para reconectar el intestino y cerrar estomas de colostomía o ileostomía, restableciendo la evacuación natural.",
    longDescription: "La restitución del tránsito intestinal es un procedimiento quirúrgico mayor de alta especialidad diseñado para pacientes que cuentan con un estoma temporal (colostomía o ileostomía). Consiste en liberar los cabos intestinales que fueron exteriorizados hacia la pared del abdomen, evaluar su viabilidad y realizar una unión o anastomosis (mediante sutura o grapadoras especiales) para reconectarlos. Esto restablece la continuidad normal del tracto gastrointestinal, permitiendo al paciente volver a evacuar por vía natural y eliminando el uso definitivo de las bolsas de recolección de estomas.",
    type: "hospitalario",
    anesthesiaType: "Anestesia General",
    duration: "2 a 3 horas",
    recoveryTime: "3 a 4 semanas para recuperación total",
    isPainful: true, // Procedimiento mayor reconstructivo
    benefits: [
      "Cierre definitivo del estoma y eliminación de la bolsa de colostomía o ileostomía.",
      "Restablecimiento de la función fisiológica y evacuación intestinal normal.",
      "Mejora drástica en la calidad de vida, higiene y comodidad diaria del paciente.",
      "Prevención de complicaciones a largo plazo en la piel periestomal."
    ],
    postOpRecommendations: [
      "Dieta blanda y progresiva baja en residuos para no sobrecargar la nueva unión intestinal.",
      "Monitoreo cercano del inicio de evacuaciones y características de las heces.",
      "Cuidados específicos de la herida quirúrgica abdominal donde se ubicaba el estoma.",
      "Evitar esfuerzos físicos pesados durante 6 a 8 semanas."
    ],
    priceRange: "Bajo valoración médica",
    technicalSpecs: {
      "Abordaje": "Abierto o laparoscópico asistido",
      "Tipo de Anastomosis": "Manual con sutura absorbible doble capa o mecánica con grapadoras lineales",
      "Días de Hospitalización": "3 a 5 días promedio para vigilar tolerancia alimentaria"
    },
    relatedConditions: ["abdomen-agudo", "enfermedades-ano-recto"],
    image: "/images/services/restitucion.jpg",
    seo: {
      title: "Restitución de Tránsito Intestinal (Cierre de Estoma) CDMX",
      description: "Cirugía reconstructiva para reconexión de colon e intestino. Elimine la bolsa de colostomía con el Dr. Daniel Guerra de Coss.",
      keywords: ["cierre de colostomia precio", "restitucion de transito intestinal", "operacion de ileostomia", "reconexion de intestinos cdmx"]
    }
  },
  {
    id: "cg-ser-003",
    slug: "manejo-de-estomas",
    name: "Manejo Integral de Estomas",
    description: "Evaluación, cuidados y tratamiento de complicaciones de estomas (colostomía, ileostomía) y diseño de la pared abdominal.",
    longDescription: "El manejo integral de estomas comprende el cuidado especializado, la marcación preoperatoria óptima del sitio, y la prevención o corrección de complicaciones relacionadas con ostomías (colostomías, ileostomías o urostomías). El Dr. Daniel Guerra de Coss brinda atención experta ante complicaciones frecuentes como hernia paraestomal (abultamiento alrededor del estoma), prolapso (salida excesiva de intestino), estenosis (estrechamiento del orificio) o dermatitis severa por fuga de efluente, asegurando el correcto acoplamiento de sistemas colectores y el bienestar cutáneo del paciente.",
    type: "consultorio",
    anesthesiaType: "Sin anestesia (procedimientos clínicos) o anestesia local/general según complicación quirúrgica",
    duration: "30 a 60 minutos en consulta",
    recoveryTime: "Inmediato (ambulatorio)",
    isPainful: false,
    benefits: [
      "Tratamiento efectivo de la piel irritada o ulcerada alrededor del estoma.",
      "Prevención y corrección de fugas incómodas de gases y materia fecal.",
      "Marcación preoperatoria precisa para evitar que el estoma quede en pliegues de la piel.",
      "Corrección quirúrgica de hernias paraestomales con malla de refuerzo."
    ],
    postOpRecommendations: [
      "Utilizar productos protectores de piel y barreras de tamaño exacto.",
      "Mantener una higiene meticulosa con agua y jabón neutro únicamente.",
      "Acudir a consulta ante cambios de coloración del estoma (morado o pálido)."
    ],
    priceRange: "Consulta de especialidad: $1,200 MXN",
    relatedConditions: ["hernia-inguinal-pared-abdominal", "enfermedades-ano-recto"],
    image: "/images/services/estomas.jpg",
    seo: {
      title: "Manejo y Corrección Quirúrgica de Estomas en CDMX",
      description: "Cuidado especializado de colostomías e ileostomías. Reparación de hernias paraestomales con el Dr. Daniel Guerra de Coss.",
      keywords: ["cuidado de colostomia", "hernia paraestomal cirugia", "bolsa de ileostomia fugas", "cirujano general cdmx estomas"]
    }
  },
  {
    id: "cg-ser-004",
    slug: "cirugia-de-esofago",
    name: "Cirugía de Esófago (Miotomía y Antirreflujo)",
    description: "Procedimientos avanzados para tratar la acalasia y el reflujo gastroesofágico severo por mínima invasión.",
    longDescription: "La cirugía de esófago engloba técnicas quirúrgicas laparoscópicas avanzadas para resolver patologías motoras y estructurales del esófago. Incluye la Miotomía de Heller por laparoscopia (para tratar la acalasia), la cual consiste en seccionar las fibras musculares del esfínter esofágico inferior que no se relajan y bloquean el paso del alimento, y la fundoplicación antirreflujo asociada. También abarca la resección de tumores benignos del esófago y la corrección de divertículos esofágicos, restableciendo el paso libre del bolo alimenticio hacia el estómago sin reflujo secundario.",
    type: "hospitalario",
    anesthesiaType: "Anestesia General",
    duration: "2 a 3 horas",
    recoveryTime: "10 a 14 días",
    isPainful: false, // Controlado con analgesia intravenosa
    benefits: [
      "Alivio inmediato y definitivo de la dificultad para tragar (disfagia).",
      "Eliminación de la regurgitación alimentaria y el dolor al comer.",
      "Prevención de neumonía por aspiración de alimentos no digeridos.",
      "Abordaje de mínima invasión con rápida tolerancia alimentaria y alta temprana."
    ],
    postOpRecommendations: [
      "Dieta líquida estricta por 7 días, progresando a papillas y purés durante la segunda semana.",
      "Masticar extremadamente bien cada bocado de alimento una vez iniciada la dieta sólida.",
      "Evitar bebidas carbonatadas y alimentos muy secos o fibrosos inicialmente.",
      "No realizar esfuerzos físicos importantes durante 4 a 6 semanas."
    ],
    priceRange: "Bajo valoración médica",
    technicalSpecs: {
      "Abordaje Quirúrgico": "Laparoscopia avanzada de 5 puertos",
      "Monitoreo Intraoperatorio": "Prueba de permeabilidad esofágica con sonda o azul de metileno",
      "Estancia Promedio": "1 a 2 noches hospitalarias"
    },
    relatedConditions: ["disfagia", "reflujo-gastroesofagico-hernia-hiatal"],
    image: "/images/services/esofago.jpg",
    seo: {
      title: "Cirugía de Esófago y Acalasia (Miotomía de Heller) CDMX",
      description: "Cirugía laparoscópica de esófago para acalasia y disfagia severa. Especialista en tracto digestivo Dr. Daniel Guerra de Coss.",
      keywords: ["miotomia de heller laparoscopica", "cirugia de acalasia cdmx", "especialista en cirugia de esofago", "dificultad para tragar cirugia"]
    }
  },
  {
    id: "cg-ser-005",
    slug: "cirugia-de-estomago",
    name: "Cirugía de Estómago (Gástrica)",
    description: "Tratamiento quirúrgico para úlceras perforadas, tumores gástricos y hernia hiatal gigante mediante laparoscopia.",
    longDescription: "La cirugía de estómago incluye una variedad de procedimientos quirúrgicos para resolver problemas severos como úlceras gástricas complicadas (sangrado o perforación), tumores del estómago (benignos o malignos), y hernias hiatales gigantes que desplazan el estómago hacia el tórax. Dependiendo de la patología, se pueden realizar desde fundoplicaciones para hernia hiatal, gastrectomías parciales (extirpación de una sección del estómago) o cierres primarios de perforaciones con parches de epiplón. La prioridad es resolver el problema funcional u oncológico preservando la capacidad digestiva del paciente.",
    type: "hospitalario",
    anesthesiaType: "Anestesia General",
    duration: "1.5 a 3 horas",
    recoveryTime: "2 a 3 semanas",
    isPainful: false,
    benefits: [
      "Tratamiento curativo de perforaciones de úlcera que ponen en riesgo la vida.",
      "Resolución definitiva de hernia hiatal y reflujo severo resistente a medicamentos.",
      "Resección oncológica con márgenes libres en caso de tumores gástricos.",
      "Abordaje de mínima invasión que acelera la función intestinal postoperatoria."
    ],
    postOpRecommendations: [
      "Dieta fraccionada (comer porciones pequeñas 5 a 6 veces al día).",
      "Evitar condimentos, picantes, grasas y bebidas con gas.",
      "Acudir a revisiones periódicas y realizar estudios de control endoscópico si se requiere.",
      "Reposo relativo y no cargar cosas pesadas por 4 semanas."
    ],
    priceRange: "Bajo valoración médica",
    technicalSpecs: {
      "Equipamiento": "Torre de laparoscopia HD, suturas mecánicas avanzadas",
      "Abordaje": "Laparoscópico o abierto en urgencias",
      "Monitoreo": "Estricto control de sangrado y fugas con pruebas neumáticas o de colorantes"
    },
    relatedConditions: ["reflujo-gastroesofagico-hernia-hiatal", "abdomen-agudo", "obesidad-y-sobrepeso"],
    image: "/images/services/estomago.jpg",
    seo: {
      title: "Cirugía Gástrica y Hernia Hiatal Laparoscópica CDMX",
      description: "Cirugía de estómago por úlceras, tumores o hernia hiatal gigante. Alta especialidad con el Dr. Daniel Guerra de Coss.",
      keywords: ["cirugia gastrica cdmx", "operacion de hernia hiatal", "ulcera gastrica perforada cirugia", "gastrectomia parcial costo"]
    }
  },
  {
    id: "cg-ser-006",
    slug: "cirugia-de-intestino-delgado",
    name: "Cirugía de Intestino Delgado",
    description: "Tratamiento quirúrgico para obstrucciones intestinales, adherencias, perforaciones o divertículos del intestino.",
    longDescription: "La cirugía de intestino delgado se realiza principalmente de urgencia o de forma programada para tratar obstrucciones mecánicas (causadas por bridas, adherencias de cirugías previas o hernias atascadas), perforaciones intestinales, divertículo de Meckel, tumores o sangrado. Consiste en realizar la liberación de adherencias (enterolisis) para desbloquear el paso, o bien una enterectomía (resección de un segmento de intestino dañado) con posterior reconexión o anastomosis para restablecer el libre flujo intestinal.",
    type: "hospitalario",
    anesthesiaType: "Anestesia General",
    duration: "1.5 a 3 horas",
    recoveryTime: "2 a 3 semanas",
    isPainful: true,
    benefits: [
      "Alivio inmediato de la obstrucción intestinal y el dolor cólico severo.",
      "Remoción segura de tejido intestinal gangrenado o perforado.",
      "Prevención de peritonitis e infecciones generalizadas en el abdomen.",
      "Rápida recuperación digestiva con el uso de técnicas laparoscópicas."
    ],
    postOpRecommendations: [
      "Ayuno inicial e introducción muy lenta de dieta líquida y blanda bajo supervisión.",
      "Movilización temprana (caminar) para estimular los movimientos del intestino.",
      "Monitoreo de la temperatura y la presencia de evacuaciones.",
      "Reposo de actividades físicas demandantes durante 6 semanas."
    ],
    priceRange: "Bajo valoración médica",
    technicalSpecs: {
      "Abordaje": "Laparoscópico (preferente) o laparotomía exploradora en casos severos",
      "Tipo de Anastomosis": "Unión manual en dos planos o mecánica lineal",
      "Estancia Hospitalaria": "2 a 4 días promedio"
    },
    relatedConditions: ["abdomen-agudo", "hernia-inguinal-pared-abdominal"],
    image: "/images/services/intestino.jpg",
    seo: {
      title: "Cirugía de Intestino Delgado y Obstrucción Intestinal CDMX",
      description: "Liberación de adherencias y resección intestinal por mínima invasión. Cirujano de urgencia Dr. Daniel Guerra de Coss.",
      keywords: ["obstruccion intestinal cirugia", "bridas y adherencias cirugia", "reseccion de intestino delgado", "perforacion intestinal cirugia"]
    }
  },
  {
    id: "cg-ser-007",
    slug: "cirugia-de-higado-y-vias-biliares",
    name: "Cirugía de Hígado y Vías Biliares",
    description: "Tratamiento especializado para resolver cálculos en los conductos biliares, quistes y colecistitis compleja.",
    longDescription: "La cirugía de hígado y vías biliares abarca procedimientos quirúrgicos dirigidos a tratar obstrucciones del drenaje biliar, quistes hepáticos, tumores de la vía biliar y colecistitis crónicas o agudas complejas. Incluye la exploración de la vía biliar por laparoscopia o vía endoscópica (CPRE) para remover piedras atoradas en el colédoco, derivaciones biliodigestivas para restaurar el flujo biliar obstruido por cicatrices o estrecheces, y la resección de quistes simples del hígado.",
    type: "hospitalario",
    anesthesiaType: "Anestesia General",
    duration: "2 a 4 horas",
    recoveryTime: "3 a 4 semanas",
    isPainful: true,
    benefits: [
      "Restablecimiento inmediato del drenaje biliar, eliminando la ictericia (piel amarilla).",
      "Prevención y tratamiento efectivo de la colangitis (infección biliar grave).",
      "Remoción de quistes y tumores que comprometen la función hepática.",
      "Reducción del riesgo de daño hepático permanente (cirrosis obstructiva)."
    ],
    postOpRecommendations: [
      "Dieta estricta libre de grasas durante las primeras semanas postoperatorias.",
      "Vigilancia estrecha del color de la piel, orina y evacuaciones.",
      "Cuidado e higiene en caso de contar con alguna sonda o drenaje biliar temporal.",
      "Evitar esfuerzos físicos durante 6 semanas."
    ],
    priceRange: "Bajo valoración médica",
    technicalSpecs: {
      "Abordaje": "Laparoscópico con posibilidad de conversión en casos de anatomía difícil",
      "Estudios Intraoperatorios": "Colangiografía intraoperatoria para mapear los conductos en tiempo real",
      "Dispositivos": "Coaguladores avanzados de energía ultrasónica o bipolar"
    },
    relatedConditions: ["colecistitis", "coledocolitiasis", "pancreatitis"],
    image: "/images/services/higado.jpg",
    seo: {
      title: "Cirugía de Hígado y Vías Biliares en CDMX | Dr. Guerra",
      description: "Cirugía compleja de vía biliar, colédoco y quistes hepáticos. Especialista en tracto digestivo Dr. Daniel Guerra de Coss.",
      keywords: ["cirugia de vias biliares cdmx", "exploracion de coledoco laparoscopica", "derivacion biliodigestiva", "especialista en higado y vesicula"]
    }
  },
  {
    id: "cg-ser-008",
    slug: "tiroidectomia",
    name: "Tiroidectomía (Cirugía de Tiroides)",
    description: "Extirpación parcial o total de la glándula tiroides para tratar bocio, nódulos sospechosos y cáncer de tiroides.",
    longDescription: "La tiroidectomía es la extirpación quirúrgica de una parte o de la totalidad de la glándula tiroides. Se realiza de forma programada para tratar nódulos tiroideos con sospecha o confirmación de malignidad, bocios multinodulares de gran tamaño que comprimen la tráquea o el esófago, e hipertiroidismo descontrolado. La cirugía se lleva a cabo mediante técnicas microscópicas y de identificación nerviosa muy precisas, preservando las glándulas paratiroides (que controlan el calcio) y los nervios laríngeos recurrentes (responsables de la voz).",
    type: "hospitalario",
    anesthesiaType: "Anestesia General",
    duration: "90 a 120 minutos",
    recoveryTime: "10 a 14 días",
    isPainful: false, // Dolor leve a moderado bien controlado
    benefits: [
      "Remoción definitiva de nódulos sospechosos y tratamiento curativo del cáncer de tiroides.",
      "Alivio inmediato de la sensación de opresión en el cuello y dificultad para tragar o respirar.",
      "Control definitivo del bocio gigante con excelente resultado estético.",
      "Preservación meticulosa de los nervios de la voz y paratiroides."
    ],
    postOpRecommendations: [
      "Dieta blanda y fría durante las primeras 48 horas para disminuir la inflamación local.",
      "Iniciar terapia de reemplazo hormonal (levotiroxina) según indicación endocrinológica.",
      "Cuidado estético de la cicatriz en el cuello (proteger del sol y aplicar geles cicatrizantes).",
      "Monitorear síntomas de calcio bajo (hormigueo en manos o labios)."
    ],
    priceRange: "Bajo valoración médica",
    technicalSpecs: {
      "Equipamiento": "Dispositivos de hemostasia por energía (LigaSure o Harmonic Focus), sistema de monitoreo de nervios laríngeos",
      "Incisición": "Cervicotomía transversa estética de 4 a 6 cm en pliegue del cuello",
      "Hospitalización": "1 noche recomendada"
    },
    relatedConditions: ["bocio-tiroideo", "nodulo-tiroideo"],
    image: "/images/services/tiroidectomia.jpg",
    seo: {
      title: "Tiroidectomía (Cirugía de Tiroides) en CDMX | Dr. Guerra",
      description: "Extirpación de tiroides por nódulo o bocio con técnica microquirúrgica estética. Dr. Daniel Guerra de Coss, Cirujano.",
      keywords: ["tiroidectomia total precio cdmx", "cirugia de tiroides cicatriz", "operacion de tiroides nodulo", "especialista en bocio tiroideo"]
    }
  },
  {
    id: "cg-ser-009",
    slug: "resection-de-lipomas",
    name: "Resección de Lipomas y Tumores de Piel",
    description: "Extirpación ambulatoria y estética en consultorio de bolas de grasa, quistes sebáceos y tumores benignos bajo anestesia local.",
    longDescription: "La resección de lipomas y tumores benignos de piel/tejido subcutáneo es un procedimiento quirúrgico menor que se realiza en el consultorio. Consiste en aplicar anestesia local en la zona a tratar, realizar una incisión mínima planeada estéticamente, y disecar y extraer por completo la tumoración (ya sea un lipoma de grasa o la cápsula completa de un quiste sebáceo para evitar que vuelva a salir). Se cierra con suturas finas y los tejidos se envían a estudio histopatológico para confirmación diagnóstica definitiva.",
    type: "consultorio",
    anesthesiaType: "Anestesia Local",
    duration: "20 a 30 minutos",
    recoveryTime: "Inmediato (retorno laboral inmediato)",
    isPainful: false, // Totalmente indoloro bajo anestesia local
    benefits: [
      "Procedimiento ambulatorio rápido en consultorio sin requerir quirófano ni ayuno.",
      "Eliminación inmediata de abultamientos antiestéticos o dolorosos.",
      "Extirpación de quistes sebáceos antes de que se infecten y formen abscesos.",
      "Cierre con técnicas de sutura plástica para una cicatrización casi invisible."
    ],
    postOpRecommendations: [
      "Mantener la herida limpia y seca; realizar aseo diario con agua y jabón.",
      "Retirar los puntos de sutura en un periodo de 7 a 10 días en consultorio.",
      "Evitar la exposición solar directa sobre la cicatriz durante los primeros meses."
    ],
    priceRange: "Desde $3,500 MXN (según tamaño y cantidad)",
    relatedConditions: ["lipomas-y-tumores-piel"],
    image: "/images/services/lipomas.jpg",
    seo: {
      title: "Retirar Bola de Grasa y Quistes (Cirugía Ambulatoria) CDMX",
      description: "Extirpación rápida y estética de lipomas y quistes sebáceos con anestesia local. Cirujano General Dr. Daniel Guerra de Coss.",
      keywords: ["reseccion de lipomas consultorio", "quiste sebaceo cirugia ambulatoria", "eliminar bola de grasa precio cdmx", "cirujano de piel cdmx"]
    }
  },
  {
    id: "cg-ser-010",
    slug: "colecistectomia-laparoscopica",
    name: "Colecistectomía Laparoscópica",
    description: "Cirugía de mínima invasión para retirar la vesícula biliar inflamada o con cálculos, previniendo cólicos biliares severos.",
    longDescription: "La Colecistectomía Laparoscópica es la cirugía de elección para retirar la vesícula biliar cuando presenta cálculos (piedras) o inflamación aguda/crónica (colecistitis). Se realiza introduciendo una cámara diminuta de alta definición y pinzas quirúrgicas a través de 3 a 4 incisiones milimétricas en el abdomen. El cirujano diseca y corta de forma segura el conducto cístico y la arteria cística, desprendiendo la vesícula y extrayéndola. Ofrece una recuperación sumamente rápida, menor dolor postoperatorio y mínimas cicatrices.",
    type: "hospitalario",
    anesthesiaType: "Anestesia General",
    duration: "45 a 60 minutos",
    recoveryTime: "5 a 7 días para retomar actividades normales",
    isPainful: false, // Dolor mínimo controlado con analgésicos convencionales
    benefits: [
      "Resolución completa y definitiva del dolor por cólico vesicular.",
      "Prevención de complicaciones potencialmente mortales como pancreatitis o colangitis.",
      "Cirugía ambulatoria o de una sola noche de estancia.",
      "Excelente resultado cosmético con cicatrices casi imperceptibles."
    ],
    postOpRecommendations: [
      "Dieta baja en grasas saturadas durante los primeros 10 a 15 días.",
      "Caminar en casa; evitar realizar esfuerzos físicos extenuantes durante 3 semanas.",
      "Lavado diario de las heridas con agua y jabón; mantenerlas secas."
    ],
    priceRange: "Bajo valoración médica",
    technicalSpecs: {
      "Abordaje": "Laparoscópico con técnica de 3 o 4 puertos",
      "Hemostasia y Cierre": "Clips de titanio o polímero absorbible, sutura intradérmica estética en piel",
      "Estancia": "Ambulatoria o 1 día hospitalario"
    },
    relatedConditions: ["colecistitis", "coledocolitiasis", "pancreatitis"],
    image: "/images/services/colecistectomia.jpg",
    seo: {
      title: "Colecistectomía Laparoscópica (Cirugía de Vesícula) CDMX",
      description: "Cirugía de vesícula biliar de mínima invasión. Evite cólicos y complicaciones. Dr. Daniel Guerra de Coss, Cirujano General.",
      keywords: ["colecistectomia laparoscopica precio cdmx", "operacion de vesicula costo", "piedras en la vesicula cirugia", "cirujano de vesicula cdmx"]
    }
  },
  {
    id: "cg-ser-011",
    slug: "consulta-cirugia-general-bariatrica",
    name: "Consulta de Cirugía General y Bariátrica",
    description: "Valoración médica especializada integral para padecimientos del aparato digestivo, hernias y candidatos a manga gástrica.",
    longDescription: "La consulta de especialidad con el Dr. Daniel Guerra de Coss consiste en una valoración médica exhaustiva y personalizada. Incluye la elaboración de una historia clínica detallada, revisión minuciosa de estudios previos de laboratorio y gabinete (como ultrasonidos o endoscopias), exploración física dirigida del abdomen o cuello, y el establecimiento de un diagnóstico preciso con propuestas de tratamiento quirúrgico o médico. Es el punto de inicio clave para pacientes con dolor abdominal recurrente, hernias palpables, problemas de tiroides o aquellos interesados en iniciar un protocolo para cirugía de manga gástrica.",
    type: "consultorio",
    anesthesiaType: "No requiere",
    duration: "30 a 45 minutos",
    recoveryTime: "Inmediato",
    isPainful: false,
    benefits: [
      "Diagnóstico preciso y plan de tratamiento médico o quirúrgico personalizado.",
      "Explicación detallada y comprensible de su padecimiento y opciones terapéuticas.",
      "Evaluación inicial del Índice de Masa Corporal (IMC) y protocolo bariátrico.",
      "Atención en consultorios de primer nivel en CDMX (Roma Sur/Norte) y Tuxtla Gutiérrez."
    ],
    postOpRecommendations: [
      "Acudir con estudios previos de laboratorio o ultrasonido si cuenta con ellos.",
      "Llevar una lista de medicamentos que toma habitualmente."
    ],
    priceRange: "$1,200 MXN",
    relatedConditions: ["obesidad-y-sobrepeso", "abdomen-agudo", "reflujo-gastroesofagico-hernia-hiatal", "hernia-inguinal-pared-abdominal"],
    image: "/images/services/consulta.jpg",
    seo: {
      title: "Consulta con Cirujano General y Bariatra en CDMX | Dr. Guerra",
      description: "Valoración de cirugía de vesícula, hernias, reflujo y manga gástrica. Precio de consulta $1,200 MXN. CDMX y Chiapas.",
      keywords: ["consulta cirujano general cdmx", "cirujano bariatra df", "consulta de cirugia precio", "torre medica tuxpan cirujano"]
    }
  }
];
