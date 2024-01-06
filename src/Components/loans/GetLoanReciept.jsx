import React, {useContext, useEffect, useState} from "react";
import AppContainer from "../Structure/AppContainer";
import LoansContext from "../../Context/LoansContext";
import useStateCallback from "../../util/customHooks/useStateCallback";

import {RenderSecure} from "../../util/script/RenderSecure";
import ViewSecurities from "./ViewSecurities";

import ReactPaginate from "react-paginate";
import ajaxLaons from "../../util/remote/ajaxLaons";
import LoanCashReceipt from "./LoanCashReciept";

function GetLoanReciept() {
  const [reciept, setReciept] = useStateCallback(false);
  const handleGuarantors = (id) => {
    setReciept(false, () =>
      setReciept(<LoanCashReceipt isOpen={true} id={id} />)
    );
  };
  useEffect(() => {
    payment_reciepts();
  }, []);
  const [Payments, setPayments] = useState("");

  const payment_reciepts = async () => {
    const server_response = await ajaxLaons.getReciepts();

    if (server_response.status === "OK") {
      setPayments(server_response.details);
    }
    // else if (server_response.status === "Fail") {
    // toast.error(server_response.message);
    // }
  };

  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 15;

  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
  };

  const offset = currentPage * itemsPerPage;
  const paginatedItems = Array.isArray(Payments)
    ? Payments.slice(offset, offset + itemsPerPage)
    : [];
  return (
    <div>
      <AppContainer title="Payment Reciepts">
        <div className="row row-sm">
          <div className="col-sm-12  col-md-12 col-lg-12 col-xl-12 mt-xl-4">
            <div className="card custom-card card-dashboard-calendar pb-0">
              <label className="main-content-label mb-2 pt-1">
                Loan reciepts
              </label>
              {reciept}

              <div className="card-body">
                <div className="table-responsive">
                  <table className="table card-table text-nowrap table-bordered border-top">
                    <thead>
                      <tr>
                        <th>NO</th>
                        <th>Customer </th>
                        <th>amount</th>
                        <th>reason</th>
                        <th>date</th>
                        <th>added_by</th>
                        <th>Print</th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* {
            "id": "10",
            "customer": "customer customer",
            "amount": "100,020,222",
            "Amount_words": "One hundred million twenty thousand two hundred twenty-two",
            "reason": "Wallet balance deposite",
            "date": "2024-Jan-05",
            "added_by": "Super Admin"
        }, */}
                      {paginatedItems.map((loan, key) => (
                        <tr key={key}>
                          <td>{key + 1}</td>

                          <td>{loan.customer}</td>
                          <td>{loan.amount}</td>
                          <td>{loan.reason}</td>

                          <td>{loan.date}</td>
                          <td>{loan.added_by}</td>
                          <td>
                            <button
                              className="badge  text-dark bg-light bg-pill"
                              style={{fontSize: "14px"}}
                              onClick={() => handleGuarantors(loan)}>
                              Print Reciept
                            </button>
                          </td>

                          {/* <RenderSecure code="LOANS-STMNT">
                            <td>
                              <button
                                className="badge  text-white bg-primary bg-pill"
                                style={{fontSize: "14px"}}>
                                statment
                              </button>
                            </td>
                          </RenderSecure> */}
                        </tr>
                      ))}
                    </tbody>
                  </table>

                  <ReactPaginate
                    pageCount={Math.ceil(Payments.length / itemsPerPage)}
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

export default GetLoanReciept;
