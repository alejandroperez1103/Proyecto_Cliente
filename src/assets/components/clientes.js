const clientesIniciales = [
    { id: 1, nombre: "Laura González", telefono: "644123123" },
    { id: 2, nombre: "Carlos Ruiz", telefono: "655321321" },
    { id: 3, nombre: "Marta Pérez", telefono: "699112233" },
    { id: 4, nombre: "Ana López", telefono: "622334455" },
    { id: 5, nombre: "Javier Sánchez", telefono: "633445566" },
    { id: 6, nombre: "Sofía Fernández", telefono: "644556677" },
    { id: 7, nombre: "David Martínez", telefono: "655667788" },
    { id: 8, nombre: "Elena Ramírez", telefono: "699778899" },
    { id: 9, nombre: "Miguel Torres", telefono: "622889900" },
    { id: 10, nombre: "Isabel Díaz", telefono: "633990011" },
];

clientesIniciales.sort(function (a, b) {
    if (a.nombre < b.nombre) {
        return -1;
    }
    if (a.nombre > b.nombre) {
        return 1;
    }
    return 0;
});

export default clientesIniciales;

