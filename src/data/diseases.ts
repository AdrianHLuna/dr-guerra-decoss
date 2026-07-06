import { MedicalCondition } from "@/types/schema";

export const diseases: MedicalCondition[] = [
  {
    id: "cg-dis-001",
    slug: "obesidad-y-sobrepeso",
    name: "Obesidad y Sobrepeso",
    technicalName: "Obesidad Clínica y Metabólica",
    description: "La obesidad es una enfermedad crónica, multifactorial y progresiva caracterizada por una acumulación excesiva de grasa corporal que afecta la salud general. Va mucho más allá de un tema estético; se trata de una condición médica grave que incrementa de forma drástica el riesgo de padecer diabetes tipo 2, hipertensión, apnea del sueño, problemas articulares y diversos tipos de cáncer. Cuando los tratamientos basados en dieta y ejercicio no son suficientes para lograr una pérdida de peso sostenida, la cirugía bariátrica (como la manga gástrica) se consolida como la alternativa más efectiva y duradera para recuperar la salud y mejorar la calidad de vida.",
    symptoms: [
      "Aumento de peso corporal progresivo",
      "Dificultad para respirar ante mínimos esfuerzos (disnea)",
      "Fatiga y cansancio crónico",
      "Dolor en articulaciones (rodillas, cadera, columna)",
      "Apnea del sueño y ronquidos intensos",
      "Problemas de autoestima y movilidad reducida"
    ],
    causes: [
      "Factores genéticos y predisposición metabólica",
      "Desequilibrio energético (mayor consumo de calorías del necesario)",
      "Estilo de vida sedentario y falta de actividad física",
      "Alteraciones hormonales y del eje intestino-cerebro",
      "Factores psicológicos, estrés y malos hábitos de sueño"
    ],
    riskFactors: [
      "Antecedentes familiares de obesidad",
      "Acceso limitado a alimentos saludables y alta ingesta de ultraprocesados",
      "Trastornos endocrinos como hipotiroidismo o síndrome de ovario poliquístico",
      "Consumo de ciertos medicamentos neuropsiquiátricos o esteroides"
    ],
    mexicoStats: "México ocupa uno de los primeros lugares a nivel mundial en obesidad en adultos, afectando a más del 75% de la población mayor de 20 años con sobrepeso u obesidad.",
    complications: [
      "Diabetes Mellitus Tipo 2 y resistencia a la insulina",
      "Hipertensión arterial y enfermedad cardiovascular",
      "Hígado graso no alcohólico (esteatohepatitis)",
      "Apnea obstructiva del sueño",
      "Desgaste articular severo (osteoartrosis)"
    ],
    treatments: [
      "Manga gástrica por laparoscopia (cirugía bariátrica)",
      "Modificación integral de hábitos alimenticios y apoyo nutricional",
      "Programa estructurado de acondicionamiento físico",
      "Terapia conductual y manejo multidisciplinario"
    ],
    faqs: [
      {
        question: "¿Soy candidato para una cirugía de manga gástrica?",
        answer: "Generalmente son candidatos pacientes con un Índice de Masa Corporal (IMC) mayor a 35, o mayor a 30 si se asocia a enfermedades metabólicas como diabetes, hipertensión o apnea del sueño, y que no hayan logrado perder peso de forma sostenida con métodos convencionales."
      },
      {
        question: "¿Cuánto peso se puede perder después de la manga gástrica?",
        answer: "En promedio, los pacientes logran perder entre el 60% y el 80% del exceso de peso corporal durante el primer año postoperatorio, siempre y cuando sigan el plan de alimentación y estilo de vida recomendado."
      },
      {
        question: "¿Cuál es el tiempo de recuperación para volver al trabajo?",
        answer: "Al realizarse mediante laparoscopia (mínima invasión), la mayoría de los pacientes pueden reincorporarse a labores de oficina de 7 a 10 días después de la intervención."
      }
    ],
    relatedServices: ["manga-gastrica", "cirugia-de-estomago"],
    relatedSymptoms: ["dificultad-para-respirar", "hinchazon-abdominal", "perdida-de-apetito"],
    image: "/enfermedades/obesidad.png",
    seo: {
      title: "Tratamiento Integral de Obesidad y Manga Gástrica en CDMX",
      description: "Recupere su salud con la cirugía de manga gástrica. Tratamiento especializado para la obesidad con el Dr. Daniel Guerra de Coss.",
      keywords: ["manga gastrica cdmx", "tratamiento de la obesidad", "cirugia bariatriaca precio mexico", "cirujano bariatra cdmx"]
    }
  },
  {
    id: "cg-dis-002",
    slug: "abdomen-agudo",
    name: "Abdomen Agudo",
    technicalName: "Síndrome de Abdomen Agudo Quirúrgico",
    description: "El abdomen agudo es una urgencia médica caracterizada por un dolor abdominal de aparición repentina, severo y progresivo, que generalmente tiene menos de 24 a 72 horas de evolución. Esta condición requiere un diagnóstico médico rápido y preciso, ya que con frecuencia se debe a causas graves que necesitan una intervención quirúrgica inmediata (como apendicitis aguda, obstrucción intestinal, perforación de úlcera o colecistitis complicada). La automedicación con analgésicos está estrictamente contraindicada, ya que puede enmascarar los síntomas y retrasar una cirugía que puede salvar la vida.",
    symptoms: [
      "Dolor abdominal severo y continuo",
      "Náuseas y vómitos persistentes",
      "Fiebre o escalofríos",
      "Abdomen rígido o duro al tacto (abdomen en madera)",
      "Incapacidad para canalizar gases o evacuar",
      "Taquicardia y sensación de shock"
    ],
    causes: [
      "Inflamación o infección de órganos abdominales (Apendicitis, Colecistitis)",
      "Perforación de una víscera (úlcera gástrica perforada o divertículo roto)",
      "Obstrucción del flujo intestinal por hernias o bridas",
      "Isquemia o falta de flujo sanguíneo intestinal (infarto mesentérico)"
    ],
    riskFactors: [
      "Presencia de piedras en la vesícula (antecedente de cólicos biliares)",
      "Historial de úlceras gástricas o divertículos",
      "Cirugías abdominales previas (riesgo de adherencias u obstrucción)",
      "Hernias abdominales o inguinales no tratadas"
    ],
    mexicoStats: "El abdomen agudo es una de las principales causas de consulta de urgencias y de cirugía abdominal de emergencia en los hospitales de México.",
    complications: [
      "Peritonitis generalizada (infección en toda la cavidad abdominal)",
      "Sepsis y shock séptico",
      "Falla orgánica múltiple",
      "Muerte si no se realiza tratamiento quirúrgico inmediato"
    ],
    treatments: [
      "Cirugía de urgencia (Laparoscopia diagnóstica o Laparotomía exploradora)",
      "Restitución de tránsito intestinal o resección segmentaria si es necesario",
      "Antibioticoterapia intravenosa y manejo hemodinámico",
      "Ayuno absoluto y descompresión gástrica"
    ],
    faqs: [
      {
        question: "¿Por qué no debo tomar analgésicos si tengo dolor abdominal fuerte?",
        answer: "Los analgésicos pueden disminuir temporalmente el dolor sin curar la causa subyacente. Esto enmascara la gravedad del cuadro, retrasando el diagnóstico de condiciones como una apendicitis rota, lo cual puede derivar en una peritonitis grave."
      },
      {
        question: "¿Cuándo debo acudir de inmediato a urgencias por dolor de panza?",
        answer: "Debe acudir de inmediato si el dolor es insoportable, empeora al moverse o al toser, se acompaña de fiebre, vómito persistente, abdomen duro como una tabla, o si nota sangrado al evacuar."
      },
      {
        question: "¿Cómo se realiza la cirugía para abdomen agudo?",
        answer: "Siempre que el paciente se encuentre estable, el abordaje de elección es la laparoscopia avanzada, ya que permite revisar toda la cavidad abdominal con pequeñas incisiones, identificar el problema y resolverlo con un tiempo mínimo de recuperación."
      }
    ],
    relatedServices: ["restitucion-de-transito-intestinal", "cirugia-de-estomago"],
    relatedSymptoms: ["dolor-abdominal", "nauseas-y-vomitos", "fiebre"],
    image: "/enfermedades/abdomen_agudo.png",
    seo: {
      title: "Urgencias por Abdomen Agudo y Dolor Severo en CDMX",
      description: "Diagnóstico y cirugía de urgencia para abdomen agudo. Evite complicaciones graves de peritonitis. Dr. Daniel Guerra de Coss.",
      keywords: ["abdomen agudo sintomas", "dolor abdominal severo urgencias", "peritonitis causas", "cirujano general cdmx urgencias"]
    }
  },
  {
    id: "cg-dis-003",
    slug: "colecistitis",
    name: "Colecistitis",
    technicalName: "Colecistitis Aguda y Crónica Litiásica",
    description: "La colecistitis es la inflamación de la vesícula biliar, un órgano pequeño en forma de pera ubicado debajo del hígado. En más del 90% de los casos, es causada por la presencia de cálculos o 'piedras' biliares que obstruyen el conducto cístico (el canal de salida de la vesícula). Al quedar la bilis atrapada, se genera una respuesta inflamatoria severa e infección bacteriana secundaria. Si no se trata a tiempo mediante la remoción quirúrgica de la vesícula, puede progresar a necrosis, perforación o peritonitis biliar.",
    symptoms: [
      "Dolor intenso y repentino en la parte superior derecha del abdomen",
      "Dolor que se extiende hacia el hombro derecho o la espalda",
      "Hipersensibilidad al tocar el abdomen del lado derecho",
      "Náuseas y vómitos después de comer alimentos grasos",
      "Fiebre baja y escalofríos"
    ],
    causes: [
      "Obstrucción del conducto biliar por cálculos (litiasis biliar)",
      "Barro biliar espeso que impide el flujo normal de la bilis",
      "Tumores o compresión externa de las vías biliares",
      "Infecciones o afectación en pacientes críticos (colecistitis alitiásica)"
    ],
    riskFactors: [
      "Ser mujer, especialmente en edad fértil",
      "Sobrepeso u obesidad",
      "Pérdida rápida de peso",
      "Dieta rica en grasas y baja en fibra",
      "Embarazo o uso de anticonceptivos orales"
    ],
    mexicoStats: "La colecistitis y la colelitiasis representan una de las cinco causas principales de hospitalización y la cirugía programada más frecuente en el país.",
    complications: [
      "Empiema vesicular (vesícula llena de pus)",
      "Gangrena o necrosis de la pared vesicular",
      "Perforación de la vesícula y peritonitis",
      "Fístula colecistoduodenal (comunicación anormal con el intestino)"
    ],
    treatments: [
      "Colecistectomía laparoscópica (extracción de la vesícula por mínima invasión)",
      "Antibióticos y analgésicos intrahospitalarios",
      "Ayuno y soporte hídrico intravenoso"
    ],
    faqs: [
      {
        question: "¿Se puede vivir una vida normal sin vesícula biliar?",
        answer: "Sí, completamente. La vesícula solo almacena la bilis producida por el hígado. Después de la cirugía, el hígado drena la bilis directamente al intestino delgado de manera continua. La mayoría de los pacientes no experimentan cambios significativos en su digestión a largo plazo."
      },
      {
        question: "¿Los cálculos de la vesícula se pueden eliminar con medicamentos?",
        answer: "No. Los tratamientos con medicamentos no eliminan las piedras de manera efectiva ni evitan que se vuelvan a formar. El único tratamiento definitivo y seguro para prevenir complicaciones graves es la cirugía para extraer la vesícula completa."
      },
      {
        question: "¿Cuánto dura la recuperación tras una colecistectomía laparoscópica?",
        answer: "Es un procedimiento de corta estancia (muchas veces ambulatorio). El paciente puede caminar el mismo día de la cirugía y retomar actividades normales ligeras en 5 a 7 días."
      }
    ],
    relatedServices: ["cirugia-de-higado-y-vias-biliares", "cirugia-de-estomago"],
    relatedSymptoms: ["dolor-abdominal", "nauseas-y-vomitos", "fiebre"],
    image: "/enfermedades/colecistitis.png",
    seo: {
      title: "Cirugía de Vesícula (Colecistitis) por Laparoscopia CDMX",
      description: "Tratamiento definitivo para piedras en la vesícula y colecistitis. Cirugía laparoscópica con el Dr. Daniel Guerra de Coss.",
      keywords: ["cirugia de vesicula cdmx", "piedras en la vesicula sintomas", "colecistectomia laparoscopica", "dolor de vesicula alimentos"]
    }
  },
  {
    id: "cg-dis-004",
    slug: "coledocolitiasis",
    name: "Coledocolitiasis",
    technicalName: "Cálculos en el Conducto Colédoco",
    description: "La coledocolitiasis es la presencia de uno o más cálculos (piedras) dentro del conducto colédoco, que es el canal principal que transporta la bilis desde el hígado y la vesícula hacia el intestino delgado. Ocurre cuando un cálculo formado en la vesícula migra y se atora en este conducto, bloqueando el libre tránsito biliar. Esto provoca que la bilis regrese al hígado y al torrente sanguíneo, causando ictericia (coloración amarilla en ojos y piel), orina oscura y heces claras, además de predisponer a infecciones graves de la vía biliar (colangitis) o inflamación del páncreas (pancreatitis biliar).",
    symptoms: [
      "Ictericia (color amarillento en piel y parte blanca de los ojos)",
      "Coluria (orina oscura, de color similar al refresco de cola)",
      "Acolia (heces pálidas, de color arcilla o blanquecinas)",
      "Dolor tipo cólico severo en el cuadrante superior derecho",
      "Náuseas, vómitos y fiebre en caso de infección asociada"
    ],
    causes: [
      "Migración de cálculos desde la vesícula biliar hacia el colédoco",
      "Formación primaria de cálculos directamente en el conducto debido a estasis biliar",
      "Estrechez del conducto biliar que favorece la acumulación de sedimentos"
    ],
    riskFactors: [
      "Tener diagnóstico previo de piedras en la vesícula (colelitiasis)",
      "Edad avanzada",
      "Historial de cirugías de vesícula previas con cálculos retenidos",
      "Episodios recurrentes de dolor abdominal tipo cólico biliar sin tratamiento"
    ],
    mexicoStats: "Se estima que hasta un 15% de los pacientes que presentan piedras en la vesícula también desarrollan cálculos en el colédoco de forma simultánea.",
    complications: [
      "Colangitis aguda (infección bacteriana grave y potencialmente mortal de la vía biliar)",
      "Pancreatitis aguda biliar (inflamación severa del páncreas)",
      "Cirrosis biliar secundaria por obstrucción crónica"
    ],
    treatments: [
      "Extracción de cálculos vía CPRE (Colangiopancreatografía Retrógrada Endoscópica)",
      "Exploración laparoscópica del conducto colédoco",
      "Colecistectomía posterior para remover la vesícula biliar y prevenir recurrencias",
      "Antibioticoterapia intravenosa de amplio espectro"
    ],
    faqs: [
      {
        question: "¿Qué diferencia hay entre piedras en la vesícula y coledocolitiasis?",
        answer: "Las piedras en la vesícula están 'almacenadas' dentro de ella y causan dolor intermitente. La coledocolitiasis ocurre cuando una piedra sale de la vesícula y tapa el conducto principal (colédoco), obstruyendo la salida de bilis de todo el hígado, lo cual produce la coloración amarilla en la piel (ictericia) y es una urgencia."
      },
      {
        question: "¿Cómo se retiran las piedras del colédoco?",
        answer: "Habitualmente se utiliza un procedimiento endoscópico llamado CPRE para extraerlas a través de la boca sin necesidad de cirugía abierta. En casos complejos, el Dr. Daniel Guerra de Coss puede realizar una exploración laparoscópica de la vía biliar."
      },
      {
        question: "¿Es grave la coledocolitiasis con fiebre?",
        answer: "Sí, es una urgencia médica grave. La fiebre junto con la piel amarilla y dolor sugiere Colangitis (infección biliar), una condición potencialmente mortal que requiere hospitalización y descompresión de la vía biliar de inmediato."
      }
    ],
    relatedServices: ["cirugia-de-higado-y-vias-biliares", "restitucion-de-transito-intestinal"],
    relatedSymptoms: ["dolor-abdominal", "nauseas-y-vomitos", "fiebre"],
    image: "/enfermedades/coledocolitiasis.png",
    seo: {
      title: "Coledocolitiasis e Ictericia (Piedras en Vía Biliar) CDMX",
      description: "Diagnóstico y tratamiento avanzado para coledocolitiasis. Evite pancreatitis y colangitis con el Dr. Daniel Guerra de Coss.",
      keywords: ["coledocolitiasis tratamiento", "piel amarilla causas vesicula", "colangitis aguda urgencias", "cpre vias biliares cdmx"]
    }
  },
  {
    id: "cg-dis-005",
    slug: "bocio-tiroideo",
    name: "Bocio Tiroideo",
    technicalName: "Bocio Multinodular e Hiperplasia Tiroidea",
    description: "El bocio es el crecimiento anormal y difuso de la glándula tiroides, una glándula endocrina en forma de mariposa ubicada en la base del cuello. Este aumento de tamaño puede deberse a deficiencia de yodo, inflamación (tiroiditis) o a la formación de múltiples nódulos en su interior (bocio multinodular). A medida que el bocio crece, puede volverse visible a simple vista como una protuberancia en el cuello y causar síntomas compresivos locales al presionar la tráquea o el esófago, lo que genera dificultad para tragar, respirar o cambios en el tono de la voz.",
    symptoms: [
      "Abultamiento visible o palpable en la base del cuello",
      "Sensación de opresión o 'nudo' en la garganta",
      "Dificultad para tragar alimentos sólidos (disfagia)",
      "Tos seca persistente u opresión al acostarse boca arriba",
      "Ronquera o cambios inexplicables en la voz (disfonía)",
      "Dificultad para respirar (disnea) en bocios muy grandes"
    ],
    causes: [
      "Deficiencia dietética de yodo (menos común en zonas urbanas con sal yodada)",
      "Enfermedad autoinmune (Enfermedad de Hashimoto o de Graves)",
      "Formación de múltiples nódulos benignos (bocio multinodular)",
      "Factores genéticos y hormonales (es más frecuente en mujeres)"
    ],
    riskFactors: [
      "Pertenecer al sexo femenino",
      "Edad mayor a 40 años",
      "Antecedentes familiares de enfermedad tiroidea",
      "Residir en zonas con deficiencia de yodo en suelo y agua",
      "Exposición previa a radiación en cabeza o cuello"
    ],
    mexicoStats: "El bocio multinodular es la patología tiroidea benigna más común que requiere evaluación y eventual cirugía en la población mexicana adulta.",
    complications: [
      "Obstrucción de la vía aérea (dificultad respiratoria severa)",
      "Compresión esofágica severa",
      "Hipertiroidismo secundario (bocio multinodular tóxico)",
      "Desarrollo oculto de cáncer de tiroides en alguno de los nódulos"
    ],
    treatments: [
      "Tiroidectomía total o parcial (remoción quirúrgica de la tiroides)",
      "Tratamiento de reemplazo hormonal tiroideo posterior a la cirugía",
      "Monitoreo clínico y ultrasonográfico en bocios pequeños no obstructivos"
    ],
    faqs: [
      {
        question: "¿Cuándo requiere cirugía un bocio tiroideo?",
        answer: "La cirugía (tiroidectomía) se indica si el bocio causa dificultad para respirar o tragar, si crece rápidamente, si altera la función hormonal sin control con medicamentos, o si existe sospecha de malignidad en los estudios de biopsia."
      },
      {
        question: "¿Se retira toda la tiroides en la operación?",
        answer: "Depende de la extensión. En bocios multinodulares que afectan ambos lados, suele realizarse una tiroidectomía total para evitar que vuelva a crecer. Si solo un lado está afectado y el otro es sano, puede considerarse una lobectomía."
      },
      {
        question: "¿Qué cuidados se deben tener después de retirar la tiroides?",
        answer: "Si se retira toda la glándula, el paciente deberá tomar una tableta diaria de hormona tiroidea de por vida para suplir la función del órgano, teniendo una calidad de vida excelente y sin limitaciones."
      }
    ],
    relatedServices: ["tiroidectomia", "resection-de-lipomas"],
    relatedSymptoms: ["dificultad-para-tragar-sensacion-obstruccion", "tos-o-atragantamiento"],
    image: "/enfermedades/bocio.png",
    seo: {
      title: "Cirugía de Bocio Tiroideo y Tiroidectomía en CDMX",
      description: "Especialista en cirugía de tiroides. Tratamiento definitivo para bocio multinodular y cuello inflamado. Dr. Daniel Guerra de Coss.",
      keywords: ["bocio tiroideo cirugia", "tiroidectomia total precio", "operacion de tiroides cdmx", "bola en el cuello tiroides"]
    }
  },
  {
    id: "cg-dis-006",
    slug: "nodulo-tiroideo",
    name: "Nódulo Tiroideo",
    technicalName: "Nódulo Tiroideo Solitario o Múltiple",
    description: "Un nódulo tiroideo es un crecimiento focal de células dentro de la glándula tiroides que resulta en una masa o 'bola' delimitada en el cuello. Pueden ser sólidos, quísticos (llenos de líquido) o mixtos. Aunque más del 90% de los nódulos tiroideos son benignos, su hallazgo requiere una evaluación médica exhaustiva que incluye ultrasonido de alta resolución y, con frecuencia, una biopsia por aspiración con aguja fina (BAAF) para descartar cáncer de tiroides. Su extirpación está indicada si resultan malignos, sospechosos, si producen hormonas en exceso o si causan molestias físicas.",
    symptoms: [
      "Protuberancia pequeña palpable en la parte frontal del cuello",
      "Sensación de molestia al abotonarse el cuello de la camisa",
      "Dificultad o incomodidad leve al tragar líquidos o sólidos",
      "Dolor ocasional en el cuello que se irradia hacia el oído",
      "Cambios sutiles en la voz o carraspeo frecuente"
    ],
    causes: [
      "Crecimiento excesivo de tejido tiroideo normal (adenoma benigno)",
      "Acumulación de líquido en la glándula (quiste tiroideo)",
      "Inflamación crónica de la glándula (tiroiditis)",
      "Mutaciones celulares que derivan en cáncer de tiroides"
    ],
    riskFactors: [
      "Sexo femenino y edad avanzada",
      "Historial personal o familiar de bocio o nódulos tiroideos",
      "Antecedente de radioterapia médica en cabeza, cuello o tórax durante la infancia",
      "Deficiencia prolongada de yodo en la dieta"
    ],
    mexicoStats: "Los nódulos tiroideos son sumamente frecuentes, detectándose por ultrasonido hasta en el 50% de las mujeres mayores de 50 años.",
    complications: [
      "Desarrollo y propagación de cáncer de tiroides (carcinoma papilar o folicular)",
      "Hipertiroidismo clínico (nódulo autónomo o hiperfuncionante)",
      "Efecto de masa con desviación y compresión traqueal"
    ],
    treatments: [
      "Tiroidectomía (cirugía de extirpación tiroidea parcial o total)",
      "Biopsia por aspiración con aguja fina (BAAF) guiada por ultrasonido",
      "Vigilancia activa ultrasonográfica periódica para nódulos benignos pequeños"
    ],
    faqs: [
      {
        question: "¿Cómo saber si mi nódulo tiroideo es cáncer?",
        answer: "El primer paso es realizar un ultrasonido tiroideo para evaluar sus características. Si tiene sospecha de sospecha (microcalcificaciones, bordes irregulares, vascularidad central), se realiza una biopsia con aguja fina (BAAF) en el consultorio, la cual nos da un diagnóstico sumamente preciso."
      },
      {
        question: "¿Qué pasa si la biopsia sale benigna?",
        answer: "Si el nódulo es benigno y no causa molestias para tragar o respirar, ni altera las hormonas, no requiere cirugía de inmediato. Se mantiene bajo vigilancia con ultrasonido cada 6 a 12 meses."
      },
      {
        question: "¿La cirugía de nódulo tiroideo deja cicatriz muy visible?",
        answer: "Se realiza a través de una incisión horizontal pequeña en un pliegue natural del cuello. Con técnicas de sutura estética y cuidados postoperatorios de la piel, la cicatriz suele volverse casi imperceptible con el tiempo."
      }
    ],
    relatedServices: ["tiroidectomia", "resection-de-lipomas"],
    relatedSymptoms: ["dificultad-para-tragar-sensacion-obstruccion", "tos-o-atragantamiento"],
    image: "/enfermedades/nodulo-tiroideo.png",
    seo: {
      title: "Diagnóstico y Cirugía de Nódulo Tiroideo en CDMX",
      description: "Valoración experta de nódulos tiroideos. Biopsia y cirugía de tiroides con el cirujano laparoscopista avanzado Dr. Daniel Guerra de Coss.",
      keywords: ["nodulo tiroideo benigno", "biopsia de tiroides cdmx", "cancer de tiroides cirugia", "operacion de nodulo tiroideo"]
    }
  },
  {
    id: "cg-dis-007",
    slug: "pancreatitis",
    name: "Pancreatitis",
    technicalName: "Pancreatitis Aguda Biliar y Alcohólica",
    description: "La pancreatitis es la inflamación repentina del páncreas, una glándula grande ubicada detrás del estómago que produce enzimas digestivas y hormonas como la insulina. En México, la causa más común (más del 60%) es la migración de un cálculo biliar que obstruye el conducto pancreático, haciendo que las enzimas digestivas se activen dentro del páncreas en lugar del intestino, lo que provoca que el órgano se auto-digiera. Esto genera una inflamación severa con dolor abdominal sumamente intenso ('dolor en cinturón') que requiere hospitalización inmediata debido al riesgo de complicaciones sistémicas graves.",
    symptoms: [
      "Dolor severo y persistente en la parte alta del abdomen",
      "Dolor que atraviesa o se irradia en forma de cinturón hacia la espalda",
      "Náuseas y vómitos abundantes que no calman el dolor",
      "Abdomen inflamado y muy doloroso a la menor presión",
      "Fiebre, taquicardia y sudoración fría"
    ],
    causes: [
      "Cálculos biliares procedentes de la vesícula que bloquean el conducto pancreático (biliar)",
      "Consumo excesivo y crónico de alcohol",
      "Niveles muy elevados de triglicéridos en sangre (hipertrigliceridemia)",
      "Efectos secundarios de ciertos medicamentos o traumatismos abdominales"
    ],
    riskFactors: [
      "Tener piedras en la vesícula sin tratamiento quirúrgico",
      "Consumo frecuente de bebidas alcohólicas",
      "Tener triglicéridos por encima de 500 mg/dl",
      "Antecedentes familiares de pancreatitis o cálculos biliares"
    ],
    mexicoStats: "La pancreatitis aguda biliar es una de las emergencias gastroenterológicas más comunes e importantes en los hospitales del país.",
    complications: [
      "Necrosis pancreática (muerte del tejido del páncreas con riesgo de infección)",
      "Pseudoquiste pancreático (acumulación de líquido y enzimas digestivas)",
      "Falla orgánica sistémica (renal, respiratoria o cardiovascular)",
      "Shock y sepsis grave"
    ],
    treatments: [
      "Hospitalización en cuidados intermedios o intensivos",
      "Ayuno absoluto para dar reposo al páncreas y sueros intravenosos de gran volumen",
      "Medicamentos para controlar el dolor y prevenir infecciones",
      "Colecistectomía laparoscópica una vez resuelta la inflamación (para evitar nuevos episodios)"
    ],
    faqs: [
      {
        question: "¿Por qué da pancreatitis por piedras en la vesícula?",
        answer: "Porque el conducto que sale de la vesícula se une con el conducto del páncreas antes de entrar al intestino. Si una piedra pequeña viaja por ahí, puede tapar la salida común, provocando que los jugos digestivos del páncreas se regresen y lo inflamen severamente."
      },
      {
        question: "¿La pancreatitis siempre requiere cirugía inmediata?",
        answer: "No. En la fase inicial aguda, el tratamiento es médico (ayuno, hidratación y analgésicos). La cirugía se realiza posteriormente para retirar la vesícula y evitar que se repita la pancreatitis, o bien de urgencia si se infecta el tejido necrótico del páncreas."
      },
      {
        question: "¿Cuál es el pronóstico de una pancreatitis aguda?",
        answer: "La mayoría (80%) son de carácter leve y se resuelven en una semana de hospitalización. Sin embargo, un 20% pueden ser graves y requerir terapia intensiva. El diagnóstico temprano con el Dr. Daniel Guerra de Coss es clave."
      }
    ],
    relatedServices: ["cirugia-de-higado-y-vias-biliares", "restitucion-de-transito-intestinal"],
    relatedSymptoms: ["dolor-abdominal", "nauseas-y-vomitos", "fiebre"],
    image: "/enfermedades/pancreatitis.png",
    seo: {
      title: "Tratamiento de Pancreatitis Aguda en CDMX",
      description: "Especialista en el manejo de pancreatitis de origen biliar. Prevenga recaídas con cirugía de vesícula oportuna. Dr. Daniel Guerra de Coss.",
      keywords: ["pancreatitis aguda causas", "dolor en cinturon espalda", "pancreatitis biliar tratamiento", "urgencias gastroenterologia cdmx"]
    }
  },
  {
    id: "cg-dis-008",
    slug: "disfagia",
    name: "Disfagia",
    technicalName: "Disfagia Esofágica Quirúrgica",
    description: "La disfagia es la dificultad o imposibilidad para tragar alimentos sólidos o líquidos de manera normal, sintiendo que la comida se atora en la garganta o el pecho. No es una enfermedad en sí misma, sino un síntoma clínico cardinal de problemas estructurales o funcionales del esófago. En el ámbito quirúrgico, puede deberse a estrechamientos (estenosis), trastornos del movimiento como la acalasia, reflujo crónico que daña el esófago o a la presencia de tumores esofágicos. Su estudio temprano es vital para descartar problemas oncológicos.",
    symptoms: [
      "Sensación de que el alimento se queda atorado en el pecho",
      "Dolor al tragar (odinofagia)",
      "Regurgitación de alimentos no digeridos",
      "Tos, carraspeo o atragantamiento constante al comer",
      "Pérdida de peso involuntaria y desnutrición",
      "Reflujo de ácido estomacal severo"
    ],
    causes: [
      "Acalasia (falta de relajación del esfínter inferior del esófago)",
      "Estenosis esofágica (estrechamiento por cicatrices de reflujo severo)",
      "Cáncer de esófago o tumores benignos",
      "Anillos o membranas esofágicas congénitas o adquiridas"
    ],
    riskFactors: [
      "Padecer Reflujo Gastroesofágico (ERGE) severo y sin tratamiento",
      "Tabaquismo y consumo crónico de alcohol",
      "Edad avanzada",
      "Trastornos neurológicos previos que afecten la deglución"
    ],
    mexicoStats: "La disfagia secundaria a reflujo gastroesofágico y hernia hiatal es una de las causas más frecuentes de consulta en la alta especialidad de tracto digestivo.",
    complications: [
      "Neumonía por aspiración (alimento que se desvía a los pulmones)",
      "Desnutrición y deshidratación severa",
      "Perforación esofágica secundaria a estenosis",
      "Esófago de Barrett y progresión a cáncer"
    ],
    treatments: [
      "Cirugía de esófago (Miotomía de Heller por laparoscopia para acalasia)",
      "Dilatación esofágica endoscópica",
      "Fundoplicación laparoscópica para reflujo causante de estenosis",
      "Resección quirúrgica en caso de tumores"
    ],
    faqs: [
      {
        question: "¿Qué debo hacer si siento que la comida se me atora en el pecho?",
        answer: "Debe programar una valoración médica de inmediato con un especialista en cirugía digestiva. El Dr. Daniel Guerra de Coss solicitará estudios como una endoscopia o una serie esofagogástrica para visualizar el interior del esófago."
      },
      {
        question: "¿Qué es la acalasia y cómo se cura?",
        answer: "La acalasia es un trastorno donde la válvula inferior del esófago no se abre para dejar pasar la comida al estómago. Se trata de forma definitiva y mínimamente invasiva con una cirugía laparoscópica llamada Miotomía de Heller, que corta las fibras musculares de la válvula para liberar el paso."
      },
      {
        question: "¿La dificultad para tragar puede ser signo de cáncer?",
        answer: "Sí, especialmente si la dificultad comenzó con alimentos sólidos, fue progresando a líquidos, y se acompaña de pérdida de peso rápida. Por ello, la disfagia es un síntoma de alarma que nunca debe ignorarse."
      }
    ],
    relatedServices: ["cirugia-de-esofago", "cirugia-de-estomago"],
    relatedSymptoms: ["dificultad-para-tragar-sensacion-obstruccion", "regurgitacion", "tos-o-atragantamiento"],
    image: "/enfermedades/disfagia.png",
    seo: {
      title: "Dificultad para Tragar (Disfagia) | Tratamiento en CDMX",
      description: "Estudio y cirugía para acalasia y dificultad para tragar. Recupere su capacidad de comer con el Dr. Daniel Guerra de Coss.",
      keywords: ["dificultad para tragar saliva", "acalasia miotomia de heller cdmx", "comida atorada en el esofago", "especialista en esofago"]
    }
  },
  {
    id: "cg-dis-009",
    slug: "enfermedades-ano-recto",
    name: "Enfermedades del Ano y Recto",
    technicalName: "Patología Anorrectal Benigna",
    description: "Las enfermedades del ano y el recto engloban un grupo de padecimientos altamente frecuentes que afectan la zona terminal del tracto digestivo. Entre las más comunes se encuentran las hemorroides (venas inflamadas), las fisuras anales (desgarros en la piel del ano), las fístulas (conductos infectados anormales) y los abscesos anorrectales. Estas condiciones suelen provocar dolor intenso al evacuar, sangrado rojo brillante y comezón. Aunque causan incomodidad y vergüenza en el paciente, su diagnóstico temprano por parte del cirujano es fundamental para descartar patologías más graves y brindar un tratamiento efectivo que devuelva el bienestar diario.",
    symptoms: [
      "Dolor agudo o ardor intenso durante o después de evacuar",
      "Sangrado rectal rojo brillante al limpiarse o en la taza del baño",
      "Sensación de un bulto o inflamación en la zona anal",
      "Secreción de pus o moco a través de la piel cercana al ano",
      "Comezón (prurito anal) constante y difícil de aliviar"
    ],
    causes: [
      "Estreñimiento crónico o esfuerzo excesivo al evacuar",
      "Dieta baja en fibra y consumo insuficiente de agua",
      "Permanecer sentado en el inodoro por períodos prolongados",
      "Infección de las glándulas anales que derivan en abscesos y fístulas"
    ],
    riskFactors: [
      "Sedentarismo y hábitos alimenticios deficientes",
      "Embarazo (debido al aumento de presión intraabdominal)",
      "Práctica de sexo anal sin lubricación o cuidados adecuados",
      "Historial de estreñimiento crónico o diarreas frecuentes"
    ],
    mexicoStats: "La patología hemorroidal y las fisuras anales representan uno de los motivos más habituales de consulta con el cirujano laparoscopista avanzado en la población económicamente activa.",
    complications: [
      "Trombosis hemorroidal (dolor extremo por un coágulo en la hemorroide)",
      "Infección severa (sepsis de origen anorrectal o gangrena de Fournier)",
      "Anemia crónica por sangrado rectal constante",
      "Cicatrización deficiente con estenosis anal"
    ],
    treatments: [
      "Cirugía de hemorroides (hemorroidectomía abierta o con energía avanzada)",
      "Fistulotomía o colocación de setón para fístulas anales",
      "Esfinterotomía química o quirúrgica para fisura anal crónica",
      "Drenaje inmediato de abscesos anales"
    ],
    faqs: [
      {
        question: "¿El sangrado al evacuar siempre se debe a hemorroides?",
        answer: "No necesariamente. Aunque las hemorroides son la causa más común, el sangrado rectal (rectorragia) también puede ser síntoma de fisuras, pólipos, fístulas o incluso cáncer colorrectal. Por ello, todo sangrado debe ser revisado por un médico especialista."
      },
      {
        question: "¿La cirugía de hemorroides es dolorosa?",
        answer: "Las técnicas quirúrgicas modernas y el uso de dispositivos de energía avanzada reducen significativamente el dolor postoperatorio en comparación con las técnicas antiguas. Además, el manejo analgésico actual permite una recuperación bastante tolerable en casa."
      },
      {
        question: "¿Qué es una fístula anal y por qué requiere cirugía?",
        answer: "Una fístula anal es un pequeño túnel que comunica el interior del ano con la piel externa, drenando pus constantemente. No se cura con medicamentos; requiere cirugía para abrir o reparar el trayecto y permitir que cicatrice desde adentro hacia afuera sin dañar el esfínter anal."
      }
    ],
    relatedServices: ["restitucion-de-transito-intestinal", "resection-de-lipomas"],
    relatedSymptoms: ["sangrado-rectal", "dolor-abdominal", "fiebre"],
    image: "/enfermedades/anorrectal.png",
    seo: {
      title: "Tratamiento de Hemorroides, Fisuras y Fístulas en CDMX",
      description: "Diagnóstico y cirugía especializada de patología anorrectal. Alivie el dolor y sangrado anal con el Dr. Daniel Guerra de Coss.",
      keywords: ["operacion de hemorroides precio cdmx", "sangrado al evacuar causas", "fistula anal operacion", "cirujano general cdmx hemorroides"]
    }
  },
  {
    id: "cg-dis-010",
    slug: "lipomas-y-tumores-piel",
    name: "Lipomas y Tumores de Piel",
    technicalName: "Lipomas, Quistes Sebáceos y Tumores Benignos cutáneos",
    description: "Los lipomas y tumores benignos de la piel y tejido subcutáneo son crecimientos celulares anormales pero no cancerígenos ubicados debajo o sobre la piel. Los lipomas son masas de grasa de crecimiento lento que se sienten blandas y móviles al tacto. Los quistes sebáceos son sacos llenos de queratina que pueden infectarse y causar dolor o drenar material purulento. Aunque no representan un peligro de malignidad en su gran mayoría, su remoción quirúrgica (resección) está indicada por razones estéticas, dolor debido a compresión nerviosa, crecimiento acelerado o infección recurrente.",
    symptoms: [
      "Masa blanda y gomosa justo debajo de la piel",
      "La masa se mueve fácilmente con la presión de los dedos",
      "Aparición de un punto oscuro en el centro de la masa (en quistes)",
      "Dolor si la tumoración crece rápido o comprime un nervio cercano",
      "Enrojecimiento, calor e inflamación si el quiste se infecta"
    ],
    causes: [
      "Predisposición genética (historia familiar de lipomatosis)",
      "Obstrucción de los conductos de las glándulas sebáceas de la piel (en quistes)",
      "Microtraumatismos locales repetitivos"
    ],
    riskFactors: [
      "Tener entre 40 y 60 años (edad más común para lipomas)",
      "Antecedentes de quistes de acné severo",
      "Síndromes genéticos específicos como el Síndrome de Gardner"
    ],
    mexicoStats: "La resección de lipomas y quistes epidérmicos es uno de los procedimientos quirúrgicos ambulatorios en consultorio más solicitados en la práctica general.",
    complications: [
      "Infección severa con formación de abscesos que requieren drenaje urgente",
      "Ruptura interna del quiste provocando una reacción inflamatoria dolorosa",
      "Cicatrización queloide o deformidad estética si no se opera con técnica plástica",
      "Sospecha diagnóstica errónea (confundir un sarcoma raro con un lipoma simple)"
    ],
    treatments: [
      "Resección quirúrgica ambulatoria bajo anestesia local en consultorio",
      "Drenaje y curación en caso de quistes infectados activos",
      "Análisis histopatológico (biopsia de la pieza retirada) por seguridad"
    ],
    faqs: [
      {
        question: "¿La cirugía de lipomas requiere hospitalización?",
        answer: "No. En la gran mayoría de los casos es una cirugía menor que se realiza en el consultorio médico, dura menos de 30 minutos, se utiliza anestesia local y el paciente se va caminando a su casa inmediatamente."
      },
      {
        question: "¿Qué pasa si me dejo un lipoma y no me lo opero?",
        answer: "Si es benigno y no le molesta, puede quedarse ahí sin problema. Sin embargo, los lipomas tienden a crecer lentamente y, cuanto más grandes se vuelven, la cirugía posterior requerirá una incisión mayor. Es preferible retirarlos cuando son pequeños."
      },
      {
        question: "¿Qué diferencia hay entre un lipoma y un quiste sebáceo?",
        answer: "El lipoma está compuesto puramente de células grasas y es blando y móvil. El quiste sebáceo es un saco lleno de grasa y queratina de consistencia un poco más firme, suele tener un pequeño punto negro al centro y tiene una alta tendencia a infectarse y doler."
      }
    ],
    relatedServices: ["resection-de-lipomas", "tiroidectomia"],
    relatedSymptoms: ["dolor-abdominal", "fiebre"],
    image: "/enfermedades/lipoma.png",
    seo: {
      title: "Extirpación de Lipomas y Quistes en Consultorio CDMX",
      description: "Cirugía ambulatoria de lipomas y quistes sebáceos sin dolor. Procedimiento estético con anestesia local. Dr. Daniel Guerra de Coss.",
      keywords: ["reseccion de lipoma precio", "quiste sebaceo infectado cirugia", "retirar bola de grasa cdmx", "cirujano general consultorio"]
    }
  },
  {
    id: "cg-dis-011",
    slug: "reflujo-gastroesofagico-hernia-hiatal",
    name: "Reflujo Gastroesofágico y Hernia Hiatal",
    technicalName: "Enfermedad por Reflujo Gastroesofágico (ERGE) y Hernia Hiatal",
    description: "La Enfermedad por Reflujo Gastroesofágico (ERGE) es una afección crónica en la cual el ácido o el contenido estomacal regresa hacia el esófago, irritando el revestimiento esofágico. Con frecuencia, el reflujo está directamente relacionado con una Hernia Hiatal, una condición donde la parte superior del estómago se desliza hacia el tórax a través del hiato (la abertura en el diafragma). Esto debilita la válvula que impide el regreso del ácido, causando acidez persistente, ardor en el pecho y dificultad para tragar. Cuando los medicamentos ya no controlan los síntomas o hay complicaciones, la cirugía laparoscópica es el tratamiento reconstructivo definitivo.",
    symptoms: [
      "Ardor o dolor en el pecho (pirosis) que empeora al acostarse o inclinarse",
      "Regurgitación de alimentos o líquido agrio hacia la boca",
      "Dificultad o dolor al tragar (disfagia)",
      "Tos seca y persistente, ronquera o asma inducida por reflujo",
      "Sensación de un nudo en la garganta o ahogo nocturno"
    ],
    causes: [
      "Debilidad o relajación anormal del esfínter esofágico inferior (válvula)",
      "Desplazamiento del estómago hacia el tórax (Hernia Hiatal)",
      "Aumento de la presión intraabdominal debido a sobrepeso o embarazo",
      "Retraso en el vaciamiento gástrico"
    ],
    riskFactors: [
      "Obesidad o sobrepeso significativo",
      "Consumo de tabaco y alcohol",
      "Dieta alta en irritantes, cafeína, chocolates y grasas",
      "Cenar muy tarde o acostarse inmediatamente después de comer"
    ],
    mexicoStats: "La ERGE y la hernia hiatal son de las patologías digestivas más recurrentes en la consulta de especialidad en México, afectando fuertemente la calidad de vida y el sueño.",
    complications: [
      "Esofagitis (inflamación y erosión del esófago)",
      "Estenosis esofágica (estrechamiento del esófago por cicatrices)",
      "Esófago de Barrett (cambio celular premaligno)",
      "Cáncer de esófago (adenocarcinoma)"
    ],
    treatments: [
      "Fundoplicación laparoscópica Nissen (cirugía antirreflujo mínimamente invasiva)",
      "Reparación del hiato diafragmático (hiatoplastia con o sin malla)",
      "Uso de inhibidores de bomba de protones y antiácidos (manejo médico paliativo)",
      "Pérdida de peso y cambios estrictos en el estilo de vida"
    ],
    faqs: [
      {
        question: "¿Cómo cura la cirugía el reflujo y la hernia hiatal?",
        answer: "La cirugía (Fundoplicación Nissen) regresa el estómago a su posición normal en el abdomen, cierra la abertura del diafragma para corregir la hernia, y utiliza la parte superior del estómago para envolver el esófago, recreando una válvula firme que impide por completo el paso de ácido."
      },
      {
        question: "¿Tengo que tomar medicamentos para el reflujo de por vida?",
        answer: "Muchos pacientes toman medicamentos diariamente por años. La cirugía antirreflujo laparoscópica ofrece una alternativa definitiva para suspender los medicamentos en más del 90% de los casos seleccionados."
      },
      {
        question: "¿Qué estudios necesito para saber si me debo operar de reflujo?",
        answer: "Generalmente se requiere una endoscopia superior, una serie esofagogástrica, una manometría esofágica (para evaluar el movimiento del esófago) y una pH-metría de 24 horas (para medir el grado de acidez real)."
      }
    ],
    relatedServices: ["cirugia-de-esofago", "cirugia-de-estomago"],
    relatedSymptoms: ["regurgitacion", "dificultad-para-tragar-sensacion-obstruccion", "tos-o-atragantamiento"],
    image: "/enfermedades/reflujo.png",
    seo: {
      title: "Cirugía de Reflujo y Hernia Hiatal (Laparoscopia) CDMX",
      description: "Tratamiento definitivo antirreflujo. Elimine la acidez y cure la hernia hiatal con el Dr. Daniel Guerra de Coss.",
      keywords: ["cirugia antirreflujo nissen", "hernia hiatal operacion cdmx", "esofago de barrett tratamiento", "fundoplicacion laparoscopica precio"]
    }
  },
  {
    id: "cg-dis-012",
    slug: "hernia-inguinal-pared-abdominal",
    name: "Hernia Inguinal y de Pared Abdominal",
    technicalName: "Hernioplastias de Pared (Inguinal, Umbilical, Incisional)",
    description: "Una hernia ocurre cuando un órgano o tejido interno sobresale a través de un punto débil o una abertura en la capa muscular que lo rodea. Las más comunes son la hernia inguinal (en la ingle), la hernia umbilical (en el ombligo) y la hernia incisional (en la cicatriz de una cirugía anterior). Se manifiestan como un bulto que suele aumentar de tamaño con el esfuerzo físico, tos o al estar de pie. Las hernias no se curan solas ni con fajas; el único tratamiento efectivo y seguro es la cirugía para cerrar el defecto y colocar una malla de refuerzo para evitar recidivas.",
    symptoms: [
      "Abultamiento visible debajo de la piel en la ingle, ombligo o abdomen",
      "Dolor o sensación de presión al cargar peso, toser o hacer esfuerzo",
      "Dolor sordo y constante al final de un día de mucha actividad",
      "Sensación de quemazón o debilidad en la zona afectada"
    ],
    causes: [
      "Aumento prolongado de la presión dentro del abdomen (embarazo, obesidad, tos crónica)",
      "Esfuerzo físico excesivo o levantamiento de objetos pesados",
      "Debilidad congénita de los tejidos musculares de la ingle",
      "Mala cicatrización u obesidad tras cirugías previas de abdomen"
    ],
    riskFactors: [
      "Ser hombre (el canal inguinal es anatómicamente más débil)",
      "Sobrepeso o cambios drásticos de peso",
      "Tener tos crónica o estreñimiento severo",
      "Antecedentes de cirugías abdominales mayores"
    ],
    mexicoStats: "La reparación de hernias inguinales y umbilicales es de los procedimientos más comunes en la práctica diaria de la cirugía laparoscópica avanzada en México.",
    complications: [
      "Encarcelamiento (el tejido queda atrapado en el defecto muscular sin poder regresar)",
      "Estrangulamiento (pérdida de flujo sanguíneo en el tejido atrapado, que puede causar necrosis intestinal en pocas horas)",
      "Perforación intestinal y peritonitis"
    ],
    treatments: [
      "Hernioplastia laparoscópica con colocación de malla (mínima invasión)",
      "Hernioplastia abierta con colocación de malla",
      "Reducción manual temporal (no curativa)"
    ],
    faqs: [
      {
        question: "¿Qué pasa si no me opero una hernia?",
        answer: "Las hernias tienden a crecer con el tiempo. El principal riesgo de no operarse es que el intestino se atore en la hernia (encarcelamiento), lo cual se convierte en una urgencia médica grave que requiere cirugía de emergencia para evitar la muerte de esa sección del intestino."
      },
      {
        question: "¿Para qué sirve colocar una malla en la cirugía de hernia?",
        answer: "La malla actúa como un refuerzo estructural sobre el defecto muscular, disminuyendo drásticamente el riesgo de que la hernia se vuelva a abrir (recidiva) a menos del 1%, permitiendo una recuperación más rápida y firme."
      },
      {
        question: "¿Se puede realizar la cirugía de hernia por laparoscopia?",
        answer: "Sí, es el abordaje ideal. Permite reparar la hernia colocando la malla por detrás del músculo con incisiones milimétricas, lo que se traduce en mucho menos dolor postoperatorio y un retorno a la vida laboral en pocos días."
      }
    ],
    relatedServices: ["restitucion-de-transito-intestinal", "manejo-de-estomas"],
    relatedSymptoms: ["hinchazon-abdominal", "dolor-abdominal", "nauseas-y-vomitos"],
    image: "/enfermedades/hernia.png",
    seo: {
      title: "Operación de Hernia Inguinal y Umbilical con Malla CDMX",
      description: "Cirugía laparoscópica de hernia inguinal sin dolor. Reparación segura de pared abdominal con el Dr. Daniel Guerra de Coss.",
      keywords: ["hernia inguinal cirugia cdmx", "hernia umbilical precio mexico", "operacion de hernia con malla", "bola en la ingle hombre"]
    }
  },
  {
    id: "cg-dis-013",
    slug: "vesicula-biliar-y-colelitiasis",
    name: "Vesícula Biliar y Colelitiasis",
    technicalName: "Colelitiasis y Litiasis Biliar",
    description: "La colelitiasis es la presencia de cálculos o 'piedras' en la vesícula biliar, formada por la cristalización de componentes de la bilis (principalmente colesterol o bilirrubina). Aunque inicialmente puede ser asintomática, la obstrucción del conducto de salida vesicular desencadena episodios de dolor intenso o colecistitis. El tratamiento oportuno evita el riesgo de pancreatitis, obstrucción biliar o peritonitis.",
    symptoms: [
      "Dolor tipo cólico en la parte superior derecha del abdomen",
      "Náuseas o vómitos tras el consumo de alimentos grasos",
      "Inflamación abdominal y gases constantes",
      "Dolor irradiado a la espalda o al hombro derecho"
    ],
    causes: [
      "Exceso de colesterol o bilirrubina en la bilis",
      "Vaciamiento incompleto o lento de la vesícula biliar",
      "Factores metabólicos y predisposición genética"
    ],
    riskFactors: [
      "Sobrepeso u obesidad",
      "Pérdida de peso muy rápida",
      "Género femenino y uso de anticonceptivos",
      "Sedentarismo y dietas altas en calorías"
    ],
    mexicoStats: "La colelitiasis y sus complicaciones representan una de las principales causas de ingreso hospitalario y de cirugías programadas en México.",
    complications: [
      "Colecistitis aguda (inflamación severa de la vesícula)",
      "Coledocolitiasis (piedras que migran al conducto colédoco)",
      "Pancreatitis aguda biliar (infección e inflamación del páncreas)",
      "Cáncer de vesícula biliar (en casos crónicos sin tratamiento)"
    ],
    treatments: [
      "Colecistectomía laparoscópica (remoción mínimamente invasiva de la vesícula)",
      "Tratamiento analgésico y de soporte temporal durante episodios de dolor",
      "Cambios dietéticos (bajo en grasas) bajo supervisión médica"
    ],
    faqs: [
      {
        question: "¿Es indispensable quitar la vesícula si tengo piedras?",
        answer: "Sí, es el tratamiento definitivo. No existen medicamentos que disuelvan los cálculos de forma segura y permanente. Retirar la vesícula previene complicaciones graves como pancreatitis o peritonitis."
      },
      {
        question: "¿Cómo es la digestión después de retirar la vesícula?",
        answer: "El hígado continúa produciendo bilis y la drena directamente al intestino. Tras un breve periodo de adaptación dietética, los pacientes llevan una vida y alimentación completamente normal."
      }
    ],
    relatedServices: ["cirugia-de-higado-y-vias-biliares"],
    relatedSymptoms: ["dolor-abdominal", "nauseas-y-vomitos"],
    image: "/enfermedades/vesicula.png",
    seo: {
      title: "Vesícula Biliar y Colelitiasis | Dr. Daniel Guerra de Coss",
      description: "Tratamiento definitivo para piedras en la vesícula por mínima invasión. Evite complicaciones con el Dr. Daniel Guerra de Coss.",
      keywords: ["piedras vesicula biliar", "colelitiasis cirugia", "dolor vesicula tratamiento", "colecistectomia laparoscopica cdmx"]
    }
  },
  {
    id: "cg-dis-014",
    slug: "hernia-inguinal",
    name: "Hernia Inguinal",
    technicalName: "Hernia Inguinal Directa o Indirecta",
    description: "Una hernia inguinal ocurre cuando una sección de tejido o intestino sobresale a través de un punto débil en el canal inguinal, ubicado en la ingle. Provoca un abultamiento visible que suele generar dolor o presión con el esfuerzo físico. Requiere reparación quirúrgica para evitar complicaciones severas como el encarcelamiento del tejido.",
    symptoms: [
      "Abultamiento visible en la zona de la ingle",
      "Sensación de pesadez, ardor o dolor al realizar esfuerzos",
      "Dolor que se intensifica al toser, agacharse o levantar objetos",
      "Sensación de tirantez en el testículo o labio mayor correspondiente"
    ],
    causes: [
      "Debilidad de la pared abdominal o canal inguinal",
      "Presión abdominal crónicamente aumentada (tos, esfuerzo al orinar o evacuar)",
      "Factores congénitos o envejecimiento de los tejidos musculares"
    ],
    riskFactors: [
      "Ser del género masculino (anatomía propensa)",
      "Levantamiento frecuente de objetos pesados",
      "Tabaquismo crónico (debilita el colágeno)",
      "Sobrepeso u obesidad"
    ],
    mexicoStats: "La hernioplastia inguinal es una de las cirugías más comunes en la práctica del cirujano general, con una tasa de éxito sumamente elevada con malla.",
    complications: [
      "Encarcelamiento (el tejido queda atrapado sin poder regresar al abdomen)",
      "Estrangulamiento (pérdida del flujo de sangre en el tejido, que causa necrosis en pocas horas)"
    ],
    treatments: [
      "Hernioplastia laparoscópica con colocación de malla (mínima invasión)",
      "Hernioplastia abierta con malla (técnica convencional)"
    ],
    faqs: [
      {
        question: "¿Una hernia inguinal se puede curar con fajas?",
        answer: "No. Las fajas solo contienen temporalmente el abultamiento pero no solucionan la debilidad muscular. El único tratamiento definitivo y curativo es la cirugía."
      },
      {
        question: "¿Qué pasa si se estrangula una hernia?",
        answer: "Se interrumpe el flujo sanguíneo del intestino atrapado. Se trata de una urgencia médica grave que requiere cirugía de emergencia para evitar peritonitis y salvar la vida."
      }
    ],
    relatedServices: ["restitucion-de-transito-intestinal"],
    relatedSymptoms: ["dolor-abdominal", "hinchazon"],
    image: "/enfermedades/hernia_inguinal.png",
    seo: {
      title: "Reparación de Hernia Inguinal por Laparoscopia CDMX",
      description: "Cirugía de hernia inguinal con malla y abordaje mínimamente invasivo. Cirujano certificado Dr. Daniel Guerra de Coss.",
      keywords: ["hernia inguinal tratamiento", "operacion de hernia inguinal precio", "malla para hernia inguinal", "dolor en la ingle bulto"]
    }
  },
  {
    id: "cg-dis-015",
    slug: "hernia-umbilical",
    name: "Hernia Umbilical",
    technicalName: "Defecto Umbilical Aponeurótico",
    description: "La hernia umbilical se produce cuando parte del intestino o tejido graso protruye a través de una abertura o debilidad en los músculos abdominales alrededor del ombligo. Es común tanto en niños como en adultos, requiriendo en estos últimos una reparación con malla para evitar complicaciones obstructivas y asegurar un cierre fuerte.",
    symptoms: [
      "Abultamiento visible o protuberancia en o alrededor del ombligo",
      "Dolor sordo o incomodidad en el ombligo al toser o cargar peso",
      "Presión en la zona abdominal central que limita actividades",
      "Cambios de coloración en la piel sobre el bulto si hay atrapamiento"
    ],
    causes: [
      "Cierre incompleto del anillo umbilical después del nacimiento",
      "Presión abdominal elevada debido a obesidad, embarazos múltiples o ascitis",
      "Debilidad de los tejidos en la línea alba abdominal"
    ],
    riskFactors: [
      "Obesidad severa",
      "Embarazos recurrentes",
      "Tos crónica o estreñimiento severo",
      "Cirugías previas en la línea media"
    ],
    mexicoStats: "La hernia umbilical en el adulto es muy común y representa un alto porcentaje de las consultas y hernioplastias electivas.",
    complications: [
      "Encarcelamiento de grasa epiploica o intestino",
      "Estrangulamiento intestinal con necrosis y perforación",
      "Infección y celulitis cutánea secundaria"
    ],
    treatments: [
      "Hernioplastia umbilical laparoscópica (mínima invasión con malla)",
      "Hernioplastia abierta (cierre directo o con malla según tamaño)"
    ],
    faqs: [
      {
        question: "¿Toda hernia umbilical necesita malla?",
        answer: "En adultos, los defectos mayores a 1 o 2 cm requieren colocación de malla para reducir el riesgo de recidiva (que la hernia vuelva a abrirse) a menos del 1%."
      },
      {
        question: "¿Es dolorosa la recuperación de la cirugía de hernia umbilical?",
        answer: "Con el abordaje laparoscópico moderno, el dolor postoperatorio es mínimo, permitiendo una rápida recuperación y retorno a actividades normales en pocos días."
      }
    ],
    relatedServices: ["restitucion-de-transito-intestinal"],
    relatedSymptoms: ["hinchazon", "dolor-abdominal"],
    image: "/enfermedades/hernia_umbilical.png",
    seo: {
      title: "Cirugía de Hernia Umbilical en CDMX | Dr. Daniel Guerra",
      description: "Reparación quirúrgica segura de hernia umbilical con colocación de malla. Dr. Daniel Guerra de Coss.",
      keywords: ["hernia umbilical adultos", "operacion de hernia umbilical", "hernioplastia umbilical precio", "bola en el ombligo"]
    }
  },
  {
    id: "cg-dis-016",
    slug: "apendicitis-aguda",
    name: "Apendicitis Aguda",
    technicalName: "Inflamación Aguda del Apéndice Cecal",
    description: "La apendicitis aguda es la inflamación de urgencia del apéndice, una estructura en forma de tubo unida al colon. Es la causa número uno de abdomen agudo quirúrgico. Requiere extirpación quirúrgica de emergencia (apendicectomía) para evitar que se perfore, lo que derivaría en una peritonitis grave.",
    symptoms: [
      "Dolor que inicia en el ombligo y se desplaza a la parte inferior derecha del abdomen",
      "Fiebre moderada a alta",
      "Náuseas, vómitos y pérdida de apetito",
      "Dolor intenso al presionar y soltar el abdomen (signo de rebote)"
    ],
    causes: [
      "Obstrucción de la luz apendicular por materia fecal (fecalito)",
      "Hiperplasia de folículos linfoides por infecciones previas",
      "Parásitos o cuerpos extraños que obstruyen el conducto"
    ],
    riskFactors: [
      "Edades entre 10 y 30 años (grupo más frecuente)",
      "Dieta baja en fibra y alta en carbohidratos refinados",
      "Antecedentes de infecciones gastrointestinales frecuentes"
    ],
    mexicoStats: "La apendicectomía es la cirugía abdominal de urgencia más realizada en todos los hospitales de segundo y tercer nivel en México.",
    complications: [
      "Perforación apendicular con peritonitis generalizada",
      "Absceso apendicular (acumulación localizada de pus)",
      "Sepsis de origen abdominal y shock séptico"
    ],
    treatments: [
      "Apendicectomía laparoscópica de urgencia (abordaje preferente)",
      "Apendicectomía abierta de urgencia",
      "Antibioticoterapia intravenosa e hidratación enérgica"
    ],
    faqs: [
      {
        question: "¿Por qué no se debe retrasar la cirugía de apéndice?",
        answer: "El apéndice inflamado puede perforarse en 24 a 48 horas. Una perforación esparce bacterias en la cavidad abdominal, causando peritonitis, una complicación potencialmente mortal."
      },
      {
        question: "¿Cuánto dura la recuperación tras la laparoscopia apendicular?",
        answer: "Generalmente el paciente es dado de alta en 24 horas y puede reincorporarse a actividades cotidianas ligeras en 7 a 10 días, con cicatrices mínimas."
      }
    ],
    relatedServices: ["restitucion-de-transito-intestinal"],
    relatedSymptoms: ["dolor-abdominal", "fiebre", "nauseas-y-vomitos"],
    image: "/enfermedades/apendicitis.png",
    seo: {
      title: "Apendicitis Aguda (Urgencia de Apéndice) CDMX",
      description: "Cirugía de apéndice de urgencia por laparoscopia. Evite peritonitis con el Dr. Daniel Guerra de Coss.",
      keywords: ["apendicitis aguda cirugia", "operacion de apendice precio cdmx", "sintomas de apendicitis", "dolor abdominal bajo derecho"]
    }
  },
  {
    id: "cg-dis-017",
    slug: "hernia-hiatal-y-funduplicatura-laparoscopica",
    name: "Hernia Hiatal y Funduplicatura",
    technicalName: "Hernia Hiatal por Deslizamiento o Paraesofágica",
    description: "La hernia hiatal ocurre cuando la parte superior del estómago se desliza hacia el tórax a través del diafragma. Esto elimina el mecanismo de válvula del esófago inferior, causando reflujo severo. La Funduplicatura Laparoscópica (comúnmente tipo Nissen) es el tratamiento quirúrgico de mínima invasión que corrige la hernia y reconstruye la válvula antirreflujo de forma definitiva.",
    symptoms: [
      "Acidez y ardor estomacal constante (pirosis)",
      "Dificultad para tragar (disfagia)",
      "Dolor en el pecho o parte superior del abdomen",
      "Regurgitación de alimentos y ácido hacia la boca"
    ],
    causes: [
      "Debilidad congénita del hiato esofágico en el diafragma",
      "Presión abdominal elevada por obesidad, tos crónica o levantar objetos",
      "Acortamiento esofágico por inflamación crónica"
    ],
    riskFactors: [
      "Obesidad y sobrepeso",
      "Tabaquismo crónico",
      "Envejecimiento generalizado de los tejidos musculares"
    ],
    mexicoStats: "La funduplicación tipo Nissen es la cirugía antirreflujo más realizada por cirujanos laparoscopistas con alta especialidad en tracto digestivo.",
    complications: [
      "Esofagitis erosiva severa con formación de estenosis (estrechamiento)",
      "Esófago de Barrett (cambios celulares de alto riesgo premaligno)",
      "Estrangulamiento del estómago (en hernias gigantes paraesofágicas)"
    ],
    treatments: [
      "Hiatoplastia y Funduplicatura laparoscópica Nissen (cirugía antirreflujo)",
      "Manejo médico con antiácidos y procinéticos en casos leves"
    ],
    faqs: [
      {
        question: "¿Cómo funciona la cirugía para curar la hernia hiatal?",
        answer: "Se regresa el estómago al abdomen, se reduce la abertura del diafragma (hiato) con puntos de sutura, y se envuelve la base del esófago con el mismo estómago para crear una nueva válvula física."
      },
      {
        question: "¿Se puede volver a abrir la hernia después de la cirugía?",
        answer: "La tasa de éxito es mayor al 90%. Seguir las recomendaciones de no levantar peso excesivo en el postoperatorio asegura una durabilidad excelente de por vida."
      }
    ],
    relatedServices: ["cirugia-de-esofago", "cirugia-de-estomago"],
    relatedSymptoms: ["regurgitacion", "dificultad-para-tragar-sensacion-obstruccion"],
    image: "/enfermedades/hernia_hiatal.png",
    seo: {
      title: "Hernia Hiatal y Funduplicatura Nissen en CDMX",
      description: "Cirugía reconstructiva de hernia hiatal y reflujo por laparoscopia. Dr. Daniel Guerra de Coss.",
      keywords: ["hernia hiatal operacion", "funduplicatura nissen precio cdmx", "sintomas hernia hiatal", "reflujo tratamiento definitivo"]
    }
  },
  {
    id: "cg-dis-018",
    slug: "reflujo-gastroesofagico",
    name: "Reflujo Gastroesofágico",
    technicalName: "Enfermedad por Reflujo Gastroesofágico (ERGE)",
    description: "El reflujo gastroesofágico (ERGE) es la regurgitación crónica de ácido gástrico hacia el esófago debido a una falla en el esfínter esofágico inferior. Produce inflamación, ardor y puede dañar severamente el revestimiento esofágico si no se trata a tiempo, siendo candidato a cirugía en casos refractarios o con hernia hiatal asociada.",
    symptoms: [
      "Sensación de ardor en el pecho que sube a la garganta (pirosis)",
      "Regurgitación ácida o de sabor amargo en la boca",
      "Tos seca recurrente, ronquera nocturna o asma",
      "Dolor de garganta crónico o desgaste dental por acidez"
    ],
    causes: [
      "Relajación o debilidad del esfínter esofágico inferior",
      "Hernia hiatal que interrumpe la función anatómica",
      "Retraso en el vaciamiento del estómago"
    ],
    riskFactors: [
      "Obesidad y sobrepeso",
      "Tabaquismo y consumo regular de alcohol",
      "Dieta alta en grasas, cafeína, picantes y cenas tardías"
    ],
    mexicoStats: "La ERGE es una de las enfermedades gastrointestinales más reportadas en la población adulta mexicana, muy vinculada a los hábitos dietéticos.",
    complications: [
      "Esófago de Barrett",
      "Esofagitis ulcerativa y sangrado de tubo digestivo",
      "Estenosis esofágica benigna"
    ],
    treatments: [
      "Fundoplicación laparoscópica (cirugía antirreflujo)",
      "Medicamentos supresores de ácido (Inhibidores de Bomba de Protones)",
      "Modificaciones de dieta, control de peso e higiene del sueño"
    ],
    faqs: [
      {
        question: "¿El reflujo se puede curar sin tomar medicamentos diario?",
        answer: "Sí. La funduplicatura por laparoscopia es el único procedimiento correctivo definitivo que soluciona la falla de la válvula, permitiendo suspender los medicamentos diarios en la gran mayoría de los casos."
      },
      {
        question: "¿Qué es el Esófago de Barrett?",
        answer: "Es un cambio celular en la mucosa del esófago debido a la quemadura constante por ácido. Es una lesión premaligna que requiere vigilancia estrecha y control del reflujo."
      }
    ],
    relatedServices: ["cirugia-de-esofago", "cirugia-de-estomago"],
    relatedSymptoms: ["regurgitacion", "dificultad-para-tragar-sensacion-obstruccion"],
    image: "/enfermedades/reflujo_gastroesofagico.png",
    seo: {
      title: "Tratamiento de Reflujo Gastroesofágico ERGE en CDMX",
      description: "Especialista en cirugía antirreflujo y enfermedades del esófago. Agenda con el Dr. Daniel Guerra de Coss.",
      keywords: ["reflujo gastroesofagico tratamiento", "erge cirugia nissen", "acidez estomacal cronica", "cirujano de esofago cdmx"]
    }
  },
  {
    id: "cg-dis-019",
    slug: "gastritis",
    name: "Gastritis",
    technicalName: "Gastritis Aguda o Crónica",
    description: "La gastritis es la inflamación de la mucosa que reviste las paredes del estómago. Puede ser aguda (aparición rápida) o crónica (desarrollo lento en años). Sus causas van desde infecciones por Helicobacter pylori y el uso crónico de analgésicos, hasta el estrés y hábitos dietéticos inadecuados. Requiere diagnóstico preciso para descartar úlceras o neoplasias.",
    symptoms: [
      "Dolor ardiente o punzante en la boca del estómago (epigastralgia)",
      "Náuseas, indigestión y eructos constantes",
      "Sensación de llenura excesiva después de comer porciones pequeñas",
      "Pérdida de apetito y distensión abdominal"
    ],
    causes: [
      "Infección por la bacteria Helicobacter pylori",
      "Consumo frecuente de analgésicos antiinflamatorios no esteroideos (AINEs)",
      "Consumo excesivo de alcohol, alimentos picantes o grasas",
      "Estrés fisiológico o psicológico severo"
    ],
    riskFactors: [
      "Infección bacteriana persistente",
      "Edad avanzada (la mucosa gástrica se adelgaza con la edad)",
      "Trastornos autoinmunes"
    ],
    mexicoStats: "La gastritis es una de las afecciones más tratadas en consulta médica general y de especialidad debido a la gastronomía nacional alta en irritantes.",
    complications: [
      "Úlcera gástrica o duodenal con riesgo de sangrado o perforación",
      "Gastritis atrófica crónica",
      "Incremento en el riesgo de tumores estomago (adenocarcinoma)"
    ],
    treatments: [
      "Tratamiento farmacológico con supresores de ácido (IBP) y antibióticos",
      "Suspensión de agentes agresores (alcohol, AINEs, tabaco)",
      "Modificaciones nutricionales y manejo dietético"
    ],
    faqs: [
      {
        question: "¿La gastritis puede causar sangrado?",
        answer: "Sí, la gastritis erosiva severa puede causar microhemorragias que se manifiestan como heces oscuras (melena) o vómito con sangre. Requiere atención de urgencia."
      },
      {
        question: "¿Cómo se diagnostica con certeza la gastritis?",
        answer: "El método de oro es la endoscopia digestiva alta con toma de biopsia para verificar la mucosa y descartar la bacteria Helicobacter pylori."
      }
    ],
    relatedServices: ["cirugia-de-estomago"],
    relatedSymptoms: ["dolor-abdominal", "nauseas-y-vomitos", "perdida-de-apetito"],
    image: "/enfermedades/gastritis.png",
    seo: {
      title: "Gastritis Tratamiento y Diagnóstico CDMX",
      description: "Especialista en enfermedades del estómago. Tratamiento definitivo para dolor y ardor de gastritis. Dr. Daniel Guerra de Coss.",
      keywords: ["gastritis sintomas", "tratamiento para la gastritis", "dolor en la boca del estomago", "endoscopia digestiva cdmx"]
    }
  },
  {
    id: "cg-dis-020",
    slug: "volvulo-gastrico",
    name: "Vólvulo Gástrico",
    technicalName: "Torsión Gástrica Organoaxial o Mesenteroaxial",
    description: "El vólvulo gástrico es una afección quirúrgica poco común pero potencialmente grave en la que el estómago gira sobre su propio eje. Esto provoca obstrucción en la entrada o salida gástrica y puede comprometer el flujo de sangre (estrangulación). Requiere diagnóstico rápido e intervención quirúrgica de urgencia para evitar la necrosis del tejido gástrico.",
    symptoms: [
      "Dolor abdominal superior severo y repentino",
      "Náuseas y arcadas intensas pero con incapacidad de vomitar (vómito seco)",
      "Dificultad severa para tragar (disfagia)",
      "Distensión abdominal alta muy marcada"
    ],
    causes: [
      "Debilidad de los ligamentos que fijan el estómago al abdomen",
      "Presencia de una hernia hiatal gigante paraesofágica",
      "Eventración o parálisis del músculo diafragma"
    ],
    riskFactors: [
      "Pacientes de edad avanzada",
      "Hernia hiatal masiva no reparada quirúrgicamente",
      "Trastornos anatómicos de la pared gástrica"
    ],
    mexicoStats: "Es una condición de urgencia de baja incidencia pero con alta tasa de morbimortalidad si se retrasa la descompresión gástrica y cirugía.",
    complications: [
      "Necrosis o muerte de la pared del estómago",
      "Perforación gástrica y peritonitis química/séptica severa",
      "Shock obstructivo o shock distributivo"
    ],
    treatments: [
      "Cirugía de urgencia (reducción del vólvulo, gastropexia de fijación e hiatoplastia)",
      "Descompresión gástrica urgente por sonda nasogástrica",
      "Laparoscopia diagnóstica/quirúrgica según estabilidad del paciente"
    ],
    faqs: [
      {
        question: "¿Qué es la tríada de Borchardt en vólvulo gástrico?",
        answer: "Es el conjunto de síntomas característicos: dolor epigástrico severo, arcadas violentas con incapacidad de vomitar, e imposibilidad de pasar una sonda nasogástrica al estómago."
      },
      {
        question: "¿Se puede volver a rotar el estómago?",
        answer: "Durante la cirugía se realiza una Gastropexia (fijación de la pared del estómago a la pared abdominal), lo que evita de forma definitiva que ocurra una nueva torsión."
      }
    ],
    relatedServices: ["cirugia-de-estomago"],
    relatedSymptoms: ["dolor-abdominal", "nauseas-y-vomitos", "dificultad-para-tragar-sensacion-obstruccion"],
    image: "/enfermedades/volvulo_gastrico.png",
    seo: {
      title: "Vólvulo Gástrico (Torsión de Estómago) Urgencia CDMX",
      description: "Cirugía reconstructiva de urgencia para vólvulo gástrico. Diagnóstico oportuno y gastropexia. Dr. Daniel Guerra de Coss.",
      keywords: ["volvulo gastrico cirugia", "torsion de estomago sintomas", "triada de borchardt", "cirujano de estomago urgencias"]
    }
  },
  {
    id: "cg-dis-021",
    slug: "tumores-esofagicos",
    name: "Tumores Esofágicos",
    technicalName: "Neoplasias Benignas y Malignas de Esófago",
    description: "Los tumores esofágicos son crecimientos anormales en las paredes del esófago. Pueden ser benignos (como el leiomioma) o malignos (cáncer de esófago, principalmente adenocarcinoma o epidermoide). Se manifiestan característicamente con disfagia progresiva (dificultad para tragar). Su diagnóstico temprano por endoscopia es fundamental para un tratamiento quirúrgico oportuno.",
    symptoms: [
      "Dificultad progresiva para tragar (inicialmente sólidos, luego líquidos)",
      "Pérdida de peso significativa e involuntaria",
      "Dolor o ardor retroesternal (detrás del pecho) al tragar",
      "Regurgitación frecuente de comida no digerida y tos al comer"
    ],
    causes: [
      "Daño crónico por Reflujo Gastroesofágico y Esófago de Barrett",
      "Tabaquismo crónico y consumo regular de alcohol",
      "Exposición a sustancias químicas corrosivas o ingesta frecuente de bebidas muy calientes"
    ],
    riskFactors: [
      "Padecer esófago de Barrett",
      "Género masculino y edad mayor a 60 años",
      "Obesidad severa"
    ],
    mexicoStats: "El adenocarcinoma esofágico ha aumentado su incidencia en México de la mano con el incremento en casos de obesidad y reflujo gastroesofágico crónico.",
    complications: [
      "Obstrucción completa del esófago con desnutrición severa",
      "Fístulas hacia la tráquea o bronquios (causa de neumonías graves)",
      "Metástasis a ganglios y otros órganos en casos avanzados"
    ],
    treatments: [
      "Esofagectomía (extracción quirúrgica parcial o total del esófago)",
      "Quimioterapia y radioterapia según la etapa clínica",
      "Colocación de prótesis o stents esofágicos paliativos para permitir la alimentación"
    ],
    faqs: [
      {
        question: "¿Cómo se diagnostica un tumor en el esófago?",
        answer: "Se diagnostica mediante una Endoscopia Superior, que permite ver directamente la lesión y tomar una muestra (biopsia) para que sea analizada por un patólogo."
      },
      {
        question: "¿Qué es la esofagectomía?",
        answer: "Es la cirugía para extirpar la porción del esófago que tiene el tumor y reconstruir el tránsito digestivo, generalmente subiendo el estómago hacia el tórax."
      }
    ],
    relatedServices: ["cirugia-de-esofago"],
    relatedSymptoms: ["dificultad-para-tragar-sensacion-obstruccion", "perdida-peso", "regurgitacion"],
    image: "/enfermedades/tumores_esofagicos.png",
    seo: {
      title: "Tumores Esofágicos y Cáncer de Esófago CDMX",
      description: "Especialista en cirugía de esófago y esofagectomía laparoscópica. Diagnóstico y manejo por el Dr. Daniel Guerra de Coss.",
      keywords: ["tumor en el esofago", "cancer de esofago sintomas", "esofagectomía cdmx precio", "dificultad para tragar causas"]
    }
  },
  {
    id: "cg-dis-022",
    slug: "tumores-gastricos",
    name: "Tumores Gástricos",
    technicalName: "Neoplasias Gástricas (Adenocarcinoma, GIST)",
    description: "Los tumores gástricos son formaciones tumorales localizadas en el estómago, siendo el adenocarcinoma gástrico el cáncer de estómago más común. También destacan los tumores del estroma gastrointestinal (GIST). Suelen cursar con síntomas vagos parecidos a la gastritis, por lo que una valoración especializada y endoscopia ante datos de alarma es vital para una resección exitosa.",
    symptoms: [
      "Dolor abdominal persistente u opresión en la parte superior del abdomen",
      "Pérdida de peso involuntaria y fatiga inexplicables",
      "Saciedad precoz (sensación de estar muy lleno con poca comida)",
      "Heces negras (melena) o vómitos oscuros por sangrado tumoral"
    ],
    causes: [
      "Infección crónica por Helicobacter pylori no erradicada",
      "Dieta alta en alimentos salados, ahumados o embutidos",
      "Antecedentes genéticos o síndromes hereditarios de cáncer"
    ],
    riskFactors: [
      "Tabaquismo activo",
      "Gastritis atrófica crónica o anemia perniciosa",
      "Edad avanzada"
    ],
    mexicoStats: "El cáncer gástrico representa una de las principales causas de muerte por tumores malignos del tracto digestivo en la población mexicana.",
    complications: [
      "Obstrucción de la salida del estómago (síndrome pilórico)",
      "Hemorragia digestiva severa causante de anemia aguda",
      "Perforación tumoral"
    ],
    treatments: [
      "Gastrectomía parcial o total (remoción quirúrgica del estómago con reconstrucción)",
      "Manejo multidisciplinario con oncología médica (quimioterapia/inmunoterapia)",
      "Resección quirúrgica por laparoscopia para tumores GIST"
    ],
    faqs: [
      {
        question: "¿Qué síntomas de alarma deben sospechar un tumor gástrico?",
        answer: "Perder peso rápido sin dieta, presentar anemia inexplicable, sentir que la comida se atora en la boca del estómago, o evacuar negro, son datos de alarma absoluta."
      },
      {
        question: "¿Se puede vivir sin estómago tras una gastrectomía?",
        answer: "Sí. Se conecta directamente el esófago al intestino delgado. El paciente requiere comer porciones más pequeñas y suplementar algunas vitaminas (como la B12), pero logra una excelente calidad de vida."
      }
    ],
    relatedServices: ["cirugia-de-estomago"],
    relatedSymptoms: ["dolor-abdominal", "perdida-peso", "nauseas-y-vomitos"],
    image: "/enfermedades/tumores_gastricos.png",
    seo: {
      title: "Tumores Gástricos y Cáncer de Estómago CDMX",
      description: "Cirugía oncológica de estómago (Gastrectomía Laparoscópica) por el cirujano digestivo Dr. Daniel Guerra de Coss.",
      keywords: ["adenocarcinoma gastrico", "tumor gist estomago", "gastrectomia total precio cdmx", "sintomas de cancer de estomago"]
    }
  },
  {
    id: "cg-dis-023",
    slug: "acalasia-y-miotomia-esofagica",
    name: "Acalasia y Miotomía",
    technicalName: "Acalasia Esofágica e Hipertonía del EEI",
    description: "La acalasia es un trastorno motor esofágico primario en el que el esófago pierde la capacidad de empujar la comida y la válvula inferior (EEI) no se relaja adecuadamente. Esto provoca disfagia (dificultad para tragar) severa. El tratamiento quirúrgico estándar de elección es la Miotomía de Heller por laparoscopia, la cual corta las fibras musculares de la válvula para restaurar el paso de alimentos.",
    symptoms: [
      "Dificultad progresiva para tragar sólidos y líquidos",
      "Regurgitación de alimentos no digeridos (comida que vuelve a la boca sin ácido)",
      "Dolor en el pecho o presión retroesternal severa",
      "Pérdida de peso severa y tos nocturna por broncoaspiración"
    ],
    causes: [
      "Pérdida de las células neuronales (plexo mientérico) en las paredes del esófago",
      "Alteración del sistema nervioso entérico del tracto digestivo",
      "Proceso autoinmune idiopático"
    ],
    riskFactors: [
      "Edades entre los 30 y 60 años",
      "No hay factores de riesgo ambientales o dietéticos específicos conocidos"
    ],
    mexicoStats: "La miotomía de Heller laparoscópica asociada a una funduplicatura parcial (tipo Dor o Toupet) representa la cirugía curativa estándar para la acalasia.",
    complications: [
      "Megaesófago (dilatación masiva del esófago que pierde toda función)",
      "Neumonías por aspiración química de alimentos acumulados",
      "Esofagitis severa por retención de alimentos"
    ],
    treatments: [
      "Miotomía de Heller por laparoscopia (corte muscular esofágico inferior)",
      "Procedimiento endoscópico POEM (Miotomía Endoscópica Peroral)",
      "Dilataciones neumáticas temporales en casos no quirúrgicos"
    ],
    faqs: [
      {
        question: "¿Cómo cura la cirugía de Heller la acalasia?",
        answer: "La cirugía realiza un corte preciso de la capa muscular externa del esófago y estómago en la unión. Esto abre la válvula permitiendo que la comida pase por gravedad al estómago."
      },
      {
        question: "¿Por qué se asocia una funduplicatura a la miotomía?",
        answer: "Al cortar la válvula para que pase la comida, el reflujo de ácido es inminente. Por ello se fabrica una funduplicatura parcial para proteger el esófago del ácido gástrico."
      }
    ],
    relatedServices: ["cirugia-de-esofago"],
    relatedSymptoms: ["dificultad-para-tragar-sensacion-obstruccion", "regurgitacion", "perdida-peso"],
    image: "/enfermedades/acalasia.png",
    seo: {
      title: "Acalasia Esofágica y Miotomía de Heller CDMX",
      description: "Cirugía laparoscópica definitiva para acalasia. Recupere su capacidad de comer con el Dr. Daniel Guerra de Coss.",
      keywords: ["acalasia esofagica", "miotomia de heller laparoscopica", "dificultad para tragar acalasia", "cirujano de esofago cdmx"]
    }
  },
  {
    id: "cg-dis-024",
    slug: "bypass-gastrico",
    name: "Bypass Gástrico",
    technicalName: "Bypass Gástrico en Y de Roux Laparoscópico",
    description: "El Bypass Gástrico es el procedimiento de cirugía bariátrica 'patrón de oro' a nivel mundial. Consiste en dividir el estómago en un pequeño reservorio superior y conectar este directamente al intestino delgado. Esto limita el consumo de alimentos y disminuye su absorción, logrando una pérdida de peso masiva y el control definitivo de enfermedades metabólicas como la diabetes tipo 2.",
    symptoms: [
      "Exceso de peso corporal (IMC mayor a 35 o mayor a 30 con comorbilidades)",
      "Resistencia a la insulina o diabetes tipo 2 de difícil control",
      "Hipertensión y dislipidemia asociadas a la obesidad",
      "Apnea obstructiva del sueño moderada a severa"
    ],
    causes: [
      "Obesidad severa refractaria a tratamientos nutricionales y médicos",
      "Síndrome metabólico de alto riesgo cardiovascular"
    ],
    riskFactors: [
      "Sedentarismo prolongado",
      "Predisposición genética metabólica familiar",
      "Trastornos endocrinos u hormonales"
    ],
    mexicoStats: "El bypass gástrico en Y de Roux es uno de los procedimientos quirúrgicos más efectivos en México para lograr la remisión completa de la diabetes tipo 2.",
    complications: [
      "Complicaciones de la obesidad severa si no se opera",
      "Deficiencias de vitaminas y minerales si no se lleva suplementación adecuada post-cirugía",
      "Síndrome de vaciamiento rápido (Dumping) ante exceso de azúcares"
    ],
    treatments: [
      "Cirugía bariátrica (Bypass gástrico laparoscópico)",
      "Suplementación de micronutrientes y vitaminas de por vida",
      "Acompañamiento multidisciplinario continuo (nutrición, psicología)"
    ],
    faqs: [
      {
        question: "¿Cómo cura el bypass gástrico la diabetes?",
        answer: "La cirugía altera hormonas intestinales (como las incretinas) que mejoran de forma inmediata la secreción y efectividad de la insulina, logrando normalizar los niveles de glucosa incluso antes de perder peso."
      },
      {
        question: "¿Qué diferencia hay entre manga gástrica y bypass?",
        answer: "La manga gástrica solo reduce el estómago y es un procedimiento restrictivo. El bypass gástrico reduce el estómago y desvía el intestino (restrictivo y malabsortivo), siendo ideal para pacientes con diabetes de difícil control o reflujo severo."
      }
    ],
    relatedServices: ["manga-gastrica", "cirugia-de-estomago"],
    relatedSymptoms: ["perdida-peso"],
    image: "/enfermedades/bypass_gastrico.png",
    seo: {
      title: "Bypass Gástrico por Laparoscopia en CDMX | Dr. Daniel Guerra",
      description: "Cirugía metabólica y bariátrica para control de obesidad y remisión de diabetes. Especialista Dr. Daniel Guerra de Coss.",
      keywords: ["bypass gastrico precio mexico", "cirugia diabetes bypass", "bypass en y de roux cdmx", "cirujano bariatra cdmx"]
    }
  },
  {
    id: "cg-dis-025",
    slug: "cirugia-revisional",
    name: "Cirugía Revisional",
    technicalName: "Cirugía Bariátrica Revisional por Laparoscopia",
    description: "La cirugía revisional es un procedimiento quirúrgico altamente especializado diseñado para corregir, modificar o convertir una cirugía bariátrica previa (como manga gástrica o banda gástrica) que ha fallado. Está indicada ante la reganancia de peso significativa, la falta de pérdida de exceso de peso o la presencia de complicaciones anatómicas como reflujo intratable.",
    symptoms: [
      "Reganancia de peso significativa después de una cirugía bariátrica previa",
      "Reflujo gastroesofágico severo refractario tras manga gástrica",
      "Estrechamiento o torsión de la manga previa (estenosis)",
      "Pérdida de peso insuficiente o estancamiento metabólico"
    ],
    causes: [
      "Dilatación del estómago residual a lo largo de los años",
      "Falla técnica o anatómica del procedimiento bariátrico primario",
      "Cambios en los hábitos alimenticios y falta de apego al seguimiento multidisciplinario"
    ],
    riskFactors: [
      "Pacientes operados de banda gástrica o mangas que no recibieron seguimiento adecuado",
      "Desarrollo de reflujo severo post-manga gástrica"
    ],
    mexicoStats: "La conversión de manga gástrica a bypass gástrico por laparoscopia representa la cirugía revisional más frecuente y efectiva realizada en el país.",
    complications: [
      "Dificultades técnicas aumentadas debido a adherencias de la cirugía anterior",
      "Fugas o dehiscencia de anastomosis en áreas previamente manipuladas"
    ],
    treatments: [
      "Conversión laparoscópica a Bypass Gástrico",
      "Retiro de banda gástrica y conversión a procedimiento definitivo",
      "Manejo multidisciplinario intensivo con nutrición y psicología"
    ],
    faqs: [
      {
        question: "¿Por qué falla una cirugía bariátrica anterior?",
        answer: "Puede deberse a factores anatómicos (el estómago se estira o deforma) o conductuales. La cirugía revisional ajusta el metabolismo y la anatomía para reiniciar el proceso de pérdida de peso."
      },
      {
        question: "¿Es más riesgosa una cirugía revisional?",
        answer: "Sí, requiere mayor destreza técnica debido a cicatrices y cirugías previas. Por ello debe ser realizada exclusivamente por un cirujano bariatra con amplia experiencia en laparoscopia avanzada."
      }
    ],
    relatedServices: ["manga-gastrica", "cirugia-de-estomago"],
    relatedSymptoms: ["regurgitacion", "dolor-abdominal"],
    image: "/enfermedades/cirugia_revisional.png",
    seo: {
      title: "Cirugía Bariátrica Revisional en CDMX | Dr. Daniel Guerra",
      description: "Corrección y conversión de cirugías bariátricas previas por laparoscopia. Especialista Dr. Daniel Guerra de Coss.",
      keywords: ["cirugia revisional bariatrica", "manga gastrica a bypass", "reganancia de peso cirugia", "operacion de revision bariatrica cdmx"]
    }
  },
  {
    id: "cg-dis-026",
    slug: "cirugia-ileal-sasi",
    name: "Cirugía Ileal (SASI)",
    technicalName: "Bypass Gástrico de una sola Anastomosis con Manga Gástrica (SASI)",
    description: "La Cirugía Ileal o SASI (Single Anastomosis Stomach Ileal Bypass) es un procedimiento metabólico moderno que combina una manga gástrica con un bypass intestinal de una sola unión. Mantiene la ventaja de poder realizar endoscopias de control del estómago y ofrece resultados excepcionales para la pérdida de peso y el control de la diabetes.",
    symptoms: [
      "Obesidad clínica (IMC mayor a 30)",
      "Diabetes Mellitus Tipo 2 con mala respuesta al tratamiento médico",
      "Hipercolesterolemia o triglicéridos elevados refractarios",
      "Hígado graso no alcohólico metabólico"
    ],
    causes: [
      "Síndrome metabólico complejo asociado a exceso de grasa visceral",
      "Falta de control glucémico a pesar de terapia farmacológica óptima"
    ],
    riskFactors: [
      "Obesidad androgénica o visceral de alto riesgo metabólico",
      "Antecedentes de enfermedad cardiovascular prematura"
    ],
    mexicoStats: "La técnica SASI está ganando popularidad en los centros bariatras de alta especialidad en México debido a sus excelentes resultados metabólicos y menor tasa de deficiencias vitamínicas.",
    complications: [
      "Fugas en la línea de grapado de la manga o anastomosis",
      "Reflujo biliar si la anatomía no se diseña con la longitud intestinal correcta"
    ],
    treatments: [
      "Procedimiento quirúrgico SASI laparoscópico",
      "Seguimiento nutricional metabólico estructurado",
      "Monitoreo analítico periódico de vitaminas y perfil metabólico"
    ],
    faqs: [
      {
        question: "¿Qué ventajas tiene el procedimiento SASI sobre otros bypass?",
        answer: "Permite el paso de aproximadamente el 50% de la comida por la vía intestinal normal y el otro 50% por la vía derivada. Esto disminuye la desnutrición y permite estudiar el estómago restante por endoscopia en el futuro."
      },
      {
        question: "¿El SASI cura la diabetes tipo 2?",
        answer: "Logra una remisión de la diabetes tipo 2 en más del 85% de los pacientes, permitiendo suspender hipoglucemiantes e insulina bajo supervisión médica."
      }
    ],
    relatedServices: ["manga-gastrica", "cirugia-de-estomago"],
    relatedSymptoms: ["perdida-peso"],
    image: "/enfermedades/cirugia_ileal.png",
    seo: {
      title: "Cirugía SASI (Bypass de una sola Anastomosis) CDMX",
      description: "Cirugía metabólica de vanguardia para obesidad y diabetes. Procedimiento SASI con el Dr. Daniel Guerra de Coss.",
      keywords: ["cirugia sasi precio mexico", "bypass de una anastomosis", "cirugia metabólica diabetes cdmx", "bariatra certificado mexico"]
    }
  },
  {
    id: "cg-dis-027",
    slug: "balon-gastrico",
    name: "Balón Gástrico",
    technicalName: "Dispositivo Intragástrico para Pérdida de Peso",
    description: "El balón gástrico es un tratamiento no quirúrgico para el sobrepeso y la obesidad. Consiste en colocar un dispositivo flexible de silicona en el estómago que se llena con solución salina, ocupando espacio y retrasando el vaciamiento gástrico, lo que produce saciedad temprana y facilita el apego al plan nutricional.",
    symptoms: [
      "Sobrepeso u obesidad grado I (IMC entre 27 y 32)",
      "Dificultad para perder peso con planes nutricionales convencionales",
      "Necesidad de perder peso previo a una cirugía mayor programada"
    ],
    causes: [
      "Sobrepeso refractario a cambios dietéticos",
      "Falta de saciedad en planes de alimentación controlados"
    ],
    riskFactors: [
      "Hábitos de picoteo y porciones de comida abundantes",
      "Dificultad para realizar actividad física debido a dolores articulares menores"
    ],
    mexicoStats: "El balón gástrico (incluyendo tecnologías deglutibles que no requieren endoscopia) es uno de los procedimientos estéticos y de salud de mayor demanda.",
    complications: [
      "Náuseas o vómitos intensos durante las primeras 72 horas (periodo de adaptación)",
      "Gastritis por roce del dispositivo",
      "Deflación espontánea del balón (extremadamente rara con balones modernos)"
    ],
    treatments: [
      "Colocación de balón intragástrico (por endoscopia o deglutible)",
      "Retiro del balón después de 6 a 12 meses (según tipo de balón)",
      "Plan nutricional conductual y acondicionamiento físico continuo"
    ],
    faqs: [
      {
        question: "¿Cuánto peso se puede perder con el balón gástrico?",
        answer: "En promedio, los pacientes logran perder entre el 10% y el 15% de su peso corporal total durante los meses que el balón permanece en el estómago."
      },
      {
        question: "¿El balón gástrico requiere anestesia general o cirugía?",
        answer: "No. El procedimiento de colocación toma de 15 a 20 minutos, se realiza bajo sedación leve (vía endoscópica) o de forma deglutible sin sedación, y es totalmente ambulatorio."
      }
    ],
    relatedServices: ["manga-gastrica", "cirugia-de-estomago"],
    relatedSymptoms: ["perdida-peso"],
    image: "/enfermedades/balon_gastrico.png",
    seo: {
      title: "Colocación de Balón Gástrico en CDMX | Dr. Daniel Guerra",
      description: "Tratamiento no quirúrgico para la pérdida de peso y control del sobrepeso. Dr. Daniel Guerra de Coss.",
      keywords: ["balon gastrico precio mexico", "balon gastrico sin cirugia cdmx", "sintomas de obesidad balon", "perder peso rapido medico"]
    }
  }
];

