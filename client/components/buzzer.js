import React from 'react'
import {connect} from 'react-redux'
import {deactivateBuzzer} from '../store'
import socket from '../socket'

const Buzzer = (props) => {
  const {currentPlayer, room, deactivate, buzzer, score} = props
  const handleClick = () => {
    deactivate()
    socket.emit('buzz', currentPlayer.name, room)
  }
  return (
    <div>
      <h3 className="buzz-name">{currentPlayer.name}</h3>
      <div
        onClick={() => {if(buzzer) handleClick()}}
        className="buzz-btn" />
      <h3 className="buzz-name">Score: {score}</h3>
    </div>
  )
}

const mapState = state => {
  return {
    currentPlayer: state.currentPlayer,
    room: state.room,
    buzzer: state.buzzer,
    score: state.currentPlayer.score
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
