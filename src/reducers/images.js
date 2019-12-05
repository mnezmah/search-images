import { GET_IMAGES } from '../actions/images'

const initialState = []

export default (state = initialState, action = []) => {
  switch (action.type) {
    case GET_IMAGES:
      return action.payload
      default: return state
  } 
}