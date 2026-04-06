import { RiCloseCircleLine } from '@remixicon/react'
import React from 'react'
import { delDoc } from '../utils/RemoveData'

const DeleteModal = ({id , setSelectedTest }) => {
    function handleDel(){
        delDoc(id);
        setSelectedTest('')
    }
    return (
        <div className='w-screen h-screen top-0 left-0 fixed backdrop-blur-xs z-10 flex items-center justify-center'>
            <div className='w-1/2 aspect-video bg-white shadow-xl rounded-2xl font-semibold flex items-center justify-center uppercase flex-col'>
                <div >are you sure you want to delete this perticular test !</div>
                <div className='text-red-600'>Test Id : {id} </div>
                <div className='h-1/3 w-full flex flex-col p-5'>
                    <button onClick={handleDel} className='h-full w-full bg-red-300 px-2 text-red-700 rounded-xl hover:bg-red-400 '  >Delete Test</button>
                </div>
                <div className='hover:text-gray-700' onClick={()=>{setSelectedTest('')}}>
                    <RiCloseCircleLine />
                </div>
            </div>
        </div>
    )
}

export default DeleteModal