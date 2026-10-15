/**
 * =========================================================================
 * 🎨 NUESTRO PEQUEÑO ÁLBUM DE RECUERDOS — LÓGICA & INTERACTIVIDAD
 * =========================================================================
 */

document.addEventListener("DOMContentLoaded", () => {
  // 1. Inicializar renderizado dinámico con datos de CONFIG
  renderizarAlbum();

  // 2. Control de Experiencia Inicial (Sobre / Apertura)
  inicializarApertura();

  // 3. Sistema de Música (Audio HTML5 + Generador acústico de respaldo)
  inicializarMusica();

  // 4. Interacciones de Recortes y Objetos
  inicializarInteracciones();

  // 5. Animación de Scroll Suave y Observador de Aparición
  inicializarScrollObserver();

  // 6. Sorpresa Final y Confeti
  inicializarSorpresaFinal();
});

/**
 * =========================================================================
 * 1. RENDERIZADO DEL ÁLBUM
 * =========================================================================
 */
function renderizarAlbum() {
  const g = CONFIG.datosGenerales;

  // --- Portada ---
  const elTituloPortada = document.getElementById("portada-titulo");
  const elSubtituloPortada = document.getElementById("portada-subtitulo");
  const elFechaSello = document.getElementById("portada-fecha-sello");
  const elFotoPortada = document.getElementById("portada-foto-img");
  const elPiePortada = document.getElementById("portada-pie-foto");

  if (elTituloPortada) elTituloPortada.textContent = g.tituloPortada;
  if (elSubtituloPortada) elSubtituloPortada.textContent = g.subtituloPortada;
  if (elFechaSello) elFechaSello.textContent = g.dedicatoriaCorta || `15 · 10 · ${g.anoCumpleanos}`;
  if (elPiePortada) elPiePortada.textContent = `${g.nombreEsposo} & ${g.nombreEsposa}`;

  cargarImagenOPorDefecto(elFotoPortada, g.fotoPortada, "Nosotros ❤️");

  // Anotaciones manuscritas de portada
  const nota1 = document.getElementById("portada-nota-1");
  const nota2 = document.getElementById("portada-nota-2");
  const nota3 = document.getElementById("portada-nota-3");
  if (nota1 && g.notasPortada.nota1) nota1.textContent = g.notasPortada.nota1;
  if (nota2 && g.notasPortada.nota2) nota2.textContent = g.notasPortada.nota2;
  if (nota3 && g.notasPortada.nota3) nota3.textContent = g.notasPortada.nota3;

  // --- Sección 1: Historia ---
  const sec1 = CONFIG.seccion1_historia;
  const titSec1 = document.getElementById("sec1-titulo");
  const subSec1 = document.getElementById("sec1-subtitulo");
  const contSec1 = document.getElementById("sec1-elementos");

  if (titSec1) titSec1.textContent = sec1.titulo;
  if (subSec1) subSec1.textContent = sec1.subtitulo;

  if (contSec1 && sec1.elementos) {
    contSec1.innerHTML = "";
    sec1.elementos.forEach((elem, idx) => {
      if (elem.tipo === "foto") {
        const tarjeta = document.createElement("div");
        tarjeta.className = "polaroid-card";
        tarjeta.style.transform = `rotate(${elem.rotacion || "-2deg"})`;
        tarjeta.innerHTML = `
          <div class="washi-tape polaroid-tape tape-dorado"></div>
          <div class="polaroid-card-img-wrap" id="wrap-historia-${idx}">
            <img src="" alt="${elem.pieFoto}" id="img-historia-${idx}">
          </div>
          <div class="polaroid-card-info">
            <div class="polaroid-card-titulo">${elem.pieFoto}</div>
            <div class="polaroid-card-fecha">${elem.fecha}</div>
          </div>
        `;
        contSec1.appendChild(tarjeta);
        const img = tarjeta.querySelector(`#img-historia-${idx}`);
        cargarImagenOPorDefecto(img, elem.src, elem.id || "Foto Historia");

        // Clic para expandir
        tarjeta.addEventListener("click", () => {
          abrirModalDetalleFoto({
            foto: elem.src,
            titulo: elem.pieFoto,
            fecha: elem.fecha,
            descripcion: "Uno de los momentos más bonitos de nuestra historia juntos."
          });
        });
      } else if (elem.tipo === "nota" || elem.tipo === "recorte") {
        const tarjeta = document.createElement("div");
        tarjeta.className = "item-historia-tarjeta con-lineas";
        tarjeta.innerHTML = `
          <div class="washi-tape" style="top: -12px; left: 20px; width: 70px; background-color: rgba(217, 136, 128, 0.7);"></div>
          ${elem.sello ? `<div class="sello-postal">${elem.sello}</div>` : ""}
          ${elem.titulo ? `<h3 class="item-historia-titulo">${elem.titulo}</h3>` : ""}
          <p class="item-historia-texto">${elem.texto}</p>
          ${elem.notaAlMargen ? `<span class="item-historia-margen">~ ${elem.notaAlMargen}</span>` : ""}
        `;
        contSec1.appendChild(tarjeta);
      }
    });
  }

  // --- Sección 2: Galería Polaroid ---
  const sec2 = CONFIG.seccion2_galeria;
  const titSec2 = document.getElementById("sec2-titulo");
  const subSec2 = document.getElementById("sec2-subtitulo");
  const gridSec2 = document.getElementById("sec2-grid");

  if (titSec2) titSec2.textContent = sec2.titulo;
  if (subSec2) subSec2.textContent = sec2.subtitulo;

  if (gridSec2 && sec2.recuerdos) {
    gridSec2.innerHTML = "";
    sec2.recuerdos.forEach((recuerdo, i) => {
      const card = document.createElement("div");
      card.className = "polaroid-card";
      card.style.transform = `rotate(${recuerdo.inclinacion || "0deg"})`;
      card.innerHTML = `
        <div class="washi-tape polaroid-tape" style="background-color: ${recuerdo.colorTape || 'rgba(217, 136, 128, 0.7)'};"></div>
        <div class="polaroid-card-img-wrap">
          <img src="" alt="${recuerdo.titulo}" id="img-recuerdo-${i}">
        </div>
        <div class="polaroid-card-info">
          <div class="polaroid-card-titulo">${recuerdo.titulo}</div>
          <div class="polaroid-card-fecha">${recuerdo.fecha}</div>
        </div>
      `;

      const img = card.querySelector(`#img-recuerdo-${i}`);
      cargarImagenOPorDefecto(img, recuerdo.foto, `Recuerdo ${i + 1}`);

      card.addEventListener("click", () => {
        abrirModalDetalleFoto(recuerdo);
      });

      gridSec2.appendChild(card);
    });
  }

  // --- Sección 3: Cosas que amo de ti ---
  const sec3 = CONFIG.seccion3_cosasQueAmo;
  const titSec3 = document.getElementById("sec3-titulo");
  const subSec3 = document.getElementById("sec3-subtitulo");
  const gridSec3 = document.getElementById("sec3-grid");

  if (titSec3) titSec3.textContent = sec3.titulo;
  if (subSec3) subSec3.textContent = sec3.subtitulo;

  if (gridSec3 && sec3.notas) {
    gridSec3.innerHTML = "";
    sec3.notas.forEach((nota, i) => {
      const card = document.createElement("div");
      card.className = `nota-adhesiva ${nota.colorFondo || 'nota-rosa'}`;
      card.style.transform = `rotate(${nota.rotacion || '0deg'})`;
      card.innerHTML = `
        <div class="chincheta-nota"></div>
        <div class="nota-numero">RAZÓN #${String(i + 1).padStart(2, '0')}</div>
        <div class="nota-categoria">${nota.categoria}</div>
        <div class="nota-detalle">${nota.detalle}</div>
      `;
      gridSec3.appendChild(card);
    });
  }

  // --- Sección 4: Timeline ---
  const sec4 = CONFIG.seccion4_timeline;
  const titSec4 = document.getElementById("sec4-titulo");
  const subSec4 = document.getElementById("sec4-subtitulo");
  const contSec4 = document.getElementById("sec4-contenedor");

  if (titSec4) titSec4.textContent = sec4.titulo;
  if (subSec4) subSec4.textContent = sec4.subtitulo;

  if (contSec4 && sec4.hitos) {
    contSec4.innerHTML = "";
    sec4.hitos.forEach((hito, i) => {
      const item = document.createElement("div");
      item.className = "timeline-item";
      item.innerHTML = `
        <div class="timeline-nodo">${hito.icono || '❤️'}</div>
        <div class="timeline-tarjeta">
          <div class="timeline-fecha">${hito.fecha}</div>
          <h3 class="timeline-titulo">${hito.titulo}</h3>
          <p class="timeline-desc">${hito.descripcion}</p>
        </div>
      `;
      contSec4.appendChild(item);
    });
  }

  // --- Sección 5: Pequeñas cosas que me hacen pensar en ti ---
  const sec5 = CONFIG.seccion5_cosasQueRecuerdan;
  const titSec5 = document.getElementById("sec5-titulo");
  const subSec5 = document.getElementById("sec5-subtitulo");
  const instSec5 = document.getElementById("sec5-instruccion");
  const gridSec5 = document.getElementById("sec5-grid");

  if (titSec5) titSec5.textContent = sec5.titulo;
  if (subSec5) subSec5.textContent = sec5.subtitulo;
  if (instSec5) instSec5.textContent = sec5.instruccion || "(Toca para descubrir la nota ✨)";

  if (gridSec5 && sec5.elementos) {
    gridSec5.innerHTML = "";
    sec5.elementos.forEach((elem) => {
      const card = document.createElement("div");
      card.className = "objeto-recorte";
      card.innerHTML = `
        <div class="objeto-icono-circulo">${elem.icono}</div>
        <div class="objeto-nombre">${elem.nombre}</div>
        <div class="objeto-pista">Ver nota 💌</div>
        <div class="objeto-nota-secreta">${elem.nota}</div>
      `;

      card.addEventListener("click", () => {
        card.classList.toggle("abierto");
        const pista = card.querySelector(".objeto-pista");
        if (pista) {
          pista.textContent = card.classList.contains("abierto") ? "Ocultar ✕" : "Ver nota 💌";
        }
      });

      gridSec5.appendChild(card);
    });
  }

  // --- Sección 6: Si pudiera guardar momentos... ---
  const sec6 = CONFIG.seccion6_guardarMomentos;
  const fraseSec6 = document.getElementById("sec6-frase");
  const cartaSec6 = document.getElementById("sec6-carta");

  if (fraseSec6) fraseSec6.textContent = sec6.fraseCentral;
  if (cartaSec6) cartaSec6.textContent = sec6.cartaBreve;

  // --- Sección 7: Sueños Futuros ---
  const sec7 = CONFIG.seccion7_suenosFuturos;
  const titSec7 = document.getElementById("sec7-titulo");
  const fraseSec7 = document.getElementById("sec7-frase-destacada");
  const gridSec7 = document.getElementById("sec7-grid");

  if (titSec7) titSec7.textContent = sec7.titulo;
  if (fraseSec7) fraseSec7.textContent = sec7.fraseDestacada;

  if (gridSec7 && sec7.planes) {
    gridSec7.innerHTML = "";
    sec7.planes.forEach((plan) => {
      const card = document.createElement("div");
      card.className = "sueno-tarjeta";
      card.innerHTML = `
        <div class="washi-tape tape-beige" style="top: -10px; right: 20px; width: 60px;"></div>
        <div class="sueno-etiqueta"><span class="sueno-icono">${plan.icono}</span> ${plan.etiqueta}</div>
        <div class="sueno-texto">${plan.texto}</div>
      `;
      gridSec7.appendChild(card);
    });
  }

  // --- Sección Final: Carta de Cumpleaños ---
  const cartaSec = CONFIG.seccionFinal_cartaCumpleanos;
  const titCarta = document.getElementById("carta-titulo");
  const cuerpoCarta = document.getElementById("carta-cuerpo");
  const despCarta = document.getElementById("carta-despedida");
  const firmaCarta = document.getElementById("carta-firma");
  const fechaCarta = document.getElementById("carta-fecha");

  if (titCarta) titCarta.textContent = cartaSec.titulo;
  if (cuerpoCarta) cuerpoCarta.textContent = cartaSec.cartaTexto;
  if (despCarta) despCarta.textContent = cartaSec.despedida;
  if (firmaCarta) firmaCarta.textContent = cartaSec.firma.replace("[MI NOMBRE]", g.nombreEsposa);
  if (fechaCarta) fechaCarta.textContent = cartaSec.fecha;

  // --- Sorpresa Final ---
  const btnSorpresa = document.getElementById("btn-abrir-sorpresa");
  if (btnSorpresa) {
    btnSorpresa.innerHTML = `<span>${CONFIG.sorpresaFinal.textoBoton}</span>`;
  }
}

