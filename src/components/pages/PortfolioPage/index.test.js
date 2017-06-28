// https://github.com/diegohaz/arc/wiki/Testing-components
import React from 'react'
import { shallow } from 'enzyme'
import PortfolioPage from '.'

it('renders', () => {
  shallow(<PortfolioPage />)
})
