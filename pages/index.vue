<template>
  <div class="container">
    <nav>
      <div class="links">
        <div class="internal">
          <a href="#" class="up"><img src="~/static/head.jpg" class="head"/></a>
          <a href="#" class="up name">Tadeáš Peták</a>
          <!-- <router-link to="#about">About</router-link> -->
        </div>
        <div class="external">
          <a
            href="https://www.linkedin.com/in/tade%C3%A1%C5%A1-pet%C3%A1k-2846853a/"
            target="_blank"
            title="Linkedin"
          >
            <font-awesome-icon :icon="['fab', 'linkedin']" />
          </a>
          <a
            href="https://github.com/tadeaspetak"
            target="_blank"
            title="Github"
          >
            <font-awesome-icon :icon="['fab', 'github']" />
          </a>
          <a
            href="https://www.goodreads.com/user/show/7310589-tadeas-petak"
            target="_blank"
            title="Goodreads"
          >
            <font-awesome-icon :icon="['fab', 'goodreads']" />
          </a>
          <a
            href="https://medium.com/@tadeaspetak"
            target="_blank"
            title="Medium"
          >
            <font-awesome-icon :icon="['fab', 'medium']" />
          </a>
        </div>
      </div>
    </nav>
    <div class="content">
      <p>
        I was born at the heart of Europe, where rivers abound in beer. Over the
        years, the wind has blown me into various corners of the world, but for
        the last five, I seem to have been holding on to the city of Malmö,
        learning to fika properly.
      </p>
      <p>
        I really like yoga and lead some classes here and there. I would never
        say no to a hike. I get, hmm, elated by melifluous words, and books must
        be my favourite invention of all times.
      </p>
      <p>
        Riddles got me into software development, and they keep me in. Ideally,
        riddles that matter. Awareness is, in my mind, the most important thing
        in the world, and attention the ultimate one to give.
      </p>

      <h2>Work</h2>

      <p>
        Currently, I'm shaping the program of
        <a href="https://oredev.org" target="_blank">Øredev</a>, one of the
        largest dev conferences in the Nordics. Also, I am exploring new
        directions for the company to venture into, resulting e.g. in
        <a href="https://mindthegaps.io" target="_blank">Mind the Gaps</a> that
        focuses on digital ethics.
      </p>
      <p>
        Until August 2018, I was fullstacking at Zook (these days
        <a href="https://donna.legal" target="_blank">Donna</a>), back then
        building an AI that could be to the business world what thesaurus is to
        langugage. Before that, I worked as a consultant at
        <a href="https://jayway.com" target="_blank">Jayway</a> and built a
        digital food ambassador at
        <a href="https://ipiit.com" target="_blank">ipiit</a> earlier still.
      </p>

      <h2>Projects &amp; passtimes</h2>
      <p>
        <a href="https://www.facebook.com/bibliofair/" target="_blank"
          >Bibliofair</a
        >
        was based on an idea of a friend of mine to connect home libraries of
        people around the world, making the ancient web of books decentralised
        and distributed. Time for this project dissipated after an MVP in 2014,
        but I would love to get back to it at one point. Some of the hikes I
        didn't say no to can be found at
        <a href="https://czechmypixels.com">Czech My Pixels</a>; I've coded and
        re-coded that blog to brush up on React.
      </p>

      <p>
        Every now and then, I write something and realise it might be the number
        one thing I'd like to get better at: check out
        <a
          href="https://medium.com/predict/end-of-life-as-we-know-it-e7955fd6f604"
          target="_blank"
          >End of Life as We Know It</a
        >,
        <a
          href="https://medium.com/@oredev/attention-rip-offs-69fd4d6e8768"
          target="_blank"
          >Attention Rip-Offs</a
        >, or a bit more technical
        <a
          href="https://tadeaspetak.gitbooks.io/scratching-the-surface-of-security/content/"
          target="_blank"
          >Scratching the Surface of Security</a
        >
        if you feel like it. At some point, I started
        <a
          href="https://www.goodreads.com/user/show/7310589-tadeas-petak"
          target="_blank"
          >writing reviews</a
        >
        for most of the books I read and gotta admit it's a wonderful way to
        spend time.
      </p>

      <h2>Favourites</h2>

      <p>
        <a
          href="https://www.goodreads.com/author/show/1501668.Alan_W_Watts"
          target="_blank"
          >Alan Watts</a
        >
        is someone I go back to all the time.
        <a
          href="https://www.goodreads.com/book/show/24800.House_of_Leaves?ac=1&from_search=true"
          target="_blank"
          >House of Leaves</a
        >
        is by far the strangest — in an absolutely wonderful way — book I've
        read this year, and I think
        <a href="https://www.goodreads.com/author/show/585.John_Steinbeck"
          >Steinbeck</a
        >
        was a complete genius. There are very few things by
        <a
          href="https://www.goodreads.com/author/show/1221698.Neil_Gaiman"
          target="_blank"
          >Gaiman</a
        >
        and
        <a
          href="https://www.goodreads.com/author/show/1654.Terry_Pratchett?from_search=true"
          target="_blank"
          >Pratchett</a
        >
        I wouldn't recommend you with zero doubts. I really like
        <a
          href="https://www.goodreads.com/author/show/395812.Yuval_Noah_Harari"
          target="_blank"
          >Harari</a
        >, but, then again, who doesn't?
      </p>

      <p>
        Dan Carlin's
        <a
          href="https://www.dancarlin.com/hardcore-history-series/"
          target="_blank"
          >Hardcore History</a
        >
        should be used to teach history all over the world, and I think Rob Reid
        is doing a crazy good job on the
        <a href="https://after-on.com/" target="_blank">After On Pocast</a>.
      </p>
    </div>
  </div>
