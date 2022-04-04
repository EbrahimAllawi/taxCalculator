import React from 'react'
import { Link } from 'react-router-dom'

import '../scss/appBar.css'

export default function AppBar() {
  return (
    <>
      <div className="appBar">
      <div className="nameApp">حاسبة الضريبة</div>
      <div className="navigations">
        <Link to="/" className="nav">الرئيسية</Link>
        <Link to="/setting" className="nav">الاعدادات</Link>

      </div>
      </div>
    </>
  )
}
