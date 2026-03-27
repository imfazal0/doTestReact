import React from 'react'
import Option from './testcontainercomponents/Option' 

const OptionsGrid = () => {
  return (
    <div className='w-full h-1/3 justify-center flex flex-wrap gap-5'>
        <Option/>
        <Option/>
        <Option/>
        <Option/>
    </div>
  )
}

export default OptionsGrid