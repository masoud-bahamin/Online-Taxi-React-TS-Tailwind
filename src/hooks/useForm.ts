import { useReducer } from "react"


export type obj = {
    [key: string]: { value: string | number; isValid: boolean };
};


interface inputValueT {
    inputs: obj;
    isFormValid: boolean
}

type ActionT = {
    type: "FormState";
    id: "name" | "email" | "password";
    value: string | number;
    isValid: boolean
}

const reducer = (state: inputValueT, action: ActionT): inputValueT => {
    switch (action.type) {
        case "FormState":
            let FormValid = true
            for (const key in state.inputs) {
                if (key === action.id) {
                    FormValid = FormValid && action.isValid
                } else {
                    FormValid = FormValid && state.inputs[key].isValid
                }
            }

            return {
                inputs: {
                    ...state.inputs,
                    [action.id]: {
                        value: action.value,
                        isValid: action.isValid
                    }
                },
                isFormValid: FormValid
            }

        default: throw Error("erroe")

    }
}



export const useForm = (info : inputValueT)   => {

    const [formState, dispatch] = useReducer(reducer, info)

    const inputHandler = (value: string | number, id: "name" | "email" | "password", isValid: boolean) => {
        dispatch({
            type: "FormState",
            value,
            id,
            isValid
        })

    }
    return {formState, inputHandler}
}