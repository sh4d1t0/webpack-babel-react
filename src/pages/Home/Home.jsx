import PropTypes from 'prop-types'
import reactLogo from '../../assets/react.svg'

const Home = ({ name }) => {
  return (
    <>
      <h1>Home</h1>
      <a href="https://es.reactjs.org" target="_blank" rel="noreferrer">
        <img src={reactLogo} className="logo react" alt="React Logo" />
      </a>
      <h2>Hello {name}!</h2>
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
