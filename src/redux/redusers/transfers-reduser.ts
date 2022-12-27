interface Action {
  type: string
  name: any
}
export interface Box {
  name: string
  checked: boolean
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
const all = (element: Box, index: number, array: Box[]) => {
  const newSign = array[0].checked
  const newElement = { ...element, checked: !newSign }

  return newElement
}

const allInChecked = (array: Box[]) => {
  const newArray = array.map((element, index) => {
    if (index === 0) {
      return { ...element, checked: !element.checked }
    }
    return element
  })
  return newArray
}

const toggleAddition = (array: Box[]) => {
  const countFilter = [...array].reduce((accum, item) => {
    if (item.checked) accum += 1
    return accum
  }, 0)
  if (countFilter === 4 && !array[0].checked) return array.map(all)
  if (countFilter === 4) return allInChecked(array)
  return array
}
const transferReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case 'TOGGLE': {
      const newCheckBoxes = state.checkboxes.map((element): Box => {
        if (element.name === action.name) {
          return { ...element, checked: !element.checked }
        }
        return element
      })

      return { ...state, checkboxes: toggleAddition(newCheckBoxes) }
    }
    case 'ALL': {
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
