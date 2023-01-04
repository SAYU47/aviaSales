import React, { FC, useEffect } from 'react'
import { connect, useDispatch } from 'react-redux'
import uniqid from 'uniqid'
import { Button } from 'antd'

import { RootState } from '../../redux/rootReduser'
import { getId as session, getAviaInfo as loadCards, showMoreTickets as showTicket } from '../../redux/redusers/action'
import AviaCard from '../AviaCard/AviaCard'
import Loader from '../../servises/loaders/loader'

import styles from './AviaList.module.scss'

type Properties = {
  state: RootState
  getId: () => void
  getAviaInfo: (id: string) => void
  showMoreTickets: () => void
}
const AviaList: FC<Properties> = ({ state, getId, getAviaInfo, showMoreTickets }) => {
  const ids = state.ticketsReduser.id
  const showItemLength = state.ticketsReduser.itemToShow
  const tickets = state.ticketsReduser.aviaArr
  const errors = state.ticketsReduser.error

  useEffect(() => {
    getId()
  }, [])
  useEffect(() => {
    if (!state.ticketsReduser.stop && ids) {
      getAviaInfo(ids)
    }
  })
  const showMore = showItemLength + 5
  const showCurrTickets = [...tickets].slice(0, showItemLength)

  const buttonShowMore =
    // eslint-disable-next-line multiline-ternary
    tickets.length === 0 && !errors ? null : (
      <Button type="primary" className={styles.button} onClick={showMoreTickets}>
        Показать ещё 5 билетов
      </Button>
    )

  const itemList = showCurrTickets.map((el) => {
    return (
      <li key={uniqid()}>
        <AviaCard price={el.price} segments={el.segments} carrier={el.carrier} />
      </li>
    )
  })
  const loader = tickets.length === 0 && !errors ? <Loader /> : null
  return (
    <>
      <ul className={styles.wrapper}>
        {itemList}
        {loader}
        {buttonShowMore}
      </ul>
    </>
  )
}
const mapStateToProperties = (state: RootState) => {
  return {
    state,
  }
}

const mapDispatchToProperties = {
  getId: session,
  getAviaInfo: loadCards,
  showMoreTickets: showTicket,
}

export default connect(mapStateToProperties, mapDispatchToProperties)(AviaList)
