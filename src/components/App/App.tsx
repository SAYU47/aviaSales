import React from 'react'

import FilterButtons from '../FiltersButton/FiltersButton'
import AviaList from '../AviaList/AviaList'
import TransferFilter from '../TransferFilter/TransferFilter'
import useTypedSelector from '../hooks/useTypedSelector'
import HeaderLoader from '../../servises/loaders/headerLoader'

import classes from './App.module.scss'

function App() {
  const stop = useTypedSelector((state) => state.ticketsReduser.stop)
  console.log(stop)
  const loaderFullData =
    stop === false ? <HeaderLoader /> : <img src="../assets/Logo.png" className={classes.logo} alt="logo" />
  return (
    <section className={classes.app_container}>
      {loaderFullData}
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
