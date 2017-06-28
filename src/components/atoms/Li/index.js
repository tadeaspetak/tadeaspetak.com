import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { font, palette } from 'styled-theme'

const StyledLi = styled.li``

const Li = ({ ...props }) => {
  return <StyledLi {...props} />
}

Li.propTypes = {}

Li.defaultProps = {
  palette: 'grayscale',
}

export default Li
