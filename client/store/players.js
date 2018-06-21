const ADD_NEW_PLAYER = "ADD_NEW_PLAYER"
let id = 1;
export const addNewPlayer = (name) => ({type: ADD_NEW_PLAYER, player: {id: id++, name, score: 0}})

const defaultPlayers = []

export default function(state = defaultPlayers, action) {
  switch (action.type) {
    case ADD_NEW_PLAYER:
      return [...state, action.player]
    default:
      return state
  }
}
