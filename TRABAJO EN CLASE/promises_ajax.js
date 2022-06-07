const descargarUsuarios = cantidad => new Promise((resolve, reject) => {
    // pasar la cantidad a la api

    const api = `https://randomuser.me/api/?results=${cantidad}&nat=us`;

    // llamado a ajax
    const xhr = new XMLHttpRequest();

    // abrir la conexion
    xhr.open('GET', api, true);

    // on load
    xhr.onload = () => {
        if(xhr.status === 200) {
            resolve( JSON.parse(xhr.responseText).results );
        } else {
            reject(Error(xhr.statusText));
        }
    }

    // opcional
    xhr.send()
});

descargarUsuarios(28)
     .then(
         miembros => console.log(miembros),
         error => console.error(
             new Error('Hubo un error' + error)
         )
     )