import { combineReducers } from 'redux'

import ticketsReduser from './redusers/tickets-reduser'
import transferReducer from './redusers/transfers-reduser'

export const rootReduser = combineReducers({
  transferReducer,
  ticketsReduser,
})
export type RootState = ReturnType<typeof rootReduser>