/**
 * =========================================================================
 * GENERADOR DE PLACEHOLDERS ELEGANTE (SVG INLINE)
 * Si el usuario no ha subido foto todavía, muestra una bella ilustración
 * artesanal en vez de un enlace roto.
 * =========================================================================
 */
function cargarImagenOPorDefecto(imgElement, src, etiqueta) {
  if (!imgElement) return;

  if (src && src.trim() !== "") {
    imgElement.src = src;
    imgElement.style.display = "block";
    imgElement.onerror = () => {
      asignarPlaceholderArte(imgElement, etiqueta);
    };
  } else {
    asignarPlaceholderArte(imgElement, etiqueta);
  }
}

function asignarPlaceholderArte(imgElement, etiqueta) {
  // SVG codificado en Data URI para un marco vintage muy dulce
  const svgData = `
    <svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 400 400">
      <defs>
        <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#FBF7F0"/>
          <stop offset="100%" stop-color="#EFE4D2"/>
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#bg)"/>
      <rect x="20" y="20" width="360" height="360" fill="none" stroke="#D4AF37" stroke-width="1.5" stroke-dasharray="6,6" opacity="0.45" rx="6"/>
      <circle cx="200" cy="170" r="46" fill="#F8E7E9" opacity="0.8"/>
      <!-- Icono Cámara / Corazón en SVG -->
      <path d="M185 155 h30 l6 10 h15 a8 8 0 0 1 8 8 v32 a8 8 0 0 1 -8 8 h-62 a8 8 0 0 1 -8 -8 v-32 a8 8 0 0 1 8 -8 h11 z" fill="none" stroke="#782333" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
      <circle cx="200" cy="180" r="12" fill="none" stroke="#782333" stroke-width="2.5"/>
      <path d="M200 176 c-2 -3 -6 -3 -8 0 c-2 2 -1 6 8 11 c9 -5 10 -9 8 -11 c-2 -3 -6 -3 -8 0 z" fill="#D48270"/>
      <!-- Textos -->
      <text x="200" y="250" text-anchor="middle" font-family="'Caveat', cursive, sans-serif" font-size="24" fill="#782333" font-weight="bold">[${etiqueta}]</text>
      <text x="200" y="278" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#8C7F78" letter-spacing="1">TOCA PARA CAMBIAR FOTO</text>
    </svg>
  `;
  imgElement.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svgData.trim());

  // Funcionalidad adicional: permitir a la usuaria previsualizar fotos desde su disco en vivo
  habilitarSubidaLocalEnElemento(imgElement);
}

