module.exports = {
  theme: {
    colors: {
      red: 'black',
    }
  },
  purge: {
    content: [
      "./src/**/*.svelte",
    ],
    enabled: true
  },
  corePlugins: {
    placeholderOpacity: false,
    textOpacity: false,
    backgroundOpacity: false,
    borderOpacity: false,
    divideOpacity: false,
    ringOpacity: false,
  },
}