import React, { FC } from 'react'
import { add, format, minutesToHours } from 'date-fns'

import { TicketTypes } from 'actions-types'

import style from './AviaCard.module.scss'

const AviaCard: FC<TicketTypes> = ({ price, segments, carrier }) => {
  const oneSegment = segments.map((element) => {
    return element
  })

  const firstWay = oneSegment[0]
  const secondWay = oneSegment[1]
  const departureDate = (way: { date: string | number | Date }) => format(new Date(way.date), 'HH:mm')
  const timeDurationHours = (way: { duration: number }) => minutesToHours(way.duration)
  const timeDurationMinutes = (way: { duration: number }) => way.duration % 60
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const arrivalDate: (way: any) => string = (way) => {
    return format(
      add(new Date(way.date), {
        hours: timeDurationHours(way),
        minutes: timeDurationMinutes(way),
      }),
      'HH:mm'
    )
  }
  type waysLength = {
    stops: {
      length: number | number
    }
  }
  const waysLength = (way: waysLength) => {
    if (way.stops.length === 1) {
      return '1 Пересадка'
    }
    if (way.stops.length === 2) {
      return '2 Пересадки'
    }
    if (way.stops.length === 3) {
      return '3 Пересадки'
    }
    return 'Без Пересадок'
  }
  const logoImg = `//pics.avs.io/99/36/${carrier}.png`
  let formatedPrice = price.toString()
  formatedPrice =
    formatedPrice.length === 5
      ? `${formatedPrice.slice(0, 2)} ${formatedPrice.slice(2)}`
      : `${formatedPrice.slice(0, 3)} ${formatedPrice.slice(3)}`
  return (
    <div className={style.wrapper}>
      <section className={style.priceContainer}>
        <div className={style.price}>{formatedPrice} ₽</div>
        <div>
          <img src={logoImg} alt="лого Авиакомпании" />
        </div>
      </section>
      <section className={style.segment}>
        <div>
          <p className={style.label}>
            {firstWay.origin} - {firstWay.destination}
          </p>
          <p className={style.value}>
            {departureDate(firstWay)} - {arrivalDate(firstWay)}
          </p>
        </div>
        <div>
          <p className={style.label}>В ПУТИ</p>
          <p className={style.value}>
            {timeDurationHours(firstWay)}ч {timeDurationMinutes(firstWay)}м
          </p>
        </div>
        <div>
          <p className={style.label}>{waysLength(firstWay)}</p>
          <p className={style.value}>{firstWay.stops.join(', ')}</p>
        </div>
      </section>
      <section className={style.segment}>
        <div>
          <p className={style.label}>
            {secondWay.origin} - {secondWay.destination}
          </p>
          <p className={style.value}>
            {departureDate(secondWay)} - {arrivalDate(secondWay)}
          </p>
        </div>
        <div>
          <p className={style.label}>В ПУТИ</p>
          <p className={style.value}>
            {timeDurationHours(secondWay)}ч {timeDurationMinutes(secondWay)}м
          </p>
        </div>
        <div>
          <p className={style.label}>{waysLength(secondWay)}</p>
          <p className={style.value}>{secondWay.stops.join(', ')}</p>
        </div>
      </section>
    </div>
  )
}
export default AviaCard
