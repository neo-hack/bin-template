import inquirer from 'inquirer'
import consola from 'consola'

import logger from '../utils/logger'

const words = ['world', '𝔴𝔬𝔯𝔩𝔡', '🅦🅞🅡🅛🅓', '𝚠𝚘𝚛𝚕𝚍']

export const hello = async (word: string) => {
  if (word) {
    logger.log(`hello ${word}`)
    return
  }
  try {
    const answers = await inquirer.prompt<{ word: string }>([
      {
        type: 'list',
        name: 'word',
        message: 'Please pick a word',
        choices: words.map((k) => {
          return {
            name: k,
            value: k,
          }
        }),
      },
    ])
    logger.log(`hello ${answers.word}`)
  } catch (e) {
    consola.error(e)
  }
}
