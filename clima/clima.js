const axios = require('axios');
const colors = require('colors');



const getClima = async(lat, lng) => {
    let latitud = encodeURI(lat);
    let longitud = encodeURI(lng);

    let respuesta = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=a600135f6b87f1f78a38f32cb835e723`);

    // let temperatura = respuesta[0];
    // // console.log(respuesta.cod);
    // if (temperatura.cod === '400') {
    //     throw new Error(`No hay resultados para la latitud ${latitud} y longitud ${longitud}`);
    // }
    // console.log(respuesta.data.main.temp);
    return {
        temperatura: respuesta.data.main.temp
    }
}


module.exports = {
    getClima
}