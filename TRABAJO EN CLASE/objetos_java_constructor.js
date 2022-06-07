// objetos

// object literal
const persona = {
    nombre: 'Juan',
    profesion: 'Desarrollador web',
    edad: 500
}
console.log(persona);

// object constructor
function Tarea(nombre, urgencia) {
    this.nombre= nombre;
    this.urgencia= urgencia;
}

// Crea una nueva tarea:
const tarea1 = new Tarea('Aprende JavaScript y React', 'Urgente');
const tarea2 = new Tarea('Prepara café', 'Urgente');
const tarea3 = new Tarea('Pasear al perro', 'Media');
const tarea4 = new Tarea('Conocer a mis suegros', 'Baja');

console.log(tarea1);
console.log(tarea2);
console.log(tarea3);
console.log(tarea4);