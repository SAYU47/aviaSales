/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')

const CracoAlias = require('craco-alias')

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@components/*': path.resolve(__dirname, 'src/components/*'),
      '@store/*': path.resolve(__dirname, 'src/store/*'),
      '@hooks/*': path.resolve(__dirname, 'src/hooks/*'),
    },
  },
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: 'tsconfig',
        baseUrl: '.',
        tsConfigPath: './tsconfig.json',
      },
    },
  ],
}
