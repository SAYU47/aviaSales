import React, { ChangeEventHandler } from 'react'
import { connect } from 'react-redux'
import uniqid from 'uniqid'

import { Box } from '../../redux/redusers/transfers-reduser'
import * as actions from '../../redux/redusers/transfer-action'

import styles from './TransferFilter.module.scss'

type Properties = {
  state: any
  toggle: ChangeEventHandler<HTMLElement>
  toggleAll: ChangeEventHandler<HTMLElement>
}

const TransferFilter: React.FC<Properties> = ({ state, toggle, toggleAll }) => {
  const { checkboxes } = state.checkbox
  const renderCheckbox = checkboxes.map((el: Box, i: number) => {
    return (
      <div className={styles.checkbox_content} key={uniqid()}>
        <label>
          <input type="checkbox" checked={el.checked} value={el.name} onChange={i === 0 ? toggleAll : toggle} />
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
const mapStateToProps = (state: any) => {
  return {
    state,
  }
}

export default connect(mapStateToProps, actions)(TransferFilter)
