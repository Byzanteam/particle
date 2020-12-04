export enum FieldType {
  'MULTIPLE_LINE_FIELD',
}

export interface FieldDescriptor {
  fieldType: FieldType
  description?: string
  label: string
}
