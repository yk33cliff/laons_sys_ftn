import React, { useEffect, useState } from 'react';
import ajaxProject from '../util/remote/ajaxProject';

const ProjectContext = React.createContext();

export const ProjectConsumer = ProjectContext.Consumer;

export const ProjectProvider = (props)=> {

   const [projectName, setProjectName] = useState("QuickPost");
   const [projectList, setProjectList] = useState(false);
   const [data, setData]= useState({page:"1"})

   useEffect(()=>{
         getProjectList();
   }, [data])
  
   const getProjectList =async()=>{

      const server_response = await ajaxProject.fetchProjectList(data);
      // console.log(server_response)
      if(server_response.status==="OK"){
         //store results
         setProjectList(server_response.details);
      }else{
         //communicate error
         setProjectList("404");
      }
   }
    
    return (
           <ProjectContext.Provider value={
               {
                  projectName,
                  projectList,
                  setData,
                  setProjectName,
                  getProjectList
               }
               }>
               {props.children}
           </ProjectContext.Provider>
        );
    
}

export default ProjectContext;