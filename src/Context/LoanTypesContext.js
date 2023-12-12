import React, {useEffect, useState} from "react";

// import ajaxLoanTypes from "../util/remote/ajaxLoanTypes";
import ajaxLaons from "../util/remote/ajaxLaons";

const LoanTypesContext = React.createContext();

export const LoanTypesConsumer = LoanTypesContext.Consumer;

export const LoanTypesProvider = (props) => {
  const [LoanTypes, setLoanList] = useState(false);
  const [data, setData] = useState({page: "1"});

  useEffect(() => {
    getLoanList();
  }, []);

  const getLoanList = async () => {
    const server_response = await ajaxLaons.fetchLoanTypeList();
    //   console.log(server_response)
    if (server_response.status === "OK") {
      //store results<></><></>
      setLoanList(server_response.details);
    } else {
      //communicate error
      setLoanList("404");
    }
  };

  return (
    <LoanTypesContext.Provider
      value={{
        LoanTypes,
        setData,
        getLoanList,
      }}>
      {props.children}
    </LoanTypesContext.Provider>
  );
};

export default LoanTypesContext;