function habilitarSubidaLocalEnElemento(imgElement) {
  const contenedor = imgElement.closest(".polaroid-card, .polaroid-foto");
  if (!contenedor || contenedor.dataset.listenerSubida) return;

  contenedor.dataset.listenerSubida = "true";
  const inputOculto = document.createElement("input");
  inputOculto.type = "file";
  inputOculto.accept = "image/*";
  inputOculto.style.display = "none";
  document.body.appendChild(inputOculto);

  inputOculto.addEventListener("change", (e) => {
    const archivo = e.target.files[0];
    if (archivo) {
      const lector = new FileReader();
      lector.onload = (evento) => {
        imgElement.src = evento.target.result;
      };
      lector.readAsDataURL(archivo);
    }
  });

  // Si hace doble clic o click derecho, abre el selector de archivo rápido
  contenedor.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    inputOculto.click();
  });
}

/**
 * =========================================================================
 * 2. EXPERIENCIA DE APERTURA (EL SOBRE)
 * =========================================================================
 */
function inicializarApertura() {
  const pantalla = document.getElementById("pantalla-apertura");
  const btnAbrir = document.getElementById("btn-abrir-regalo");

  if (!btnAbrir || !pantalla) return;

  btnAbrir.addEventListener("click", () => {
    // Iniciar apertura suave
    pantalla.classList.add("abierta");

    // Iniciar música automáticamente por ser el primer gesto interactivo
    if (window.reproductorAudio) {
      window.reproductorAudio.iniciar();
    }

    // Scroll suave a la portada del álbum
    setTimeout(() => {
      const portada = document.querySelector(".portada-scrapbook");
      if (portada) {
        portada.scrollIntoView({ behavior: "smooth" });
      }
    }, 400);
  });
}

