/* eslint-disable react/jsx-props-no-spreading */
import nProgress from 'nprogress'
import Router from 'next/router'

import { ApolloProvider } from '@apollo/client'
import PropTypes from 'prop-types'
import Page from '../components/Page'
import '../components/styles/nprogress.css'
import withData from '../lib/withData'

Router.events.on('routeChangeStart', () => nProgress.start())
Router.events.on('routeChangeComplete', () => nProgress.done())
Router.events.on('routeChangeError', () => nProgress.done())

function App({ Component, pageProps, apollo }) {
  return (
    <ApolloProvider client={apollo}>
      <Page>
        <Component {...pageProps} />
      </Page>
    </ApolloProvider>
  )
}

// Apollo boiler plate to handle pageProps
App.getInitialProps = async function ({ Component, ctx }) {
  let pageProps = {}
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx)
  }
  pageProps.query = ctx.query
  return pageProps
}

App.propTypes = {
  Component: PropTypes.func,
  pageProps: PropTypes.any,
  apollo: PropTypes.object,
}

export default withData(App)
