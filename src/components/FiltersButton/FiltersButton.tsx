import React from 'react'

import styles from './FiltersButton.module.scss'

function FilterButtons() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.radio_item}>
        <input id="radio-2" type="radio" name="radio" value="2" checked={true} />
        <label htmlFor="radio-2">Самый дешевый</label>
      </div>
      <div className={styles.radio_item}>
        <input id="radio-3" type="radio" name="radio" value="3" />
        <label htmlFor="radio-3">Самый быстрый</label>
      </div>
    </div>
  )
}
export default FilterButtons
