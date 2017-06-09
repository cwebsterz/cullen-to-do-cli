const {get} = require ('../lib/store')
const {map} = require ('ramda')


function li (todo) {
  return `[${todo.completed ? 'x' : ' '}] - ${todo.id} ${todo.text}`
}


module.exports = function () {
  const list = get()

  console.log('')
  console.log('To-Dos')
  console.log('----------------------')

  map(function(todo) {
    console.log(li(todo))
  }, list.todos)

  console.log('----------------------')
  console.log(
    list.counter,
    ' Items Not Complete'
  )
}
