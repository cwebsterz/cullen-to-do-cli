const {get, set} = require('../lib/store')
const { append } = require('ramda')
const ls = require('./ls')

module.exports = function (id) {
  
}

function counterUp (list) {
  list.counter = list.counter + 1
  return list.counter
}
