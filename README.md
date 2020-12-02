## Get started
### install and develop or build
```
git clone https://github.com/Byzanteam/particle.git
cd particle
npm install
npm run dev // for develop
npm run build // for build production output
```

### Usage
```
import('bundle.js').then(({ default: { MultipleLineField } }) => {
  customElements.define('your-custom-name', MultipleLineField)

  document.body.innerHTML = `
    <your-custom-name ...props>
      ...slots
    </your-custom-name>
  `
})
```
