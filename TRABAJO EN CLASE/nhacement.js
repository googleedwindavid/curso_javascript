// object literal enhacement

const banda = 'metalica';
const genero = 'Heavy Metal';
const canciones = ['Master of Puppets', '  Seek y Destroy', 'Enter Sandman'];

// forma anterior 
// const metallica = {
//      banda : banda;
//      genero: genero,
//      canciones: canciones
// }

// forma nueva
const metallica = {banda, genero, canciones};

console.log(metallica)