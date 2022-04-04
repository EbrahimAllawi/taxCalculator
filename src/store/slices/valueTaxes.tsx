import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IvalueTaxes {
    runOut: number
    reBuild: number
    managment: number
}

var initialState: IvalueTaxes = {
    runOut: 5,
    reBuild: 10,
    managment: 5
}
const valueTax = createSlice({
    name:'valueTaxes',
    initialState,
    reducers: {
        setRunOut(state, action: PayloadAction<number>) {
            state.runOut = action.payload
        },
        setReBuild(state, action: PayloadAction<number>) {
            state.reBuild = action.payload
        },
        setManagment(state, action: PayloadAction<number>) {
            state.managment = action.payload
        },
    }
})
export const {setRunOut, setReBuild, setManagment} = valueTax.actions
export default valueTax.reducer