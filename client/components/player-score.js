import React from 'react'
import {connect} from 'react-redux'

const PlayerScore = (props) => {
  const {player, score} = props
  return (
    <div className="player-score">
      <div className="score-name">{player.name}</div>
      <div className="score"> {score}</div>
    </div>
  )
}

const mapState = null
const mapDispatch = null

export default connect(mapState, mapDispatch)(PlayerScore)
