import axios from 'axios'
import { Dispatch } from 'redux'

import { GetCombinateTypes, GetInfoActionTypes } from './actions-types'

export const toggle = (event: React.ChangeEvent<HTMLInputElement>) => ({
  type: GetInfoActionTypes.TOGGLE,
  name: event.target.value,
})

export const toggleAll = () => ({
  type: GetInfoActionTypes.ALL,
})

export const getId = () => {
  return async (dispatch: Dispatch<GetCombinateTypes>) => {
    await axios
      .get('https://aviasales-test-api.kata.academy/search')
      .then((id) => dispatch({ type: GetInfoActionTypes.ID, payload: id.data.searchId }))
  }
}
export const getAviaInfo = (id: string) => {
  return async (dispatch: Dispatch<GetCombinateTypes>) => {
    try {
      const response = await axios.get(`https://aviasales-test-api.kata.academy/tickets?searchId=${id}`)
      dispatch({ type: GetInfoActionTypes.GETINFO_SUCCESS, payload: response.data.tickets, stop: response.data.stop })
    } catch (err) {
      dispatch({ type: GetInfoActionTypes.GETINFO_ERROR, payload: err })
    }
  }
}
export const showMoreTickets = () => ({
  type: GetInfoActionTypes.ADD_ITEM,
})
export const cheapestTickets = (event: React.ChangeEvent<HTMLInputElement>) => ({
  type: GetInfoActionTypes.TOGGLE_FILTER,
  name: event.target.value,
})
