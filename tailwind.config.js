const plugin = require('tailwindcss/plugin')
const { config, transformConfig } = require('tailwind-config')

module.exports = {
  ...transformConfig({
    ...config,
    corePlugins: {
      ...config.corePlugins,
      boxShadow: false,
    },
  }),
  purge: {
    content: [
      './src/**/*.svelte',
    ],
    enabled: true
  },
  plugins: [
    ...(config.plugins || []),
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