/**
 * =========================================================================
 * 3. REPRODUCTOR DE MÚSICA & SINTETIZADOR AMBIENTAL ROMÁNTICO
 * =========================================================================
 */
function inicializarMusica() {
  const btnMusica = document.getElementById("btn-musica-toggle");
  const textoEstado = document.getElementById("musica-estado-texto");
  const contenedorRep = document.getElementById("reproductor-flotante");
  const tituloCancion = document.getElementById("musica-titulo-cancion");

  if (tituloCancion && CONFIG.musica.tituloCancion) {
    tituloCancion.textContent = CONFIG.musica.tituloCancion;
  }

  let audioHTML = null;
  let synthRomantico = null;
  let reproduciendo = false;

  if (CONFIG.musica.archivo && CONFIG.musica.archivo.trim() !== "") {
    audioHTML = new Audio(CONFIG.musica.archivo);
    audioHTML.loop = true;
  }

  // Sintetizador con Web Audio API por si no hay archivo de audio cargado
  class SynthRomantico {
    constructor() {
      this.ctx = null;
      this.intervalo = null;
      this.activo = false;
    }

    iniciar() {
      if (this.activo) return;
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      if (!this.ctx) this.ctx = new AudioCtx();
      if (this.ctx.state === "suspended") this.ctx.resume();

      this.activo = true;
      // Progresión de acordes dulces: Cmaj7 - Am7 - Fmaj7 - G
      const notas = [
        261.63, 329.63, 392.00, 493.88, // Do, Mi, Sol, Si (Cmaj7)
        220.00, 261.63, 329.63, 392.00, // La, Do, Mi, Sol (Am7)
        174.61, 220.00, 261.63, 329.63, // Fa, La, Do, Mi (Fmaj7)
        196.00, 246.94, 293.66, 392.00  // Sol, Si, Re, Sol (G)
      ];

      let paso = 0;
      this.intervalo = setInterval(() => {
        if (!this.activo) return;
        const frec = notas[paso % notas.length];
        this.tocarNota(frec);
        paso++;
      }, 750);
    }

    tocarNota(frecuencia) {
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(frecuencia, this.ctx.currentTime);

      gain.gain.setValueAtTime(0.001, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.045, this.ctx.currentTime + 0.1);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 1.4);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + 1.5);
    }

    detener() {
      this.activo = false;
      if (this.intervalo) clearInterval(this.intervalo);
    }
  }

  synthRomantico = new SynthRomantico();

  const toggleReproduccion = () => {
    if (!reproduciendo) {
      if (audioHTML) {
        audioHTML.play().then(() => {
          actualizarUI(true);
        }).catch(() => {
          // Si el audio falla, usamos el sintetizador romántico
          synthRomantico.iniciar();
          actualizarUI(true);
        });
      } else {
        synthRomantico.iniciar();
        actualizarUI(true);
      }
    } else {
      if (audioHTML) audioHTML.pause();
      synthRomantico.detener();
      actualizarUI(false);
    }
  };

  const actualizarUI = (estado) => {
    reproduciendo = estado;
    if (estado) {
      if (btnMusica) btnMusica.innerHTML = "⏸";
      if (textoEstado) textoEstado.textContent = "Sonando ❤️";
      if (contenedorRep) contenedorRep.classList.add("reproduciendo");
    } else {
      if (btnMusica) btnMusica.innerHTML = "▶";
      if (textoEstado) textoEstado.textContent = "Pausa";
      if (contenedorRep) contenedorRep.classList.remove("reproduciendo");
    }
  };

  if (btnMusica) {
    btnMusica.addEventListener("click", toggleReproduccion);
  }

  // Exportar al objeto global para llamarlo tras el clic del sobre
  window.reproductorAudio = {
    iniciar: () => {
      if (!reproduciendo) toggleReproduccion();
    }
  };
}

