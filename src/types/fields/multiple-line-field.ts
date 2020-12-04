import type { FieldDescriptor, FieldType } from './field'
export interface MultipleLineFieldDescriptor extends FieldDescriptor {
  type: FieldType.MULTIPLE_LINE_FIELD
}

export interface ProsemirrorNode {
  type: string
  content: Array<ProsemirrorNode> | string
}

export type MultipleLineFieldValue = ProsemirrorNode
