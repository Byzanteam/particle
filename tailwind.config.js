import { config, transformConfig } from 'tailwind-config'

module.exports = {
  ...transformConfig(config),
  purge: {
    content: [
      "./src/**/*.svelte",
    ],
    enabled: true
  },
}