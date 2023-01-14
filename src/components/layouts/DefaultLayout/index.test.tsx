import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import DefaultLayout, { ARIA_LABEL } from '.'
import { defaultProps } from './__mocks__'

describe('DefaultLayout', () => {
  beforeEach(() => {
    render(<DefaultLayout>{defaultProps}</DefaultLayout>)
  })

  test.skip('描画される', () => {
    const defaultLayoutElement = screen.getByLabelText(
      ARIA_LABEL.DEFAULT_LAYOUT
    )
    expect(defaultLayoutElement).toBeInTheDocument()
  })

  test.todo('Header')
  test.todo('BreadCrumb')
  test.todo('children')
  test.todo('Profile')
  test.todo('Footer')
})
