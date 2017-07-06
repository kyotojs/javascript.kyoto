import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import Helmet from 'react-helmet';

export default class MyDocument extends Document {
  render() {
    const sheet = new ServerStyleSheet()
    const main = sheet.collectStyles(<Main />)
    const styleTags = sheet.getStyleElement()

    const helmet = Helmet.renderStatic();

    return (
      <html>
        <Head>
          {/* ... */}

          {styleTags}

          {helmet.title.toComponent()}
          {helmet.meta.toComponent()}
          {helmet.link.toComponent()}
        </Head>

        <body>
          <div className="root">
            {main}
          </div>

          <NextScript />
        </body>
      </html>
    )
  }
}
