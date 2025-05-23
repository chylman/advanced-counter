import React from 'react'
import { ControledInput } from './ControledInput.tsx'
import { Button } from './Button.tsx'
import { Counter } from '../App.tsx'

type SetPanelPropsType = {
  setCounter: (counter: Counter) => any
  counter: Counter
}

export const SetPanel: React.FC = ({ setCounter, counter }: SetPanelPropsType) => {
  const setButtonOnClickHandler = () => {
    setCounter({ ...counter, isSetting: false })
  }

  const changeMinValue = () => {
    if (counter.min > counter.max) {
      setCounter({ ...counter, min: counter.min, max: counter.min, value: counter.min, isSetting: true })
    } else setCounter?.({ ...counter, min: counter.min, value: counter.min, isSetting: true })
  }

  const changeMaxValue = (e) => {
    setCounter({ ...counter, ['max']: +e.currentTarget.value, isSetting: true })
  }

  const onChangeHandler = (name: string, value: string) => {
    setCounter({ ...counter, [name]: value })
  }

  return (
    <div className={'set-panel'}>
      <ControledInput
        name={'max'}
        label={'max value: '}
        setCounter={setCounter}
        counter={counter}
        onBlurHandler={changeMaxValue}
        value={counter.max}
        onChangeHandler={(e) => onChangeHandler('max', e.currentTarget.value)}
      />
      <ControledInput
        name={'min'}
        label={'start value: '}
        setCounter={setCounter}
        counter={counter}
        value={counter.min}
        onChangeHandler={(e) => onChangeHandler('min', e.currentTarget.value)}
        onBlurHandler={changeMinValue}
      />
      <Button title={'Set'} onClickHandler={setButtonOnClickHandler} />
    </div>
  )
}
