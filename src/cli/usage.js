import commandLineUsage from 'command-line-usage'
import options from './options'

export default commandLineUsage([
  {
    header: 'vue-i18n-decentralizer',
    content: 'Split your centralized locales into every vue component which uses them'
  },
  {
    header: 'Usage',
    content: 'node dist/main.js [command] [...args]'
  },
  {
    header: 'Available Commands',
    content: [
      { name: 'decentralize', summary: 'split translations from your locales files to your component files' },
      { name: 'prune', summary: 'remove unused translations frmo your locales files' }
    ]
  },
  {
    header: 'Arguments',
    optionList: options.filter(opt => opt.name !== 'command')
  }
])