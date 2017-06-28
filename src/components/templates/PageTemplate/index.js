// https://github.com/diegohaz/arc/wiki/Atomic-Design#templates
import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { palette, size } from 'styled-theme'
import { ifProp } from 'styled-tools'
import { Icon, Link, Span } from 'components'
import picture from 'assets/picture.jpeg'

const Container = styled.div`
  max-width: 620px;
  @media screen and (max-width: 640px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  min-height: 100vh;
`

const StyledHeader = styled.div`
  background: white;
  left: 0;
  padding: 16px 0;
  position: fixed;
  text-align: center;
  top: 0;
  transition: all .1s ease-in-out;
  width: 100%;
  z-index: 999;
  &.glued {
    // border-bottom: 1px solid #ddd;
    box-shadow: 0 0 2px rgba(0,0,0,.5);
    padding: 12px 0;
  }
`

const HeaderContent = Container.extend`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 auto;
`

const Nav = styled.div`
  align-items: center;
  display: flex;
`
const Icons = styled.div``

const TinyImgContainer = styled.span`
  margin: 0 16px 0 0;
`

const TinyImg = styled.img`
  border-radius: 2px;
  margin: 0 auto;
  max-width: 100%;
  width: 36px;
`

const IconLink = styled(Link)`
  color: black;
  display: inline-block;
  &:hover {
    color: ${palette('primary', 1)};
  }
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

const Header = ({ isGlued }) => {
  return (<StyledHeader className={isGlued ? 'glued' : ''}>
    <HeaderContent>
      <Nav>
        <TinyImgContainer><TinyImg src={picture} /></TinyImgContainer>
        <HeaderLink exact to="/">Experience</HeaderLink>
        <HeaderLink to="/about">About</HeaderLink>
      </Nav>
      <Icons>
        <IconLink href="https://www.linkedin.com/in/tadea%C5%A1-pet%C3%A1k-2846853a/" target="_blank"><Icon icon="linkedin" /></IconLink>
        <IconLink href="https://github.com/tadeaspetak" target="_blank"><Icon icon="github" /></IconLink>
        <IconLink href="http://czechmypixels.com" target="_blank"><Icon icon="pencil" /></IconLink>
        <IconLink href="https://www.goodreads.com/user/show/7310589-tadeas-petak" target="_blank"><Icon icon="book" /></IconLink>
      </Icons>
    </HeaderContent>
  </StyledHeader>)
}

Header.propTypes = {
  isGlued: PropTypes.bool,
}

const Content = Container.withComponent('section').extend`
  box-sizing: border-box;
  margin: 8px auto;
  // max-width: ${size('maxWidth')};
  padding-top: 72px;
  width: 100%;
`

const Footer = styled.footer`
  margin-top: auto;
`

class PageTemplate extends React.Component {
  constructor(props) {
    super(props)
    this.handleScroll = this.handleScroll.bind(this)
    this.state = { isGlued: typeof window !== 'undefined' && window.pageYOffset > 0 }
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }
  handleScroll() {
    this.setState({ isGlued: window.pageYOffset > 0 })
  }
  render() {
    const { children, ...props } = this.props
    return (
      <PageWrapper {...props}>
        <Header isGlued={this.state.isGlued} />
        <Content isGlued={this.state.isGlued}>{children}</Content>
        <Footer />
      </PageWrapper>
    )
  }
}


PageTemplate.propTypes = {
  children: PropTypes.any.isRequired,
}

export default PageTemplate
