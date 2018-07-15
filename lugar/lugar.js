// const argv = require('./config/yargs').argv;

const axios = require('axios');



// Funcion para obtener los parametros

const getLugarLatLng = async(direccion) => {
    let encodeUrl = encodeURI(direccion);
    // Espera a que la app regrese
    let respuesta = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeUrl}&key=AIzaSyDzbQ_553v-n8QNs2aafN9QaZbByTyM7gQ`);
    // console.log(respuesta.data.status);
    if (respuesta.data.status === "ZERO_RESULTS") {
        throw new Error(`No hay resultados para la ciudad ${direccion}`)
    }

    let results = respuesta.data.results[0];
    let location = results.geometry.location;

    return {
        direccion: results.formatted_address,
        latitud: location.lat,
        longitud: location.lng
    }
}

module.exports = {
    getLugarLatLng
}