</template>

<script>
const easeOutQuad = (t) => --t * t * t + 1 // https://gist.github.com/gre/1650294
const scroll = ({ currentTime, duration, startTime, startPosition }) => {
  const progress = Math.min((currentTime - startTime) / duration, 1)
  window.scroll(0, startPosition * (1 - easeOutQuad(progress)))
  if (progress < 1) {
    requestAnimationFrame(() =>
      scroll({
        startTime,
        currentTime: new Date().getTime(),
        duration,
        startPosition
      })
    )
  }
}
const scrollUp = (e) => {
  e.preventDefault()
  requestAnimationFrame(() =>
    scroll({
      startTime: new Date().getTime(),
      currentTime: new Date().getTime(),
      duration: 200,
      startPosition: window.pageYOffset
    })
  )
}

export default {
  mounted() {
    Array.from(document.getElementsByClassName('up')).forEach((link) => {
      link.addEventListener('click', scrollUp)
    })
  },
  beforeDestroy() {
    Array.from(document.getElementsByClassName('up')).forEach((link) => {
      link.removeEventListener('click', scrollUp)
    })
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  align-items: center;
  text-align: center;
  flex-direction: column;
}

.content {
  text-align: left;
  width: 700px;
  padding: 2.5rem 0;
}

nav {
  position: -webkit-sticky; /* Safari */
  position: sticky;
  top: 0;
  background: white;
  width: 100%;
  display: flex;
  justify-content: center;
  box-shadow: 0 0px 2px 2px #f2f2f2;
}

.links {
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 650px;
  padding: 0.7rem 0;
}

.internal {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 700px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.external {
  display: flex;
  justify-content: space-between;
  flex: 0 0 110px;
  margin: 7px 30px 0;
}

.external a {
  font-size: 24px;
  color: black;
  display: inline;
}

.head {
  display: block;
  margin: 0 10px 0 0;
  width: 50px;
  /* border-radius: 10px; */
}

a.name {
  display: inline-block;
  text-decoration: none;
  margin-top: 3px;
}

p {
  margin: 0 0 1rem;
}

@media only screen and (max-width: 768px) {
  .content {
    width: 92%;
  }

  .links {
    width: 92%;
  }

  .external {
    flex: 0 0 100px;
    margin-right: 0;
  }

  img.head {
    margin-right: 8px;
    width: 40px;
  }
}
</style>
