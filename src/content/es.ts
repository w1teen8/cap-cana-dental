import type { Content } from "./en";

const phone = "(555) 420-7788";

export const es: Content = {
  lang: "es",
  langName: "Español",

  clinic: {
    name: "Cap Cana Dental Clinic",
    short: "Cap Cana",
    byline: "By Dr. George Hernández",
    tagline: "Odontología familiar, moderna y sin dolor",
    description:
      "Atención dental moderna y tranquila para toda la familia. Precios claros, facturación directa con tu seguro, urgencias en el día y reserva online.",
    phone,
    phoneHref: "tel:+15554207788",
    email: "hello@havendental.care",
    address: "88 Harbour Street, Suite 2",
    addressShort: "88 Harbour Street",
    hours: "Lun–Vie 8–18 · Sáb 9–14",
    footerBlurb:
      "Odontología moderna y sin dolor para toda la familia. Aceptamos nuevos pacientes.",
    copyright: "© 2026 Cap Cana Dental Clinic. Todos los derechos reservados.",
    footerNote: "Citas de urgencia en el mismo día",
  },

  nav: [
    { label: "Tratamientos", href: "/treatments" },
    { label: "Nosotros", href: "/about" },
    { label: "Pacientes", href: "/patients" },
    { label: "Contacto", href: "/book" },
  ],

  ui: {
    book: "Pedir cita",
    ourTreatments: "Nuestros tratamientos",
    allTreatments: "Todos los tratamientos",
    aboutUs: "Sobre nosotros",
    claimOffer: "Quiero la oferta",
    call: "Llamar al",
    bookThis: "Reservar este tratamiento",
    backToTreatments: "Todos los tratamientos",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
    switchLanguage: "Idioma",
    home: "Inicio",
  },

  home: {
    badge: "Aceptamos nuevos pacientes",
    title: "Odontología suave, sin nervios.",
    lead: "Atención dental moderna y sin prisas para toda la familia: precios claros, facturación directa con tu seguro y un equipo que de verdad escucha.",
    rating: "4,9 en más de 520 reseñas de Google",
    heroAlt: "Paciente sonriendo",
    cardTitle: "Urgencias en el día",
    cardBody: "Llama antes de las 11:00 y te vemos hoy",
    info: [
      { icon: "clock", label: "Abierto hoy", value: "8:00 – 18:00" },
      { icon: "phone", label: "Llámanos", value: phone },
      { icon: "pin", label: "Dónde estamos", value: "88 Harbour Street" },
      { icon: "shield", label: "Seguros", value: "Facturación directa" },
    ],
    treatmentsEyebrow: "Tratamientos",
    treatmentsTitle: ["Todo lo que tu sonrisa", "necesita, bajo un mismo techo."],
    whyEyebrow: "Por qué Cap Cana",
    whyTitle: "Una visita al dentista más tranquila.",
    whyAlt: "Gabinete de la clínica",
    why: [
      {
        icon: "heart",
        title: "Suavidad ante todo",
        body: "Citas sin prisas, anestesia que funciona y pausas siempre que las necesites.",
      },
      {
        icon: "clock",
        title: "Urgencias en el día",
        body: "¿Te duele? Llama antes de las 11:00 y te atendemos hoy.",
      },
      {
        icon: "scan",
        title: "Tecnología moderna",
        body: "Radiografías digitales de baja dosis y escáner 3D, sin pastas de impresión.",
      },
      {
        icon: "chat",
        title: "Precios claros y justos",
        body: "Costes explicados de antemano, facturación directa y financiación al 0 %.",
      },
    ],
    offerEyebrow: "Oferta para nuevos pacientes",
    offerPrice: "$99",
    offerWas: "antes $260",
    offerBody:
      "Revisión completa, radiografías digitales y una limpieza suave para nuevos pacientes sin seguro.",
    teamEyebrow: "Conoce al equipo",
    teamTitle: "Caras amables, manos expertas.",
    reviewsEyebrow: "Opiniones de pacientes",
    reviewsTitle: ["Pacientes nerviosos,", "bienvenidos. Pregúntales."],
    faqEyebrow: "Preguntas frecuentes",
    faqTitle: ["Buenas preguntas,", "respuestas honestas."],
    faqLead:
      "¿Te queda alguna duda? Llámanos, estaremos encantados de hablar contigo.",
    ctaTitle: "Tu visita al dentista más tranquila empieza aquí.",
    ctaLead:
      "Reserva online en menos de dos minutos o llama y habla con una persona de verdad.",
  },

  treatments: [
    {
      slug: "check-ups-cleaning",
      category: "Prevención",
      title: "Revisiones y limpieza",
      excerpt:
        "Revisiones completas, limpiezas suaves y radiografías digitales para mantener tu sonrisa sana toda la vida.",
      from: "Desde $129",
      duration: "60 min",
      image: "/img/treatment-check-ups-cleaning.jpg",
    },
    {
      slug: "teeth-whitening",
      category: "Estética",
      title: "Blanqueamiento dental",
      excerpt:
        "Blanqueamiento profesional en clínica y en casa para una sonrisa más luminosa, con seguridad y sin sensibilidad.",
      from: "Desde $349",
      duration: "90 min",
      image: "/img/treatment-teeth-whitening.jpg",
    },
    {
      slug: "clear-aligners",
      category: "Ortodoncia",
      title: "Alineadores transparentes",
      excerpt:
        "Alinea tus dientes con discreción gracias a alineadores a medida y revisiones periódicas con nuestro equipo.",
      from: "Desde $3,900",
      duration: "6–18 meses",
      image: "/img/treatment-clear-aligners.jpg",
    },
    {
      slug: "dental-implants",
      category: "Restauración",
      title: "Implantes dentales",
      excerpt:
        "Sustitutos permanentes y de aspecto natural para los dientes perdidos, planificados con imagen 3D.",
      from: "Desde $2,800",
      duration: "2–3 visitas",
      image: "/img/treatment-dental-implants.jpg",
    },
    {
      slug: "childrens-dentistry",
      category: "Familia",
      title: "Odontopediatría",
      excerpt:
        "Visitas divertidas y cercanas que ayudan a los más pequeños a crear buenos hábitos y a disfrutar del dentista.",
      from: "Desde $89",
      duration: "30 min",
      image: "/img/treatment-childrens-dentistry.jpg",
    },
    {
      slug: "emergency-care",
      category: "Urgencias",
      title: "Urgencias dentales",
      excerpt:
        "¿Dolor de muelas, un diente roto o un empaste caído? Citas en el mismo día para quitarte el dolor cuanto antes.",
      from: "Desde $149",
      duration: "El mismo día",
      image: "/img/treatment-emergency-care.jpg",
    },
  ],

  team: [
    {
      name: "Dr. Amelia Hart",
      role: "Odontóloga principal",
      credential: "DDS, Universidad de Toronto",
      photo: "/img/team-amelia-hart.jpg",
    },
    {
      name: "Dr. Marcus Lee",
      role: "Implantología y odontología restauradora",
      credential: "DMD, miembro del ICOI",
      photo: "/img/team-marcus-lee.jpg",
    },
    {
      name: "Dr. Samuel Price",
      role: "Odontología familiar e infantil",
      credential: "DDS, certificado en odontopediatría",
      photo: "/img/team-samuel-price.jpg",
    },
  ],

  reviews: [
    {
      quote:
        "Toda la vida me han puesto nerviosa los dentistas. El equipo de Cap Cana me lo explicó todo, estuvo pendiente de mí en cada momento y no sentí nada de dolor.",
      name: "Hannah W.",
      context: "Revisión y limpieza",
    },
    {
      quote:
        "Reservé online un domingo por la noche y el lunes a primera hora ya me habían visto por un diente roto. Tranquilos, rápidos y muy amables.",
      name: "James O.",
      context: "Urgencias dentales",
    },
    {
      quote: "Nuestros hijos preguntan cuándo vuelven. Con eso está todo dicho.",
      name: "Leah y familia",
      context: "Odontopediatría",
    },
    {
      quote:
        "Terminé con los alineadores tres meses antes de lo previsto y no puedo dejar de sonreír. Vale cada céntimo.",
      name: "Tom R.",
      context: "Alineadores transparentes",
    },
  ],

  faq: [
    {
      q: "¿Aceptáis nuevos pacientes?",
      a: "¡Sí! Recibimos a nuevos pacientes de todas las edades. Puedes reservar online en menos de dos minutos o llamarnos.",
    },
    {
      q: "¿Facturáis directamente a mi seguro?",
      a: "Facturamos directamente a la mayoría de las aseguradoras, así que solo pagas la parte que tu póliza no cubre. Comprobamos tu cobertura antes del tratamiento.",
    },
    {
      q: "Me pongo muy nervioso. ¿Podéis ayudarme?",
      a: "Por supuesto: le pasa a la mayoría de nuestros pacientes. Vamos a tu ritmo, te lo explicamos todo antes y ofrecemos auriculares, mantas y opciones de sedación.",
    },
    {
      q: "¿Y si tengo una urgencia dental?",
      a: "Llámanos antes de las 11:00 en día laborable y haremos todo lo posible por verte ese mismo día.",
    },
    {
      q: "¿Ofrecéis financiación?",
      a: "Sí. Disponemos de financiación sin intereses para tratamientos de más de $500.",
    },
  ],

  footer: {
    treatmentsTitle: "Tratamientos",
    treatments: [
      { label: "Odontología general", href: "/treatments/check-ups-cleaning" },
      { label: "Blanqueamiento dental", href: "/treatments/teeth-whitening" },
      { label: "Alineadores transparentes", href: "/treatments/clear-aligners" },
      { label: "Implantes dentales", href: "/treatments/dental-implants" },
    ],
    clinicTitle: "Clínica",
    clinic: [
      { label: "Sobre nosotros", href: "/about" },
      { label: "Nuevos pacientes", href: "/patients" },
      { label: "Seguros y precios", href: "/patients" },
      { label: "Reserva online", href: "/book" },
    ],
    visitTitle: "Visítanos",
  },

  treatmentsPage: {
    metaTitle: "Tratamientos",
    eyebrow: "Tratamientos",
    title: "Cuidamos cada sonrisa.",
    lead: "Desde revisiones rutinarias hasta cambios completos de sonrisa, siempre con precios claros y el mismo trato suave.",
  },

  detail: {
    expectTitle: "Qué esperar",
    intro: (title: string) =>
      `Tu cita de ${title.toLowerCase()} empieza con una charla tranquila sobre tus objetivos y cualquier preocupación que tengas. Te explicamos cada paso antes de empezar y puedes levantar la mano para hacer una pausa en cualquier momento.`,
    blocks: [
      {
        title: "Tu comodidad es lo primero",
        body: "Tienes a tu disposición auriculares con cancelación de ruido, mantas calentitas y una tele en el techo. Si sientes ansiedad, dínoslo: iremos a tu ritmo.",
      },
      {
        title: "Costes y seguros",
        body: "Recibirás un plan de tratamiento claro, con sus costes, antes de empezar nada. Facturamos directamente a la mayoría de las aseguradoras y ofrecemos financiación sin intereses.",
      },
    ],
  },

  aboutPage: {
    metaTitle: "Nosotros",
    eyebrow: "Sobre Cap Cana",
    title: "Una odontología que se siente distinta.",
    lead: "Abrimos Cap Cana en 2016 con una idea sencilla: ir al dentista debería ser tranquilo, claro y amable.",
    imageAlt: "Sillón dental de la clínica",
    storyTitle: "Pensada para quienes no adoran ir al dentista.",
    story: [
      "La Dra. Amelia Hart pasó años viendo a sus pacientes aferrarse a los reposabrazos. Por eso diseñó Cap Cana de otra manera: citas más largas, salas más acogedoras, conversaciones honestas y ninguna factura sorpresa.",
      "Hoy nuestro equipo de 14 personas cuida de miles de familias de la ciudad, y seguimos reservando tiempo extra para quien nos dice que está nervioso.",
    ],
    stats: [
      { value: "4.800+", label: "Pacientes felices" },
      { value: "10 años", label: "Cuidando de la ciudad" },
      { value: "4,9 ★", label: "Valoración en Google" },
      { value: "En el día", label: "Atención de urgencias" },
    ],
  },

  patientsPage: {
    metaTitle: "Pacientes",
    eyebrow: "Para pacientes",
    title: "Todo lo que necesitas antes de tu visita.",
    lead: "Qué esperar en tu primera cita, cómo funcionan los seguros y cuánto cuesta cada cosa, sin letra pequeña.",
    stepsEyebrow: "Tu primera visita",
    stepsTitle: "Así funciona.",
    stepLabel: "Paso",
    steps: [
      {
        icon: "calendar",
        title: "Reserva online",
        body: "Elige la hora que mejor te venga: son menos de dos minutos.",
      },
      {
        icon: "clipboard",
        title: "Formularios rápidos",
        body: "Rellena tu historial de salud online antes de venir.",
      },
      {
        icon: "cup",
        title: "Relájate y conócenos",
        body: "Hablamos de tus objetivos y preocupaciones, y después una revisión suave.",
      },
      {
        icon: "smile",
        title: "Tu plan",
        body: "Próximos pasos y costes claros, sin ninguna presión.",
      },
    ],
    pricingEyebrow: "Seguros y precios",
    pricingTitle: "Precios claros. Facturación directa.",
    pricingLead:
      "Facturamos directamente a la mayoría de las aseguradoras y ofrecemos financiación sin intereses en tratamientos de más de $500. ¿No tienes seguro? Pregunta por nuestro plan de socios.",
    prices: [
      { item: "Revisión, radiografías y limpieza para nuevos pacientes", price: "$99" },
      { item: "Revisión y limpieza", price: "$129" },
      { item: "Empaste del color del diente", price: "desde $180" },
      { item: "Blanqueamiento profesional", price: "desde $349" },
      { item: "Cita de urgencia", price: "desde $149" },
      { item: "Implante dental unitario", price: "desde $2,800" },
      { item: "Alineadores transparentes (tratamiento completo)", price: "desde $3,900" },
    ],
  },

  bookPage: {
    metaTitle: "Pedir cita",
    eyebrow: "Pide tu cita",
    title: "Busquemos la hora que mejor te venga.",
    lead: "Envíanos una solicitud y te confirmaremos la cita por teléfono o correo en pocas horas laborables. ¿Te duele ahora mismo? Llámanos.",
    contacts: {
      call: "Llámanos",
      email: "Correo",
      visit: "Visítanos",
      hours: "Horario",
    },
    form: {
      name: "Nombre completo",
      namePh: "Tu nombre",
      phone: "Teléfono",
      phonePh: "(555) 000-0000",
      email: "Correo electrónico",
      emailPh: "tu@correo.com",
      patientType: "Tipo de paciente",
      patientTypes: ["Nuevo paciente", "Ya soy paciente"],
      reason: "Motivo de la visita",
      reasons: [
        "Revisión y limpieza",
        "Blanqueamiento dental",
        "Alineadores transparentes",
        "Implantes dentales",
        "Odontopediatría",
        "Urgencia / dolor",
        "Otro motivo",
      ],
      date: "Fecha preferida",
      time: "Hora preferida",
      times: [
        "Mañana (8–12)",
        "Mediodía (12–16)",
        "Tarde (16–18)",
        "Sábado por la mañana",
      ],
      notes: "¿Algo que debamos saber?",
      notesPh: "Aseguradora, preocupaciones, necesidades de accesibilidad…",
      submit: "Solicitar cita",
      note: "Este formulario no es para urgencias: por favor, llámanos.",
      sentTitle: "Solicitud recibida.",
      sentBody:
        "Gracias. Te confirmaremos la cita por teléfono o correo en pocas horas laborables.",
      sentAgain: "Enviar otra solicitud",
    },
  },
};
