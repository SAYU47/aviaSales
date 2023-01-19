import React from 'react'

import AviaList from '@components/AviaList/AviaList'
import TabsFilter from '@components/TabsFilter/TabsFilter'
import TransferFilter from '@components/TransferFilter/TransferFilter'
import HeaderLoader from '@components/loaders/headerLoader'
import useTypedSelector from '@hooks/useTypedSelector'

import classes from './App.module.scss'

function App() {
  const stop = useTypedSelector((state) => state.ticketsReduser.stop)
  const loaderFullData =
    stop === false ? <HeaderLoader /> : <img src="../assets/image/Logo.png" className={classes.logo} alt="logo" />
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
