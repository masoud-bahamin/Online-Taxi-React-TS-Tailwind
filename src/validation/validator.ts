import { RullsType } from "./validation.type"
import {useState , useEffect} from "react"

const validator = (arrey:RullsType[] , value:string | number) =>{
 let errorArrey : String[] = []

    arrey.forEach(validation => {
        if(validation.name === "req"){
            value.toString().length < 1 && errorArrey.push(validation.errorMessage)
        }
        if(validation.name === "min"){
            value.toString().length < validation.min && errorArrey.push(validation.errorMessage)
        }
        if(validation.name === "max"){
            value.toString().length > validation.max && errorArrey.push(validation.errorMessage)
        }
        if(validation.name === "email"){
            !value.toString().includes("@")  && errorArrey.push(validation.errorMessage)
        }
    })
   
    return errorArrey
}

export {validator} 