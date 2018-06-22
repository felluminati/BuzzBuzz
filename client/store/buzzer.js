const DEACTIVATE_BUZZER = "DEACTIVATE_BUZZER"
const ACTIVATE_BUZZER = "ACTIVATE_BUZZER"

export const activateBuzzer = () => ({type: ACTIVATE_BUZZER})
export const deactivateBuzzer = () => ({type: DEACTIVATE_BUZZER})


const defaultBuzzer = false

export default function(state = defaultBuzzer, action) {
  switch (action.type) {
    case ACTIVATE_BUZZER:
      return true
    case DEACTIVATE_BUZZER:
      return false
    default:
      return state
  }
}
