import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Link, Route, Routes,HashRouter } from "react-router-dom";


import AppBar from './components/AppBar';
import Home from './components/Home';
import Setting from './components/Setting';
import './scss/app.css'
import { increment } from './store/slices/slice';
import store from './store/store';

function App() {
  var dispatch = useDispatch()
  return (
    <>
      <HashRouter >
        <div className="app">
          <AppBar/>
          <div className="main">
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/setting' element={<Setting/>}/>
            </Routes>
          </div>
        </div>
      </HashRouter>
    </>
  );
}

export default App;
