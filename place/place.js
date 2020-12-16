const axios = require('axios');

const getWeather = async address => {
  const encodedUrl = encodeURI(address);

  const instance = axios.create({
    baseURL: `https://api.openweathermap.org/data/2.5/weather?q=${encodedUrl}&appid=0601663ed43954feaab5fd3cc4a50563&units=metric`
  });

  try {
    const response = await instance.get();
    const { name, coord: { lon, lat }, main: { temp } } = response.data

    return { name, lon, lat, temp }
  } catch (error) {
    if (error.response?.data) {
      console.log('error: ', error.response.data)
    }
  }
}

module.exports = {
  getWeather
}