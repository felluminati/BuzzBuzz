import React from 'react'
import { connect } from 'react-redux';

const PlayerIcon = (props) => {
  let player = props.player
  return(
    <div className="player-icon">
      <div>{player.name}</div>
    </div>
  )
}

const mapState = state => {
  return {
    players: state.players
  }
}

const mapDispatch = null

export default connect(mapState, mapDispatch)(PlayerIcon)
