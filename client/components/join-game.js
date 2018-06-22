import React from 'react'
import { connect } from 'react-redux'

import socket from '../socket'
import { joinGameRoom, newPlayer } from '../store';

const JoinGame = (props) => {
  const {joinGame, playerJoin, history} = props
  const handleSubmit = (evt) => {
    evt.preventDefault()
    let room = evt.target.room.value
    let name = evt.target.name.value
    socket.emit('join', room, name)
    playerJoin(name)
    joinGame(room)
    history.push('./buzzer')
  }
  return (
    <div className="create-game">
      <h1 className="buzz">Join A Game</h1>
      <form onSubmit={handleSubmit} className="row">
        <div className="col s12">
          <label className="">
            BuzzBuzz Code
          </label>
          <input className="name-input" name="room" type="text" />
        </div>
        <div className="col s12">
          <label className="">
            Player Name
          </label>
          <input className="name-input" name="name" type="text" />
        </div>
        <div className="col s3">
          <button className="btn brown lighten-1" type="submit">Join</button>
        </div>
      </form>
    </div>
  )
}

const mapState = state => {
  return {
    room: state.room
  }
}

const mapDispatch = (dispatch, ownProps) => {
  return {
    joinGame(room) {
      dispatch(joinGameRoom(room))
    },
    playerJoin(name) {
      dispatch(newPlayer(name))
    }
  }
}

export default connect(mapState, mapDispatch)(JoinGame)
