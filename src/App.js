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
import LoansPopularity from "./graphs/LoansPopularity";
import LoanManagement from "./Components/loans/LoanManagement";
import functions from "./util/functions";
import ActivateAccount from "./Pages/ActivateAccount";
import UserPermissions from "./Components/Users/UserPermissions";
import LoanNotPaid from "./Components/loans/LoanNotPaid";
import CompletedLoans from "./Pages/loans/CompletedLoans";
import DefaultedLoans from "./Pages/loans/DefaultedLoans";
import PaymentReports from "./Pages/loans/PaymentReports";
import LoansReports from "./Pages/loans/LoansReports";
import PrincipalDIsbusted from "./Pages/loans/PrincipalDIsbusted";
import InterestReport from "./Pages/loans/InterestReport";
import FinesReport from "./Pages/loans/FinesReport";
import PrincipalRepayment from "./Pages/loans/PrincipalRepayment";

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

  const secure = functions.checkSecureAccount();

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
              <Route path="/LoanManagement/:id" element={<LoanManagement />} />
              <Route path="/Loans/paid_off" element={<CompletedLoans />} />
              <Route path="/Loans/defaulted" element={<DefaultedLoans />} />
              <Route path="/reports/payments" element={<PaymentReports />} />
              <Route path="/reports/loan_reports" element={<LoansReports />} />
              <Route
                path="/reports/Principal_disbursed"
                element={<PrincipalDIsbusted />}
              />
              <Route
                path="/reports/Pricipal_repayment"
                element={<PrincipalRepayment />}
              />
              <Route
                path="/reports/Interests_reports"
                element={<InterestReport />}
              />
              <Route path="/reports/Fines_report" element={<FinesReport />} />
              <Route
                path="/Loans/pending_installments"
                element={<PendingInstallments />}
              />
              <Route path="/Installment/not_paid" element={<LoanNotPaid />} />
              <Route path="users/permissions" element={<UserPermissions />} />
              <Route path="/slip" element={<LoansPopularity />} />
            </>
          )}
        </Switch>
      </Router>
    </SuperProvider>
  );
}

export default App;
