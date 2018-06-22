const NEW_PLAYER = "NEW_PLAYER"

export const newPlayer = (name) => ({type: NEW_PLAYER, name})

const defaultPlayer = {}

export default function(state = defaultPlayer, action) {
  switch (action.type) {
    case NEW_PLAYER:
      return action.name
    default:
      return state
  }
}
