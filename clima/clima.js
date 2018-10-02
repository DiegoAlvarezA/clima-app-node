const axios = require('axios');

const getClima = async(lat, lng) => {

    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&units=metric&appid=e1ac1b43911c5b106e56390cce1d4b17`)

    return resp.data.main.temp;
}

module.exports = {
    getClima
}