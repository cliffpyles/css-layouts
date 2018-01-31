#!/usr/bin/env node
const arguments = require('minimist')(process.argv)
const inflection = require('inflection')
const path = require('path')
const program = require('commander')
const templateDir = require('template-dir')

const BLUEPRINTS_DIR = path.resolve(__dirname, '../blueprints')

let blueprintData = Object.keys(arguments).reduce((accum, fieldName) => {
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
    let blueprintDir = path.join(`${BLUEPRINTS_DIR}/${name}`)
    let sourceName = name
    let destinationName = path.basename(destination)
    let source = path.join(`${BLUEPRINTS_DIR}/${name}/files`)
    let settingsFile = path.join(`${BLUEPRINTS_DIR}/${name}/settings.js`)
    let settings = require(settingsFile)

    if (settings && settings.baseDir) {
      destination = path.join(settings.baseDir, destination)
    }

    blueprintData._meta = {
      blueprintDir,
      source,
      settingsFile,
      destination,
      sourceName,
      destinationName,
      destinationNamePluralized: inflection.pluralize(destinationName),
      destinationNameSingularized: inflection.singularize(destinationName),
      destinationNameUnderscored: inflection.underscore(destinationName),
      destinationNameDasherized: inflection.dasherize(destinationName),
      destinationNameHumanized: inflection.humanize(destinationName),
      destinationNameTitleized: inflection.titleize(destinationName),
      destinationNameClassified: inflection.classify(destinationName),
      destinationNameCamelized: inflection.camelize(destinationName, true),
      destinationNamePascalized: inflection.camelize(destinationName),
      destinationNameTableized: inflection.tableize(destinationName),
      destinationNameCapitalized: inflection.capitalize(destinationName),
      // bemName: inflection.transform(destinationName, ['underscore', 'titleize', 'dasherize']),
      bemName: inflection.transform(destinationName, ['camelize']),
    }


    templateDir({
      source,
      destination,
      onlyFiles: false,
      exclude: []
    }, blueprintData)

    console.log(`Created a new ${name} at ${destination}`)
    console.log(` – Using: `)
    console.log(' ', blueprintData)
  })

program
  .command('*')
  .action(function(env){
    console.log(`Unknown command`)
  })

program.parse(arguments._)
