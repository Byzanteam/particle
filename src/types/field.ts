enum FieldType {
  'MULTIPLE_LINE_FIELD',
}

export interface FieldDescriptor {
  type: FieldType
  description?: string
  label: string
}

export interface MultipleLineField extends FieldDescriptor {
  type: FieldType.MULTIPLE_LINE_FIELD
}
