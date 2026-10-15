/**
 * =========================================================================
 * 💌 NUESTRO PEQUEÑO ÁLBUM DE RECUERDOS — CONFIGURACIÓN PERSONALIZADA
 * =========================================================================
 * ¡Hola! Este es el archivo donde puedes personalizar absolutamente TODO
 * el regalo para tu esposo sin necesidad de tocar código complicado.
 *
 * 📌 CÓMO EDITAR ESTE ARCHIVO:
 * 1. Solo edita los textos que están entre comillas dobles o simples: "así".
 * 2. Para las fotos:
 *    - Puedes guardar tus fotos en la carpeta `assets/fotos/` (por ejemplo: `assets/fotos/foto1.jpg`)
 *    - O puedes pegar un enlace de una foto que tengas en internet.
 *    - Si dejas una foto como "" (vacía), se mostrará automáticamente un
 *      hermoso marco decorativo de scrapbook con el placeholder correspondiente.
 * 3. ¡Guarda este archivo y recarga la página en tu navegador para ver tus cambios!
 * =========================================================================
 */

const CONFIG = {
  // -----------------------------------------------------------------------
  // 🎈 DATOS GENERALES
  // -----------------------------------------------------------------------
  datosGenerales: {
    nombreEsposo: "Juan", // Ej: "Alejandro", "Carlos", "Mi Amor"
    nombreEsposa: "Renata", // Tu nombre para la firma de la carta
    fechaCumpleanos: "15 de octubre",
    anoCumpleanos: "2008", // Puedes cambiar el año aquí (ej: 2024, 2025, etc.)
    tituloPortada: "Nuestro pequeño álbum de recuerdos",
    subtituloPortada: "Para celebrar al hombre que hace mis días mucho más bonitos.",
    dedicatoriaCorta: "15 · 10 · 2008", // Formato fecha para la portada
    notasPortada: {
      nota1: "mi persona favorita ✨",
    },
    // FOTO DE PORTADA: aquí va la foto principal de los dos juntos.
    // Reemplaza el valor vacío con algo como: "assets/fotos/14.jpeg"
    fotoPortada: "assets/fotos/15.jpeg" // Ej: "assets/fotos/portada.jpg"
  },

  // -----------------------------------------------------------------------
  // 🎵 MÚSICA DE FONDO
  // -----------------------------------------------------------------------
  // Si dejas `archivo: ""` vacío, la página incluye una hermosa melodía
  // suave tipo piano / cajita de música romántica generada automáticamente.
  // Cuando quieras poner tu canción especial, guarda el archivo en
  // `assets/audio/musica.mp3` y pon la ruta aquí abajo:
  musica: {
    habilitada: true,
    archivo: "assets/audio/Entre danzas y sueños_Orquesta.mpeg", // Ej: "assets/audio/musica.mp3" o un enlace directo
    tituloCancion: "Nuestra canción",
  },

  // -----------------------------------------------------------------------
  // 📖 SECCIÓN 1: "Y ENTONCES LLEGASTE TÚ" (Nuestra Historia)
  // -----------------------------------------------------------------------
  seccion1_historia: {
    titulo: "Y entonces llegaste tú...",
    subtitulo: "El día en que todo empezó a tener un color diferente",
    elementos: [
      {
        // FOTO 01 DE LA HISTORIA: aquí va la primera fotografía importante del inicio.
        // Ejemplo: "assets/fotos/1.jpeg"
        tipo: "foto",
        id: "FOTO 01",
        src: "assets/fotos/16.png", // Ej: "assets/fotos/historia1.jpg"
        fecha: "28 . 06 . 2025",
        pieFoto: "Gracias Divina Comedia por tanto, perdón por tan poco.",
        rotacion: "-3deg"
      },
      {
        tipo: "nota",
        titulo: "El primer capítulo",
        texto: "Ese día alguien llegaste tarde a los Scouts (qué raro) y yo me iba temprano (eso sí es raro). Después de que nos peleáramos en el piso, conversáramos e hiciéramos lo posible por cuidar al huevo, no podía dejar de pensar que solo quería que tú estuvieras viendo esa película conmigo.",
        notaAlMargen: "Desde ese día supe que serías importante ✨"
      },
      {
        // FOTO 02 DE LA HISTORIA: aquí va la siguiente imagen clave del crecimiento de la relación.
        // Ejemplo: "assets/fotos/2.jpeg"
        tipo: "foto",
        id: "FOTO 02",
        src: "assets/fotos/KIA-E-GROUND.jpeg", // Ej: "assets/fotos/historia2.jpg"
        fecha: "18 . 07 . 2025",
        pieFoto: "Cuando supimos que esto era para siempre",
        rotacion: "2.5deg"
      },
      {
        tipo: "recorte",
        texto: "Vamos un año, el domingo se cumplen 2 meses y aún no vamos a esa cosa... Algún día amor, algún día. Pero quiero que sea solo contigo, sin ti no hay nada."
      }
    ]
  },

  // -----------------------------------------------------------------------
  // 📸 SECCIÓN 2: "MIS RECUERDOS FAVORITOS CONTIGO" (Galería Polaroid)
  // -----------------------------------------------------------------------
  // Aquí tienes 10 espacios para fotografías tipo Polaroid.
  // Al hacer clic o tocar una foto, se abrirá para leer la historia con detalle.
  seccion2_galeria: {
    titulo: "Mis recuerdos favoritos contigo",
    subtitulo: "Instantes que guardo en el corazón como pequeños tesoros",
    recuerdos: [
      {
        // RECUERDO 1: primera foto de la galería, el recorte más personal del inicio.
        // Ejemplo: "assets/fotos/3.jpeg"
        id: "1",
        foto: "assets/fotos/Supermaxi.jpg", // Ej: "assets/fotos/recuerdo1.jpg"
        titulo: "Nuestro primer lugar...",
        fecha: "18 . 07 . 2025",
        descripcion: "¿No es lo más romántico, cliché y cursi del mundo que al primer lugar que entramos fue a un Supermaxi? Amé esa cita, que se repita ❤️.",
        inclinacion: "-2deg",
        colorTape: "rgba(217, 136, 128, 0.7)"
      },
      {
        // RECUERDO 2: otra foto de la galería, ideal para un viaje, paseo o momento especial.
        id: "2",
        foto: "assets/fotos/1.jpeg", // Ej: "assets/fotos/recuerdo2.jpg"
        titulo: "Uno de esos días que quisiera repetir",
        fecha: "20-21 . 07 . 2025",
        descripcion: "Sinceramente, quisiera volver a esa noche donde te dije lo que sentía. Quería decir, sentir y expresar mucho más, pero era la primera vez que me gustaba un chico de una manera tan abrumadora que no sabía cómo decirlo.",
        inclinacion: "3deg",
        colorTape: "rgba(197, 160, 89, 0.7)"
      },
      {
        // RECUERDO 3: foto de una aventura, escapada o momento de exploración juntos.
        id: "3",
        foto: "assets/fotos/2.jpeg", // Ej: "assets/fotos/recuerdo3.jpg"
        titulo: "Una aventura más contigo",
        fecha: "18 . 01 . 2026",
        descripcion: "Quiero volver al Centro Histórico contigo, tomarnos fotos, morir de calor, pelear con algún vagabundo y amarnos. Puede faltar todo, menos el amarnos.",
        inclinacion: "-1.5deg",
        colorTape: "rgba(120, 40, 50, 0.6)"
      },
      {
        // RECUERDO 4: foto de un día simple que se volvió muy significativo.
        id: "4",
        foto: "assets/fotos/3.jpeg", // Ej: "assets/fotos/recuerdo4.jpg"
        titulo: "Un momento simple que terminó siendo especial",
        fecha: "04 . 01 . 2026",
        descripcion: "Ya tienes un manatí en tu vida (yo), necesitabas una foca watona con cara retrasada y mucho de mi perfume en ella para que llenes ese espacio en tu habitación. Prefiero a las focas antes que a los maldito capibaras, putos capibaras, me caen tan mal.",
        inclinacion: "2deg",
        colorTape: "rgba(217, 136, 128, 0.7)"
      },
      {
        // RECUERDO 5: foto de una risa, una tarde divertida o un momento espontáneo.
        id: "5",
        foto: "assets/fotos/11.jpeg", // Ej: "assets/fotos/recuerdo5.jpg"
        titulo: "Cuando no podíamos parar de reír",
        fecha: "25 . 07 . 2026",
        descripcion: "Aunque no pudimos dormir juntos esa noche, bailar contigo tan mal como lo hicimos, verte reír, pasar con tu familia, probar ese mojito de Sprite horrible y decirte todos esos `te amo` susurrados al oído como si fueramos amantes, solo me aseguraron que contigo seré feliz hasta después de la muerte.",
        inclinacion: "-2.8deg",
        colorTape: "rgba(197, 160, 89, 0.7)"
      },
      {
        // RECUERDO 6: foto del lugar que se convirtió en un rincón especial para ambos.
        id: "6",
        foto: "assets/fotos/10.jpeg", // Ej: "assets/fotos/recuerdo6.jpg"
        titulo: "Nuestro rincón en el mundo",
        fecha: "∞",
        descripcion: "Los abrazos, sin duda alguna ese es nuestro rincón favorito. Al menos yo lo creo. Ese lugar donde nos sentimos seguros, donde nos sentimos nosotros mismos y donde no necesitamos nada más que estar juntos.",
        inclinacion: "1.8deg",
        colorTape: "rgba(120, 40, 50, 0.6)"
      },
      {
        // RECUERDO 7: foto de un logro o un momento de orgullo para ti y para la relación.
        id: "7",
        foto: "assets/fotos/13.jpeg", // Ej: "assets/fotos/recuerdo7.jpg"
        titulo: "El día en que lo lograste",
        fecha: "24 . 07 . 2026",
        descripcion: "Ese logro tuyo que me hizo sentir la esposa más orgullosa del universo. Ese momento donde me di cuenta que todo lo que te propongas lo vas a lograr, porque eres un hombre increíble y con un corazón enorme. Te amo y me siento tan afortunada de tenerte a mi lado.",
        inclinacion: "-3deg",
        colorTape: "rgba(217, 136, 128, 0.7)"
      },
      {
        // RECUERDO 8: foto de una celebración o festejo importante en la relación.
        id: "8",
        foto: "assets/fotos/7.jpeg", // Ej: "assets/fotos/recuerdo8.jpg"
        titulo: "Una celebración inolvidable",
        fecha: "25 . 07 . 2026",
        descripcion: "Quiero repetir más de esas celebraciones y fiestas contigo, donde nos reímos, bailamos mal y te podía decir 'te amo' en susurros mientras me abrazabas. Quiero volver a casa con dolor en los pies y, luego de muchos besitos, dormir juntos para despertarnos chuchaquis y yo oliendo a tu perfume.",
        inclinacion: "2.2deg",
        colorTape: "rgba(197, 160, 89, 0.7)"
      },
      {
        // RECUERDO 9: foto de una mirada, una complicidad o un momento casi imperceptible pero profundo.
        id: "9",
        foto: "assets/fotos/6.jpeg", // Ej: "assets/fotos/recuerdo9.jpg"
        titulo: "La complicidad perfecta",
        fecha: "∞",
        descripcion: "Ese momento donde una sola mirada entre nosotros dos lo dijo absolutamente todo. Ese instante donde no necesitamos palabras, solo sentirnos y amarnos. Ese momento donde me di cuenta que contigo todo es más fácil, más bonito y más real.",
        inclinacion: "-1deg",
        colorTape: "rgba(120, 40, 50, 0.6)"
      },
      {
        // RECUERDO 10: foto final de la galería, la imagen más simple y más significativa.
        id: "10",
        foto: "assets/fotos/12.jpeg", // Ej: "assets/fotos/recuerdo10.jpg"
        titulo: "Simplemente tú y yo",
        fecha: "Para siempre...",
        descripcion: "Una fotografía espontánea que captura exactamente lo bonito que es quererte. Esa sonrisa tuya que me derrite, esa mirada que me hace sentir en casa y ese abrazo que me recuerda que contigo todo está bien. Gracias por ser mi compañero de vida, mi amor y mi mejor amigo.",
        inclinacion: "2.7deg",
        colorTape: "rgba(197, 160, 89, 0.7)"
      }
    ]
  },

  // -----------------------------------------------------------------------
  // 💌 SECCIÓN 3: "COSAS QUE AMO DE TI" (Notas de Scrapbook)
  // -----------------------------------------------------------------------
  // Pequeñas notas y post-its pegados con cinta adhesiva.
  // Puedes cambiar el texto o agregar más notas si deseas.
  seccion3_cosasQueAmo: {
    titulo: "Cosas que amo de ti",
    subtitulo: "Pequeños y grandes motivos por los que te elijo cada día",
    notas: [
      {
        categoria: "Tu forma de hacerme reír",
        detalle: "Ese humor tan rancio que solo tú tienes, esos chistes horribles, que alegran todos mis días.",
        colorFondo: "nota-rosa",
        rotacion: "-2deg"
      },
      {
        categoria: "Cómo me haces sentir en casa",
        detalle: "No importa dónde estemos, tú eres mi paz y refugio. Siempre lo serás.",
        colorFondo: "nota-crema",
        rotacion: "1.8deg"
      },
      {
        categoria: "Tu paciencia",
        detalle: "Tu calma para escucharme y tu serenidad en los momentos difíciles. Siempre me enseñas a respirar y a ver la vida con más claridad, maldito capibara positivista.",
        colorFondo: "nota-beige",
        rotacion: "-1.5deg"
      },
      {
        categoria: "Tu manera de cuidarme",
        detalle: "En cada detalle, cada gesto silencioso y en cómo siempre estás pendiente de mí.",
        colorFondo: "nota-terracota",
        rotacion: "2.5deg"
      },
      {
        categoria: "Las pequeñas cosas que haces",
        detalle: "Esos detalles invisibles para el mundo pero que a mí me llenan el corazón. Tu sonrisa es el mejor regalo, tu risa me encanta y tu mirada me pone nerviosa (sí, aún lo hace)",
        colorFondo: "nota-rosa",
        rotacion: "-2.2deg"
      },
      {
        categoria: "Tu forma de mirar la vida",
        detalle: "Tu optimismo, tu manera de resolver las cosas cuando yo no puedo más el estrés, lo social que eres y tu corazoncito todo bonito, todo chiquito que voy a cuidar por el resto de mi vida.",
        colorFondo: "nota-crema",
        rotacion: "1.2deg"
      },
      {
        categoria: "Tus abrazos de oso",
        detalle: "Esos abrazos que reparan cualquier cansancio al final de un día largo, a pesar de que me dejen sin aire ☠️.",
        colorFondo: "nota-beige",
        rotacion: "-2.8deg"
      },
      {
        categoria: "Nuestras charlas sin fin",
        detalle: "Poder hablar de todo y de nada por horas, morirnos de risa por tonteras y ponernos al día con chismes, y eso solo me asegura que contigo soy y seré feliz.",
        colorFondo: "nota-terracota",
        rotacion: "2deg"
      },
      {
        categoria: "Tu pasión e inteligencia",
        detalle: "Eres un nerd... Yico ;) .",
        colorFondo: "nota-rosa",
        rotacion: "-1.8deg"
      },
      {
        categoria: "Cómo celebras mis logros",
        detalle: "Saber que siempre eres mi fan número uno y mi mayor apoyo en todo, tal como yo lo soy contigo. Me motivas a esforzarme y me enorgullece ser tu novia.",
        colorFondo: "nota-crema",
        rotacion: "2.3deg"
      },
      {
        categoria: "Tu complicidad en cada mirada",
        detalle: "Eres mi mejor amigo, mi confidente y mi compañero de vida. No quiero a nadie más que a ti para compartir mis días, mis sueños y mis locuras.",
        colorFondo: "nota-beige",
        rotacion: "-2.5deg"
      },
      {
        categoria: "El gran equipo que somos",
        detalle: "Contigo y por ti navegaré en bravo mar, ahogarme yo no temo y sortearé la tempestad, si eres para mí (lo eres).",
        colorFondo: "nota-terracota",
        rotacion: "1.5deg"
      }
    ]
  },

  // -----------------------------------------------------------------------
  // ⏳ SECCIÓN 4: "NUESTRO TIMELINE" (Línea de Tiempo Dibujada)
  // -----------------------------------------------------------------------
  // Momentos claves de su historia ordenados en el tiempo.
  seccion4_timeline: {
    titulo: "Nuestra historia paso a paso",
    subtitulo: "Los momentos que fueron construyendo nuestro mundo",
    hitos: [
      {
        // HITO 1 DE LA TIMELINE: fotografía del comienzo de su historia.
        fecha: "28 de Junio de 2025",
        titulo: "El día en que todo empezó",
        descripcion: "El inicio de nuestra historia. Gracias Scouts.",
        foto: "assets/fotos/12.jpeg", // Ej: "assets/fotos/hito1.jpg"
        icono: "🌱"
      },
      {
        // HITO 2 DE LA TIMELINE: foto de un viaje o una escapada importante.
        fecha: "18 de Julio de 2025",
        titulo: "Primera cita",
        descripcion: "Aunque no haya sido una cita oficial como novios, yo lo sentí así. Los nervios no me dejaron en ningún momento.",
        foto: "assets/fotos/14.jpeg", // Ej: "assets/fotos/hito2.jpg"
        icono: "💑"
      },
      {
        // HITO 3 DE LA TIMELINE: foto de un gran paso, mudanza, logro o nueva etapa.
        fecha: "07 de Agosto de 2025",
        titulo: "Nuestro primer beso",
        descripcion: "Aún recuerdo lo nervioso y adorable que te veías. Me encantaba como te armabas de valor, me mirabas y te volvías a arrepentir.",
        foto: "assets/fotos/11.jpeg", // Ej: "assets/fotos/hito3.jpg"
        icono: "🏡"
      },
      {
        // HITO 4 DE LA TIMELINE: foto del compromiso, matrimonio o anverso de una promesa.
        fecha: "15 de Octubre de 2025",
        titulo: "Tu cumpleaños",
        descripcion: "Vamos a disparar a nuestros hijos con esa pistola de orbits, es necesidad. Fue muy lindo darte ese regalo, cosito chiquito y bonito.",
        foto: "assets/fotos/8.jpeg", // Ej: "assets/fotos/hito4.jpg"
        icono: "💍"
      },
      {
        // HITO 5 DE LA TIMELINE: foto del presente, de ahora y de lo que están construyendo juntos.
        fecha: "18 de Agosto de 2026",
        titulo: "Primer Aniversario",
        descripcion: "Celebramos un año de amor, risas y aventuras juntos. Gracias por ser mi compañero de vida y por hacerme amarme.",
        foto: "assets/fotos/4.jpeg", // Ej: "assets/fotos/hito5.jpg"
        icono: "🎂"
      }
    ]
  },

  // -----------------------------------------------------------------------
  // ☕ SECCIÓN 5: "PEQUEÑAS COSAS QUE ME HACEN PENSAR EN TI" (Collage)
  // -----------------------------------------------------------------------
  // Al tocar o hacer clic sobre cada elemento, se revela una nota cariñosa.
  seccion5_cosasQueRecuerdan: {
    titulo: "Pequeñas cosas que me hacen pensar en ti",
    subtitulo: "El mundo está lleno de detalles cotidianos que llevan tu nombre",
    instruccion: "(Toca o haz clic en cada recorte para descubrir la nota ✨)",
    elementos: [
      {
        id: "cafe",
        icono: "☕",
        nombre: "El olor a café por la mañana",
        nota: "Por tus ojos y tus pecas. Mi novio chocolatoso (mi niño de ojitos canela)."
      },
      {
        id: "viajes",
        icono: "✈️",
        nombre: "Hacer maletas para viajar",
        nota: "Porque siempre me imagino a tu lado. Siempre llevo una parte tuya conmigo: tu amor y nuestros anillos y collares."
      },
      {
        id: "peliculas",
        icono: "🎬",
        nombre: "Nuestras noches de películas",
        nota: "Porque cuando se acaba la peli, siempre nos ponemos de críticos expertos y cineastas. Tú eres mi mitad opuesta."
      },
      {
        id: "comida",
        icono: "🍕",
        nombre: "Ese platillo que tanto te gusta",
        nota: "Odio las cosas dulces, pero te aseguro que nuestra casa estará llena de dulces. Además de que tú eres mi dulce favorito."
      },
      {
        id: "musica",
        icono: "🎵",
        nombre: "Esa canción que es nuestra",
        nota: "Porque ahora no puedo ver Dragones sin pensar en ti. Esa canción es nuestra, y siempre lo será."
      },
      {
        id: "lugares",
        icono: "📍",
        nombre: "Ese lugar que es tan nuestro",
        nota: "[Porque algún día lo haremos, algún día entraremos. Maldito Kia E-Ground, cuánto te amodio."
      },
      {
        id: "chistes",
        icono: "🤫",
        nombre: "Comunicarnos con memes",
        nota: "Amo que reacciones con memes, frases y stickers en cada conversación. Me complementas, me entiendes, me enamoras y eres un rarito."
      },
      {
        id: "objetos",
        icono: "🧸",
        nombre: "Todos los objetos con historia",
        nota: "Todos los peluches, regalos, flores y nuestros collares/ anillos. Aunque los capibaras siempre me recordarán a ti. Te odio."
      }
    ]
  },

  // -----------------------------------------------------------------------
  // 🕊️ SECCIÓN 6: "SI PUDIERA GUARDAR MOMENTOS..." (Minimalista & Emocional)
  // -----------------------------------------------------------------------
  seccion6_guardarMomentos: {
    fraseCentral: "Si pudiera guardar para siempre algunos momentos de mi vida, elegiría muchos de los que viví contigo.",
    // FOTO FLOTANTE 1: va en la esquina superior o lateral de esta sección emocional.
    fotoFlotante1: "assets/fotos/11.jpeg", // Ej: "assets/fotos/momento1.jpg"
    // FOTO FLOTANTE 2: va acompañando a la frase central como recuerdo pequeño y delicado.
    fotoFlotante2: "assets/fotos/8.jpeg", // Ej: "assets/fotos/momento2.jpg"
    // FOTO FLOTANTE 3: cierra la composición visual con otro instante especial de ambos.
    fotoFlotante3: "assets/fotos/4.jpeg", // Ej: "assets/fotos/momento3.jpg"
    // Carta manuscrita dentro de la página:
    cartaBreve: `Eres mi hogar y refugio.

A veces me detengo a mirar hacia atrás y me asombra la suerte tan inmensa que tuve de encontrarte. En este mundo tan ruidoso y acelerado, tú eres mi lugar seguro, mi calma y mi mayor alegría.

Gracias por cada conversación, por cada risa, por los días fáciles y sobre todo por los difíciles en los que me tomaste la mano con más fuerza. 

Si tuviera que elegir de nuevo, te elegiría a ti en cada una de mis vidas.`
  },

  // -----------------------------------------------------------------------
  // 🗺️ SECCIÓN 7: "Y TODAVÍA NOS QUEDAN MUCHÍSIMAS HISTORIAS" (Futuro)
  // -----------------------------------------------------------------------
  seccion7_suenosFuturos: {
    titulo: "Y todavía nos quedan muchísimas historias...",
    fraseDestacada: "Esto no es el final del álbum. Es apenas una de mis páginas favoritas.",
    subtitulo: "Nuestros próximos sueños por tachar en la lista:",
    planes: [
      {
        etiqueta: "VIAJE SOÑADO",
        icono: "✈️",
        texto: "Todo el mundo. Tendremos un albúm por cada país que visitemos."
      },
      {
        etiqueta: "LUGAR POR DESCUBRIR",
        icono: "🗺️",
        texto: "El Oriente, te va a gustar :D"
      },
      {
        etiqueta: "NUESTRA PRÓXIMA AVENTURA",
        icono: "🏕️",
        texto: "¿Conducir 7 horas para ir a ver una pinchurienta cascada?"
      },
      {
        etiqueta: "CENA ESPECIAL",
        icono: "🍷",
        texto: "Un pollito coreano, pero ahora en el parque. Me pashe, me pashe."
      },
      {
        etiqueta: "NUESTRO GRAN SUEÑO",
        icono: "⭐",
        texto: "Casarnos, formar una familia, tener animalejos tejos y ser felices, siempre contigo, todo contigo."
      },
      {
        etiqueta: "PLAN DE FIN DE SEMANA",
        icono: "🌅",
        texto: "No hacer nada o escaparnos a cualquier lugar del Ecuador."
      }
    ]
  },

  // -----------------------------------------------------------------------
  // 💌 SECCIÓN FINAL: CARTA DE CUMPLEAÑOS
  // -----------------------------------------------------------------------
  seccionFinal_cartaCumpleanos: {
    titulo: "Feliz cumpleaños, mi maldito capibara ❤️",
    subtitulo: "Una carta escrita desde lo más profundo de mi corazón",
    // Escribe aquí toda tu carta de cumpleaños:
    cartaTexto: `Te amo mi ratón, 

Hoy celebramos un año más de tu vida, pero quien realmente celebra el regalo más grande soy yo por tenerte en mi vida.

Cada día me haces feliz. Todos los días me confirmas que tú eres el indicado. Estoy orgullosa, enamorada, obsesionada, admirada de ti. Solo de ti, no quiero a alguien más. Te amo como si ya fueras mi esposo, solo tenemos que hacerlo realidad. 

Yo prometo seguir aquí, elegiéndote, celebrando cada victoria contigo, abrazándote en los días cansados y recordándote siempre lo mucho que te amo por ser el hombre increíble que eres.

Gracias por ser mi novio, mi futuro esposo, mi mejor amigo y el amor de mi vida.`,

    despedida: "Con todo mi amor,",
    firma: "Cuysita",
    fecha: "15 de octubre"
  },

  // -----------------------------------------------------------------------
  // ✨ DETALLE ESPECIAL FINAL (SORPRESA OCULTA)
  // -----------------------------------------------------------------------
  sorpresaFinal: {
    textoBoton: "Una última sorpresa ✨",
    tituloModal: "Para ti, con todo mi amor 💖",
    mensajeSecreto: `Si no eres tú, ya no es nadie. 

¡Feliz cumpleaños! 🎉
Sabes que, para mí, las promesas son sagradas, no se pueden romper, entonces, mi amor, mi vida, mi ratón... prometo amarte y darte mi corazón todos los días de mi vida, estemos o no juntos. Prometo amarte, hasta después de la muerte y si lo nuestros no funciona, prometo seguir amándote porque eres el indicado, mi alma opuesta, el amor de mi vida.

Te amo infinitamente. Te amo hasta más allá del infinito...`,
    iconoModal: "🎁"
  }
};

// Evita que el archivo se modifique accidentalmente en tiempo de ejecución
if (typeof Object.freeze === "function") {
  // Configuración lista
}
