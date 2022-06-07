// object literal
const persona = {
    nombre: 'juan',
    profesion: 'desarrollador web',
    edad : 500
}
// const mostrarcliente = mostrarinformacion(tareapersona.nombre.persona.profesion);
// console.log(mostrarcliente);

// object constructor
function Tarea(nombre, urgencia) {
    this.nombre = nombre;
    this.urgencia = urgencia;
}
// agregar un prototype a tarea:
Tarea.prototype.mostrarInformacionTarea = function() {
    return 'La tarea ${this.tarea} tiene una prioridad de ${prioridad}';
}

// crear una nueva tarea:
const Tarea1 = new Tarea('Pasear el perro', 'Media hora');
const Tarea2 = new Tarea('Aprender JavaScript y React', 'Urgente');
console.log(Tarea1);
console.log(Tarea1.mostrarInformacionTarea() );
console.log(Tarea2);
console.log(Tarea2.mostrarInformacionTarea() );