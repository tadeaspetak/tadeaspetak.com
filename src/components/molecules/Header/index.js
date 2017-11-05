import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { palette } from 'styled-theme'
import { ifProp } from 'styled-tools'
import { Container, Icon, Link } from 'components'
import picture from 'assets/picture.jpg'

const StyledHeader = styled.div`
  background: white;
  box-shadow: ${ifProp('isGlued', '0 0 2px rgba(0,0,0,.5)', 'none')};
  left: 0;
  padding: ${ifProp('isGlued', '12px', '16px')} 0;
  position: fixed;
  text-align: center;
  top: 0;
  transition: all .1s ease-in-out;
  width: 100%;
  z-index: 999;
`

const Content = Container.extend`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 auto;
`

const Left = styled.div`
  align-items: center;
  display: flex;
`

const Photo = styled.img`
  border-radius: 2px;
  margin: 0 16px 0 0;
  max-width: 100%;
  width: 36px;
`

const HeaderLink = styled(Link)`
  display: inline-block;
  margin: 0 8px 0 0;
  text-decoration: none;

  &.active {
    text-decoration: underline;
  }

  &:hover {
    text-decoration:underline;
  }
`

const Right = styled.div``

const IconLink = styled(Link)`
  color: black;
  display: inline-block;

  &:hover {
    color: ${palette('primary', 1)};
  }
`

const Header = ({ isGlued }) => {
  return (<StyledHeader isGlued={isGlued}>
    <Content>
      <Left>
        <Photo src={picture} />
        <HeaderLink exact to="/">Experience</HeaderLink>
        <HeaderLink to="/about">About</HeaderLink>
      </Left>
      <Right>
        <IconLink href="https://www.linkedin.com/in/tade%C3%A1%C5%A1-pet%C3%A1k-2846853a/" target="_blank"><Icon icon="linkedin" /></IconLink>
        <IconLink href="https://github.com/tadeaspetak" target="_blank"><Icon icon="github" /></IconLink>
        <IconLink href="http://czechmypixels.com" target="_blank"><Icon icon="pencil" /></IconLink>
        <IconLink href="https://www.goodreads.com/user/show/7310589-tadeas-petak" target="_blank"><Icon icon="book" /></IconLink>
      </Right>
    </Content>
  </StyledHeader>)
}

Header.propTypes = {
  isGlued: PropTypes.bool,
}

export default Header
