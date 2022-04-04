import {createStore, combineReducers,applyMiddleware } from 'redux'
import allreducers from './reducers'
// import {composeWithDevTools } from 'redux-devtools-extension';

import counterSlice from './slices/slice'


function loadState() {
    const state = localStorage.getItem('state')
    if(state !== null) {
        return JSON.parse(state)
    }
    return undefined
}

function saveState(state: any) {
    localStorage.setItem('state', JSON.stringify(state))
}



const store = createStore(allreducers, loadState(),applyMiddleware())
// const store = createStore(allreducers, loadState())
store.subscribe(()=> {
    saveState(store.getState())
})

export default store