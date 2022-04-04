import React, { ChangeEventHandler, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import RootState from '../store/store'

import '../scss/setting.css'
import { setManagment, setReBuild, setRunOut } from '../store/slices/valueTaxes'

function a(e:any) {

}
export default function Setting() {
    var dispatch = useDispatch()
    var rootState = RootState.getState()
    var {runOut, reBuild, managment} = useSelector((state: typeof rootState) => state.valueTaxes)
    
  return (
    <>
    <div className="setting">

        <div className="setTax runOut">
            <div className="name">رسم انفاق استهلاكي</div>
            <div className="value">
                <input 
                    onChange={(e) =>dispatch(setRunOut(Number(e.target.value)))} 
                    defaultValue={runOut} 
                    min={0} 
                    type="number" 
                />
                <div>%</div>
            </div>
        </div>

        <div className="setTax reBuild">
            <div className="name">اعادة اعمار</div>
            <div className="value">
                <input 
                    onChange={(e) =>dispatch(setReBuild(Number(e.target.value)))} 
                    defaultValue={reBuild} 
                    min={0} 
                    type="number"
                />
                <div>%</div>
            </div>
        </div>

        <div className="setTax managment">
            <div className="name">ادارة محلية</div>
            <div className="value">
                <input 
                    onChange={(e) =>dispatch(setManagment(Number(e.target.value)))}
                    defaultValue={managment} 
                    min={0} 
                    type="number" 
                />
                <div>%</div>
            </div>
        </div>
    </div>
    </>
  )
}
