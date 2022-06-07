//Destructurin de objetos
const aprendiendoJS = {
    version: {
       nueva : 'ES6',
       anteriror : 'ES5'
    },
    frameworks:['React', 'VueJS', 'AngularJS']
}

// Destructuring es extraer valores de un objeto

// Console.log(aprendiendoJS);

//version anterior
// let version = aprendiendoJS, version,nueva
// let framework = aprendiendoJS, frameworks[1];


//Destructuring forma nueva
let {anterior} = aprendiendoJS.version;
console.log(anteriror);