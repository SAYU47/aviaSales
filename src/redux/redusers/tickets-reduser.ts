import { TicketsState, GetInfoActionTypes, GetCombinateTypes } from '../actionsTypes'

const initialState: TicketsState = {
  aviaArr: [],
  loading: false,
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
      const cheapestLoad = [...state.aviaArr, ...action.payload]
      return {
        ...state,
        aviaArr: cheapestLoad,
        stop: action.stop,
        loading: false,
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
    default:
      return state
  }
}
export default ticketsReduser
