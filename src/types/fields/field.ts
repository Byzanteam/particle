export enum FieldType {
  'MULTIPLE_LINE_FIELD',
}

export interface FieldDescriptor {
  type: FieldType
  description?: string
  label: string
}
