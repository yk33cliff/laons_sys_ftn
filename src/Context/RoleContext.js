import React, { useEffect, useState } from 'react';
import ajaxRole from '../util/remote/ajaxRole';
const RoleContext = React.createContext();

export const RoleConsumer = RoleContext.Consumer;

export const RoleProvider = (props)=> {

   
   const [roleList, setRoleList] = useState(false);
   const [data, setData]= useState({page:"1"})

   useEffect(()=>{
         getRoleList();
   }, [data])
  
   const getRoleList =async()=>{

      const server_response = await ajaxRole.fetchRoleList(data);
      if(server_response.status==="OK"){
         //store results
         setRoleList(server_response.details);
      }else{
         //communicate error
         setRoleList("404");
      }
   }
    
    return (
           <RoleContext.Provider value={
               {
                  
                  roleList,
                  setData,
                  getRoleList
               }
               }>
               {props.children}
           </RoleContext.Provider>
        );
    
}

export default RoleContext;