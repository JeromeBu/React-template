let env = process.env.NODE_ENV || 'development'
// env = 'production'

const config = {
  ENV: env,
  API_URL: 'http://localhost:3100'
}

if (env === 'production') {
  config.API_URL = 'the api url'
}

export default config
