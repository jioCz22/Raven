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

// Renderizar productos en el catálogo
function renderProductos(lista) {
    const grid = document.getElementById("productos-grid");
    if (!grid) return;

    grid.innerHTML = "";

    if (lista.length === 0) {
        grid.innerHTML = `
            <p class="no-results" style="grid-column: 1/-1; text-align: center; color: #555; padding: 40px 0;">
                No hay diseños disponibles con ese nombre.
            </p>`;
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

    // Re-vincular animaciones ScrollReveal a las nuevas cartas creadas
    ScrollReveal().reveal('.card', {
        distance: '30px',
        origin: 'bottom',
        duration: 800,
        interval: 80,
        cleanup: true
    });
}

// Inicialización de Eventos y Menú Hamburguesa Responsivo
document.addEventListener("DOMContentLoaded", () => {
    
    // Cargar catálogo inicial
    renderProductos(productos);

    // Lógica del Menú Desplegable (Móviles)
    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");

    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", () => {
            menuToggle.classList.toggle("active");
            navLinks.classList.toggle("active");
        });

        // Cerrar menú automáticamente al dar clic en cualquier enlace
        const links = navLinks.querySelectorAll("a");
        links.forEach(link => {
            link.addEventListener("click", () => {
                menuToggle.classList.remove("active");
                navLinks.classList.remove("active");
            });
        });
    }

    // Filtrado en tiempo real en la barra de búsqueda
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

    // Configuración Inicial de Animaciones (ScrollReveal)
    ScrollReveal().reveal('.anim-titulo', { origin: 'top', distance: '40px', duration: 1000 });
    ScrollReveal().reveal('.hero-subtext', { origin: 'bottom', distance: '20px', duration: 1000, delay: 200 });
    ScrollReveal().reveal('.btn-hero', { scale: 0.9, duration: 800, delay: 400 });
    ScrollReveal().reveal('.filosofia', { distance: '30px', duration: 1000 });
    ScrollReveal().reveal('.grid-layout-dos-columnas', { distance: '40px', origin: 'bottom', duration: 1000 });
    ScrollReveal().reveal('.footer-col', { distance: '30px', origin: 'bottom', duration: 900, interval: 100 });
});

// Control del Modal Adaptativo
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

// Cierre de modal al dar clic en el fondo oscuro
window.addEventListener("click", (e) => {
    const modal = document.getElementById("modal");
    if (e.target === modal) {
        cerrarModal();
    }
});

// Mensaje automatizado inteligente para cerrar la venta en WhatsApp
function comprar(nombre) {
    const numeroTelefono = "5218714701253"; 
    const mensaje = `Hola RAVEN, me interesa adquirir la prenda de la nueva colección: ${nombre}. ¿Cómo puedo realizar mi pago?`;
    window.open(`https://wa.me/${numeroTelefono}?text=${encodeURIComponent(mensaje)}`, '_blank');
}

// Animación de cambio estético en Nav basado en el scroll superior
window.addEventListener("scroll", () => {
    const nav = document.querySelector("header");
    if (nav) {
        if (window.scrollY > 50) {
            nav.classList.add("scrolled");
        } else {
            nav.classList.remove("scrolled");
        }
    }
});