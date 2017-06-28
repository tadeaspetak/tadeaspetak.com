import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { font, palette } from 'styled-theme'
import { ifProp } from 'styled-tools'

const fontSize = ({ level }) => `${0.75 + (1 * (1 / level))}rem`

const styles = css`
  color: ${palette({ grayscale: 0 }, 1)};
  font-family: ${font('primary')};
  font-weight: 500;
  font-size: ${fontSize};
  margin: 0;
  margin-top: 0.85714em;
  margin-bottom: 0.57142em;
  text-align: ${ifProp('center', 'center', 'inherit')};
`

const Heading = styled(({ level, center, children, reverse, palette, theme, ...props }) =>
  React.createElement(`h${level}`, props, children)
)`${styles}`

Heading.propTypes = {
  level: PropTypes.number,
  center: PropTypes.bool,
  children: PropTypes.node,
  palette: PropTypes.string,
  reverse: PropTypes.bool,
}

Heading.defaultProps = {
  level: 1,
  palette: 'grayscale',
}

export default Heading
