import { combineReducers } from 'redux'

import transferReducer from './redusers/transfers-reduser'

const rootReduser = combineReducers({
  checkbox: transferReducer,
})
export default rootReduser
