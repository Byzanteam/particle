// auto register svelet:options.tag as component tag
import MultipleLineField from './fields/multiple-line.svelte'

// rename custom element tag
class CustomMultipleLine extends MultipleLineField {}
customElements.define('multiple-line', CustomMultipleLine)

document.body.innerHTML = `
	<multiple-line field='{"label": "emmm", "description": "这个是描述"}' value="33"></multiple-line>
	<jet-multiple-line field='{"label": "hehe"}' value="89" /></jet-multiple-line>
`

document.querySelector('multiple-line').addEventListener('change', (event) => {
	console.log('custom-change-event:', event.detail.value)
}, false)