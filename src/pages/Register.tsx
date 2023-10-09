import React from 'react'
import { useForm } from '../hooks/useForm'
import Input from '../validation/Input'
import { emailValid, maxValid, minValid, reqValid } from '../validation/Rulls'
import Header from '../components/Header/Header'
import { Link } from "react-router-dom"
import BackButton from '../components/Buttons/BackButton'

function Register() {

    const { formState, inputHandler } = useForm({
        inputs: {
            name: { value: "", isValid: false },
            email: { value: "", isValid: false },
            password: { value: "", isValid: false },
        }
        ,
        isFormValid: false
    })

    return (
        <>
            <Header subHeader={false} />
            <div className='pt-12 mx-3'>
               <BackButton />
                <h3 className='mb-3 font-semibold text-2xl'>Sign Up</h3>
                <form>
                    <div className="container mx-auto my-4 text-white">
                        <Input validationsArrey={[minValid(3), maxValid(30)]} type='text' id="name" className='mb-3 dark:bg-gray-800 dark:text-gray-200 rounded w-full text-xs' placeholder='Name' inputHandler={inputHandler} />
                        <Input validationsArrey={[emailValid(), maxValid(30)]} type='email' id="email" className='mb-3 dark:bg-gray-800 dark:text-gray-200 rounded w-full text-xs' placeholder='Email or Phone Number' inputHandler={inputHandler} />
                        <Input validationsArrey={[minValid(4), reqValid()]} type={'password'} id="password" className='mb-3 dark:bg-gray-800 dark:text-gray-200 rounded w-full text-xs' placeholder='Enter Your Password' inputHandler={inputHandler} />
                        <p className='mb-4 text-xs text-gray-700 dark:text-gray-400'>By signing up you agree to the <span className='text-yellow-500 cursor-pointer' >Terms at service and Privacy policy</span>
                        </p>
                        <button
                            disabled={!formState.isFormValid} type='submit'
                            className={`${formState.isFormValid ? " opacity-100" : " opacity-40"} bg-yellow-400 text-white w-full p-3 text-xs mb-6 rounded`}>Sign In</button>
                        <p className='text-xs mb-4 text-gray-600 dark:text-gray-400 text-center'>Already have an account? <Link to={"/login"} className='text-yellow-400 cursor-pointer'>sign ip</Link></p>
                    </div>
                </form>

            </div>
        </>

    )
}

export default Register