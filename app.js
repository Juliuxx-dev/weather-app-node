const argv = require('./config/yargs').argv;
const place = require('./place/place');
const colors = require('colors/safe');

const city = argv.address

place.getWeather(city)
  .then(data => console.log(colors.green(`The weather of "${city}" is ${data.temp} degrees Celsius`)))
  .catch(error => console.log(colors.red(`the weather of "${city}" could not be determined`)));