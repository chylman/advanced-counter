import React from "react";

type ButtonPropsType = {
    title: string
    disabled?: boolean
    onClickHandler?: () => void
    className?: string
}

export const Button: React.FC<ButtonPropsType> = ({title, onClickHandler, disabled, className}: ButtonPropsType) => {
    return <button className={className} onClick={onClickHandler} disabled={disabled}>{title}</button>
};