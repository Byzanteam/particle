const plugin = require('tailwindcss/plugin')
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
    },
    corePlugins: {
      ...config.corePlugins,
      ringWidth: false,
      ringColor: false,
      ringOffsetWidth: false,
      ringOffsetColor: false,
      boxShadow: false,
    },
  }),
  purge: {
    content: [
      "./src/**/*.svelte",
    ],
    enabled: true
  },
  plugins: [
    plugin(({ theme, addUtilities, variants }) => {
      const boxShadow = theme('boxShadow')
      const utilties = Object.entries(boxShadow).reduce((acc, [modifier, value]) => {
        acc[`.shadow-${modifier}`] = {
          boxShadow: value,
        }
        return acc
      }, {})
      addUtilities(utilties, variants('boxShadow'))
    }),
  ],
}
