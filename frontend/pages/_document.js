/* eslint-disable react/jsx-props-no-spreading */
import Document, { Head, Html, NextScript, Main } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class Doc extends Document {
  // static getInitialProps is only a fix for Styled Components when using SSR
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet()
    const page = renderPage(
      (App) => (props) => sheet.collectStyles(<App {...props} />)
    )
    const styleTags = sheet.getStyleElement()

    return { ...page, styleTags }
  }

  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
