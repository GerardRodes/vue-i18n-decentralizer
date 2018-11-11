import commandLineArgs from 'command-line-args'
import optionsDefinition from '~/cli/options'
import usage from '~/cli/usage'
import { DECENTRALIZE, PRUNE } from './constants'
import commands from './commands'

const options = commandLineArgs(optionsDefinition)

switch (options.command) {
  case DECENTRALIZE:
  case PRUNE:
    commands[options.command](options)
    break
  default:
    console.log(usage)
    break
}