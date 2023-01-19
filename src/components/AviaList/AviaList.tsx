/* eslint-disable consistent-return */
import React, { FC, useEffect } from 'react'
import { connect } from 'react-redux'
import uniqid from 'uniqid'
import { Button } from 'antd'

import AviaCard from '@components/AviaCard/AviaCard'
import { RootState } from '@store/root-reduser'
import { getId as session, getAviaInfo as loadCards, showMoreTickets as showTicket } from '@store/action'
import { TicketTypes } from 'state-types'
import { checkboxBox } from '@store/redusers/transfers-reduser'
import EmptySearchMessage from '@components/Alerts/EmptySearchMessage'

import styles from './AviaList.module.scss'

type AviaListType = {
  state: RootState
  getId: () => void
  getAviaInfo: (id: string) => void
  showMoreTickets: () => void
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const AviaList: FC<AviaListType> = ({ state, getId, getAviaInfo, showMoreTickets }): any => {
  const sessionId = state.ticketsReduser.id
  const showItemLength = state.ticketsReduser.itemToShow
  const tickets = state.ticketsReduser.aviaArr
  const errors = state.ticketsReduser.error

  useEffect(() => {
    getId()
  }, [])
  useEffect(() => {
    if (!state.ticketsReduser.stop && sessionId) {
      getAviaInfo(sessionId)
    }
  })

  const transferCountChecked = state.transferReducer.checkboxes.filter((box: checkboxBox) => box.checked)

  let checkboxSign: number | number[]
  if (transferCountChecked.length === 5) checkboxSign = -1
  else if (transferCountChecked.length && transferCountChecked[0].name === 'Без пересадок') checkboxSign = 0
  else checkboxSign = transferCountChecked.map((box) => (Number.isInteger(+box.name[0]) ? +box.name[0] : 2000))

  let ticketList
  if (tickets.length > 1) {
    const listCounted = tickets.filter((ticket: TicketTypes) => {
      return ticket.segments.every((flight) => {
        if (!checkboxSign && !flight.stops.length) return true
        if (checkboxSign === -1) return true
        if (Array.isArray(checkboxSign) && checkboxSign.some((el) => el === flight.stops.length)) return true
        return false
      })
    })
    ticketList = listCounted.slice(0, showItemLength).map((ticket) => {
      return (
        <li key={uniqid()}>
          <AviaCard price={ticket.price} segments={ticket.segments} carrier={ticket.carrier} />
        </li>
      )
    })
    const buttonShowMore =
      // eslint-disable-next-line multiline-ternary
      !ticketList.length && !errors ? null : (
        <Button type="primary" className={styles.button} onClick={showMoreTickets}>
          Показать ещё 5 билетов
        </Button>
      )
    const EmptyMessage = !ticketList.length && !errors ? <EmptySearchMessage /> : null

    return (
      <>
        <ul className={styles.wrapper}>
          {ticketList}
          {EmptyMessage}
          {buttonShowMore}
        </ul>
      </>
    )
  }
}
const mapStateToProps = (state: RootState) => {
  return {
    state,
  }
}

const mapDispatchToProps = {
  getId: session,
  getAviaInfo: loadCards,
  showMoreTickets: showTicket,
}

export default connect(mapStateToProps, mapDispatchToProps)(AviaList)
