import './App.css'
import Display from '../components/Display.tsx'
import { Button } from '../components/Button.tsx'
import { useState } from 'react'
import { SetPanel } from '../components/SetPanel.tsx'
import { useAppDispatch, useAppSelector } from '../common/hooks'
import { selectCounter } from '../features/model/counterSelector.ts'
import { changeValueAC } from '../features/model/counterReducer.ts'

export type Counter = {
  min: number
  max: number
  value: number
  isSetting: boolean
}

const initialState = {
  min: 0,
  max: 7,
  value: 0,
  isSetting: false,
}

function App() {
  const counter = useAppSelector(selectCounter)
  const dispatch = useAppDispatch()
  const handleButtonIncClick = () => {
    if (counter.value < counter.max) {
      dispatch(changeValueAC({ value: counter.value + 1 }))
    }
  }
  const handleButtonResClick = () => {
    dispatch(changeValueAC({ value: 0 }))
  }

  return (
    <div className={'container'}>
      <div className={'grid'}>
        <SetPanel counter={counter} />
      </div>
      <div className={'grid'}>
        <Display counter={counter} />
        <Button
          className={'button button-inc'}
          title={'Inc'}
          onClickHandler={handleButtonIncClick}
          disabled={!(counter.value < counter.max) || counter.isSetting}
        />
        <Button
          className={'button'}
          title={'Res'}
          onClickHandler={handleButtonResClick}
          disabled={counter.value === counter.min || counter.isSetting}
        />
      </div>
    </div>
  )
}

export default App
