#!/usr/bin/env node
const arguments = require('minimist')(process.argv)
const path = require('path')
const program = require('commander')
const templateDir = require('template-dir')

const BLUEPRINTS_DIR = path.resolve(__dirname, '../blueprints')
const OPTIONS = Object.keys(arguments).reduce((accum, fieldName) => {
  if (fieldName !== '_') {
    accum[fieldName] = arguments[fieldName]
  }
  return accum
}, {})
program
  .version('1.0.0')

program
  .command('generate <name> <destination>')
  .alias('g')
  .description('Generates a blueprint and passes arguments')
  .action(function(name, destination, options){
    let source = `${BLUEPRINTS_DIR}/${name}/files`
    templateDir({
      source,
      destination,
      onlyFiles: false,
      exclude: []
    }, OPTIONS)

    console.log(`Created a new ${name} at ${destination}`)
    console.log(` – Using: `, OPTIONS)
  })

program
  .command('*')
  .action(function(env){
    console.log(`Unknown command`)
  })

program.parse(arguments._)
