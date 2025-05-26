import { createAction, createReducer } from '@reduxjs/toolkit'
import { Counter } from '../../app/App.tsx'

const initialState: Counter = {
  min: 0,
  max: 7,
  value: 0,
  isSetting: false,
}

export const checkAllValuesAC = createAction('counter/checkAllValues')

export const changeValueAC = createAction<{ value: number }>('counter/changeValue')
export const changeMinMaxValueAC = createAction<{ minOrMax: 'min' | 'max'; value: number }>('counter/changeMaxValue')

export const onOffSettingModeAC = createAction<{ isSetting: boolean }>('counter/onOffSettingMode')

export const counterReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(checkAllValuesAC, (state) => {
      const { min, max } = state
      if (min > max) {
        state['max'] = min
        state['value'] = min
      } else {
        state['value'] = min
      }
    })
    .addCase(changeValueAC, (state, action) => {
      state.value = action.payload.value
    })
    .addCase(onOffSettingModeAC, (state, action) => {
      state.isSetting = action.payload.isSetting
    })
    .addCase(changeMinMaxValueAC, (state, action) => {
      state[action.payload.minOrMax] = action.payload.value
    })
})
