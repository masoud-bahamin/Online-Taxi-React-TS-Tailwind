import React from 'react'
import { validator } from './validator';
import { RullsType } from './validation.type';

interface InputProps {
    placeholder?: string;
    className?: string;
    validationsArrey: RullsType[];
    id: "name" | "email" | "password";
    inputHandler: (value:string , id:"name" | "email" | "password" , isValid:boolean) => void;
    type: "text" | "password" | "number" | "email"
}

type intialValueType = {
    value: string | number;
    isValid: boolean
}
const intialValue: intialValueType = {
    value: "",
    isValid: false
}

interface ActionType {
    type: "Input";
    value: string | number;
    isValid: boolean
}


const reducer = (state: intialValueType, action: ActionType) => {
    switch (action.type) {
        case "Input":
            return {
                value: action.value,
                isValid: action.isValid
            }
            
        default: throw Error("errroooor")       
    }
}

function Input({ placeholder, className, validationsArrey, id, inputHandler , type}: InputProps) {

    const [showError , setShowerror] = React.useState(false)
    const [inputValue, dispatch] = React.useReducer(reducer, intialValue)

    const changeInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = (e.currentTarget.value).toString() as string
        dispatch({ type: "Input", value: value, isValid:  validator(validationsArrey , value).length ? false : true  })
        inputHandler(value , id ,  validator(validationsArrey , value).length ? false : true)
    }

    // console.log(inputValue);
    

    return (
        <div>
            { !inputValue.isValid && showError ? (
                <>
                {validator(validationsArrey , inputValue.value)?.map((error , i) => (
                    <p key={i} className='border text-red-400 border-red-400 text-xs p-3 mb-2 rounded'>{error}</p>
                ))}
                </>
                
            ) : (<></>)
            }
            <input onBlur={() => setShowerror(true)} type={type} className={`${className} p-3 border text-slate-800 border-yellow-400`} placeholder={placeholder} onChange={changeInputHandler} value={inputValue.value} />
        </div>
    )
}

export default Input