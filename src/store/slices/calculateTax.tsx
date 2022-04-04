import { createSlice, PayloadAction } from '@reduxjs/toolkit'


interface IvalueTaxes {
    runOut: number
    reBuild: number
    managment: number
}

interface ITax {
    total: string
    runOut: number
    reBuild: number
    managment: number
    subTotal: number
}
var initialState: ITax = {
    total: "0",
    runOut: 0,
    reBuild: 0,
    managment: 0,
    subTotal: 0
}
const caculateTax = createSlice({
    name: 'fillTotal',
    initialState,
    reducers: {
        fillTotal(state, action: PayloadAction<string>) {
            // console.log(action.payload)
            if(state.total == "0") {
                state.total = ""
            }
            state.total += action.payload
        },
        clearTotal(state) {
            state.total = "0"
            state.runOut = 0
            state.reBuild = 0
            state.managment = 0
            state.subTotal = 0
        },
        calculateTax(state, action: PayloadAction<IvalueTaxes>) {
            var total = Number(state.total)
            
            var runOut = total * action.payload.runOut/100
            state.runOut = runOut

            var reBuild = runOut * action.payload.reBuild/100
            state.reBuild = reBuild

            var management = runOut * action.payload.managment/100
            state.managment = management

            var subTotal = total + runOut + reBuild + management
            state.subTotal = subTotal

        }

    }
})
export const {fillTotal, clearTotal, calculateTax} = caculateTax.actions
export default caculateTax.reducer