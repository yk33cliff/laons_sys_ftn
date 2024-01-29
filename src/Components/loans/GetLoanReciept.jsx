import React, {useContext, useEffect, useState} from "react";
import AppContainer from "../Structure/AppContainer";

import useStateCallback from "../../util/customHooks/useStateCallback";

import ReactPaginate from "react-paginate";
import ajaxLaons from "../../util/remote/ajaxLaons";
import LoanCashReceipt from "./LoanCashReciept";
import toast, {Toaster} from "react-hot-toast";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function GetLoanReciept() {
  const [reciept, setReciept] = useStateCallback(false);
  const handleGuarantors = (id) => {
    setReciept(false, () =>
      setReciept(<LoanCashReceipt isOpen={true} id={id} />)
    );
  };

  const [sdate, setSdate] = useState("");
  const [edate, setEdate] = useState("");
  useEffect(() => {
    payment_reciepts();
  }, []);
  const [Payments, setPayments] = useState("");

  const payment_reciepts = async () => {
    var data = {
      start_date: sdate,
      end_date: edate,
    };
    const server_response = await ajaxLaons.getReciepts(data);

    if (server_response.status === "OK") {
      setPayments(server_response.details);
    }
    // else if (server_response.status === "Fail") {
    // toast.error(server_response.message);
    // }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (edate && sdate) {
      payment_reciepts();
    } else {
      toast.error("Error: Both start and end dates are required");
    }
  };

  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 20;

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
              <div
                className="col-sm-12  col-md-12 col-lg-12 col-xl-8 mt-xl-4 mb-4"
                style={{
                  borderRadius: "20px",
                  padding: "0",
                  margin: "0",
                }}>
                <div className="card custom-card card-dashboard-calendar ">
                  <div className="card-body">
                    <div className="col-sm-12  col-md-12 col-lg-12 col-xl-12">
                      <form action="" onSubmit={(e) => handleSubmit(e)}>
                        <div className="row">
                          <div className="col-sm-12  col-md-4 col-lg-4 col-xl-4 ">
                            <div className="col-12">
                              <div className="row">
                                <label className="col-4">FROM:</label>

                                <span className="col-8">
                                  <DatePicker
                                    selected={sdate}
                                    onChange={(e) => setSdate(e)}
                                    dateFormat="dd/MM/yyyy"
                                    placeholderText="dd/MM/yyyy"
                                    className="form-control text-success"
                                  />
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-12  col-md-4 col-lg-4 col-xl-4 ">
                            <div className="col-12">
                              <div className="row">
                                <label className="col-4">TO:</label>

                                <span className="col-8">
                                  <DatePicker
                                    selected={edate}
                                    onChange={(e) => setEdate(e)}
                                    dateFormat="dd/MM/yyyy"
                                    placeholderText="dd/MM/yyyy"
                                    className="form-control text-success"
                                  />
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-12  col-md-4 col-lg-4 col-xl-4 ">
                            <div className="col-md-12 ">
                              <div className="form-group mb-0">
                                <button
                                  type="submit"
                                  className="btn col-lg-12 col-md-12 btn-primary">
                                  submit
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
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
                          <td>{loan.amount_formated}</td>
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
        </div>
      </AppContainer>
    </div>
  );
}

export default GetLoanReciept;
