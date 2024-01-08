import React, {useContext, useState} from "react";
import AppContainer from "../Structure/AppContainer";
import LoansContext from "../../Context/LoansContext";
import useStateCallback from "../../util/customHooks/useStateCallback";
import LoanSlip from "./LoanSlip";
import LoanStatement from "./LoanStatement";
import AddLoanpayment from "./AddLoanpayment";
import {RenderSecure} from "../../util/script/RenderSecure";
import ViewSecurities from "./ViewSecurities";
import ViewGuarantors from "./ViewGuarantors";
import ReactPaginate from "react-paginate";

function ActiveLoans() {
  const {activeLoans} = useContext(LoansContext);
  // console.log(activeLoans);
  const [modal, setModal] = useStateCallback(false);

  const handleSlip = (id, contact, name1, name2) => {
    setModal(false, () =>
      setModal(
        <LoanSlip
          isOpen={true}
          id={id}
          name1={name1}
          name2={name2}
          contact={contact}
        />
      )
    );
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

  const paymentHandler = (id, Customer) => {
    setPayment(false, () =>
      setPayment(<AddLoanpayment isOpen={true} id={id} customer={Customer} />)
    );
  };
  //  view model securities
  const [securities, setSecurities] = useStateCallback(false);
  const handleSecurities = (id) => {
    setSecurities(false, () =>
      setSecurities(<ViewSecurities isOpen={true} id={id} customer={id} />)
    );
  };

  //  view model guarantors
  const [guarantors, setGuarantors] = useStateCallback(false);
  const handleGuarantors = (id, Customer) => {
    setGuarantors(false, () =>
      setGuarantors(<ViewGuarantors isOpen={true} id={id} state={2} />)
    );
  };

  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 10; // Change this value based on your preference

  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
  };

  const offset = currentPage * itemsPerPage;
  const paginatedItems = Array.isArray(activeLoans)
    ? activeLoans.slice(offset, offset + itemsPerPage)
    : [];
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
              {securities}
              {guarantors}

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
                        <th>
                          Loan <br /> Balance
                        </th>
                        <th>
                          Deadline <br /> date{" "}
                        </th>
                        <th>
                          more <br />
                          Details{" "}
                        </th>
                        <th>loan slip</th>
                        {/* <RenderSecure code="LOANS-STMNT">
                          <th>
                            loan <br /> statment
                          </th>
                        </RenderSecure> */}

                        <RenderSecure code="ADD-PAYMNT">
                          <th>
                            add <br /> payment
                          </th>
                        </RenderSecure>
                      </tr>
                    </thead>
                    <tbody>
                      {paginatedItems.map((loan, key) => (
                        <tr key={key}>
                          <td>{key + 1}</td>

                          <td>
                            {loan.customer.name} &nbsp;
                            {loan.customer.last_name}
                          </td>
                          <td>{loan.customer.contact}</td>
                          <td>{loan.loan_type}</td>
                          <td>{loan.amount}</td>
                          <td>{loan.date_activated}</td>
                          <td>{loan.duration}</td>
                          <td>{loan.loanBalance}</td>

                          <td>{loan.deadline}</td>
                          <td>
                            <span>
                              <button
                                className="badge  text-dark bg-light bg-pill"
                                style={{fontSize: "14px"}}
                                onClick={() => handleSecurities(loan.id)}>
                                Securities
                              </button>
                              <br />
                              <button
                                className="badge  text-white bg-primary bg-pill mt-2"
                                style={{fontSize: "14px"}}
                                onClick={() => handleGuarantors(loan.id)}>
                                Gurantors
                              </button>
                            </span>
                          </td>
                          <td>
                            <button
                              className="badge  text-white bg-secondary bg-pill"
                              style={{fontSize: "14px"}}
                              onClick={() =>
                                handleSlip(
                                  loan.id,
                                  loan.customer.contact,
                                  loan.customer.first_name,
                                  loan.customer.last_name
                                )
                              }>
                              Loan_slip
                            </button>
                          </td>
                          {/* <RenderSecure code="LOANS-STMNT">
                            <td>
                              <button
                                className="badge  text-white bg-primary bg-pill"
                                style={{fontSize: "14px"}}
                                onClick={() => handleStatement(loan.id)}>
                                statment
                              </button>
                            </td>
                          </RenderSecure> */}
                          <RenderSecure code="ADD-PAYMNT">
                            <td>
                              <button
                                className="badge  text-white bg-secondary bg-pill"
                                style={{fontSize: "14px"}}
                                onClick={() =>
                                  paymentHandler(loan.id, loan.customer.id)
                                }>
                                +payment
                              </button>
                            </td>
                          </RenderSecure>
                        </tr>
                      ))}
                    </tbody>
                  </table>

                  <ReactPaginate
                    pageCount={Math.ceil(activeLoans.length / itemsPerPage)}
                    pageRangeDisplayed={3}
                    marginPagesDisplayed={1}
                    onPageChange={handlePageClick}
                    containerClassName={"pagination"}
                    activeClassName={"active"}
                    nextLabel={"Next"}
                    previousLabel={"Previous"}
                    breakLabel={"..."}
                    pageLinkClassName={"page-link"}
                    nextClassName={"page-item"}
                    nextLinkClassName={"page-link"}
                    previousClassName={"page-item"}
                    previousLinkClassName={"page-link"}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </AppContainer>
    </div>
  );
}

export default ActiveLoans;
