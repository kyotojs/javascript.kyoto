import styled from 'styled-components';
import { color, font, breakpoint, size } from '../components/styles'
import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'
import {Helmet} from "react-helmet";

const style = `
body {
    font-family : ${font.regular};
    color       : ${color.black};
    background  : ${color.white};
    margin      : 0;
    padding     : 0;
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

export default () => (
  <div>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Kyoto.js - JavaScript Community in Kyoto</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <meta name="twitter:card" content="summary"/>
      <meta name="twitter:site" content="@kyoto_js"/>
      <meta property="og:title" content="Kyoto.js - JavaScript Community in Kyoto"/>
      <meta property="og:type" content="website"/>
      <meta property="og:url" content="http://javascript.kyoto/"/>
      <meta property="og:image" content="http://javascript.kyoto//static/logo960.png"/>
      <meta property="og:description" content="Kyoto.js is a JavaScript Community in Kyoto. We hold meetups a few times a year, and are always talking about JavaScript and frontend technologies on Slack!"/>>
      <link rel="apple-touch-icon" sizes="180x180" href="/static/icons/180.png"/>>
      <link rel="apple-touch-icon-precomposed" href="/static/icons/180.png"/>>
      <link rel="shortcut icon" href="/static/icons/192.png"/>>
      <link rel="icon" sizes="192x192" href="/static/icons/192.png"/>>
      <link rel="icon" type="image/png" href="/static/icons/192.png" sizes="192x192"/>>
      <meta name="theme-color" content="#ffffff"/>>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/10up-sanitize.css/5.0.0/sanitize.min.css"/>
      <style>
        {style}
      </style>
    </Helmet>

    <Header/>
    <Main/>
    <Footer/>
  </div>
)
