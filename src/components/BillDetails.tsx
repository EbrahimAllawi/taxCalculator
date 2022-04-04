import { stat } from 'fs'
import React from 'react'
import { useSelector } from 'react-redux'

import RootState from '../store/store'

export default function BillDetails() {
    var rootState = RootState.getState()
    var {total, runOut, reBuild, managment, subTotal} =  useSelector((state: typeof rootState) => state.caculateTax)
    var billDetails = [
        {'class':'total', "value": `${total}`, "name":"المجموع"},
        {'class':'runOut', "value": `${runOut}`, "name":"رسم انفاق استهلاكي"},
        {'class':'rebuild', "value": `${reBuild}`, "name":"رسم اعادة اعمار"},
        {'class':'management', "value": `${managment}`, "name":"رسم ادارة محلية"},
        {'class':'subTotal', "value": `${subTotal}`, "name":"المجموع النهائي"},
    ]
    var rowDetails = billDetails.map((i, a)=> {
        return (
        <div key={a} className={`${i.class} details`}>
            <div className='name'>{i.name}</div>
            <div className="value">{i.value}</div>
        </div>
        )
    })
  return (
    <>
    <div className='billDetails'>
        {rowDetails}
    </div>
    </>
  )
}
