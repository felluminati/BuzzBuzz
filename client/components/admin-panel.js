import React from 'react'
import { connect } from 'react-redux';
import socket from '../socket'
import { clearResponses, badResponse } from '../store';


class AdminPanel extends React.Component {
  constructor() {
    super()
    this.state = {
      activated: false,
      pts: 0,
    }
  }

  handleSubmit = (evt) => {
    evt.preventDefault()
    socket.emit('activate', this.props.room)
    this.setState({ activated: true, pts: evt.target.points.value})
  }

  handleCorrect = () => {
    this.props.clear()
    console.log(this.state.pts)
    this.setState({ activated: false })
  }

  handleIncorrect = () => {
    this.props.wrongResponse()
    if(this.props.responses.length === 1) this.setState({ activated: false })
  }

  render() {
    return (
      <div>
        {this.state.activated
          ? <div>
            <button onClick={this.handleCorrect} className="btn brown lighten-1" type="button">Correct Answer</button>
            <button onClick={this.handleIncorrect} className="btn brown lighten-1" type="button">Incorrect Answer</button>
          </div>
          : <div>
            <form onSubmit={this.handleSubmit}>
              <div>
                <label>Points</label>
                <input name="points" type="number" step="100" min="0" />
              </div>
              <div className="">
                <button className="btn brown lighten-1" type="submit">Activate</button>
              </div>
            </form>
          </div>}
      </div>
    )
  }
}

const mapState = state => {
  return {
    room: state.room,
    responses: state.responses
  }
}
const mapDispatch = dispatch => {
  return {
    clear(){
      dispatch(clearResponses())
    },
    wrongResponse() {
      dispatch(badResponse())
    }
  }
}

export default connect(mapState, mapDispatch)(AdminPanel)
