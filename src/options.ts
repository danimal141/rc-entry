import * as yargs from 'yargs'

const options = yargs
  .options('username', {
    alias: 'u',
    type: 'string',
    description: 'Your username',
    demandOption: true
  })
  .options('password', {
    alias: 'p',
    type: 'string',
    description: 'Your password',
    demandOption: true
  })
  .help()
  .argv

export default options
