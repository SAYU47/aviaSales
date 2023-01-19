import { TicketTypes } from './state-types'

export interface TicketsState {
  aviaArr: TicketTypes[]
  error: null | boolean
  stop: boolean
  id: string
  itemToShow: number
}
// eslint-disable-next-line no-shadow
export enum GetInfoActionTypes {
  TOGGLE = 'TOGGLE',
  ALL = 'ALL',
  GETINFO_LOAD = 'GETINFO_LOAD',
  GETINFO_SUCCESS = 'GETINFO_SUCCESS',
  GETINFO_ERROR = 'GETINFO_ERROR',
  ID = 'ID',
  ADD_ITEM = 'ADD_ITEM',
  CHEAPEST_FILTER = 'CHEAPEST_FILTER',
  TOGGLE_FILTER = 'TOGGLE_FILTER',
}
interface CheckboxAll {
  type: GetInfoActionTypes.ALL
}
interface CheckboxToggle {
  type: GetInfoActionTypes.TOGGLE
  name: React.ChangeEvent<HTMLInputElement>
}
interface GetInfoAction {
  type: GetInfoActionTypes.GETINFO_LOAD
  stop: boolean
}

interface GetInfoSuccessAction {
  type: GetInfoActionTypes.GETINFO_SUCCESS
  payload: TicketTypes[]
  stop: boolean
}
interface GetInfoErrorAction {
  type: GetInfoActionTypes.GETINFO_ERROR
  payload: unknown
}
interface ID {
  type: GetInfoActionTypes.ID
  payload: string
}
interface ADD_ITEM {
  type: GetInfoActionTypes.ADD_ITEM
  payload: number
}
interface TOGGLE_FILTER {
  name: string
  aviaArr?: TicketTypes[]
  type: GetInfoActionTypes.TOGGLE_FILTER
  payload: React.ChangeEvent<HTMLInputElement>
}
export type GetCombinateTypes =
  | GetInfoAction
  | GetInfoSuccessAction
  | GetInfoErrorAction
  | ID
  | ADD_ITEM
  | TOGGLE_FILTER
  | CheckboxToggle
  | CheckboxAll
export { TicketTypes }
