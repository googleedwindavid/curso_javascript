// metodos en arreglos

const personas = [
    {nombre: 'juan', edad: 23, aprendiendo: 'JavaScript'},
    {nombre: 'pablo', edad: 18, aprendiendo: 'PHP'},
    {nombre: 'alejandra', edad: 21, aprendiendo: 'AdobeXD'},
    {nombre: 'caren', edad: 30, aprendiendo: 'Python'},
    {nombre: 'miguel', edad: 35, aprendiendo: 'ReactJS'},
]

console.log(personas);

// mayores de 18 años
const mayores = personas.filter(persona => {
    return persona.edad >28;
});
// console.log(mayores);

// que aprende alejandra 
const alejandra = personas.find(persona => {
    return persona.nomre === 'alejandra';
});
// console.log('alejandra esta aprendiendo: ' +alejandra.aprendiendo);

let total = personas.reduce((edadTotaL, persona) => {
    return edadTotal + persona.edad;
}, 0);

console.log(total );