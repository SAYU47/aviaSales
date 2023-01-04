import { GetInfoActionTypes } from '../actionsTypes'

interface Action {
  type: string
  name: string
}
export interface checkboxBox {
  name: string
  checked: boolean
}
export type CheckboxState = {
  checkboxes: checkboxBox[]
}
const initialState = {
  checkboxes: [
    { name: 'Все', checked: true },
    { name: 'Без пересадок', checked: true },
    { name: '1 пересадка', checked: true },
    { name: '2 пересадки', checked: true },
    { name: '3 пересадки', checked: true },
  ],
}
const all = (element: checkboxBox, index: number, array: checkboxBox[]) => {
  const newSign = array[0].checked
  const newElement = { ...element, checked: !newSign }

  return newElement
}

const allInChecked = (array: checkboxBox[]) => {
  const newArray = array.map((element, index) => {
    if (index === 0) {
      return { ...element, checked: !element.checked }
    }
    return element
  })
  return newArray
}

const toggleAddition = (array: checkboxBox[]) => {
  const countFilter = [...array].reduce((acc: number, item) => {
    return item.checked ? acc + 1 : acc
  }, 0)
  if (countFilter === 4 && !array[0].checked) return array.map(all)
  if (countFilter === 4) return allInChecked(array)
  return array
}
const transferReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case GetInfoActionTypes.TOGGLE: {
      const newCheckBoxes = state.checkboxes.map((element): checkboxBox => {
        if (element.name === action.name) {
          return { ...element, checked: !element.checked }
        }
        return element
      })

      return { ...state, checkboxes: toggleAddition(newCheckBoxes) }
    }
    case GetInfoActionTypes.ALL: {
      const newBoxes = state.checkboxes.map((element) => {
        const firstItem = state.checkboxes[0].checked
        return { ...element, checked: !firstItem }
      })
      return { ...state, checkboxes: newBoxes }
    }
    default:
      return state
  }
}
export default transferReducer
