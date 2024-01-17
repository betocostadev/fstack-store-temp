import PropTypes from 'prop-types'

export default function Page({ children }) {
  return <div>{children}</div>
}

Page.propTypes = {
  // children: PropTypes.oneOf([
  //   PropTypes.arrayOf(PropTypes.node),
  //   PropTypes.node,
  // ]),
  children: PropTypes.node || PropTypes.arrayOf(PropTypes.node),
}
