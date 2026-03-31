import React from 'react'

const SubmitTest = () => {
    return (
        <div className='w-full h-1/2 text-shadow-2xs flex flex-col items-center justify-center text-white'>
            <div className='text-6xl font-bold text-purple-700'>
                Submit Your Answers
            </div>
            <div className='w-1/2 flex text-center text-red-600'>
                Are you sure you want to submit?
                You won’t be able to change your answers after this.
            </div>
        </div>
    )
}

export default SubmitTest