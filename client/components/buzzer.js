import React from 'react'
import {connect} from 'react-redux'
import {deactivateBuzzer} from '../store'
import socket from '../socket'

const Buzzer = (props) => {
  const {currentPlayer, room, deactivate, buzzActive} = props
  const handleClick = () => {
    deactivate(currentPlayer.name)
    socket.emit('buzz', currentPlayer.name, room)
  }
  return (
    <div>
      <div
        onClick={() => {if(buzzActive) handleClick()}}
        className="buzz-btn" />
    </div>
  )
}

const mapState = state => {
  return {
    currentPlayer: state.currentPlayer,
    room: state.room,
    buzzActive: state.currentPlayer.activeBuzz
  }
}

const mapDisptach = dispatch => {
  return {
    deactivate(name) {
      dispatch(deactivateBuzzer(name))
    }
  }
}

export default connect(mapState, mapDisptach)(Buzzer)
