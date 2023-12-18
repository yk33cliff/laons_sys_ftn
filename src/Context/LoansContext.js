import React, {useEffect, useState} from "react";

// import ajaxLoanTypes from "../util/remote/ajaxLoanTypes";
import ajaxLaons from "../util/remote/ajaxLaons";
import functions from "../util/functions";

const LoansContext = React.createContext();

export const LoansConsumer = LoansContext.Consumer;

export const LoansProvider = (props) => {
  const userId = functions.sessionGuard();
  const role_id = functions.role_user();

  const [LoansToApprove, setLoansToApprove] = useState(false);
  const [activeLoans, setActiveLoans] = useState(false);
  const [data, setData] = useState({page: "1"});

  useEffect(() => {
    getLoansToApprove();
    getActiveLoans();
  }, []);
  var dat = {id: userId, role: role_id};
  const getLoansToApprove = async () => {
    const server_response = await ajaxLaons.fetchLoansToApprove(dat);

    if (server_response.status === "OK") {
      //store results<></><></>
      setLoansToApprove(server_response.details);
    } else {
      //communicate error
      setLoansToApprove("404");
    }
  };
  const getActiveLoans = async () => {
    const server_response = await ajaxLaons.fetchActiveLoans();

    if (server_response.status === "OK") {
      //store results<></><></>
      setActiveLoans(server_response.details);
    } else {
      //communicate error
      setLoansToApprove("404");
    }
  };

  return (
    <LoansContext.Provider
      value={{
        LoansToApprove,
        activeLoans,
        setData,
        getLoansToApprove,
      }}>
      {props.children}
    </LoansContext.Provider>
  );
};

export default LoansContext;
