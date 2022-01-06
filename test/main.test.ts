import { execaNode } from 'execa'
import path, { dirname } from 'path'
import pkg from '../package.json'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

const cli = path.resolve(__dirname, '../bin/index.mjs')

describe('version', () => {
  it('print version should work', async () => {
    const { stdout } = await execaNode(cli, ['-V'])
    expect(stdout).toBe(pkg.version)
  })
})
