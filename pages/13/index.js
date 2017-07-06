import styled from 'styled-components';
import {Helmet} from "react-helmet";
import Bg from './bg';

const Wrapper = styled.div`
  line-height: 1.6em;
  // text-shadow: 0 0 2px white, 0 0 4px white;
  text-shadow: 0 0 1px black, 0 0 4px white, 0 0 4px white;
  filter: blur(1px);
  max-width: 960px;
  margin: 0 auto;

`;

const Logo = styled.h1`
  width: 90%;
  margin: 20px 5%;
  img {
    width: 100%;
  }
`;

const BgWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
`

const Section = styled.section`
  margin: 180px 10px;
`;

const TimetableSection = Section.extend`
  ul {
    list-style: none;
    padding-left: 10px;
  }
  li {
    margin-bottom: 10px;
    // white-space: nowrap;
  }
`;

const LinkSection = styled.section`
  margin: -40px 10px 60px;
  text-align: center;
  a {
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const Footer = styled.footer`
  text-align: center;
  width: 100%;
  height: 210px;
  line-height: 180px;
  font-weight: bold;
  img {
    height: 2.5em;
    margin-top: -3px;
  }
`;

export default () => (
  <div>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Kyoto.js XIII</title>

      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <meta name="twitter:card" content="summary"/>
      <meta name="twitter:site" content="@kyoto_js"/>
      <meta property="og:title" content="Kyoto.js XIII"/>
      <meta property="og:type" content="website"/>
      <meta property="og:url" content="http://kyoto.js.org/13"/>
      <meta property="og:image" content="http://kyoto.js.org/static/13/logo.png"/>
      <meta property="og:description" content="The 13th meetup of Kyoto.js"/>
      <link rel="apple-touch-icon" sizes="180x180" href="/static/icons/180.png"/>
      <link rel="apple-touch-icon-precomposed" href="/static/icons/180.png"/>
      <link rel="shortcut icon" href="/static/icons/192.png"/>
      <link rel="icon" sizes="192x192" href="/static/icons/192.png"/>
      <link rel="icon" type="image/png" href="/static/icons/192.png" sizes="192x192"/>
      <meta name="theme-color" content="#ffffff"/>

      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/10up-sanitize.css/5.0.0/sanitize.min.css"/>
    </Helmet>

    <BgWrapper>
      <Bg/>
    </BgWrapper>

    <Wrapper>
      <Logo><img src="/static/13/logo.png"/></Logo>

      <Section>
        <h2>今回のテーマは「無常」</h2>
        <p>技術だけじゃ、何も起きない</p>
      </Section>

      <Section>
        <h2>Speakers</h2>
        <p>TBD</p>
      </Section>

      <TimetableSection>
        <h2>Timetable</h2>
        <ul>
          <li>13:00 開始</li>
          <li>13:10 「ライブコーディング環境をつくってみた」amagitakayosi</li>
          <li>13:30 「TBD」john doe</li>
          <li>13:50 休憩</li>
          <li>14:00 「TBD」john doe</li>
          <li>14:20 「TBD」john doe</li>
          <li>14:40 休憩</li>
          <li>14:50 「TBD」(LT) john doe</li>
          <li>15:00 「TBD」(LT) john doe</li>
          <li>15:10 「TBD」(LT) john doe</li>
          <li>15:20 「TBD」(LT) john doe</li>
          <li>15:30 懇親会</li>
        </ul>
      </TimetableSection>

      <LinkSection>
        <h2><a href="https://kyotojs.connpass.com/event/60422/" target="_blank">参加申込みはこちらから</a></h2>
      </LinkSection>

      <Footer>
        by <img src="/static/logo960.png"/>
      </Footer>
    </Wrapper>
  </div>
)
