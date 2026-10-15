# 💌 Cómo personalizar tu Álbum de Recuerdos de Cumpleaños

¡Felicidades por este hermoso detalle! Este álbum digital ha sido diseñado para que se sienta como un **scrapbook físico y artesanal**, hecho a mano con todo tu amor para tu esposo.

---

## 🌟 Cómo ver la página ahora mismo
1. Simplemente haz doble clic en el archivo **`index.html`** para abrirlo en cualquier navegador (Google Chrome, Edge, Safari, Firefox).
2. Verás la pantalla inicial del sobre con el botón **"Abre tu regalo →"**.

---

## ✏️ Dónde y cómo editar tus textos y recuerdos

Todo el contenido está centralizado en un solo archivo fácil de editar:
📁 **`js/config.js`**

Puedes abrir `config.js` con el Bloc de Notas, VS Code o cualquier editor de texto.

Dentro encontrarás secciones claramente señalizadas con comentarios en español:

### 1. Datos Generales y Portada
- **`nombreEsposo`**: Cambia `"[SU NOMBRE]"` por el nombre de tu esposo o como le dices de cariño.
- **`nombreEsposa`**: Tu nombre para la firma final.
- **`anoCumpleanos`**: El año actual o el que desees celebrar.
- **`fotoPortada`**: La foto de los dos juntos para la portada (ej: `"assets/fotos/portada.jpg"`).

### 2. Música
- Guarda tu canción especial en la carpeta `assets/audio/` con el nombre `musica.mp3`.
- En `config.js`, coloca: `archivo: "assets/audio/musica.mp3"`.
- *Nota dulce:* Si aún no tienes un archivo de música listo, la página incluye automáticamente una melodía suave de piano/caja de música romántica para que nunca se quede en silencio.

### 3. Tus Fotografías
Guarda tus fotos personales en la carpeta:
📁 **`assets/fotos/`**

Por ejemplo:
- `assets/fotos/foto1.jpg`
- `assets/fotos/recuerdo1.jpg`
- `assets/fotos/viaje.jpg`

Luego, en `config.js`, simplemente coloca el nombre de la foto entre las comillas correspondientes:
```javascript
foto: "assets/fotos/recuerdo1.jpg"
```
> **Tip:** Si dejas una foto vacía `""`, la página muestra automáticamente un hermoso marco decorativo con su placeholder, sin mostrar imágenes rotas.

### 4. Las Secciones del Álbum
En `config.js` puedes personalizar libremente:
- **Capítulo 1 — "Y entonces llegaste tú":** La historia de cómo se conocieron y empezaron a salir.
- **Capítulo 2 — "Mis recuerdos favoritos contigo":** 10 momentos especiales en formato Polaroid interactivo.
- **Capítulo 3 — "Cosas que amo de ti":** 12 notas adhesivas en colores pastel con chinchetas.
- **Capítulo 4 — "Nuestra historia paso a paso":** Línea de tiempo con sus fechas y logros más importantes.
- **Capítulo 5 — "Pequeñas cosas que me hacen pensar en ti":** 8 objetos cotidianos (café, películas, viajes, canciones...) con notas secretas desplegables.
- **Capítulo 6 — "Si pudiera guardar momentos...":** Frase emocional y una carta manuscrita.
- **Capítulo 7 — "Y todavía nos quedan muchísimas historias":** Lista de sueños, viajes y planes futuros que van a cumplir juntos.
- **Carta Final de Cumpleaños:** Tu carta completa con firma y fecha ("15 de octubre").
- **Una última sorpresa ✨:** El mensaje secreto que se revela con lluvia de confeti dorado y vino tinto al presionar el botón final.

---

## 📱 ¿Cómo funciona en el celular?
La página está completamente adaptada para pantallas móviles (*Mobile First*):
- No depende de pasar el ratón (*hover*).
- Al tocar cualquier foto, se abre para leer el recuerdo en tamaño grande.
- Al tocar los objetos cotidianos, se despliegan las notas cariñosas.
- El reproductor de música tiene controles táctiles grandes y cómodos.

---

## 🎁 Opciones para entregárselo a tu esposo
1. **En su teléfono o computadora:** Puedes pasar la carpeta a su dispositivo o abrirla tú misma en su pantalla.
2. **Enlace web online (Gratuito):** Puedes arrastrar esta carpeta a servicios gratuitos como [Netlify Drop](https://app.netlify.com/drop) o [Vercel](https://vercel.com/) para tener un enlace privado (por ejemplo: `regaloparamiamor.netlify.app`) y enviárselo por WhatsApp el 15 de octubre.
