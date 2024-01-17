import PropTypes from 'prop-types'
import Header from './Header'

export default function Page({ children }) {
  return (
    <div>
      <Header />
      {children}
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
