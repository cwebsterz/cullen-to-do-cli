const {get, set} = require('../lib/store')
const { reject, map } = require('ramda')
const ls = require('./ls')

module.exports = function (id) {
    const list = get()
    list.todos = reject(
      function(obj){
        return checkID(id, obj)
      }, list.todos)
    counterDown(list)
  //  console.log(idDown(id, list))
    set(list)
    ls()
    console.log(idDown(id, list))
}



function checkID(id, obj){
  return id == obj.id
}

function counterDown (list) {
  list.counter = list.counter - 1
  return list.counter
}


function idDown (id, list) {
  map(function(obj){
    if (obj.id > id) {
      obj.id -= 1
    }
    console.log(obj)
    return obj
  }, list.todos)
}
