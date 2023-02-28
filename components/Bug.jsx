import React from 'react'
import { BiCheck } from 'react-icons/bi'
const Bug = ({ message }) => {
    return (
        <div className='container mx-auto'>
            <div className='flex justify-center mx-auto border border-yellow-200 w-2/3 bg-yellow-400 text-gray-900 text-md my-4 py-2 text-center bg-opacity-5'>{message}<BiCheck size={25} /></div>
        </div>
    )
}

export default Bug
