// auto register svelet:options.tag as component tag
import './fields/multiple-line.svelte'

/**
 * // for custom elemnt name
 * import MultipleLine from './fields/multiple-line.svelte'
 * class CustomMultipleLine extends MultipleLineField {}
 * customElements.define('custom-multiple-line', CustomMultipleLine)
 *
 * document.body.innerHTML = `<custom-multiple-line field={"label": "hehe"} value="89"></custom-multiple-line>`
 */

document.body.innerHTML = `
	<jet-multiple-line field='{"label": "hehe"}' value="89"></jet-multiple-line>
`

document.querySelector('jet-multiple-line').addEventListener('change', (event: CustomEvent) => {
	console.log('custom-change-event:', event.detail.value)
}, false)