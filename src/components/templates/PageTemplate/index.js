import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Container, Header } from 'components'

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  min-height: 100vh;
`

const Content = Container.withComponent('section').extend`
  box-sizing: border-box;
  margin: 8px auto;
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
