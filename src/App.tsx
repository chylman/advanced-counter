import './App.css'
import Display from "./components/Display.tsx";
import {Button} from "./components/Button.tsx";
import {useState} from "react";
import {SetPanel} from "./components/SetPanel.tsx";

function getRandomInt() {
    return Math.floor(Math.random() * 10) + 1;
}

export type MinMaxType = {
  min: number
  max: number
}

function App() {
    const DEFAULT_MIN_VALUE = 0;
    const DEFAULT_MAX_VALUE = 7;
    const [value, setValue] = useState<number>(0);
    const [minMaxValue, setMinMaxValue] = useState<MinMaxType>({min: DEFAULT_MIN_VALUE, max: DEFAULT_MAX_VALUE});
    const [isSetting, setIsSetting] = useState<boolean>(false)
    const handleButtonIncClick = () => {
        if (value < minMaxValue.max) {
            setValue(value + 1)
        }
    }
    const handleButtonResClick = () => {
        setValue(0);
        // setMaxValue(getRandomInt());
    }

  return (
    <div className={'container'}>
      <div className={'grid'}>
        <SetPanel setIsSetting={setIsSetting}/>
      </div>
      <div className={'grid'}>
        <Display maxValue={minMaxValue} value={value}/>
        <Button className={'button button-inc'} title={'Inc'} onClickHandler={handleButtonIncClick} disabled={!(value < minMaxValue.max)}/>
        <Button className={'button'} title={'Res'} onClickHandler={handleButtonResClick} disabled={value === minMaxValue.min}/>
      </div>
    </div>
  )
}

export default App
