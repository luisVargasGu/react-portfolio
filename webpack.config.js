require('ts-node').register({
	project: './tsconfig.json',
})
require('tsconfig-paths/register')
module.exports = require('./webpack.config.ts').default
