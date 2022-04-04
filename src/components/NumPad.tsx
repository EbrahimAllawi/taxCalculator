import React from 'react'

import { useDispatch, useSelector } from 'react-redux';

import { fillTotal, clearTotal, calculateTax } from '../store/slices/calculateTax';

import RootState from '../store/store'

function Pad() {
    var rootState = RootState.getState()
    var valueTax= useSelector((state: typeof rootState) => state.valueTaxes)
    var dsipatch = useDispatch()
    var padData = [1,2,3,4,5,6,7,8,9,0];
    var pad = padData.map((i)=> {
        return (
            <div
             key={i}
              className='number'
              onClick={()=> dsipatch(fillTotal(`${i}`))}
            >{i}</div>
            )
        })
        return (
        <>
        {pad}
        <div
            className='number'
            onClick={()=> dsipatch(clearTotal())}
        >c</div>
        <div
            className='number'
            onClick={()=> dsipatch(calculateTax(valueTax))}
        >=</div>
        </>
    )
}
export default function NumPad() {
  return (
    <>
    <div className='numPad'>
        {/* {pad} */}
        <Pad/>
    </div>
    </>
  )
}


