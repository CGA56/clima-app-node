// Configuracion
const argv = require('./config/yargs').argv;
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

// const axios = require('axios');

// let comando = argv._[0];

// console.log(argv.d);

// Url amigable
// regresa una promesa
let getInfo = async(direccion) => {

    try {
        let coors = await lugar.getLugarLatLng(direccion);
        // promesa
        let temp = await clima.getClima(coors.latitud, coors.longitud);

        return `El clima en ${coors.direccion} es de T°${temp.temperatura}`;

    } catch (error) {
        return `No se logro determinar el clima para ${direccion}`;
    }

}

getInfo(argv.d)
    .then(mensaje => console.log(mensaje))
    .catch(err => console.log(err));

// lugar.getLugarLatLng(argv.d)
//     .then(resp => {
//         console.log(resp);
//     })
//     .catch(err => console.log(err));

// clima.getClima(argv.la, argv.lo)
//     .then(resp => {
//         console.log(resp);
//     })
//     .catch(err => console.log(err));