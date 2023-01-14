import React, { ChangeEventHandler } from 'react'
import { connect } from 'react-redux'
import uniqid from 'uniqid'

import { checkboxBox } from '../../redux/redusers/transfers-reduser'
import * as actions from '../../redux/action'
import { State } from '../../types'

import styles from './TransferFilter.module.scss'
console.log('sadsdasdasd')
type Properties = {
  state: State
  toggle: ChangeEventHandler<HTMLElement>
  toggleAll: ChangeEventHandler<HTMLElement>
}

const TransferFilter: React.FC<Properties> = ({ state, toggle, toggleAll }) => {
  const { checkboxes } = state.transferReducer
  const renderCheckbox = checkboxes.map((el: checkboxBox, i: number) => {
    return (
      <div className={styles.checkbox_content} key={uniqid()}>
        <label className={styles['transfer-count__label']}>
          <input
            type="checkbox"
            checked={el.checked}
            value={el.name}
            className={styles['transfer-count__checkbox']}
            onChange={i === 0 ? toggleAll : toggle}
          />
          <span>{el.name}</span>
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
