import React from 'react';
import {ControledInput} from "./ControledInput.tsx";
import {Button} from "./Button.tsx";

type SetPanelPropsType = {
  setIsSetting: (boolean) => void
}

export const SetPanel: React.FC = ({setIsSetting}: SetPanelPropsType) => {
  return (
    <div className={'set-panel'}>
      <ControledInput label={'max value: '} setIsSetting={setIsSetting}/>
      <ControledInput label={'start value: '} setIsSetting={setIsSetting}/>
      <Button title={'Set'}/>
    </div>
  );
};
