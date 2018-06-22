const NEW_PLAYER = "NEW_PLAYER"
const DEACTIVATE_BUZZER = "DEACTIVATE_BUZZER"

export const newPlayer = (name) => ({type: NEW_PLAYER, player: {name, activeBuzz: true}})
export const deactivateBuzzer = (name) => ({type: DEACTIVATE_BUZZER, player: {name, activeBuzz: false}})

const defaultPlayer = {}

export default function(state = defaultPlayer, action) {
  switch (action.type) {
    case NEW_PLAYER:
      return action.player
    case DEACTIVATE_BUZZER:
      return action.player
    default:
      return state
  }
}
