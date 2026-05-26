const productos = [
    {
        id: 1,
        nombre: "Laptop MSI",
        categoria: "Tecnología",
        precio: 450000,
        stock: 8
    },
    {
        id: 2,
        nombre: "Mouse inalámbrico",
        categoria: "Accesorios",
        precio: 12500,
        stock: 25
    },
    {
        id: 3,
        nombre: "Teclado mecánico",
        categoria: "Accesorios",
        precio: 35000,
        stock: 12
    },
    {
        id: 4,
        nombre: "Monitor 24 pulgadas",
        categoria: "Tecnología",
        precio: 98000,
        stock: 6
    },
    {
        id: 5,
        nombre: "Audífonos",
        categoria: "Audio",
        precio: 28000,
        stock: 15
    }
];

const tablaProductos = document.getElementById("productosTabla");

productos.forEach((producto) => {
    const fila = document.createElement("tr");

    fila.innerHTML = `
        <td>${producto.id}</td>
        <td>${producto.nombre}</td>
        <td>${producto.categoria}</td>
        <td>₡${producto.precio.toLocaleString("es-CR")}</td>
        <td>${producto.stock}</td>
    `;

    tablaProductos.appendChild(fila);
});