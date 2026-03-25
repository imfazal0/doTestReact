import React, { use } from 'react'
import Scores from './Scores'
import Info from './Info'

const Dashboard = ({ user , handleSignOut }) => {
    
    return (
        <div className='rounded-2xl w-full h-[40%] bg-linear-to-b from-blue-200 to-white border  border-blue-200 p-[2%]'>
            <Info user={user} handleSignOut={handleSignOut}  />
            <Scores user={user}/>
        </div>
    )
}

export default Dashboard