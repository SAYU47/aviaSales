import { TicketTypes } from '../types'

export interface TicketsState {
  aviaArr: TicketTypes[]
  loading: boolean
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
export type GetCombinateTypes = GetInfoAction | GetInfoSuccessAction | GetInfoErrorAction | ID | ADD_ITEM
