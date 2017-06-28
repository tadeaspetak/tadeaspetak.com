import React from 'react'
import styled from 'styled-components'

const StyledLi = styled.li``

const Li = ({ ...props }) => {
  return <StyledLi {...props} />
}

Li.propTypes = {}

Li.defaultProps = {
  palette: 'grayscale',
}

export default Li
