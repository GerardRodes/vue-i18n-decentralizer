import { ErrorRequireArgument } from '~/errors'

export const validateArguments = command => ({ source, localesFolder }) => {
  if (!Array.isArray(source) || !(source.length > 0)) {
    throw ErrorRequireArgument('source')
  }

  if (typeof localesFolder !== 'string' || !(localesFolder.length > 0)) {
    throw ErrorRequireArgument('localesFolder')
  }

  return command
}