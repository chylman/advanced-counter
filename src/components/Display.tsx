import React from 'react';
import {MinMaxType} from "../App.tsx";

type DisplayPropsType = {
    minMaxValue: MinMaxType
    value: number
}

const Display = ({minMaxValue, value}: DisplayPropsType) => {
    return (
        <div className={'display'}>
            <span className={'max-value'}>Max value: {minMaxValue.max}</span>
            <span className={`value ${value === minMaxValue.max ? 'red' : ''}`}>{value}</span>
        </div>
    );
};

export default Display;