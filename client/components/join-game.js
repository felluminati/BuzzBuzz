import React from 'react'
import { connect } from 'react-redux'

import socket from '../socket'
import { joinGameRoom } from '../store';

const JoinGame = (props) => {
  const {joinGameRoom, history} = props
  const handleSubmit = (evt) => {
    evt.preventDefault()
    let room = evt.target.room.value
    let name = evt.target.name.value
    socket.emit('join', room, name)
    joinGameRoom(room)
    // history.push('./landing')
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
          <button className="btn brown lighten-1" type="submit">Create</button>
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
    joinGameRoom(room) {
      dispatch(joinGameRoom(room))
    }
  }
}

export default connect(mapState, mapDispatch)(JoinGame)
