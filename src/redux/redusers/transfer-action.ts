export const toggle = (event:  React.ChangeEvent<HTMLInputElement>) => ({
  type: 'TOGGLE',
  name: event.target.value,
})

export const toggleAll = () => ({
  type: 'ALL',
})
