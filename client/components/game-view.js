import React from 'react'
import { connect } from 'react-redux';
import { PlayerList, AdminPanel, Scoreboard } from './'

const GameView = (props) =>{

    let {room, players} = props
    return (
      <div className="game-view">
        <div className="top-bar">
          <div className="game-title">{room.slice(0, -4)}</div>
          <div>Code: {room}</div>
        </div>
        <div className="game-main">
          <PlayerList players={players}/>
          <Scoreboard players={players}/>
        </div>
        <div>
          <AdminPanel />
        </div>
      </div>
    )
}

const mapState = state => {
  return {
    room: state.room,
    players: state.players
  }
}

const mapDispatch = null;

export default connect(mapState, mapDispatch)(GameView)
