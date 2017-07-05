import styled from 'styled-components';
import {Helmet} from "react-helmet";
import Bg from './bg';

const Wrapper = styled.section`
  width: 100%;

  section {
    margin: 180px 10px;
  }
`;

const Logo = styled.h1`
  margin: 20px 10px 30px;
`;

const BgWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
`

export default () => (
  <div>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Kyoto.js 13</title>
      <meta name="theme-color" content="#ffffff"/>>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/10up-sanitize.css/5.0.0/sanitize.min.css"/>
    </Helmet>

    <BgWrapper>
      <Bg/>
    </BgWrapper>

    <Wrapper>
      <Logo><img src="/static/13/logo.png"/></Logo>

      <section>
        <h2>Timetable</h2>
        <p>TBD</p>
      </section>

      <section>
        <h2>Timetable</h2>
        <p>TBD</p>
      </section>

      <section>
        <h2>Timetable</h2>
        <p>TBD</p>
      </section>

      <section>
        <h2>Timetable</h2>
        <p>TBD</p>
      </section>

      <section>
        <h2>Timetable</h2>
        <p>TBD</p>
      </section>

      <section>
        <h2>Timetable</h2>
        <p>TBD</p>
      </section>

      <section>
        <h2>Timetable</h2>
        <p>TBD</p>
      </section>

      <section>
        <h2>Timetable</h2>
        <p>TBD</p>
      </section>

      <section>
        <h2>Timetable</h2>
        <p>TBD</p>
      </section>

      <section>
        <h2>Timetable</h2>
        <p>TBD</p>
      </section>

      <section>
        <h2>Timetable</h2>
        <p>TBD</p>
      </section>

      <section>
        <h2><a href="https://kyotojs.connpass.com/event/60422/" target="_blank">参加申込みはこちらから</a></h2>
      </section>

      <footer>
        from kyoto with love
      </footer>
    </Wrapper>
  </div>
)
