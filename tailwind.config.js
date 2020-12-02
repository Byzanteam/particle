const { config, transformConfig } = require('tailwind-config')

const spacing = Array.from({ length: 21 }).reduce((acc, _, index) => {
  acc[index] = `${index}px`
  return acc
}, {})

module.exports = {
  ...transformConfig({
    ...config,
    theme: {
      ...config.theme,
      spacing: {
        ...config.spacing,
        ...spacing,
      },
      lineHeight: {
        normal: '24px',
      },
    }
  }),
  purge: {
    content: [
      "./src/**/*.svelte",
    ],
    enabled: true
  },
}
