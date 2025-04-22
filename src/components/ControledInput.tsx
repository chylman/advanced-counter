import React, {ChangeEvent, useState} from 'react';
import {v1} from "uuid";


type ControledInputPropsType = {
  label: string
  maxValue?: number
  setIsSetting?: (boolean) => void
}

export const ControledInput: React.FC<ControledInputPropsType> = ({label, setIsSetting}: ControledInputPropsType) => {
  const id = v1();
  const [value, setValue] = useState('0')

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value)
    setIsSetting?.(true)
  }

  return (
    <fieldset>
      <label htmlFor={id}>{label}</label>
      <input id={id} value={value} type={'number'} step={1} onChange={onChangeHandler}/>
    </fieldset>
  );
};
