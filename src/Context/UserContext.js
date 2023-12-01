import React, { useEffect, useState } from 'react';
import ajaxUser from '../util/remote/ajaxUser';

const UserContext = React.createContext();

export const UserConsumer = UserContext.Consumer;

export const UserProvider = (props)=> {

   
   const [userList, setUserList] = useState(false);
   const [data, setData]= useState({page:"1"})

   useEffect(()=>{
         getUserList();
   }, [data])
  
   const getUserList =async()=>{

      const server_response = await ajaxUser.getUserList(data);

      if(server_response.status==="OK"){
         //store results
         setUserList(server_response.details);
      }else{
         //communicate error
         setUserList("404");
      }
   }
    
    return (
           <UserContext.Provider value={
               {
                    userList,
                  setData,
                  getUserList
               }
               }>
               {props.children}
           </UserContext.Provider>
        );
    
}

export default UserContext;