/**
 * =========================================================================
 * 4. MODAL DETALLE DE POLAROID (LIGHTBOX DE RECUERDO)
 * =========================================================================
 */
function abrirModalDetalleFoto(datos) {
  const modal = document.getElementById("modal-detalle-foto");
  const imgModal = document.getElementById("modal-foto-img");
  const titModal = document.getElementById("modal-foto-titulo");
  const fecModal = document.getElementById("modal-foto-fecha");
  const descModal = document.getElementById("modal-foto-desc");

  if (!modal) return;

  if (titModal) titModal.textContent = datos.titulo || "Nuestro recuerdo";
  if (fecModal) fecModal.textContent = datos.fecha || "";
  if (descModal) descModal.textContent = datos.descripcion || "";

  cargarImagenOPorDefecto(imgModal, datos.foto, datos.titulo || "Foto");

  modal.classList.add("activo");
}

function inicializarInteracciones() {
  const modalFoto = document.getElementById("modal-detalle-foto");
  const btnCerrarFoto = document.getElementById("btn-cerrar-foto");

  if (btnCerrarFoto && modalFoto) {
    btnCerrarFoto.addEventListener("click", () => {
      modalFoto.classList.remove("activo");
    });
  }

  if (modalFoto) {
    modalFoto.addEventListener("click", (e) => {
      if (e.target === modalFoto) modalFoto.classList.remove("activo");
    });
  }
}

