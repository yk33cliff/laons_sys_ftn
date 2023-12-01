import React, { useEffect, useState } from 'react';
import ajaxTeam from '../util/remote/ajaxTeam';

const TeamContext = React.createContext();

export const TeamConsumer = TeamContext.Consumer;

export const TeamProvider = (props)=> {

//    const [projectName, setProjectName] = useState("QuickPost");
   const [teamList, setTeamList] = useState(false);
   const [data, setData]= useState({page:"1"})
   const [loading,setLoading] = useState(true)

   useEffect(()=>{
      
         getTeamList();
   }, [data])
  
   const getTeamList =async()=>{
      // setLoading(true)

      const server_response = await ajaxTeam.getTeamList(data);
      // setTimeout(() => setLoading(false), 4000);
      // setLoading(false)

      if(server_response.status==="OK"){
         //store results
         setTeamList(server_response.details);

      }else{
         //communicate error
         setTeamList("404");
      }
   }
    
    return (
           <TeamContext.Provider value={
               {
                  teamList,
                  setData,
                  getTeamList
               }
               }>
               {props.children}
           </TeamContext.Provider>
        );
    
}

export default TeamContext;