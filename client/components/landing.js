import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'

const Landing = ({handleClick, isLoggedIn}) => (
  <div>
    <h1 className="buzz">Welcome to BuzzBuzz</h1>
    <div className="landing-btn">
      <Link className="landing-link" to="/createGame">Create Game</Link>
      <Link className="landing-link" to="/joinGame">Join Game</Link>
    </div>
  </div>
)

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Landing)

/**
 * PROP TYPES
 */
Landing.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}