import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { injectGlobal, ThemeProvider } from 'styled-components'
import Helmet from 'react-helmet'

import { AboutPage, PortfolioPage } from 'components'
import favicon from 'assets/favicon.ico'
import ScrollToTop from './ScrollToTop'
import theme from './themes/default'


injectGlobal`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
  }

  @media screen and (max-device-width: 480px) {
    body {
      -webkit-text-size-adjust: none;
    }
  }
`

const App = () => {
  return (
    <div>
      <Helmet titleTemplate="%s | Tadeáš Peták">
        <title>Home</title>
        <meta name="description" content="React starter kit based on Atomic Design with React Router v4, Webpack, Redux, Server Side Rendering and more." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:site_name" content="ARc" />
        <meta property="og:image" content="https://arc.js.org/thumbnail.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <link rel="icon" href={favicon} />
      </Helmet>
      <ScrollToTop />
      <ThemeProvider theme={theme}>
        <Switch>
          <Route path="/" component={PortfolioPage} exact />
          <Route path="/about" component={AboutPage} exact />
        </Switch>
      </ThemeProvider>
    </div>
  )
}

export default App
