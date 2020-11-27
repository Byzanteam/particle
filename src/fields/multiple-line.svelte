<!-- custom element tag -->
<svelte:options tag='jet-multiple-line' />

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

<div bind:this={root} class="field">
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

<!-- <style lang="scss">
  * {
    box-sizing: border-box;
  }

  .field {
    margin-bottom: 8px;

    &__label {
      font-size: 14px;
      line-height: 20px;
      font-weight: 500;
      color: var(--title-color, #6B7885);
    }

    &__description {
      font-size: 13px;
      line-height: 20px;
      color: var(--subtitle-color, #95A4B3);
    }

    &__input-wrapper {
      margin-top: 9px;
      margin-bottom: 13px;
    }
  }

  textarea {
    font-size: 14px;
    color: var(--input-color, #313C56);
    border: 1px solid var(--input-border-color, #F0EFF4);
    width: 100%;
    resize: none;
    min-height: 56px;
    line-height: 24px;
    padding: 4px 8px;
    background-color: var(--input-bg-color, #FBFCFF);
    border-radius: var(--input-border-radius, 4px);

    &:focus {
      outline: none;
      box-shadow: 0 0 0 4px var(--input-box-shadow-focus-color, rgba(4,191,120,.2));
      background-color: var(--input-bg-focus-color, white);
      border-color: var(--input-border-focus-color, #04bf78);
    }
  }

  ::placeholder {
    color: var(--placeholder-color, #B7C0CA);
  }
</style> -->