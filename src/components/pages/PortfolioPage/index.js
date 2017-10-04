import React from 'react'
import styled from 'styled-components'

import { PageTemplate, Li, Link, List, Heading, Paragraph } from 'components'

const Projects = styled.div`
  margin: 36px 0 0 0;
`

const PortfolioPage = () => {
  return (<PageTemplate>
    <Heading center level={1} id="experience">Experience</Heading>
    <Paragraph>
      Currently, I am fullstacking at <Link href="https://zook.ai/" target="_blank">Zook AI</Link>,
      building an AI that could be to the business world what thesaurus is to language.
      Previously, I have worked as a Web &amp; Java consultant at <Link href="https://jayway.com" target="_blank">Jayway</Link> and
      before that, I was creating a digital food ambassador at <Link href="https://www.ipiit.com/" target="_blank">ipiit</Link>.
    </Paragraph>

    <Paragraph>
      I am on the programme committee for <Link href="http://oredev.org" target="_blank">Øredev</Link> this year,
      responsible for the frontend &amp; node.js tracks. If you haven&apos;t been, Øredev is a developer conference held annually in Malmö,
      Sweden. Do come, it&apos;s awesome.
    </Paragraph>

    <Paragraph>
      A few projects I&apos;ve worked on follow.
    </Paragraph>

    <Projects>
      <Heading level={2} id="bibliofair">Bibliofair</Heading>
      <Paragraph>
        <Link href="http://bibliofair.com/" target="_blank">Bibliofair</Link> is based on an idea of a friend of mine to connect
        home libraries of people around the world, making the library network decentralised and distributed. We
        released an MVP in spring 2014 that was very well received, including an article in a major national
        newspaper. Unfortunately, after that we both lacked time to develop the platform further.
      </Paragraph>
      <Paragraph>
        I still hope that at some point in the future, I will have a chance to continue with this project as to me,
        it&apos;s one of the best ones I&apos;ve ever worked on. I genuinely believe it would be incredibly useful to
        have this sort of thing in place.
      </Paragraph>

      <Heading level={2} id="czech-my-pixels">Czech My Pixels</Heading>
      <Paragraph>
        Travelling blog of my girlfriend and mine. For me the only way to learn the digital ropes of anything is to
        get my hands dirty with code which is why I&apos;ve written this myself. To learn React, Redux, server-side rendering,
        etc. Running at <Link target="_blank" href="http://czechmypixels.com">czechmypixels.com</Link>,
        the source can be found at <Link target="_blank" href="https://github.com/tadeaspetak/czech-my-pixels-blog">github</Link>.
      </Paragraph>

      <Heading level={2} id="competence-days-projects">Competence Days</Heading>
      <Paragraph>
        My favourite perk of working at Jayway were so-called &quot;competence days&quot;.
        Every month, the entire company meets for a full day and everyone is encouraged to
        hold sessions on, well, pretty much anything at least remotely related to software
        development. I have held a bunch of such sessions for my colleagues, some of them
        resulting in small overviews and demos:
      </Paragraph>
      <List>
        <Li>
          <Link target="_blank" href="https://tadeaspetak.gitbooks.io/scratching-the-surface-of-security/content/">Scratching the Surface of Security</Link>,
          a gitbook capturing a few days of exploring basics of security and white hat hacking.
        </Li>
        <Li>
          A demo demonstrating <Link target="_blank" href="http://ml.tadeaspetak.com/">basic maths behind machine learning</Link>, code
          at <Link target="_blank" href="https://github.com/tadeaspetak/machine-learning-maths">github</Link>.
        </Li>
        <Li>
          <Link target="_blank" href="https://tadeaspetak.gitbooks.io/xsl-with-bi-publisher/content/">XSL Guide</Link>, since I (very unfortunately) had to use
          XSL extensively in one of the projects I worked on while at Jayway.
        </Li>
      </List>
    </Projects>
  </PageTemplate>)
}

export default PortfolioPage
