const {get, set} = require('../lib/store')
const { reject } = require('ramda')
const ls = require('./ls')

module.exports = function (id) {
    const list = get()
    list.todos = reject(
      function(obj){
        return checkID(id, obj)
      }, list.todos)
    counterDown(list)
    set(list)
    ls()
}

function checkID(id, obj){
  return id == obj.id
}

function counterDown (list) {
  list.counter = list.counter - 1
  return list.counter
}
