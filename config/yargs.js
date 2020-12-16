const argv = require('yargs').options({
  address: {
    alias: 'a',
    desc: 'City address to get the weather',
    demand: true
  }
}).argv;

module.exports = {
  argv  
}