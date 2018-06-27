const ADD_NEW_PLAYER = "ADD_NEW_PLAYER"
const UPDATE_SCORE = "UPDATE_SCORE"
const REMOVE_PLAYER = "REMOVE_PLAYER"


export const addNewPlayer = (name, id) => ({type: ADD_NEW_PLAYER, player: {id, name, score: 0}})
export const updateScore = (name, score) => ({type: UPDATE_SCORE, name, score})
export const removePlayer = (id) => ({type: REMOVE_PLAYER, id})

const defaultPlayers = []

export default function(state = defaultPlayers, action) {
  switch (action.type) {
    case ADD_NEW_PLAYER:
      return [...state, action.player]
    case UPDATE_SCORE:
      return state.map(player => {
        if (action.name === player.name){
          player.score += action.score
        }
        return player
      })
    case REMOVE_PLAYER:
      return state.filter(player => player.id !== action.id)
    default:
      return state
  }
}
