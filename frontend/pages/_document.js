import Document, { Head, Html, NextScript, Main } from 'next/document'

export default class Doc extends Document {
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
