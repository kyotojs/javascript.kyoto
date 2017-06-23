import styled from 'styled-components';
import { color, font, breakpoint, size } from '../components/styles'
import {Helmet} from "react-helmet";

const style = `
body {
    font-family : ${font.regular};
    color       : ${color.black};
    background  : ${color.white};
    margin      : 0;
    padding     : 0;

    background: none;
}

a, a:hover, a:visited {
    color : ${color.sumi};
}

h1, h2, h3, h4, h5, h6 {
    font-family : ${font.bold};
    color       : ${color.black};
    margin      : 0;
    a, a:hover, a:visited {
        text-decoration: none;
        color: ${color.black};
    }
}

h1 { font-size: ${size.h1}; line-height: ${size.h1}; margin: 0; }
h2 { font-size: ${size.h2}; line-height: ${size.h2}; margin: 0; }
h3 { font-size: ${size.h3}; line-height: ${size.h3}; margin: 0; }
h4 { font-size: ${size.h4}; line-height: ${size.h4}; margin: 0; }

@media (max-width: ${breakpoint.tablet}) {
    h1 { font-size: ${size.h2}; line-height: ${size.h2}; margin: 0; }
    h2 { font-size: ${size.h3}; line-height: ${size.h3}; margin: 0; }
    h3 { font-size: ${size.h4}; line-height: ${size.h4}; margin: 0; }
    h4 { font-size: ${size.h5}; line-height: ${size.h5}; margin: 0; }
}
`

const Wrapper = styled.section`
  width: 100vw;
  height: calc(443vw + 25vw);
`;

const Bg = styled.img`
  position: absolute;
  width: calc(100% + 60px);
  transform: translate3d(-40px, 30px, 0);
  filter: blur(10px);
`;
const Logo = styled.h1`
  margin: 20px 10px 30px;
  filter: blur(4px);
`;

export default () => (
  <div>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Kyoto.js 13</title>
      <meta name="theme-color" content="#ffffff"/>>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/10up-sanitize.css/5.0.0/sanitize.min.css"/>
      <style>
        {style}
      </style>
    </Helmet>

    <Wrapper>
        <Logo><img src="/static/13/logo.png"/></Logo>
        <Bg src="/static/13/bg3.jpg"/>
    </Wrapper>

  </div>
)
