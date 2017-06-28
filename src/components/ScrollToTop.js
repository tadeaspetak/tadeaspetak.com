import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router'

class ScrollToTop extends React.Component {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0)
    }
  }
  render() {
    // console.log(this.props.children)
    return this.props.children || null
  }
}

ScrollToTop.propTypes = {
  children: PropTypes.any,
  location: PropTypes.object,
}

export default withRouter(ScrollToTop)
