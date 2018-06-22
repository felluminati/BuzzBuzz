import React from 'react'
import { connect } from 'react-redux';
import {PlayerIcon} from './'

const PlayerList = (props) => {
  let players = props.players
  return(
    players.length ?
    <div className="player-list">
      {players.map((player) => {
        return (
          <div key={player.id}><PlayerIcon player={player}/></div>
        )
      })}
    </div>
    :
    <div className="player-list">No Players</div>
  )
}

const mapState = null

const mapDispatch = null

export default connect(mapState, mapDispatch)(PlayerList)
