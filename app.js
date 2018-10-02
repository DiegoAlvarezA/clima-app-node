// const axios = require('axios');
const lugar = require('./lugar/lugar')
const clima = require('./clima/clima')


const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;


let getInfo = async(direccion) => {
    try {
        let coors = await lugar.getLugarLatLng(direccion);
        let temp = await clima.getClima(coors.lat, coors.lng);

        return `El clima en ${coors.direccion} es de ${temp}`;
    } catch (e) {
        return `No se pudo determinar el clima en ${direccion}`;
    }

}

getInfo(argv.direccion)
    .then(mensaje => console.log(mensaje))
    .catch(e => console.log(e));

// clima.getClima(5.070275, -75.5138166)
//     .then(temp => console.log(temp))
//     .catch(e => console.log(e));

// lugar.getLugarLatLng(argv.direccion)
//     .then(resp => {
//         console.log(resp);
//     })
//     .catch(e => console.log(e));



// let encodedUrl = encodeURI(argv.direccion);

// axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedUrl}&key=AIzaSyA-HXVa2jtkGfKtIJwisxgC46RaWqC1xuI`)
//     .then(resp => {

//         let location = resp.data.results[0];
//         let coors = location.geometry.location;

//         console.log('Direccion: ', location.formatted_address);
//         console.log('Lat: ', coors.lat);
//         console.log('Lat: ', coors.lng);
//         // console.log(JSON.stringify(address, undefined, 2));
//         // console.log(JSON.stringify(resp.data, undefined, 2));
//         // console.log(respuesta.status);
//     })
//     .catch(e => console.log('Error!!', e));