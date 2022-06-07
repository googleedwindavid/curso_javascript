//Escribir clases

class Tarea {
    construtor(nombre, prioridad) {
     this.nombre = nombre
     this.prioridad = prioridad
    }
    mostrar() {
     return `$(this.nombre) tiene una prioridad de $(this.prioridad)`
    }
   }
   
   //Crear los  objetos
   
   let tarea1 = new Tarea('Aprender Javascript', 'Alta')
   let tarea2 = new Tarea('Prepare cafe', 'Alta')
   let tarea3 = new Tarea('Pasear al perro', 'Media')
   let tarea4 = new Tarea('Conocer a mis suegros0', 'Baja')
   
   console.log(tarea1.mostrar())
   console.log(tarea2.mostrar())
   console.log(tarea3.mostrar())
   console.log(tarea4.mostrar())