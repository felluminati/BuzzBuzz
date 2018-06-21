import React from 'react'
import { connect } from 'react-redux';

class GameView extends React.Component {
  render(){
    let room = 'Dev5000'
    return (
      <div className="game-view">
        <div className="top-bar">
          <h3>{room.slice(0, -4)}</h3>
          <div>Code: {room}</div>
        </div>
        <div className="game-main">
          <div>Players</div>
          <div>Scores</div>
        </div>
      </div>
    )
  }


}

const mapState = state => {
  return {
    room: state.room
  }
}

const mapDispatch = null;

export default connect(mapState, mapDispatch)(GameView)
