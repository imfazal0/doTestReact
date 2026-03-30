import React, { useEffect, useState } from 'react'
import Option from './testcontainercomponents/Option' 

const OptionsGrid = ({options , setCheckedOpt , checkedOpt}) => {
 

  return (
    <div className='w-full h-1/3 justify-center flex flex-wrap gap-5'>
      { 
       options.map((opt,idx)=>{
            return(<Option key={idx} opt={opt} checkedOpt={checkedOpt} setCheckedOpt={setCheckedOpt} idx={idx}/>)
        })
      
      }
       
    </div>
  )
}

export default OptionsGrid