<script lang="ts">
import dispatchEvent from '../utils/dispatch'

export let field: string;
export let value: string;
let root: HTMLElement;

function updateValue(): void {
  dispatchEvent(root, 'change', {
    detail: {
      value,
    }
  })
}

// computed attribute
$: _field = JSON.parse(field)
</script>

<div bind:this={root} class="text-2xl text-red">
  <div class="field__label">{_field.label}</div>
  {#if _field.description}
    <div class="field__description">{_field.description}</div>
  {/if}
  <div class="field__input-wrapper">
    <textarea
      bind:value
      on:input={updateValue}
      placeholder="请输入"
    />
  </div>
</div>

<style lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>