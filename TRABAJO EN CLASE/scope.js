// scope

// var musica = 'Rock';

// if(musica) {
//      var musica = 'Grunge';
//      console.log('dentro del if: ', musica);
// }
// console.log('fuera del if', musica);

// scope con let

const musica = 'Rock';

if(musica) {
    const musica = 'Grunge';
    console.log('dentro del if; ', musica)
}
console.log('fuera del if', musica);