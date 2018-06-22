const NEW_RESPONSE = "NEW_RESPONSE"
const BAD_RESPONSE = "BAD_RESPONSE"

export const newResponse = (name) => ({type: NEW_RESPONSE, name})
export const badResponse = (name) => ({type: BAD_RESPONSE, name})


const defaultResponses = []

export default function(state = defaultResponses, action) {
  switch (action.type) {
    case NEW_RESPONSE:
      return [...state, action.name]
    case BAD_RESPONSE:
      return state.splice(0, 1)
    default:
      return state
  }
}
