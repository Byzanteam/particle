export interface FileObject {
  objectUuid: string
  fuid?: string | number,
  filename?: string
  filesize?: string
  mimetype?: string
  // 上传进度
  progress?: number
  rawFile?: File
}
