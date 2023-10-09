import Input from '../../validation/Input';
import { minValid, reqValid } from '../../validation/Rulls';
import { useForm } from '../../hooks/useForm';




function Form() {

const {formState , inputHandler} = useForm({
  inputs: {
      name: { value: "", isValid: false },
      email: { value: "", isValid: false }
  }
  ,
  isFormValid: false
})

  // console.log(formState);

  return (
    <div className="container mx-auto my-4 text-white">
      <Input validationsArrey={[minValid(2), reqValid()]} id="name" className='mb-4 rounded w-full' placeholder='name' inputHandler={inputHandler} />
      <Input validationsArrey={[minValid(3), reqValid()]} id="email" className='mb-4 rounded w-full' placeholder='email' inputHandler={inputHandler} />
    </div>
  )
}

export default Form