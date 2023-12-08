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

import AllUsers from "./Components/Users/AllUsers";
// import Clients from "./Components/Users/Clients";
import ViewLoanApplications from "./Components/LoanApplications/ViewLoanApplications";

import ViewLansToApprove from "./Components/loanProcessing/ViewLoansToApprove";
import AddSecurities from "./Components/loanProcessing/AddSecurities";
import ActiveLoans from "./Components/loans/ActiveLoans";
import PendingInstallments from "./Components/loans/PendingInstallments";
import LoanApplication from "./Components/loans/LoanApplication";

// import Dash from "./Pages/Dash";
import SuperProvider from "./Context/SuperProvider";

function App(props) {
  const [loggedIn, setLoggedIn] = useState(true);

  function checkLogin() {
    if (!window.localStorage.getItem("logs@user")) {
      setLoggedIn(false);
    } else {
      setLoggedIn(true);
    }
  }

  useEffect(() => {
    checkLogin();
  }, []);

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
                  !loggedIn ? <Navigate replace to="/login" /> : <Dash />
                }
              />
            </>
          )}
          {loggedIn && (
            <>
              <Route
                path="/"
                element={
                  !loggedIn ? <Navigate replace to="/login" /> : <Dash />
                }
              />
              <Route
                path="/login"
                element={loggedIn ? <Navigate replace to="/" /> : <LoginPage />}
              />
              <Route path="/" element={<Dash />} />

              {/* <Route path="/issue-logs-chat/:id" element={<IssueLogChat />} /> */}

              <Route path="*" element={<Dash />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/Dashboard/home" element={<Dash />} />

              <Route path="/Loans/types" element={<LoanTYpes />} />
              <Route path="/users/register" element={<CreateUser />} />
              <Route path="/users/View" element={<AllUsers />} />
              {/* <Route path="/clients/Add" element={<Clients />} /> */}
              <Route path="/applications/add" element={<LoanApplication />} />
              <Route
                path="/Applications/View"
                element={<ViewLoanApplications />}
              />
              <Route path="/loans/approve" element={<ViewLansToApprove />} />
              <Route path="/loans/record" element={<AddSecurities />} />
              <Route path="/loans/active" element={<ActiveLoans />} />
              <Route
                path="/Loans/pending_installments"
                element={<PendingInstallments />}
              />
            </>
          )}
        </Switch>
      </Router>
    </SuperProvider>
  );
}

export default App;
