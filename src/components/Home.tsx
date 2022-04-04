import React from 'react'

import BillDetails from './BillDetails'

import '../scss/home.css'
import NumPad from './NumPad'

export default function Home() {
  return (
    <>
    <div className="home">
      <BillDetails/>
      <NumPad/>
    </div>
    </>
  )
}
