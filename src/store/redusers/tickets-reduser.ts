import { TicketTypes } from '../../types/state-types'
import { TicketsState, GetInfoActionTypes, GetCombinateTypes } from '../../types/actions-types'

const initialState: TicketsState = {
  aviaArr: [],
  error: null,
  stop: false,
  id: '',
  itemToShow: 5,
}
const ticketsReduser = (state = initialState, action: GetCombinateTypes): TicketsState => {
  switch (action.type) {
    case GetInfoActionTypes.ID:
      return { ...state, id: action.payload }
    case GetInfoActionTypes.GETINFO_LOAD:
      return {
        ...state,
        stop: action.stop,
      }
    case GetInfoActionTypes.GETINFO_SUCCESS: {
      const Load = [...state.aviaArr, ...action.payload].sort((a, b) => a.price - b.price)
      return {
        ...state,
        aviaArr: Load,
        stop: action.stop,
        error: false,
      }
    }
    case GetInfoActionTypes.GETINFO_ERROR: {
      return {
        ...state,
        error: true,
      }
    }
    case GetInfoActionTypes.ADD_ITEM: {
      return {
        ...state,
        itemToShow: state.itemToShow + 5,
      }
    }
    case GetInfoActionTypes.TOGGLE_FILTER: {
      let sortedList: TicketTypes[] = []
      const cheepestList = [...state.aviaArr].sort((a, b) => a.price - b.price)
      const fastestList = [...state.aviaArr].sort((a, b) => {
        return a.segments[0].duration + a.segments[1].duration - (b.segments[0].duration + b.segments[1].duration)
      })
      if (action.name === 'САМЫЙ БЫСТРЫЙ') sortedList = fastestList
      if (action.name === 'САМЫЙ ДЕШЁВЫЙ') sortedList = cheepestList
      return { ...state, aviaArr: sortedList }
    }
    default:
      return state
  }
}
export default ticketsReduser
