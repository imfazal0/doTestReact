import React, { useEffect, useState } from 'react'

const Option = ({opt,setCheckedOpt ,  idx ,checkedOpt}) => {
  const [check , setChek] = useState(false);
  const style = 'relative w-[45%] h-1/2 bg-gray-100 rounded-2xl  border-l-4 border border-purple-700 flex items-center px-2 gap-5 ';
  const clicked = (e)=>{
      setCheckedOpt(e.target.id)
       
  }

  useEffect(()=>{
   if (checkedOpt == idx) {
    
     setChek(true)
    }else{
    
    setChek(false)
   }
   

  },[checkedOpt])

  return (
    <div className={check? style+'check' : style+'optShadow'} >
        <div className='absolute w-full h-full bg-transparent' onClick={clicked} id={idx} ></div>
        <div className='w-[10%] aspect-square bg-gray-300 rounded-xl font-extrabold text-gray-500 flex items-center justify-center text-xl'>A</div>
        <div className='font-bold text-xl select-none'>{opt}</div>
    </div>
  )
}

export default Option