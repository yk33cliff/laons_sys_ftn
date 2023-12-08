import React, { useEffect, useState } from "react";
import ajaxPermission from "../util/remote/ajaxPermission";

const PermissionContext = React.createContext();

export const PermissionConsumer = PermissionContext.Consumer;

export const PermissionProvider = (props) => {
  const [permissionList, setPermissionList] = useState(false);
  const [data, setData] = useState({ page: "1" });

  useEffect(() => {
    getPermissionList();
  }, [data]);

  const getPermissionList = async () => {
    const server_response = await ajaxPermission.fetchDistributionList(data);
    //   console.log(server_response)
    if (server_response.status === "OK") {
      //store results
      setPermissionList(server_response.details);
    } else {
      //communicate error
      setPermissionList("404");
    }
  };

  return (
    <PermissionContext.Provider
      value={{
        permissionList,
        setData,
        getPermissionList,
      }}
    >
      {props.children}
    </PermissionContext.Provider>
  );
};

export default PermissionContext;
