import React, { useEffect, useState } from 'react';
import ajaxIssueLog from '../util/remote/ajaxIssueLog';

const IssueLogContext = React.createContext();

export const IssueLogConsumer = IssueLogContext.Consumer;

export const IssueLogProvider = (props)=> {

//    const [projectName, setProjectName] = useState("QuickPost");
const [issueLogToday, setIssueLogToday] = useState(false);
   const [issueLogList, setIssueLogList] = useState(false);
   const [data, setData]= useState({page:"1"})

   useEffect(()=>{
        getIssueLogList();
   }, [data])
   useEffect(()=>{
      getIssueLogToday();
 }, [data])
  
   const getIssueLogList =async()=>{

      const server_response = await ajaxIssueLog.getIssueLogList(data);
   
      if(server_response.status==="OK"){
         //store results
         setIssueLogList(server_response.details);
      }else{
         //communicate error
         setIssueLogList("404");
      }
   }
   const getIssueLogToday =async()=>{

      const server_response = await ajaxIssueLog.getIssueLogToday(data);
   
      if(server_response.status==="OK"){
         //store results
         setIssueLogToday(server_response.details);
      }else{
         //communicate error
         setIssueLogToday("404");
      }
   }
    
    return (
           <IssueLogContext.Provider value={
               {
                issueLogList,
                issueLogToday,
                  setData,
                  getIssueLogList,
                  getIssueLogToday
               }
               }>
               {props.children}
           </IssueLogContext.Provider>
        );
    
}

export default IssueLogContext;