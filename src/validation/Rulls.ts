import { RullsType } from "./validation.type"

export const reqValid = (num: number = 0): RullsType => {
    return { name: "req", min: num, max: 50, errorMessage: "this field is required" }
}

export const minValid = (num: number): RullsType => {
    return { name: "min", min: num, max: 50, errorMessage: `this field at least have to ${num} charecter` }
}

export const maxValid = (num: number): RullsType => {
    return { name: "max", min: 0, max: num, errorMessage: `this field at max have to ${num} charecter` }
}

export const emailValid = (): RullsType => {
    return { name: "email",min:0 , max: 50, errorMessage: `this email is not valid` }
} 