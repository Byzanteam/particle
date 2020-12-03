<script lang="ts">
import type { MultipleLineField } from '../../types/field'
import dispatchEvent from '../../utils/dispatch'

export let field: string
export let value: string = '{"type":"doc","content":[{"type":"plain","content":[{"type":"text","content":""}]}]}'
let root: HTMLElement
let textValue: string

function updateValue(): void {
  dispatchEvent(root, 'change', {
    detail: {
      value: {
        type: 'doc',
        content: [
          {
            type: 'plain',
            content: [
              {
                type: 'text',
                content: textValue,
              },
            ],
          },
        ],
      },
    }
  })
}

function getValue(arr: Array<ProsemirrorNode<any>>): string {
  return arr.reduce((acc, item) => {
    if (item.type === 'text') {
      acc += item.content
    } else if (Array.isArray(item.content)) {
      acc += getValue(item.content)
    }
    return acc
  }, '')
}

// computed attribute
$: _field = JSON.parse(field) as MultipleLineField
$: {
  try {
    textValue = getValue(JSON.parse(value).content)
  } catch {
    textValue = value || ''
  }
}
</script>

<div bind:this={root} class="mb-8">
  <div class="text-gray-2 text-body1">{_field.label}</div>
  {#if _field.description}
    <div class="text-body2 text-gray-3">{_field.description}</div>
  {/if}
  <div class="mt-9 mb-13">
    <textarea
      bind:value={textValue}
      on:input={updateValue}
      class="resize-none w-full py-4 px-8 bg-gray-9 hover:bg-white focus:bg-white placeholder-gray-4 text-body1 text-gray-1 leading-normal border border-gray-7 rounded-lg focus:border-primary focus:outline-none focus:shadow-6"
      placeholder="请输入"
    />
  </div>
</div>

<style lang="postcss">
  @tailwind base;
  @tailwind utilities;
</style>
