import React from 'react'
import { connect } from 'react-redux'

const handleSubmit = (evt) => {
  evt.preventDefault()
  console.log(evt.target.name.value)
}

const CreateGame = () => {
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
          <button className="btn brown lighten-1" type="submit">Create</button>
        </div>
      </form>
    </div>
  )
}

const mapState = null

const mapDispatch = null

export default connect(mapState, mapDispatch)(CreateGame)
