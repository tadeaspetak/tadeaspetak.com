import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { font, palette } from 'styled-theme'
import { ifProp } from 'styled-tools'
import NavLink from 'react-router-dom/NavLink'

const styles = css`
  color: ${palette({ grayscale: 0 }, 1)};
  font-family: ${font('primary')};
  font-weight: 500;
  text-decoration: ${ifProp('underline', 'underline', 'none')};

  &:hover {
    text-decoration: none;
  }
`

const StyledNavLink = styled(({ theme, reverse, palette, ...props }) =>
  <NavLink {...props} />
)`${styles}`
const Anchor = styled.a`${styles}`

const Link = ({ ...props }) => {
  if (props.to) {
    return <StyledNavLink {...props} />
  }
  return <Anchor {...props} />
}

Link.propTypes = {
  palette: PropTypes.string,
  reverse: PropTypes.bool,
  to: PropTypes.string,
  underline: PropTypes.bool,
}

Link.defaultProps = {
  palette: 'primary',
  underline: true,
}

export default Link
