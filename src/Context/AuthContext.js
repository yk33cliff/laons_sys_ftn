import React, { useEffect, useState } from 'react';
import functions from '../util/functions';
import ajaxUser from '../util/remote/ajaxUser';

const AuthContext = React.createContext();

export const AuthConsumer = AuthContext.Consumer;

export const AuthProvider = (props)=> {

    // const [users, setUser] = useState({
    //     username:"Andrew",
    //     firstName:"Andre",
    //     lastName:"Ssekirime"
    // })
    const [userId, setUserId] = useState(functions.sessionGuard());
    const [permissionLists, setPermissionList] = useState([]);
    const [user,setUser] = useState(false)
    
    useEffect(()=>{
        getUserAccess();
        getUserInfo();
    }, [userId])
    


    const getUserAccess=async()=>{
        if(!userId)
        {
            return false
        }
        const server_response = await ajaxUser.getUserPermissionCodes(userId); 
      
        if(server_response.status==="OK")
        {  
            setPermissionList(server_response.details);
        
        }else{
           // alert("Something went wrong loading YEXP, check your connection or contact system admin")
        }
    }

    const getUserInfo=async()=>{
       
        const server_response = await ajaxUser.fetchSingleUser(userId); 

        if(server_response.status==="OK")
        {  

            setUser(server_response.details);
        
        }else{
           // alert("Something went wrong loading YEXP, check your connection or contact system admin")
        }
    }
        
    
    return (
           <AuthContext.Provider value={
               {
                   user,
                   userId,
                   permissionLists,
                getUserInfo,
                getUserAccess
               }
               }>
               {props.children}
           </AuthContext.Provider>
        );
    
}

export default AuthContext;