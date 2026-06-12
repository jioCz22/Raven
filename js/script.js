
// Catálogo de Productos basado en tus diseños reales de RAVEN
const productos = [
    {
        id: 1,
        nombre: "Japan Clan Tee",
        precio: 399,
        categoria: "oversize",
        imagen: "assets/playera1.png", 
        descripcion: "Corte Oversize pesado. Gráfico trasero premium con el círculo rojo del Klan y tipografía de caligrafía japonesa. Disciplina pura."
    },
    {
        id: 2,
        nombre: "Metal Logo Oversize",
        precio: 449,
        categoria: "oversize",
        imagen: "assets/playera2.png",
        descripcion: "Playera drop-shoulder negra con el logotipo gótico RAVEN en el pecho en alta densidad. Diseñada para aguantar entrenamientos extremos de fuerza."
    }
   // {
   //     id: 3,
   //     nombre: "Sleeveless Distressed Mentality",
   //     precio: 379,
   //    categoria: "sleeveless",
   //     imagen: "assets/playera-tirantes.jpg",
   //     descripcion: "Playera sin mangas estilo Acid Wash gris mineral. Estampado gótico frontal y logo del cuervo circular blanco en la espalda alta."
   // }
];

// Inyección limpia de productos en el Catálogo Inferior
function renderProductos(lista) {
    const grid = document.getElementById("productos-grid");
    if (!grid) return;

    grid.innerHTML = "";

    if (lista.length === 0) {
        grid.innerHTML = `<p class="no-results" style="grid-column: 1/-1; text-align:center; color:#555; padding: 40px 0;">No hay diseños disponibles con ese nombre.</p>`;
        return;
    }

    lista.forEach(producto => {
        const card = document.createElement('div');
        card.classList.add('card');
        
        card.innerHTML = `
            <div class="card-img-wrapper">
                <img src="${producto.imagen}" alt="${producto.nombre}">
            </div>
            <div class="card-info">
                <h3>${producto.nombre}</h3>
                <span class="precio-tag">$${producto.precio} MXN</span>
                <button class="btn-ver" onclick="abrirModal(${producto.id})">VER DETALLES</button>
            </div>
        `;
        grid.appendChild(card);
    });

    // ScrollReveal acoplado dinámicamente a las cards del catálogo
    ScrollReveal().reveal('.card', {
        distance: '40px',
        origin: 'bottom',
        duration: 900,
        interval: 100,
        cleanup: true
    });
}

// Lógica de filtrado en tiempo real en la barra de búsqueda
const buscador = document.getElementById("buscador");
if (buscador) {
    buscador.addEventListener("input", () => {
        const texto = buscador.value.toLowerCase();
        const resultado = productos.filter(p =>
            p.nombre.toLowerCase().includes(texto) ||
            p.categoria.toLowerCase().includes(texto)
        );
        renderProductos(resultado);
    });
}

// Apertura del modal adaptativo para ver más detalles
function abrirModal(id) {
    const producto = productos.find(p => p.id === id);
    if (!producto) return;

    document.getElementById("modalTitulo").textContent = producto.nombre;
    document.getElementById("modalDescripcion").textContent = producto.descripcion;
    document.getElementById("modalPrecio").textContent = `$${producto.precio} MXN`;
    document.getElementById("modalImagen").src = producto.imagen;

    const btnComprar = document.getElementById("btnComprar");
    if (btnComprar) {
        btnComprar.onclick = () => comprar(producto.nombre);
    }

    document.getElementById("modal").classList.add("activo");
}

function cerrarModal() {
    const modal = document.getElementById("modal");
    if (modal) {
        modal.classList.remove("activo");
    }
}

// Cerrar el modal haciendo clic fuera de la ventana flotante
window.addEventListener("click", (e) => {
    if (e.target === document.getElementById("modal")) {
        cerrarModal();
    }
});

// Mensaje automatizado inteligente para cerrar la venta directamente en WhatsApp
function comprar(nombre) {
    const numeroTelefono = "521XXXXXXXXXX"; // Pon tu número de WhatsApp real aquí
    const mensaje = `Hola RAVEN, me interesa adquirir la prenda de la nueva colección: ${nombre}. ¿Cómo puedo realizar mi pago?`;
    window.open(`https://wa.me/${numeroTelefono}?text=${encodeURIComponent(mensaje)}`, '_blank');
}

// Efecto estético en el Header (Nav) basado en el scroll superior
window.addEventListener("scroll", () => {
    const nav = document.querySelector("header");
    if (nav) {
        if (window.scrollY > 80) {
            nav.classList.add("scrolled");
        } else {
            nav.classList.remove("scrolled");
        }
    }
});

