import PropTypes from 'prop-types'
import styled, { createGlobalStyle } from 'styled-components'
import Header from './Header'

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'radnika_next';
    src: url('/static/radnikanext-medium-webfont.woff2');
    format: 'woff2';
    font-weight: normal;
    font-style: normal;
  }
  html {
    --red: #ff0000;
    --deepPurple100: #d1c4e9;
    --deepPurple700: #512da8;
    --black: #393939;
    --grey: #3A3A3A;
    --gray: var(--grey);
    --lightGrey: #e1e1e1;
    --lightGray: var(--lightGrey);
    --offWhite: #ededed;
    --whitePurple: #ede7f6;
    --maxWidth: 1200px;
    --bs: 0 12px 24px 0 rgba(0,0,0,0.09);
    box-sizing: border-box;
  }
  *, *::before, *::after {
    box-sizing: inherit;
  }
  body {
    font-family: 'radnika_next', --apple-system, 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2;
  }
  a {
    text-decoration: none;
    color: var(--black);
    :hover {
      text-decoration: underline;
    }
  }
  button {
    font-family: 'radnika_next', --apple-system, 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }
`

const InnerStyles = styled.div`
  max-width: var(--maxWidth);
  margin: 0 auto;
  padding: 2rem;
`

export default function Page({ children }) {
  return (
    <div>
      <GlobalStyles />
      <Header />
      <InnerStyles>{children}</InnerStyles>
    </div>
  )
}

Page.propTypes = {
  // children: PropTypes.oneOf([
  //   PropTypes.arrayOf(PropTypes.node),
  //   PropTypes.node,
  // ]),
  children: PropTypes.node || PropTypes.arrayOf(PropTypes.node),
}
