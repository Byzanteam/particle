import MultipleLine from './fields/multiple-line.svelte'
customElements.define('jet-multiple-line', MultipleLine)
document.body.innerHTML = `
	<jet-multiple-line field='{"label": "hehe"}' value="89"></jet-multiple-line>
`
document.querySelector('jet-multiple-line').addEventListener('change', (event: CustomEvent) => {
	console.log('custom-change-event:', event.detail.value)
}, false)
