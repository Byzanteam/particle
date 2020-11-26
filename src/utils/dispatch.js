export default function dispatchEvent(el, name, eventInitOptions) {
  el.dispatchEvent(new CustomEvent(name, {
    bubbles: true,
    // 是否穿透 shadowDom
    composed: true,
    ...eventInitOptions,
  }))
}