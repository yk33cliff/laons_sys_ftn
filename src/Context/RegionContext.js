import React, { useEffect, useState } from 'react';
import ajaxRegion from '../util/remote/ajaxRegion';

const RegionContext = React.createContext();

export const RegionConsumer = RegionContext.Consumer;

export const RegionProvider = (props)=> {

//    const [projectName, setProjectName] = useState("QuickPost");
   const [regionList, setRegionList] = useState(false);
   const [data, setData]= useState({page:"1"})

   useEffect(()=>{
        getRegionList();
   }, [data])
  
   const getRegionList =async()=>{

      const server_response = await ajaxRegion.getRegionList(data);

      if(server_response.status==="OK"){
         //store results
         setRegionList(server_response.details);
      }else{
         //communicate error
         setRegionList("404");
      }
   }
    
    return (
           <RegionContext.Provider value={
               {
                    regionList,
                  setData,
                  getRegionList
               }
               }>
               {props.children}
           </RegionContext.Provider>
        );
    
}

export default RegionContext;