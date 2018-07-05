const NEW_PLAYER = "NEW_PLAYER"
const UPDATE_PLAYER_SCORE = "UPDATE_PLAYER_SCORE"


export const newPlayer = (name) => ({type: NEW_PLAYER, player:{name, score: 0}})
export const updatePlayerScore = (name, score) => ({type: UPDATE_PLAYER_SCORE, name, score})

const defaultPlayer = {}

export default function(state = defaultPlayer, action) {
  switch (action.type) {
    case NEW_PLAYER:
      return action.player
    case UPDATE_PLAYER_SCORE:
        if (action.name === state.name){
          return {...state, score: state.score + action.score}
        }
        return {...state}
    default:
      return state
  }
}
