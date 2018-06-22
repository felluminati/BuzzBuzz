import React from 'react'
import {PlayerScore} from './'
import {connect} from 'react-redux'

const Scoreboard = (props) => {
  const {players} = props
  const sortedPlayers = players.sort((a, b) => b.score - a.score)
  return (
    <div className="scoreboard">
      <div className="score-title">Scores</div>
      {sortedPlayers.map(player => {
        return <PlayerScore key={player.id} score={player.score} player={player} />
      })}
    </div>
  )
}

const mapState = null
const mapDispatch = null

export default connect(mapState, mapDispatch)(Scoreboard)
