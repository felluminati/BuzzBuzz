import React from 'react'
import { connect } from 'react-redux'

import socket from '../socket'
import { createGameRoom } from '../store';

const CreateGame = (props) => {
  const {createGameRoom, history, room} = props
  const handleSubmit = (evt) => {
    evt.preventDefault()
    let name = evt.target.name.value
    createGameRoom(name)
    history.push('./gameView')
  }
  return (
    <div className="create-game">
      <h1 className="buzz">Let's Create A New Game</h1>
      <form onSubmit={handleSubmit} className="row create-form">
        <div className="col s8">
          <label className="">
            Name
          </label>
          <input className="name-input" name="name" type="text" />
        </div>
        <div className="col s3">
          <button className="landing-link" type="submit">Create</button>
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
    createGameRoom(name) {
      name += Date.now().toString().slice(8, 12)
      socket.emit('create', name)
      dispatch(createGameRoom(name))
    }
  }
}

export default connect(mapState, mapDispatch)(CreateGame)
