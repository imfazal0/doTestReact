import React, { use } from 'react'
import Scores from './Scores'
import Info from './Info'

const Dashboard = ({ user , handleSignOut , setUser }) => {
    
    return (
        <div className='rounded-2xl w-full h-[40%] bg-linear-to-b from-purple-700 to-purple-500 border  border-blue-200 p-[2%]'>
            <Info user={user} handleSignOut={handleSignOut}  />
            <Scores user={user} setUser={setUser}/>
        </div>
    )
}

export default Dashboard