/**
 * =========================================================================
 * 5. ANIMACIONES AL HACER SCROLL (INTERSECTION OBSERVER)
 * =========================================================================
 */
function inicializarScrollObserver() {
  const elementos = document.querySelectorAll(
    ".seccion-scrapbook, .polaroid-card, .nota-adhesiva, .timeline-item, .objeto-recorte, .sueno-tarjeta"
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = entry.target.style.transform.replace("translateY(20px)", "translateY(0)");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  elementos.forEach((el) => {
    el.style.opacity = "0.88";
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(el);
  });
}

/**
 * =========================================================================
 * 6. SORPRESA FINAL & CONFETI DORADO/VINO
 * =========================================================================
 */
function inicializarSorpresaFinal() {
  const btnSorpresa = document.getElementById("btn-abrir-sorpresa");
  const modalAcceso = document.getElementById("modal-acceso-sorpresa");
  const formAcceso = document.getElementById("form-acceso-sorpresa");
  const inputPin = document.getElementById("pin-sorpresa");
  const errorPin = document.getElementById("error-pin-sorpresa");
  const btnCerrarAcceso = document.getElementById("btn-cerrar-acceso-sorpresa");
  const modalSorpresa = document.getElementById("modal-sorpresa");
  const btnCerrarSorpresa = document.getElementById("btn-cerrar-sorpresa");
  const titSorpresa = document.getElementById("modal-sorpresa-titulo");
  const msgSorpresa = document.getElementById("modal-sorpresa-mensaje");
  const icoSorpresa = document.getElementById("modal-sorpresa-icono");

  if (titSorpresa) titSorpresa.textContent = CONFIG.sorpresaFinal.tituloModal;
  if (msgSorpresa) msgSorpresa.textContent = CONFIG.sorpresaFinal.mensajeSecreto;
  if (icoSorpresa) icoSorpresa.textContent = CONFIG.sorpresaFinal.iconoModal || "🎁";

  if (btnSorpresa && modalAcceso && inputPin) {
    btnSorpresa.addEventListener("click", () => {
      modalAcceso.classList.add("activo");
      inputPin.value = "";
      if (errorPin) errorPin.textContent = "";
      inputPin.focus();
    });
  }

  if (formAcceso && modalAcceso && modalSorpresa && inputPin) {
    formAcceso.addEventListener("submit", (e) => {
      e.preventDefault();
      if (inputPin.value.trim().toLowerCase() !== "crepe") {
        if (errorPin) errorPin.textContent = "Ese PIN no es correcto. Inténtalo de nuevo.";
        inputPin.select();
        return;
      }

      modalAcceso.classList.remove("activo");
      modalSorpresa.classList.add("activo");
      dispararConfetiRomantico();
    });
  }

  if (btnCerrarAcceso && modalAcceso) {
    btnCerrarAcceso.addEventListener("click", () => {
      modalAcceso.classList.remove("activo");
    });
  }

  if (modalAcceso) {
    modalAcceso.addEventListener("click", (e) => {
      if (e.target === modalAcceso) modalAcceso.classList.remove("activo");
    });
  }

  if (btnCerrarSorpresa && modalSorpresa) {
    btnCerrarSorpresa.addEventListener("click", () => {
      modalSorpresa.classList.remove("activo");
    });
  }

  if (modalSorpresa) {
    modalSorpresa.addEventListener("click", (e) => {
      if (e.target === modalSorpresa) modalSorpresa.classList.remove("activo");
    });
  }
}

/**
 * Animación artesanal de confeti con Canvas: corazones, estrellas y lazos
 */
function dispararConfetiRomantico() {
  const canvas = document.getElementById("canvas-confeti");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const colores = ["#D4AF37", "#782333", "#E8C9CC", "#D48270", "#FFFDF9", "#C9A464"];
  const particulas = [];
  const cantidad = 80;

  for (let i = 0; i < cantidad; i++) {
    particulas.push({
      x: canvas.width / 2,
      y: canvas.height / 2,
      velX: (Math.random() - 0.5) * 14,
      velY: (Math.random() - 0.7) * 16,
      tam: Math.random() * 8 + 4,
      color: colores[Math.floor(Math.random() * colores.length)],
      rotacion: Math.random() * 360,
      velRot: (Math.random() - 0.5) * 10,
      gravedad: 0.28,
      opacidad: 1
    });
  }

  let frames = 0;
  function animar() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let vivas = 0;

    particulas.forEach((p) => {
      if (p.opacidad > 0) {
        vivas++;
        p.x += p.velX;
        p.y += p.velY;
        p.velY += p.gravedad;
        p.rotacion += p.velRot;
        if (frames > 30) p.opacidad -= 0.015;

        ctx.save();
        ctx.globalAlpha = Math.max(0, p.opacidad);
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotacion * Math.PI) / 180);
        ctx.fillStyle = p.color;
        // Rectángulos tipo confeti de papel rasgado
        ctx.fillRect(-p.tam / 2, -p.tam / 2, p.tam, p.tam * 1.5);
        ctx.restore();
      }
    });

    frames++;
    if (vivas > 0 && frames < 180) {
      requestAnimationFrame(animar);
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  }

  requestAnimationFrame(animar);
}
