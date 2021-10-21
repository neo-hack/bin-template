import execa from 'execa'
import path from 'path'
import pkg from '../package.json'

const cli = path.resolve(__dirname, '../lib/cli.js')

describe('version', () => {
  it('print version should work', async () => {
    const { stdout } = await execa.node(cli, ['-V'])
    expect(stdout).toBe(pkg.version)
  })
})
