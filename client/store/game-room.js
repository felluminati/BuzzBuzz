const CREATE_GAME_ROOM = "CREATE_GAME_ROOM"
const JOIN_GAME_ROOM = "JOIN_GAME_ROOM"

export const createGameRoom = (room) => ({type: CREATE_GAME_ROOM, room})
export const joinGameRoom = (room) => ({type: JOIN_GAME_ROOM, room})

const defaultRoom = {}

export default function(state = defaultRoom, action) {
  switch (action.type) {
    case CREATE_GAME_ROOM:
      return action.room
    case JOIN_GAME_ROOM:
      return action.room
    default:
      return state
  }
}
