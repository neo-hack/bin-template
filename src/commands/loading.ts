import ora from 'ora'
import consola from 'consola'

const spinner = ora('Loading')

interface Options {
  text?: string
}

export const loading = (
  ms = 1000,
  { text = 'bin-template' }: Options = { text: 'bin-template' },
) => {
  try {
    spinner.text = text
    spinner.start()
    setTimeout(() => {
      spinner.stop()
      console.log('💅')
    }, ms)
  } catch (e) {
    consola.error(e)
  }
}
