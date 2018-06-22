import React from 'react'
import { connect } from 'react-redux';

const PlayerIcon = (props) => {
  let player = props.player
  let selected = props.player.name === props.responses[0]
  return (
    selected ?
      <div className="player-icon-selected">
        <div>{player.name}</div>
      </div> :
      <div className="player-icon">
        <div>{player.name}</div>
      </div>
  )
}

const mapState = state => {
  return {
    responses: state.responses,
  }
}

const mapDispatch = null

export default connect(mapState, mapDispatch)(PlayerIcon)
