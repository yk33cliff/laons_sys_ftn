import React, {useEffect, useState} from "react";
import {
  Route,
  BrowserRouter as Router,
  Routes as Switch,
  Navigate,
  redirect,
} from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import LoginPage from "./Pages/LoginPage";
import LoanTYpes from "./Components/loans/LoanTYpes";
import CreateUser from "./Pages/users/CreateUser";
import ViewLoanApplications from "./Pages/loans/ViewLoanApplications";
import ActiveLoans from "./Components/loans/ActiveLoans";
import PendingInstallments from "./Components/loans/PendingInstallments";
import LoanApplication from "./Pages/loans/LoanApplication";
import SuperProvider from "./Context/SuperProvider";
import ViewAllClients from "./Pages/users/ViewAllClients";
import CreateClients from "./Pages/users/CreateClients";
import ClientProfile from "./Pages/users/ClientProfile";
import GetLoanReciept from "./Components/loans/GetLoanReciept";
import ApprovedLoanNotcashed from "./Components/loans/ApprovedLoanNotcashed";
import ImageModal from "./Components/loans/ImageModal";
import LoanManagement from "./Components/loans/LoanManagement";
import functions from "./util/functions";
import ActivateAccount from "./Pages/ActivateAccount";

function App(props) {
  const [loggedIn, setLoggedIn] = useState(true);
  // const [secure, setSecure] = useState(false);

  function checkLogin() {
    if (!window.localStorage.getItem("logs@user")) {
      setLoggedIn(false);
    } else {
      setLoggedIn(true);
    }
  }

  const secure = functions.checkSecureAccount();
  // function checkSecure() {
  //   const secure = functions.checkSecureAccount();

  //   if (secure === 1) {
  //     setSecure(true);
  //   } else {
  //     setSecure(false);
  //   }
  // }
  // console.log(secure);

  useEffect(() => {
    checkLogin();
    // checkSecure();
  }, []);

  // console.log(loggedIn);

  return (
    <SuperProvider>
      <Router forceRefresh={false}>
        <Switch>
          {!loggedIn && (
            <>
              <Route path="*" element={<LoginPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route
                path="/"
                element={
                  !loggedIn ? <Navigate replace to="/login" /> : <Dashboard />
                }
              />
            </>
          )}

          {loggedIn && secure * 1 === 0 && (
            <>
              <Route path="/Activate/account" element={<ActivateAccount />} />
              <Route
                path="/"
                element={<Navigate replace to="/Activate/account" />}
              />
            </>
          )}

          {loggedIn && secure * 1 === 1 && (
            <>
              <Route path="*" element={<Dashboard />} />
              <Route path="/" element={<Dashboard />} />
              <Route path="/loan_reciepts/view" element={<GetLoanReciept />} />
              <Route
                path="/Approved_and_not_yet_paid/view"
                element={<ApprovedLoanNotcashed />}
              />
              <Route path="*" element={<Dashboard />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/Dashboard/home" element={<Dashboard />} />

              <Route path="/Loans/types" element={<LoanTYpes />} />
              <Route path="/users/register" element={<CreateUser />} />

              <Route path="/applications/add" element={<LoanApplication />} />
              <Route
                path="/Applications/View"
                element={<ViewLoanApplications />}
              />

              <Route path="/loans/active" element={<ActiveLoans />} />
              <Route path="/clients/view" element={<ViewAllClients />} />
              <Route path="/clients/Add" element={<CreateClients />} />
              <Route path="/profile/:id" element={<ClientProfile />} />
              <Route path="/Loan_management/:id" element={<LoanManagement />} />

              <Route
                path="/Loans/pending_installments"
                element={<PendingInstallments />}
              />
              {/* <Route path="/slip" element={<ImageModal />} /> */}
            </>
          )}
        </Switch>
      </Router>
    </SuperProvider>
  );
}

export default App;
