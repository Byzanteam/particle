import { render } from '@testing-library/svelte'
import Fields from '../../src/main'

const { MultipleLineField } = Fields

test("should render label", () => {
  const testField = {
    label: '多行文本',
    fieldType: 'MULTIPLE_LINE_FIELD',
  }
  const { getByText } = render(MultipleLineField, {
    props: {
      field: testField,
      value: '',
    }
  })

  expect(() => getByText(testField.label)).not.toThrow()
})

test("should render intial value", () => {
  const testField = {
    label: '多行文本',
    fieldType: 'MULTIPLE_LINE_FIELD',
  }
  const { getByPlaceholderText } = render(MultipleLineField, {
    props: {
      field: testField,
      value: JSON.stringify({
        type: 'doc',
        content: [
          {
            type: 'plain',
            content: [
              {
                type: 'text',
                content: 'rich text value',
              },
            ],
          },
        ],
      }),
    }
  })
  const textarea = getByPlaceholderText('请输入');

  expect(textarea).toHaveDisplayValue('rich text value')
})

test("should render intial string value", () => {
  const testField = {
    label: '多行文本',
    fieldType: 'MULTIPLE_LINE_FIELD',
  }
  const { getByPlaceholderText } = render(MultipleLineField, {
    props: {
      field: testField,
      value: 'a string value',
    }
  })

  const textarea = getByPlaceholderText('请输入');

  expect(textarea).toHaveDisplayValue('a string value')
})
