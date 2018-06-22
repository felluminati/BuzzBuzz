import React from 'react'
import {connect} from 'react-redux'
import {deactivateBuzzer} from '../store'
import socket from '../socket'

const Buzzer = (props) => {
  const {currentPlayer, room, deactivate, buzzer} = props
  const handleClick = () => {
    deactivate()
    socket.emit('buzz', currentPlayer, room)
  }
  return (
    <div>
      <h3 className="buzz-name">{currentPlayer}</h3>
      <div
        onClick={() => {if(buzzer) handleClick()}}
        className="buzz-btn" />
    </div>
  )
}

const mapState = state => {
  return {
    currentPlayer: state.currentPlayer,
    room: state.room,
    buzzer: state.buzzer
  }
}

const mapDisptach = dispatch => {
  return {
    deactivate() {
      dispatch(deactivateBuzzer())
    }
  }
}

export default connect(mapState, mapDisptach)(Buzzer)
