## Custom Event for custom element

### 我们的方式
实现原理是通过component 内部的任意可冒泡元素（input 的focus 事件是不冒泡的)，然后将自定义事件通过该元素
以冒泡+穿透 shadowDom 的设置传递出去。外部就可通过原生的dom事件监听接受事件

以 MultipleLineField 的change 事件为例子

multiple-line.svelte
```html
<script>
export let value
let root

root.dispatchEvent(new CustomEvent('change', {
  bubbles: true,
  composed: ture,
  detail: {
    value: value,
  }
}))
</script>

<div bind:this={root}>...</div>
```
browser side
```js
import('bundle.js').then(({ default: { MultipleLineField } }) => {
  customElements.define('your-custom-name', MultipleLineField)

  document.body.innerHTML = `
    <your-custom-name ...props>
      ...slots
    </your-custom-name>
  `
  doucment.querySelector('your-custom-name').addEventListener('change', fn, false)
})
```

### 他人的声音
此外还有其它的方式处理事件监听，比如使用 svelte 的 createEventDispatcher 方法来传递事件，外部通过 $on 函数监听

multiple-line.svelte
```html
<script>
import { createEventDispatcher } from 'svelte'

export let value
// svelte will bind this to dispatcher
const dispatcher = createEventDispatcher()

dispatcher('change', {
  value,
})
</script>

<div>...</div>
```
browser side
```js
import('bundle.js').then(({ default: { MultipleLineField } }) => {
  customElements.define('your-custom-name', MultipleLineField)

  document.body.innerHTML = `
    <your-custom-name ...props>
      ...slots
    </your-custom-name>
  `
  doucment.querySelector('your-custom-name').$on('change', fn)
})
```

这种方式我们没有采用，因为这样外部看起来并不是原生的 customElement，外部需要感知组件是个支持 $on 方法的框架打包的结果，这个不是我们想要的。

### 注意
关于自定义事件，目前官方仍未给出一个准确的回复，issue 是未关闭的状态。就各展身手吧