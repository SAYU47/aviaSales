import React from 'react'

import FilterButtons from '../FiltersButton/FiltersButton'
import AviaList from '../AviaList/AviaList'
import TransferFilter from '../TransferFilter/TransferFilter'

import classes from './App.module.scss'

function App() {
  return (
    <section className={classes.app_container}>
      <img src="../assets/Logo.png" className={classes.logo} alt="logo" />
      <div className={classes.app_wrapper}>
        <TransferFilter />
        <div className={classes.app_content}>
          <FilterButtons />
          <AviaList />
        </div>
      </div>
    </section>
  )
}

export default App
