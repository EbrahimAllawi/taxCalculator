import { combineReducers } from "@reduxjs/toolkit";
import caculateTax from "./slices/calculateTax";

import counterSlice from './slices/slice'
import valueTaxes from "./slices/valueTaxes";

const allreducers = combineReducers({
    // slice
    // counter: counterSlice,
    caculateTax,
    valueTaxes
})

export default allreducers