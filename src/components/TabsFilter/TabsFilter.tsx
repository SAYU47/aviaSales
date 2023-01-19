import React, { ChangeEventHandler } from 'react'
import { connect } from 'react-redux'
import uniqid from 'uniqid'

import { cheapestTickets as LoadCheapTicket } from '../../store/action'
import { State } from '../../types/state-types'

import styles from './TabsFilter.module.scss'

type Properties = {
  state: State
  cheapestTickets: ChangeEventHandler<HTMLElement>
}
const TabsFilter: React.FC<Properties> = ({ state, cheapestTickets }) => {
  const { tabs } = state.tabsReduser
  const filtersMap = tabs.map((filter) => {
    const labelClasses = [styles.filters__label]
    if (filter.checked) labelClasses.push(styles.active)

    return (
      <label className={labelClasses.join(' ')} key={uniqid()}>
        <input
          onChange={cheapestTickets}
          type="radio"
          value={filter.name}
          className={styles.filters__input}
          checked={filter.checked}
        />
        <span className={styles.filters__description}>{filter.name}</span>
      </label>
    )
  })

  return <div className={styles.wrapper}>{filtersMap}</div>
}
const mapStatetoProps = (state: State) => {
  return { state }
}
const mapDispatchToProperties = {
  cheapestTickets: LoadCheapTicket,
}
export default connect(mapStatetoProps, mapDispatchToProperties)(TabsFilter)
