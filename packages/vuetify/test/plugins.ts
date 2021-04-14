import { startDevServer } from '@cypress/webpack-dev-server'
import webpackConfig from '../build/webpack.dev.config'

export default function (on, config) {
  on('dev-server:start', (options) => {
    console.log(webpackConfig)
    return startDevServer({ options, webpackConfig })
  })
  return config
}
