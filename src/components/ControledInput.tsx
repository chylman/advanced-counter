import { ChangeEventHandler, FocusEventHandler } from 'react'
import { v1 } from 'uuid'

type PropsType = {
  label: string
  name: string
  onBlurHandler: FocusEventHandler<HTMLInputElement>
  onChangeHandler: ChangeEventHandler<HTMLInputElement>
  onFocusHandler: FocusEventHandler<HTMLInputElement>
  value: number
}

export const ControledInput = ({ label, name, onBlurHandler, onChangeHandler, onFocusHandler, value }: PropsType) => {
  const id = v1()

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
