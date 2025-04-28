import React, {useState} from 'react';
import {ControledInput} from "./ControledInput.tsx";
import {Button} from "./Button.tsx";
import {MinMaxType} from "../App.tsx";

type SetPanelPropsType = {
  setIsSetting: (boolean) => void
  setMinMaxValue: ({}: MinMaxType) => void
}

export const SetPanel: React.FC = ({setIsSetting, setMinMaxValue}: SetPanelPropsType) => {
  const [min, setMin] = useState<number>(0)
  const [max, setMax] = useState<number>(0)

  const setButtonOnClickHandler = () => {
    setMinMaxValue({min, max})
    setIsSetting(false)
  }

  return (
    <div className={'set-panel'}>
      <ControledInput label={'max value: '} setMax={setMax} setIsSetting={setIsSetting}/>
      <ControledInput label={'start value: '} setMin={setMin} setIsSetting={setIsSetting}/>
      <Button title={'Set'} onClickHandler={setButtonOnClickHandler}/>
    </div>
  );
};
