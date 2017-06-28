// https://github.com/diegohaz/arc/wiki/Storybook
import React from 'react'
import { storiesOf } from '@storybook/react'
import PortfolioPage from '.'

storiesOf('PortfolioPage', module)
  .add('default', () => (
    <PortfolioPage />
  ))
