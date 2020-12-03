<script lang="ts">
import type { MultipleLineField } from '../../types/field'
import dispatchEvent from '../../utils/dispatch'

export let field: string | MultipleLineField
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

function extractTextContent(arr: Array<ProsemirrorNode<any>>): string {
  return arr.reduce((acc, item) => {
    if (item.type === 'text') {
      acc += item.content
    } else if (Array.isArray(item.content)) {
      acc += extractTextContent(item.content)
    }
    return acc
  }, '')
}

// computed attribute
$: _field = typeof field === 'string'
  ? JSON.parse(field) as MultipleLineField
  : field
$: {
  try {
    textValue = extractTextContent(JSON.parse(value).content)
  } catch {
    textValue = value || ''
  }
}
</script>

<div bind:this={root} class="mb-2">
  <div class="text-gray-2 text-sm">{_field.label}</div>
  {#if _field.description}
    <div class="text-sm text-gray-3">{_field.description}</div>
  {/if}
  <div class="mt-2 mb-3">
    <textarea
      bind:value={textValue}
      on:input={updateValue}
      class="resize-none w-full py-1 px-2 bg-gray-9 placeholder-gray-4 text-sm text-gray-1 leading-6 border border-gray-7 rounded hover:bg-white focus:bg-white focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary-lighter"
      placeholder="请输入"
    />
  </div>
</div>

<style lang="postcss">
  @tailwind base;
  @tailwind utilities;
</style>
