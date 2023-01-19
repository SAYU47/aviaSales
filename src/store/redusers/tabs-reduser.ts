import { GetInfoActionTypes } from 'actions-types'

export interface TabsAction {
  type: string
  name: string
}
export interface tabs {
  name: string
  checked: boolean
}
export type TabsState = {
  tabs: tabs[]
}

const initialState = {
  tabs: [
    { name: 'САМЫЙ ДЕШЁВЫЙ', checked: true },
    { name: 'САМЫЙ БЫСТРЫЙ', checked: false },
  ],
}
const tabsReduser = (state = initialState, action: TabsAction) => {
  switch (action.type) {
    case GetInfoActionTypes.TOGGLE_FILTER: {
      const newFilter = state.tabs.map((element): tabs => {
        return { ...element, checked: !element.checked }
      })
      return { ...state, tabs: newFilter }
    }

    default:
      return state
  }
}
export default tabsReduser
