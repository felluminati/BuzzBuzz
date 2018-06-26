const NEW_RESPONSE = "NEW_RESPONSE"
const NEXT_RESPONSE = "NEXT_RESPONSE"
const CLEAR_RESPONSES = "CLEAR_RESPONSES"

export const newResponse = (name) => ({type: NEW_RESPONSE, name})
export const nextResponse = () => ({type: NEXT_RESPONSE})
export const clearResponses = () => ({type: CLEAR_RESPONSES})


const defaultResponses = []

export default function(state = defaultResponses, action) {
  switch (action.type) {
    case NEW_RESPONSE:
      return [...state, action.name]
    case NEXT_RESPONSE:
      return [...state].splice(1)
    case CLEAR_RESPONSES:
      return []
    default:
      return state
  }
}