// Inicialización de componentes al cargar la página por completo
document.addEventListener("DOMContentLoaded", () => {
    // Renderizamos la colección inicial
    renderProductos(productos);

    // Animaciones de entrada estilizadas para la interfaz superior
    ScrollReveal().reveal('.anim-titulo', { origin: 'top', distance: '50px', duration: 1100 });
    ScrollReveal().reveal('.anim-subtitulo', { origin: 'bottom', distance: '30px', duration: 1100, delay: 200 });
    ScrollReveal().reveal('.hero-subtext', { duration: 1000, delay: 350 });
    ScrollReveal().reveal('.btn-hero', { scale: 0.85, duration: 800, delay: 500 });
    ScrollReveal().reveal('.filosofia', { distance: '40px', duration: 1200 });
    
    // Animación para la nueva grilla premium estática
    ScrollReveal().reveal('.grid-layout-full', { distance: '50px', origin: 'bottom', duration: 1200 });
// Catálogo de Productos basado en tus diseños reales de RAVEN
const productos = [
    {
        id: 1,
        nombre: "Japan Clan Tee",
        precio: 399,
        categoria: "oversize",
        imagen: "assets/playera1.png", 
        descripcion: "Corte Oversize pesado. Gráfico trasero premium con el círculo rojo del Klan y tipografía de caligrafía japonesa. Disciplina pura."
    },
    {
        id: 2,
        nombre: "Metal Logo Oversize",
        precio: 449,
        categoria: "oversize",
        imagen: "assets/playera2.png",
        descripcion: "Playera drop-shoulder negra con el logotipo gótico RAVEN en el pecho en alta densidad. Diseñada para aguantar entrenamientos extremos de fuerza."
    },
    {
        id: 3,
        nombre: "Sleeveless Distressed Mentality",
        precio: 379,
        categoria: "sleeveless",
        imagen: "assets/playera-tirantes.jpg",
        descripcion: "Playera sin mangas estilo Acid Wash gris mineral. Estampado gótico frontal y logo del cuervo circular blanco en la espalda alta."
    }
];

// Inyección limpia de productos en el Catálogo Inferior
function renderProductos(lista) {
    const grid = document.getElementById("productos-grid");
    if (!grid) return;

    grid.innerHTML = "";

    if (lista.length === 0) {
        grid.innerHTML = `<p class="no-results" style="grid-column: 1/-1; text-align:center; color:#555; padding: 40px 0;">No hay diseños disponibles con ese nombre.</p>`;
        return;
    }

    lista.forEach(producto => {
        const card = document.createElement('div');
        card.classList.add('card');
        
        card.innerHTML = `
            <div class="card-img-wrapper">
                <img src="${producto.imagen}" alt="${producto.nombre}">
            </div>
            <div class="card-info">
                <h3>${producto.nombre}</h3>
                <span class="precio-tag">$${producto.precio} MXN</span>
                <button class="btn-ver" onclick="abrirModal(${producto.id})">VER DETALLES</button>
            </div>
        `;
        grid.appendChild(card);
    });

    // ScrollReveal acoplado dinámicamente a las cards del catálogo
    ScrollReveal().reveal('.card', {
        distance: '40px',
        origin: 'bottom',
        duration: 900,
        interval: 100,
        cleanup: true
    });
}

// Lógica de filtrado en tiempo real en la barra de búsqueda
const buscador = document.getElementById("buscador");
if (buscador) {
    buscador.addEventListener("input", () => {
        const texto = buscador.value.toLowerCase();
        const resultado = productos.filter(p =>
            p.nombre.toLowerCase().includes(texto) ||
            p.categoria.toLowerCase().includes(texto)
        );
        renderProductos(resultado);
    });
}

// Apertura del modal adaptativo para ver más detalles
function abrirModal(id) {
    const producto = productos.find(p => p.id === id);
    if (!producto) return;

    document.getElementById("modalTitulo").textContent = producto.nombre;
    document.getElementById("modalDescripcion").textContent = producto.descripcion;
    document.getElementById("modalPrecio").textContent = `$${producto.precio} MXN`;
    document.getElementById("modalImagen").src = producto.imagen;

    const btnComprar = document.getElementById("btnComprar");
    if (btnComprar) {
        btnComprar.onclick = () => comprar(producto.nombre);
    }

    document.getElementById("modal").classList.add("activo");
}

function cerrarModal() {
    const modal = document.getElementById("modal");
    if (modal) {
        modal.classList.remove("activo");
    }
}

// Cerrar el modal haciendo clic fuera de la ventana flotante
window.addEventListener("click", (e) => {
    if (e.target === document.getElementById("modal")) {
        cerrarModal();
    }
});

// Mensaje automatizado inteligente para cerrar la venta directamente en WhatsApp
function comprar(nombre) {
    const numeroTelefono = "521XXXXXXXXXX"; // Pon tu número de WhatsApp real aquí
    const mensaje = `Hola RAVEN, me interesa adquirir la prenda de la nueva colección: ${nombre}. ¿Cómo puedo realizar mi pago?`;
    window.open(`https://wa.me/${numeroTelefono}?text=${encodeURIComponent(mensaje)}`, '_blank');
}

// Efecto estético en el Header (Nav) basado en el scroll superior
window.addEventListener("scroll", () => {
    const nav = document.querySelector("header");
    if (nav) {
        if (window.scrollY > 80) {
            nav.classList.add("scrolled");
        } else {
            nav.classList.remove("scrolled");
        }
    }
});

// Inicialización de componentes al cargar la página por completo
document.addEventListener("DOMContentLoaded", () => {
    // Renderizamos la colección inicial
    renderProductos(productos);

    // Animaciones de entrada estilizadas para la interfaz superior
    ScrollReveal().reveal('.anim-titulo', { origin: 'top', distance: '50px', duration: 1100 });
    ScrollReveal().reveal('.anim-subtitulo', { origin: 'bottom', distance: '30px', duration: 1100, delay: 200 });
    ScrollReveal().reveal('.hero-subtext', { duration: 1000, delay: 350 });
    ScrollReveal().reveal('.btn-hero', { scale: 0.85, duration: 800, delay: 500 });
    ScrollReveal().reveal('.filosofia', { distance: '40px', duration: 1200 });
    
    // Animación para la nueva grilla premium estática
    ScrollReveal().reveal('.grid-layout-full', { distance: '50px', origin: 'bottom', duration: 1200 });
    
});