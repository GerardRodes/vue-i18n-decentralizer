import commandLineArgs from 'command-line-args'
import decentralize from './decentralize'

const TESTS = { decentralize }

const options = commandLineArgs([
  {
    name: 'tests',
    alias: 't',
    multiple: true,
    defaultOption: true
  }
])

const testsToRun = Array.isArray(options.tests) && options.tests.length
  ? options.tests.reduce((output, testName) => {
      if (TESTS[testName]) {
        output[testName] = TESTS[testName]
      } else {
        throw new Error('Unkown test: ' + testName)
      }
      return output
    }, {})
  : TESTS

for (const name in testsToRun) {
  console.log('running test ' + name)
  TESTS[name]()
  console.log('running ok!')
}