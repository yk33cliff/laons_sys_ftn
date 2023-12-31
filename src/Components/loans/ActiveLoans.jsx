import React, {useContext} from "react";
import AppContainer from "../Structure/AppContainer";
import LoansContext from "../../Context/LoansContext";
import useStateCallback from "../../util/customHooks/useStateCallback";
import LoanSlip from "./LoanSlip";
import LoanStatement from "./LoanStatement";
import AddLoanpayment from "./AddLoanpayment";

function ActiveLoans() {
  const {activeLoans} = useContext(LoansContext);
  // console.log(activeLoans);
  const [modal, setModal] = useStateCallback(false);
  // loan slip handler
  const handleSlip = (id) => {
    setModal(false, () => setModal(<LoanSlip isOpen={true} id={id} />));
  };
  // loanstatement handlers
  const [statment, setStatement] = useStateCallback(false);

  const handleStatement = (id) => {
    setStatement(false, () =>
      setStatement(<LoanStatement isOpen={true} id={id} />)
    );
  };
  // payment modal
  const [payment, setPayment] = useStateCallback(false);

  const paymentHandler = (id) => {
    setPayment(false, () =>
      setPayment(<AddLoanpayment isOpen={true} id={id} />)
    );
  };
  return (
    <div>
      <AppContainer title="Active loans">
        {" "}
        <div className="row row-sm">
          <div className="col-sm-12  col-md-12 col-lg-12 col-xl-12 mt-xl-4">
            <div className="card custom-card card-dashboard-calendar pb-0">
              <label className="main-content-label mb-2 pt-1">
                Active /currently runnning loans
              </label>
              {modal}
              {statment}
              {payment}

              <div className="card-body">
                <div className="table-responsive">
                  <table className="table card-table text-nowrap table-bordered border-top">
                    <thead>
                      <tr>
                        <th>NO</th>
                        <th>Customer </th>
                        <th>
                          Customer <br /> contact
                        </th>
                        <th>Loan_type</th>
                        <th>Amount</th>
                        <th>start date </th>
                        <th>
                          Loan <br />
                          duration{" "}
                        </th>
                        <th>Deadline date </th>
                        {/* <th>loan slip</th> */}
                        <th>
                          loan <br /> statment
                        </th>
                        <th>
                          add <br /> payment
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {Array.isArray(activeLoans) &&
                        activeLoans.map((loan, key) => (
                          <tr key={key}>
                            <td>{key + 1}</td>

                            <td>
                              {loan.customer.first_name} &nbsp;
                              {loan.customer.last_name}
                            </td>
                            <td>{loan.customer.contact}</td>
                            <td>{loan.loan_type}</td>
                            <td>{loan.amount}</td>
                            <td>{loan.date_activated}</td>
                            <td>{loan.duration}</td>
                            <td>{loan.deadline}</td>
                            {/* <td>
                              <span>
                                <button
                                  className="badge  text-white bg-secondary bg-pill"
                                  style={{fontSize: "14px"}}
                                  onClick={() => handleSlip(loan.id)}>
                                  loan slip
                                </button>
                              </span>
                            </td> */}
                            <td>
                              <button
                                className="badge  text-white bg-primary bg-pill"
                                style={{fontSize: "14px"}}
                                onClick={() => handleStatement(loan.id)}>
                                statment
                              </button>
                            </td>
                            <td>
                              <button
                                className="badge  text-white bg-secondary bg-pill"
                                style={{fontSize: "14px"}}
                                onClick={() =>
                                  paymentHandler(loan.customer.id)
                                }>
                                +payment
                              </button>
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          {/* col end */}
          <div className="col-sm-12  col-md-4 col-lg-4 col-xl-4 mt-xl-4">
            <div className="card custom-card card-dashboard-calendar pb-0">
              <label className="main-content-label mb-2 pt-1">
                Recent Transactions
              </label>
              {/* <canvas id="project" className="chart-dropshadow2 ht-330" /> */}
            </div>
          </div>
          {/* col end */}
        </div>
      </AppContainer>
    </div>
  );
}

export default ActiveLoans;
