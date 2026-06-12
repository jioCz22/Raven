// Catálogo de Productos RAVEN
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

// Renderizar productos
function renderProductos(lista) {
    const grid = document.getElementById("productos-grid");

    if (!grid) return;

    grid.innerHTML = "";

    if (lista.length === 0) {
        grid.innerHTML = `
            <p class="no-results"
               style="grid-column:1/-1;text-align:center;color:#555;padding:40px 0;">
               No hay diseños disponibles con ese nombre.
            </p>
        `;
        return;
    }

    lista.forEach(producto => {
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
            <div class="card-img-wrapper">
                <img src="${producto.imagen}" alt="${producto.nombre}">
            </div>

            <div class="card-info">
                <h3>${producto.nombre}</h3>

                <span class="precio-tag">
                    $${producto.precio} MXN
                </span>

                <button
                    class="btn-ver"
                    onclick="abrirModal(${producto.id})">
                    VER DETALLES
                </button>
            </div>
        `;

        grid.appendChild(card);
    });

    ScrollReveal().reveal(".card", {
        distance: "40px",
        origin: "bottom",
        duration: 900,
        interval: 100,
        cleanup: true
    });
}

// Buscador
const buscador = document.getElementById("buscador");

if (buscador) {
    buscador.addEventListener("input", () => {
        const texto = buscador.value.toLowerCase();

        const resultado = productos.filter(producto =>
            producto.nombre.toLowerCase().includes(texto) ||
            producto.categoria.toLowerCase().includes(texto)
        );

        renderProductos(resultado);
    });
}

// Abrir modal
function abrirModal(id) {
    const producto = productos.find(p => p.id === id);

    if (!producto) return;

    document.getElementById("modalTitulo").textContent =
        producto.nombre;

    document.getElementById("modalDescripcion").textContent =
        producto.descripcion;

    document.getElementById("modalPrecio").textContent =
        `$${producto.precio} MXN`;

    document.getElementById("modalImagen").src =
        producto.imagen;

    const btnComprar = document.getElementById("btnComprar");

    if (btnComprar) {
        btnComprar.onclick = () => comprar(producto.nombre);
    }

    document.getElementById("modal").classList.add("activo");
}

// Cerrar modal
function cerrarModal() {
    const modal = document.getElementById("modal");

    if (modal) {
        modal.classList.remove("activo");
    }
}

// Cerrar modal al hacer clic fuera
window.addEventListener("click", (e) => {
    const modal = document.getElementById("modal");

    if (e.target === modal) {
        cerrarModal();
    }
});

// WhatsApp
function comprar(nombre) {
    const numeroTelefono = "5218714701253"; // Cambia por tu número

    const mensaje =
        `Hola RAVEN, me interesa adquirir la prenda de la nueva colección: ${nombre}. ¿Cómo puedo realizar mi pago?`;

    window.open(
        `https://wa.me/${numeroTelefono}?text=${encodeURIComponent(mensaje)}`,
        "_blank"
    );
}

// Efecto navbar al hacer scroll
window.addEventListener("scroll", () => {
    const nav = document.querySelector("header");

    if (!nav) return;

    if (window.scrollY > 80) {
        nav.classList.add("scrolled");
    } else {
        nav.classList.remove("scrolled");
    }
});

// Inicialización
document.addEventListener("DOMContentLoaded", () => {

    // Cargar catálogo
    renderProductos(productos);

    // Animaciones
    ScrollReveal().reveal(".anim-titulo", {
        origin: "top",
        distance: "50px",
        duration: 1100
    });

    ScrollReveal().reveal(".anim-subtitulo", {
        origin: "bottom",
        distance: "30px",
        duration: 1100,
        delay: 200
    });

    ScrollReveal().reveal(".hero-subtext", {
        duration: 1000,
        delay: 350
    });

    ScrollReveal().reveal(".btn-hero", {
        scale: 0.85,
        duration: 800,
        delay: 500
    });

    ScrollReveal().reveal(".filosofia", {
        distance: "40px",
        duration: 1200
    });

    ScrollReveal().reveal(".grid-layout-full", {
        distance: "50px",
        origin: "bottom",
        duration: 1200
    });
});


// Animación sutil de entrada para las columnas del pie de página
    ScrollReveal().reveal('.footer-col', { 
        distance: '30px', 
        origin: 'bottom', 
        duration: 1000, 
        interval: 150 
    });