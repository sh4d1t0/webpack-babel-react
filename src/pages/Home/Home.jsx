import PropTypes from 'prop-types'

const Home = ({ name }) => {
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
Home.defaultProps = {
  name: 'Home',
}

/**
 *  Define your own propTypes
 */
Home.propTypes = {
  name: PropTypes.string,
}

export default Home
