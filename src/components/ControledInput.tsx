import React, {ChangeEvent, useState} from 'react';
import {v1} from "uuid";


type ControledInputPropsType = {
  label: string
  maxValue?: number
  setIsSetting?: (isSetting: boolean) => void
  setMin?: (min: number) => void
  setMax?: (max: number) => void
}

export const ControledInput: React.FC<ControledInputPropsType> = ({label, setIsSetting, setMin, setMax}: ControledInputPropsType) => {
  const id = v1();
  const [value, setValue] = useState('0')

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setIsSetting?.(true)
    setValue(e.currentTarget.value)
    setMin?.(+e.currentTarget.value)
    setMax?.(+e.currentTarget.value)
  }

  return (
    <fieldset>
      <label htmlFor={id}>{label}</label>
      <input id={id} value={value} type={'number'} step={1} onChange={onChangeHandler}/>
    </fieldset>
  );
};
