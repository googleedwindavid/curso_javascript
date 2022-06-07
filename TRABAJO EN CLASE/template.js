// template strings

const nombre = 'edwin';
const trabajo = 'programador';

// concatenar javascript
console.log('Nombre: ' + nombre + ', Trabajo: ' + trabajo);
console.log('Nombre: ${nombre}, Trabajo: ${trabajo}');

// concatenar con multiples lineas
const contenedorApp = document.querySelector('#app');
let html = '<ul>' +
               '<li> Nombre: ' + nombre + '</li>' +
               '<li> Trabajo: ' + trabajo + '</li>' +
            '</ul>';

let html1 = `
         <ul>
             <li>Nombre: ${nombre}</li>
             <li>Trabajo: ${trabajo}</li>
         </ul>    
     `;

contenedorApp.innerHTML = html;