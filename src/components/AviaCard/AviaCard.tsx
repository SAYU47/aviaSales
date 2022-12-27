import React from 'react'

import style from './AviaCard.module.scss'

const AviaCard = () => {
  return (
    <div className={style.wrapper}>
      <section className={style.priceContainer}>
        <div className={style.price}>13 400 Р</div>
        <div>
          <img src="../assets/S7 Logo.png" alt="лого Авиакомпании" />
        </div>
      </section>
      <section className={style.flyInfo}>
        <div>
          <p className={style.label}>MOW - HKT</p>
          <p className={style.value}>10:45 - 08:00</p>
        </div>
        <div>
          <p className={style.label}>В ПУТИ</p>
          <p className={style.value}>21ч 15м</p>
        </div>
        <div>
          <p className={style.label}>2 Пересадки</p>
          <p className={style.value}>HKG, JNB</p>
        </div>
      </section>
      <section className={style.flyInfo}>
        <div>
          <p className={style.label}>MOW - HKT</p>
          <p className={style.value}>11:20 - 00:50</p>
        </div>
        <div>
          <p className={style.label}>В ПУТИ</p>
          <p className={style.value}>13ч 30м</p>
        </div>
        <div>
          <p className={style.label}>1 Пересадка</p>
          <p className={style.value}>HKG</p>
        </div>
      </section>
    </div>
  )
}
export default AviaCard
