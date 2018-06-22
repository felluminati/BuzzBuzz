const ADD_NEW_PLAYER = "ADD_NEW_PLAYER"
const UPDATE_SCORE = "UPDATE_SCORE"

let id = 1;
export const addNewPlayer = (name) => ({type: ADD_NEW_PLAYER, player: {id: id++, name, score: 0}})
export const updateScore = (name, score) => ({type: UPDATE_SCORE, name, score})

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
    default:
      return state
  }
}
