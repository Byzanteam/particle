## FileField

```ts
interface FileObject {
  objectUuid: UUID
  filename?: string
  filesize?: number
  mimetype?: string
}

type UploadingState = boolean
```

------
### Props
| prop name | type | description | default | required |
| --- | --- | --- | --- | --- |
| value | FileObject[] | 初始值 | [] | false |
| accept | string | 允许的格式类型 | '*' | false |
| maxCount | number | 最多允许选择的文件个数 | 1 | false |
| maxSize | number | 单个文件的大小上限 | Infinity | false |
| uploadUrl | string | 上传地址 | void | true |
| uploadOptions | object | 上传的额外属性 | null | false |

------
### Events
| name | description | data |
| --- | --- | --- |
| change | 值发生变化时触发 | 当前所有上传成功的文件（FileObject[]） |
| uploading-state-change | 文件上传状态改变时触发 | UploadingState |

------
### Methods
| name | description | params | returns |
| --- | --- | --- | --- |
| openFilePickerDialog | 打开文件选择对话框 | void | void |
