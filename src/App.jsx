import PropTypes from 'prop-types'

function App({ name }) {
  return (
    <>
      <div>Hello {name}!</div>
    </>
  )
}

/**
 * @param {string} name
 * When name is not specified, it is assumed to be the defaultProps
 */
App.defaultProps = {
  name: 'react',
}

/**
 *  Define your own propTypes
 */
App.propTypes = {
  name: PropTypes.string,
}

export default App
