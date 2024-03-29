import Form from 'components/Form'
import Table from 'components/Table'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'

import { BiUserPlus } from 'react-icons/bi'

export default function Home() {
  const [visible, setVisible] = useState(false)
  const handler = () => {
    setVisible(!visible)
  }
  return (
    <>
      <Head>
        <title>Employee Management</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='py-5'>
        <h1 className='text-xl md:text-5xl text-center font-bold py-10'>Employee Management</h1>
        <div className='container mx-auto flex justify-between py-5 border-b'>
          <div className='left flex gap-3'>
            <button onClick={handler} className='flex bg-indigo-500 text-white px-4 py-2 border rounded-md hover:bg-gray-50 hover:border-indigo-500 hover:text-gray-800'>Add Employee<BiUserPlus size={25} /></button>
          </div>
        </div>
        <div className='container mx-auto'>
          {visible ? <Form /> : <></>}
          <div className='overflow-hidden'><Table /></div>

        </div>


      </main>
    </>
  )
}
