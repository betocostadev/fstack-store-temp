/* eslint-disable react/jsx-props-no-spreading */
import PropTypes from 'prop-types'
import Page from '../components/Page'

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
