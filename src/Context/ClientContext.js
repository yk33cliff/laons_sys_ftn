import React, {useEffect, useState} from "react";

import ajaxUser from "../util/remote/ajaxUser";

const ClientContext = React.createContext();

export const ClientConsumer = ClientContext.Consumer;

export const ClientProvider = (props) => {
  const [clientList, setClientList] = useState(false);
  const [data, setData] = useState({page: "1"});

  useEffect(() => {
    getClientList();
  }, []);

  const getClientList = async () => {
    const server_response = await ajaxUser.fetchCustomers();
    //   console.log(server_response)
    if (server_response.status === "OK") {
      setClientList(server_response.details);
    } else {
      //communicate error
      setClientList("");
    }
  };

  return (
    <ClientContext.Provider
      value={{
        clientList,
        getClientList,
      }}>
      {props.children}
    </ClientContext.Provider>
  );
};

export default ClientContext;
