import React, { useReducer } from 'react'
import { BiBrush, BiPlus } from 'react-icons/bi'
import Success from './Success'
const UpdateFormUser = () => {
    const formReducer = (state, e) => {
        return {
            ...state,
            [e.target.name]: e.target.value
        }
    }
    const [formData, setFormData] = useReducer(formReducer, {})

    const handleSubmit = (e) => {
        e.preventDefault();
        if (Object.keys(formData).length == 0) return console.log("form data not added")

    }
    if (Object.keys(formData).length > 0) return <Success message={'Data Added'} />
    return (
        <form onSubmit={handleSubmit} className='grid lg:grid-cols-2 w-4/6 gap-4 my-5'>
            <div className='input-type'>
                <input onChange={setFormData} type='text' name='firstname' placeholder='firstname...' className='border w-full px-3 py-3 rounded-md focus:outline-none' />
            </div>
            <div className='input-type'>
                <input onChange={setFormData} type='text' name='lastname' placeholder='lastname...' className='border w-full px-3 py-3 rounded-md focus:outline-none' />
            </div>
            <div className='input-type'>
                <input onChange={setFormData} type='email' name='email' placeholder='email...' className='border w-full px-3 py-3 rounded-md focus:outline-none' />
            </div>
            <div className='input-type'>
                <input onChange={setFormData} type='number' name='salary' placeholder='salary...' className='border w-full px-3 py-3 rounded-md focus:outline-none' />
            </div>
            <div className='flex gap-10 items-center'>
                <div className='form-check'>
                    <input onChange={setFormData} type='radio' value='Active' id='radioDefault1' name='status' className='form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer ' />
                    <label htmlFor='radioDefault1' className='inline-block text-gray-800'>Active</label>
                </div>
                <div className='form-check'>
                    <input onChange={setFormData} type='radio' value='Inactive' id='radioDefault2' name='status' className='form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer ' />
                    <label htmlFor='radioDefault2' className='inline-block text-gray-800'>Inactive</label>
                </div>
            </div>
            <div className='input-type '>
                <input onChange={setFormData} type='date' name='date' className='border px-5 py-3 focus:outline-none rounded-md ' />
            </div>
            <button type='submit' className='flex justify-center text-md w-2/6 bg-yellow-500 text-white px-4 py-2 border rounded-md hover:bg-gray-50 hover:border-yellow-500 hover:text-yellow-500'>
                Update<span className='px-1'><BiBrush size={25} /></span></button>
        </form>
    )
}

export default UpdateFormUser
