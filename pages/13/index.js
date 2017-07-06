import styled from 'styled-components';
import {Helmet} from "react-helmet";
import Bg from './bg';
import isMobile from './is-mobile';

const Wrapper = styled.div`
  line-height: 1.6em;
  // text-shadow: 0 0 2px white, 0 0 4px white;
  text-shadow: 0 0 1px black, 0 0 4px white, 0 0 4px white;
  filter: blur(1px);
  max-width: 960px;
  margin: 0 auto;

  section, footer {
    padding-right: 5px;  // 全体的に少し左に寄せる
  }
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

const BgImg = styled.img`
  width: 100%;
  height: 100%;
`;

const Section = styled.section`
  margin: 180px 10px;
  text-align: center;
  margin-left 0px;

  p {
    margin: 50px 0;
  }
`;

const SpeakersSection = Section.extend`
  div {
    display: inline-block;
    width: 120px;
    img {
      display: block;
      width: 90px;
      margin: 15px;
      border-radius: 50%;
    }
    font-weight: bold;
  }
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
    color: black;
    &:visited {
      color: black;
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
      <meta property="og:url" content="https://kyoto.js.org/13"/>
      <meta property="og:image" content="https://kyoto.js.org/static/13/ogimage.png"/>
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
      {isMobile ? <BgImg src="/static/13/bg1.gif"/> : <Bg/>}
    </BgWrapper>

    <Wrapper>
      <Logo><img src="/static/13/logo.png"/></Logo>

      <Section>
        <h2>今回のテーマは「」</h2>
        <p>フロントエンドは、生まれ、そして死んでいく</p>
      </Section>

      <SpeakersSection>
        <h2>Speakers</h2>
        <div>
          <img src="/static/13/icon_amagi.png"/>
          <span>amagitakayosi</span>
        </div>
        <div>
          <img src="/static/13/icon_kuy.png"/>
          <span>kuy</span>
        </div>
        <div>
          <img src="/static/13/icon_bokuweb.png"/>
          <span>bokuweb</span>
        </div>
        <p>順次追加予定</p>
      </SpeakersSection>

      <TimetableSection>
        <h2>Timetable</h2>
        <ul>
          <li>12:30 開場</li>
          <li>13:00 開始</li>
          <li>TBD</li>
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
