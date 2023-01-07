import React from 'react'

import TabsFilter from '../TabsFilter/TabsFilter'
import AviaList from '../AviaList/AviaList'
import TransferFilter from '../TransferFilter/TransferFilter'
import useTypedSelector from '../hooks/useTypedSelector'
import HeaderLoader from '../../servises/loaders/headerLoader'

import classes from './App.module.scss'

function App() {
  const stop = useTypedSelector((state) => state.ticketsReduser.stop)
  const loaderFullData =
    stop === false ? <HeaderLoader /> : <img src="../assets/Logo.png" className={classes.logo} alt="logo" />
  return (
    <section className={classes.app_container}>
      {loaderFullData}
      <div className={classes.app_wrapper}>
        <TransferFilter />
        <div className={classes.app_content}>
          <TabsFilter />
          <AviaList />
        </div>
      </div>
    </section>
  )
}

export default App
