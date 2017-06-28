// https://github.com/diegohaz/arc/wiki/Example-components#icon
import React from 'react'
import { storiesOf } from '@storybook/react'
import Icon from '.'

storiesOf('Icon', module)
  .add('default', () => (
    <Icon icon="linkedin" />
  ))
  .add('palette', () => (
    <Icon icon="linkedin" palette="primary" />
  ))
  .add('palette reverse', () => (
    <Icon icon="pencil" palette="primary" reverse />
  ))
  .add('height', () => (
    <Icon icon="goodreads" height={100} />
  ))
