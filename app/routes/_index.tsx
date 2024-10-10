/* eslint-disable react/no-unescaped-entities */
import type { MetaFunction } from "@remix-run/node";
import type { ReactNode } from "react";
import { Shell } from "~/components/Shell";

export const meta: MetaFunction = () => {
  return [
    { title: "Tadeáš Peták" },
    { name: "description", content: "Personal " },
  ];
};

const Link = (props: {
  children?: React.ReactNode;
  title: string;
  href: string;
}) => (
  <a
    className="text-red-600 underline hover:no-underline"
    target="_blank"
    rel="noreferrer"
    href={props.href}
  >
    {props.children ?? props.title}
  </a>
);

const H2 = (props: { children: ReactNode }) => {
  return <h2 className="text-2xl mt-8 mb-4">{props.children}</h2>;
};

export default function Index() {
  return (
    <Shell>
      <div className="mx-auto my-12 italic sm:mt-20">
        <p className="text-center">
          these hills need none of what you've got
          <br />
          through wind, slowly, time percolates
          <br />
          you're just a dot and then you're not
          <br />
          more than a speck that speculates:
          <br />
          "when we all leave, when no one's here,
          <br />
          do mountains stay or disappear?"
          <br />
          them, looking down in all their fame
          <br />
          their snowy peaks musing just the same
        </p>
        <p className="text-right">(~Laguna Torre, Argentina)</p>
      </div>

      <div className="space-y-6">
        <p>
          I was born at the heart of Europe where rivers abound in beer. Over
          the years, the wind has blown me into various corners of the world.
          Notably, I had spent five of them holding on to the city of Malmö,
          learning to fika properly. I'm mostly back home these days.
        </p>
        <p>
          I like yoga and lead some classes here and there. I would never say no
          to a hike. I get, hmm, elated by melifluous words, and books must be
          my favourite invention of all times. A lot of last year has gone into
          building{" "}
          <Link href="https://www.instagram.com/tajny_home" title="Tiny house">
            our tiny house
          </Link>
          , easily one of the biggest joys ever.
        </p>
        <p>
          Riddles got me into software development, and they keep me in.
          Awareness is, in my mind, the most important thing in the world and
          attention the ultimate one to give.
        </p>
      </div>

      <H2>Work</H2>

      <div className="space-y-6">
        <p>
          Currently, I fullstack at{" "}
          <Link href="https://deedmob.com" title="Deedmob">
            Deedmob
          </Link>
          , making volunteer engagement a breeze.
        </p>

        <p>
          For some time before, I fullstacked at{" "}
          <Link
            href="https://www.linkedin.com/company/donna-legal/"
            title="Donna"
          />
          , using tech to replace the robot within the lawyer. In 2018-2019, I
          was shaping the program of{" "}
          <Link href="https://oredev.org" title="Øredev" />, one of the largest
          dev conferences in the Nordics. I was also exploring new directions
          for us to venture into, resulting e.g. in{" "}
          <Link href="https://x.com/mindthegaps_io" title="Mind the Gaps" />, a
          brand new conference focusing on digital ethics.
        </p>
        <p>
          Until August 2018, I was fullstacking at Zook, back then building an
          AI that could be to the business world what thesaurus is to langugage.
          Before that, I worked as a consultant at{" "}
          <Link href="https://jayway.com" title="Jayway" /> and was building a
          digital food ambassador at{" "}
          <Link href="https://www.linkedin.com/company/ipiit" title="ipiit" />{" "}
          earlier still.
        </p>
      </div>

      <H2>Projects &amp; passtimes</H2>
      <div className="space-y-6">
        <p>
          <Link
            href="https://www.facebook.com/bibliofair/"
            title="Bibliofair"
          />{" "}
          was based on an idea of a friend of mine to connect home libraries of
          people around the world, making the ancient web of books decentralised
          and distributed. Time for this project dissipated after an MVP in
          2014, but I would love to get back to it at one point. Some of the
          hikes I didn't say no to can be found at{" "}
          <Link href="http://pixels.tadeaspetak.com/" title="Czech My Pixels" />
          .
        </p>

        <p>
          Every now and then, I write something and realise it might be the
          number one thing I'd like to get better at: check out{" "}
          <Link
            href="https://medium.com/predict/end-of-life-as-we-know-it-e7955fd6f604"
            title="End of Life as We Know It"
          />
          ,{" "}
          <Link
            href="https://medium.com/@oredev/attention-rip-offs-69fd4d6e8768"
            title="Attention Rip-Offs"
          />{" "}
          , or a bit more technical{" "}
          <Link
            href="https://medium.com/@tadeaspetak/frontend-fullstack-security-298154016374"
            title="Frontend & Fullstack Security"
          />{" "}
          if you feel like it. At some point, I started{" "}
          <Link
            href="https://www.goodreads.com/user/show/7310589-tadeas-petak"
            title="writing reviews"
          />{" "}
          for most of the books I read and gotta admit it's a wonderful way to
          spend time.
        </p>
      </div>

      <H2>Favourites</H2>
      <div className="space-y-6">
        <p>
          <Link
            href="https://www.goodreads.com/author/show/1501668.Alan_W_Watts"
            title="Alan Watts"
          />{" "}
          is someone I go back to all the time.{" "}
          <Link
            href="https://www.goodreads.com/book/show/24800.House_of_Leaves?ac=1&from_search=true"
            title="House of Leaves"
          />{" "}
          is by far the strangest — in an absolutely wonderful way — book I've
          read this year, and I think{" "}
          <Link
            href="https://www.goodreads.com/author/show/585.John_Steinbeck"
            title="Steinbeck"
          />{" "}
          was a genius. I don't understand how I hadn't read{" "}
          <Link
            href="https://www.goodreads.com/review/show/3021255431"
            title="Borges"
          />{" "}
          until about two months back. There are very few things by{" "}
          <Link
            href="https://www.goodreads.com/author/show/1221698.Neil_Gaiman"
            title="Gaiman"
          />{" "}
          and{" "}
          <Link
            href="https://www.goodreads.com/author/show/1654.Terry_Pratchett?from_search=true"
            title="Pratchett"
          />{" "}
          I wouldn't recommend to you with zero doubts. I really like what{" "}
          <Link
            href="https://www.goodreads.com/author/show/395812.Yuval_Noah_Harari"
            title="Harari"
          />{" "}
          has to say. Then again, who doesn't?
        </p>

        <p>
          Dan Carlin's{" "}
          <Link
            href="https://www.dancarlin.com/hardcore-history-series/"
            title="Hardcore History"
          />{" "}
          should be used to teach history all over the world, and I think Rob
          Reid is doing a crazy good job on the{" "}
          <Link href="https://after-on.com/" title="After On Pocast" />.
        </p>
      </div>
    </Shell>
  );
}
