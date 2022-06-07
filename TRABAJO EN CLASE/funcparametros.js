// parametros por defauls en las funciones



const actividad = function(nombre = 'walter white', actividad = 'enseñar Quimica') {
    console.log('la persona ${nombre}, esta realizando la actividad ${actividad}');
}

actividad('juan', 'Aprender JavaScript');
actividad('Pedro', 'Creando un sitio web');
actividad('Antonio');