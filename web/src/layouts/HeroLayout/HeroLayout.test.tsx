import { render } from '@redwoodjs/testing/web'

import HeroLayout from './HeroLayout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('HeroLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<HeroLayout />)
    }).not.toThrow()
  })
})
