#!/usr/bin/env node

const { toLower, slice } = require('ramda')
const [a, b, cmd, ...rest] = process.argv
// commands
const help = require('./cmds/help')
const add = require('./cmds/add')
const ls = require('./cmds/ls')
const check = require('./cmds/check')
const rm = require('./cmds/rm')
const edit = require ('./cmds/edit-name')

function handler(cmd='') {
  switch(toLower(cmd)) {
    case 'rm':
      return rm(rest[0])
    case 'check':
      return check(rest[0])
    case 'ls':
      return ls()
    case 'add':
      return add(rest.join(' '))
    case 'help':
      return help()
    case 'edit':
      return edit(rest[0],slice(1,Infinity,rest).join(' '))
    default:
      return help()
  }
}

console.log(
  handler(cmd)
)
