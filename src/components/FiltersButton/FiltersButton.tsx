import React from 'react'

import styles from './FiltersButton.module.scss'

function FilterButtons() {
  return (
    <div className={styles.wrapper}>
      <button type="button" className={styles.button}>
        Самый дешевый
      </button>
      <button type="button" className={styles.button}>
        Самый быстрый
      </button>
    </div>
  )
}
export default FilterButtons
