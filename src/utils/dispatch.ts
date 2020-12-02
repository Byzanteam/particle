export default function dispatchEvent(el: HTMLElement, name: string, eventInitOptions: CustomEventInit): void {
  el.dispatchEvent(new CustomEvent(name, {
    bubbles: true,
    // 是否穿透 shadowDom
    composed: true,
    ...eventInitOptions,
  }))
}
