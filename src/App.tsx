import './App.css'
import Display from './components/Display.tsx'
import { Button } from './components/Button.tsx'
import { useState } from 'react'
import { SetPanel } from './components/SetPanel.tsx'

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
  const [counter, setCounter] = useState<Counter>(initialState)
  const handleButtonIncClick = () => {
    if (counter.value < counter.max) {
      setCounter({ ...counter, value: ++counter.value })
    }
  }
  const handleButtonResClick = () => {
    setCounter({ ...counter, value: 0 })
  }

  return (
    <div className={'container'}>
      <div className={'grid'}>
        <SetPanel setCounter={setCounter} counter={counter} />
      </div>
      <div className={'grid'}>
        <Display counter={counter} />
        <Button
          className={'button button-inc'}
          title={'Inc'}
          onClickHandler={handleButtonIncClick}
          disabled={!(counter.value < counter.max)}
        />
        <Button
          className={'button'}
          title={'Res'}
          onClickHandler={handleButtonResClick}
          disabled={counter.value === counter.min}
        />
      </div>
    </div>
  )
}

export default App
