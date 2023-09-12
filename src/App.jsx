import React from 'react'
import Random from './components/Random'
import Tag from './components/Tag'
const App = () => {
  return (
    <div className='w-full h-screen flex flex-col background items-center relative overflow-x-hidden' >
      <h1 className='w-11/12 mt-[40px]  text-3xl px-10 py-2 bg-white rounded-lg text-center'>
        Random GIF</h1>
      <div className='flex gap-y-10 mt-[30px] flex-col w-full items-center'>
        <Random/>
        <Tag/>
      </div>
    </div>
  )
}

export default App