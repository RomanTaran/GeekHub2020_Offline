import * as types from '../constants/ActionTypes'
import superagent from "superagent"

export const getUsers = () => {
  return dispatch => {
    return superagent
      .get(`https://randomuser.me/api/?results=10`)
      .end((err, res) => {
        if (err) {
          dispatch({type: types.GET_USERS, data: []})
        } else {
          dispatch({type: types.GET_USERS, data: JSON.parse(res.text)})
        }
      })
  }
}
