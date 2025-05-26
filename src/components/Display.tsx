import React from 'react'
import { Counter } from '../app/App.tsx'

type DisplayPropsType = {
  counter: Counter
}

const Display = ({ counter }: DisplayPropsType) => {
  return (
    <div className={'display'}>
      {counter.isSetting && <span className={'setting-message'}>Press set for continue</span>}
      {!counter.isSetting && (
        <>
          <span className={'max-value'}>Max value: {counter.max}</span>
          <span className={`value ${counter.value === counter.max ? 'red' : ''}`}>{counter.value}</span>
        </>
      )}
    </div>
  )
}

export default Display
