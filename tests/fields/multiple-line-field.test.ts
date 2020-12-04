import { render } from '@testing-library/svelte'
import Fields from '../../src/main'

const { MultipleLineField } = Fields

const testField = {
  label: '多行文本',
  fieldType: 'MULTIPLE_LINE_FIELD',
}

describe('MultipleLineField', () => {
  it('should render label', () => {
    const { getByText } = render(MultipleLineField, {
      props: {
        field: testField,
        value: '',
      }
    })
    expect(() => getByText(testField.label)).not.toThrow()
  })

  it('should render initial value', () => {
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
    const textarea = getByPlaceholderText('请输入')
    ;(expect(textarea) as any).toHaveDisplayValue('rich text value')
  })

  it('should render initial string value', () => {
    const { getByPlaceholderText } = render(MultipleLineField, {
      props: {
        field: testField,
        value: 'a string value',
      }
    })
    const textarea = getByPlaceholderText('请输入')
    ;(expect(textarea) as any).toHaveDisplayValue('a string value')
  })
})
