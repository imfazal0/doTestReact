import { useState } from "react";
import UserInfo from "./userInfo";


function UserInfoContext({children}){
    const[user,setUser] = useState({
        name:'',
        email:'',
        profilePicture:'',
        totalTestData:[] ,
    })
    
    return(
        <UserInfo.Provider value={{user, setUser}}>
            {children}
        </UserInfo.Provider>
    )

}

export default UserInfoContext;