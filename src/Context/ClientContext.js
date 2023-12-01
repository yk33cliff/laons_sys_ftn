import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ajaxClient from '../util/remote/ajaxClient';

const ClientContext = React.createContext();

export const ClientConsumer = ClientContext.Consumer;

export const ClientProvider = (props)=> {

   
   const [clientList, setClientList] = useState(false);
   const [data, setData]= useState({page:"1"})
   

   useEffect(()=>{
         getClientList();
   }, [data])
   
  
   const getClientList =async()=>{

      const server_response = await ajaxClient.fetchClientList(data);
    //   console.log(server_response)
      if(server_response.status==="OK"){
         //store results
         setClientList(server_response.details);
      }else{
         //communicate error
         setClientList("404");
      }
   }

   
    
    return (
           <ClientContext.Provider value={
               {
                  
                 
                  clientList,
                  setData,
                  getClientList
               }
               }>
               {props.children}
           </ClientContext.Provider>
        );
    
}

export default ClientContext;