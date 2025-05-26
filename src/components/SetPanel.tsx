import React from 'react'
import { ControledInput } from './ControledInput.tsx'
import { Button } from './Button.tsx'
import { Counter } from '../app/App.tsx'
import { useAppDispatch } from '../common/hooks'
import { changeMinMaxValueAC, checkAllValuesAC, onOffSettingModeAC } from '../features/model/counterReducer.ts'

type SetPanelPropsType = {
  counter: Counter
}

export const SetPanel: React.FC = ({ counter }: SetPanelPropsType) => {
  const dispatch = useAppDispatch()

  const offSettingMode = () => {
    dispatch(onOffSettingModeAC({ isSetting: false }))
  }
  const onnSettingMode = () => {
    dispatch(onOffSettingModeAC({ isSetting: true }))
  }

  const checkAllValues = () => {
    dispatch(checkAllValuesAC())
  }

  const changeMaxValue = (e) => {
    dispatch(changeMinMaxValueAC({ minOrMax: 'max', value: +e.currentTarget.value }))
    dispatch(onOffSettingModeAC({ isSetting: true }))
  }
  const changeMinValue = (e) => {
    dispatch(changeMinMaxValueAC({ minOrMax: 'min', value: +e.currentTarget.value }))
    dispatch(onOffSettingModeAC({ isSetting: true }))
  }

  const onChangeHandler = (name: string, value: number) => {}

  return (
    <div className={'set-panel'}>
      <ControledInput
        name={'max'}
        label={'max value: '}
        counter={counter}
        value={counter.max}
        onChangeHandler={(e) => changeMaxValue(e)}
        onFocusHandler={() => onnSettingMode()}
        onBlurHandler={checkAllValues}
      />
      <ControledInput
        name={'min'}
        label={'start value: '}
        counter={counter}
        value={counter.min}
        onChangeHandler={(e) => changeMinValue(e)}
        onBlurHandler={checkAllValues}
        onFocusHandler={() => onnSettingMode()}
      />
      <Button title={'Set'} onClickHandler={offSettingMode} />
    </div>
  )
}
