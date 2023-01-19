import { combineReducers } from 'redux'

import tabsReduser from './redusers/tabs-reduser'
import ticketsReduser from './redusers/tickets-reduser'
import transferReducer from './redusers/transfers-reduser'

export const rootReduser = combineReducers({
  transferReducer,
  ticketsReduser,
  tabsReduser,
})
export type RootState = ReturnType<typeof rootReduser>
