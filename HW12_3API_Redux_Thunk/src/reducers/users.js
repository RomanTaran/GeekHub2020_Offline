import { GET_USERS } from '../constants/ActionTypes'

export default function users(state = [], action) {
  switch (action.type) {

    case GET_USERS:
      return [...action.data.results]

    default:
      return state
  }
}
