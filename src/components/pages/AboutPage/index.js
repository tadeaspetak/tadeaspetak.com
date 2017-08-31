import React from 'react'
import Helmet from 'react-helmet'

import { PageTemplate, Heading, Link, Paragraph } from 'components'

const AboutPage = () => {
  return (<PageTemplate>
    <Helmet>
      <title>About</title>
    </Helmet>
    <Heading center level={1} id="about">About</Heading>
    <Paragraph>
      I was born at the heart of Europe, where rivers abound in beer. Over the years,
      the wind has blown me into various corners of the world but for the last three,
      I seem to have been holding on to the city of Malmö, learning to fika properly.
    </Paragraph>
    <Paragraph>
      Riddles is what got me into programming and it&apos;s what keeps me in. I particularly
      like riddles that matter. Recently, I have been enjoying mostly the instant gratification
      that frontend offers but I like other chunks of the stack too.
    </Paragraph>
    <Paragraph>
      I love languages, both programming and natural, and get elated by mellifluous words.
      In my spare time, I do my best to compensate for the hours spent in stillness in
      front of a screen by slacklining, basic callisthenics, yoga (I&apos;m in the midst
      of a course to become a certified yoga teacher), playing badminton and squash. I
      would never say no to a nice hike. Some of the ones I haven&apos;t said no to can
      be found at <Link target="_blank" href="http://czechmypixels.com">Czech My Pixels</Link>.
      Oh, and books are my favourite invention of all times. Check out what I&apos;ve been up to lately
      on <Link target="_blank" href="https://www.goodreads.com/user/show/7310589-tadeas-petak">Goodreads</Link>.
    </Paragraph>
  </PageTemplate>)
}

export default AboutPage
