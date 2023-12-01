import React, { useEffect, useState } from 'react';
import ajaxProjectAllocation from '../util/remote/ajaxProjectAllocation';

const ProjectAllocationContext = React.createContext();

export const ProjectAllocationConsumer = ProjectAllocationContext.Consumer;

export const ProjectAllocationProvider = (props)=> {

   const [ProjectAllocationName, setProjectAllocationName] = useState("QuickPost");
   const [ProjectAllocationList, setProjectAllocationList] = useState(false);
   const [data, setData]= useState({page:"1"})

   useEffect(()=>{
         getProjectAllocationList();
   }, [data])
  
   const getProjectAllocationList =async()=>{

      const server_response = await ajaxProjectAllocation.fetchProjectAllocationList(data);
      // console.log(server_response)
      if(server_response.status==="OK"){
         //store results
         setProjectAllocationList(server_response.details);
      }else{
         //communicate error
         setProjectAllocationList("404");
      }
   }
    
    return (
           <ProjectAllocationContext.Provider value={
               {
                  ProjectAllocationName,
                  ProjectAllocationList,
                  setData,
                  setProjectAllocationName,
                  getProjectAllocationList
               }
               }>
               {props.children}
           </ProjectAllocationContext.Provider>
        );
    
}

export default ProjectAllocationContext;