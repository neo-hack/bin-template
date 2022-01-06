import { program } from 'commander'
import consola from 'consola'

import pkg from '../package.json'

const commands = {
  hello: () => import('./commands/hello').then((m) => m.hello),
  loading: () => import('./commands/loading').then((m) => m.loading),
}

const handler = (cmdName: string) => {
  return async function (...args: any[]) {
    const cmd = await commands[cmdName]()
    await cmd(...args)
  }
}

const cli = program.version(pkg.version).name('bin-template')

cli.command('hello [word]').description('say hello').alias('hi').action(handler('hello'))

cli
  .command('loading [ms]')
  .description('loading')
  .option('-t, --text [text]', 'define loading text')
  .action(handler('loading'))

program.parse(process.argv)

consola.wrapConsole()
process.on('unhandledRejection', (err) => consola.error('[unhandledRejection]', err))
process.on('uncaughtException', (err) => consola.error('[uncaughtException]', err))
