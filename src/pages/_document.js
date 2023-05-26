import { Html, Head, Main, NextScript } from 'next/document'
import ScrollProvider from './scrollContext'

export default function Document() {
  return (
    <ScrollProvider>
    <Html lang="en">
      <title>NCulic</title>
      <Head/>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
    </ScrollProvider>
  )
}
