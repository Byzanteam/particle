<script lang="ts">
import type { FileObject } from '../../types'
import dispatchEvent from '../../utils/dispatch'

// props
export let value: string | Array<FileObject> = []
export let maxcount: string | number = 1
export let accept: string = '*'

let root: HTMLElement
let inputRef: HTMLInputElement
let files: Array<FileObject> = []

function updateValue(): void {
  dispatchEvent(root, 'change', {
    detail: {
      value: files
    },
  })
}

export function openFilePickerDialog(): void {
  inputRef.click()
}

function mergeFiles(fileArr: Array<FileObject>): void {
  fileArr.forEach((file, index) => {
    const existFile = files.find(({ fuid }) => fuid === file.fuid)
    if (!existFile) {
      files = [...files, {
        // use uuid generator
        fuid: Date.now() + index,
        progress: 1,
        ...file,
      }]
    } else {
      existFile.progress = Object.hasOwnProperty('progress') ? file.progress : 1
    }
  })
}

function fileChange(event: Event) {
  const selectedFiles = [].slice.call((event.target as HTMLInputElement).files)
  mergeFiles(selectedFiles.map((file, index) => ({
    // use uuid generator
    fuid: Date.now() + index,
    progress: 0,
    filename: file.name,
    filesize: file.size,
    mimetype: file.type,
    objectUuid: '',
  })))
}

$: multiple = typeof maxcount === 'string' ? (parseInt(maxcount) > 1) : (maxcount > 1)
$: {
  if (typeof value === 'string') {
    try {
      mergeFiles(JSON.parse(value))
    } catch {}
  } else {
    mergeFiles(value)
  }
}
</script>

<div bind:this={root}>
  <input
    bind:this={inputRef}
    multiple={multiple}
    accept={accept}
    on:change={fileChange}
    type="file"
    class="hidden"
  >
{#each files as file}
  <div>{file.filename}</div>
{/each}
  <slot>
    <button
      class="py-5 px-10 bg-gray-8 text-gray-2 text-body1 focus:outline-none hover:text-primary hover:bg-primary-lighter"
      type="button"
      tabindex="-1"
      on:click|stopPropagation={openFilePickerDialog}
    >
      选择文件
    </button>
  </slot>
</div>

<style lang="postcss">
  @tailwind base;
  @tailwind utilities;
</style>
