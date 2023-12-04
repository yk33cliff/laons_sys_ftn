// import "./App.css";
// import "./chat.css";

import React, { useEffect, useState } from "react";
import {
  Route,
  BrowserRouter as Router,
  Routes as Switch,
  Navigate,
} from "react-router-dom";
import Dash from "./Dash";
import LoginPage from "./Pages/LoginPage";
import Loader from "./Components/Common/Loader";
import LoanTYpes from "./Components/loans/LoanTYpes";
import CreateUser from "./Components/Users/CreateUser";
import ViewSystemUsers from "./Components/Users/ViewSystemUsers";
import AllUsers from "./Components/Users/AllUsers";
import Clients from "./Components/Users/Clients";
import AddApplication from "./Components/LoanApplications/AddLoanApplication";
import AddLoanApplication from "./Components/LoanApplications/AddLoanApplication";
import ViewLoanApplications from "./Components/LoanApplications/ViewLoanApplications";
import RecordLoanApplicationFees from "./Components/LoanApplications/RecordLoanApplicationFees";
import ViewLansToApprove from "./Components/loanProcessing/ViewLoansToApprove";
import AddSecurities from "./Components/loanProcessing/AddSecurities";
import ActiveLoans from "./Components/loans/ActiveLoans";
import PendingInstallments from "./Components/loans/PendingInstallments";

// import DashboardPage from "./Pages/DashboardPage";
// import SuperProvider from "./Context/SuperProvider";

function App(props) {
  const [loggedIn, setLoggedIn] = useState(true);

  function checkLogin() {
    if (!window.localStorage.getItem("@user")) {
      setLoggedIn(false);
    } else {
      setLoggedIn(true);
    }
  }

  useEffect(() => {
    checkLogin();
  }, []);

  return (
    // <SuperProvider>
    <Router forceRefresh={false}>
      <Switch>
        {/* {!loggedIn && ( */}
        <>
          {/* <Route path="*" element={<LoginPage />} /> */}
          {/* <Route path="/login" element={<LoginPage />} />
              <Route
                path="/"
                element={
                  !loggedIn ? (
                    <Navigate replace to="/login" />
                  ) : (
                    <DashboardPage />
                  )
                }
              />
            </>
          )} */}
          {/* {loggedIn && (
            <>
              <Route
                path="/"
                element={
                  !loggedIn ? (
                    <Navigate replace to="/login" />
                  ) : (
                    <DashboardPage />
                  )
                }
              /> */}
          {/* <Route
            path="/login"
            element={loggedIn ? <Navigate replace to="/" /> : <LoginPage />}
          />
          <Route path="/" element={<DashboardPage />} /> */}
          {/* <RenderSecure > */}
        </>
        {/* )} */}
        <Route path="*" element={<Dash />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/Dashboard/home" element={<Dash />} />
        <Route path="/Loans/types" element={<LoanTYpes />} />
        <Route path="/users/register" element={<CreateUser />} />
        <Route path="/users/View" element={<AllUsers />} />
        <Route path="/clients/Add" element={<Clients />} />
        <Route path="/applications/add" element={<AddLoanApplication />} />
        <Route path="/Applications/View" element={<ViewLoanApplications />} />
        <Route path="/loans/approve" element={<ViewLansToApprove />} />
        <Route path="/loans/record" element={<AddSecurities />} />
        <Route path="/loans/active" element={<ActiveLoans />} />
        <Route
          path="/Loans/pending_installments"
          element={<PendingInstallments />}
        />

        {/* <Route path="/" element={<Loader />} /> */}
        {/* <Route path="/" element={<Loader />} /> */}
      </Switch>
    </Router>
    // </SuperProvider>
  );
}

export default App;
