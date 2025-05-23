import React, { ChangeEventHandler, FocusEventHandler } from 'react'
import { v1 } from 'uuid'
import { Counter } from '../App.tsx'

type ControledInputPropsType = {
  label: string
  setCounter: (counter: Counter) => void
  counter: Counter
  name: string
  onBlurHandler: FocusEventHandler<HTMLInputElement>
  onChangeHandler: ChangeEventHandler<HTMLInputElement>
  value: number
}

export const ControledInput: React.FC<ControledInputPropsType> = ({
  label,
  name,
  setCounter,
  counter,
  onBlurHandler,
  onChangeHandler,
  value,
}: ControledInputPropsType) => {
  const id = v1()

  const onFocusHandler = () => {
    setCounter?.({ ...counter, isSetting: true })
  }

  return (
    <fieldset>
      <label htmlFor={id}>{label}</label>
      <input
        name={name}
        id={id}
        value={value.toString()}
        type={'number'}
        onChange={onChangeHandler}
        onBlur={onBlurHandler}
        onFocus={onFocusHandler}
      />
    </fieldset>
  )
}
