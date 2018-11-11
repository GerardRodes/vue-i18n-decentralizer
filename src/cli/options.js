import {
  DECENTRALIZE,
  PRUNE,
  SOURCE,
  LOCALES_FOLDER
} from '~/constants'

const availableCommands = command => {
  switch (command) {
    case DECENTRALIZE:
    case PRUNE:
      return command
    default:
      return
  }
}

export default [
  { name: 'command', defaultOption: true, type: availableCommands },
  {
    name: 'source',
    alias: 's',
    description: 'The input files to process',
    multiple: true,
    typeLabel: '{underline file}|{underline folder} {bold multiple}',
  },
  {
    name: 'localesFolder',
    alias: 'l',
    description: 'Folder containing the vue-i18n json files',
    typeLabel: '{underline folder}'
  },
  {
    name: 'output',
    alias: 'o',
    description: 'Folder where to write the output, if undefined source files will be overwritten',
    typeLabel: '{underline folder}'
  },
  {
    name: 'ignoreKeys',
    alias: 'i',
    multiple: true,
    typeLabel: '{underline string}',
    description: 'Keys to ignore from json translations files'
  }
]