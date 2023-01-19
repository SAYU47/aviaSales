import React, { ChangeEventHandler } from 'react'
import { connect } from 'react-redux'
import uniqid from 'uniqid'

import { checkboxBox } from '../../store/redusers/transfers-reduser'
import * as actions from '../../store/action'
import { State } from '../../types/state-types'

import styles from './TransferFilter.module.scss'

type Properties = {
  state: State
  toggle: ChangeEventHandler<HTMLElement>
  toggleAll: ChangeEventHandler<HTMLElement>
}

const TransferFilter: React.FC<Properties> = ({ state, toggle, toggleAll }) => {
  const { checkboxes } = state.transferReducer
  const renderCheckbox = checkboxes.map((element: checkboxBox, index: number) => {
    return (
      <div className={styles.checkbox_content} key={uniqid()}>
        <label className={styles['transfer-count__label']}>
          <input
            type="checkbox"
            checked={element.checked}
            value={element.name}
            className={styles['transfer-count__checkbox']}
            onChange={index === 0 ? toggleAll : toggle}
          />
          <span>{element.name}</span>
        </label>
      </div>
    )
  })
  return (
    <div className={styles.sidebar}>
      <h2>Колличество пересадок</h2>
      <div className={styles.checkboxes_wrapper}>{renderCheckbox}</div>
    </div>
  )
}
const mapStateToProps = (state: State) => {
  return {
    state,
  }
}

export default connect(mapStateToProps, actions)(TransferFilter)
