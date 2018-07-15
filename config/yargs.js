const direccion = {
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima.',
        demand: true

    }
};

const coordenadas = {

    latitud: {
        alias: 'la',
        desc: 'Latitud de la ciudad a buscar.',
        demand: true
    },
    longitud: {
        alias: 'lo',
        desc: 'Longitud de la ciudad a buscar.',
        demand: true
    }
}


const argv = require('yargs')
    .command('descripcion', 'Ingrese la ciudad a buscar', direccion)
    .command('coordenadas', 'Buscar un clima por coordenadas', coordenadas)
    .help()
    .argv;



module.exports = {
    argv
}