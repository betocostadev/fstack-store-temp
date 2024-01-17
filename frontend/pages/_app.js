/* eslint-disable react/jsx-props-no-spreading */
import nProgress from 'nprogress'
import Router from 'next/router'

import PropTypes from 'prop-types'
import Page from '../components/Page'
import '../components/styles/nprogress.css'

Router.events.on('routeChangeStart', () => nProgress.start())
Router.events.on('routeChangeComplete', () => nProgress.done())
Router.events.on('routeChangeError', () => nProgress.done())

export default function App({ Component, pageProps }) {
  return (
    <Page>
      <Component {...pageProps} />
    </Page>
  )
}

App.propTypes = {
  Component: PropTypes.func,
  pageProps: PropTypes.any,
}
