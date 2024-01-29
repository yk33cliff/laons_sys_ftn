import React, {useEffect, useState} from "react";
import AppContainer from "../../Components/Structure/AppContainer";
import ajaxLaons from "../../util/remote/ajaxLaons";
import toast, {Toaster} from "react-hot-toast";
import ReactPaginate from "react-paginate";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ajaxDashboard from "../../util/remote/ajaxDashboard";
function LoansReports() {
  useEffect(() => {
    getApplicationFeesPayments();
    getInsurancePayments();
    getProcessingFeesPayment();
    get_insurance_earnings();
    get_application_fees_earnings();
    get_processing_fee_earnings();
  }, []);
  const [insuranceE, setInsuranceE] = useState("");
  const get_insurance_earnings = async () => {
    const server_response = await ajaxDashboard.get_loan_insurance_earnings();

    if (server_response.status === "OK") {
      setInsuranceE(server_response.details);
    } else {
      setInsuranceE("");
    }
  };
  const [applications, setApplications] = useState("");

  const get_application_fees_earnings = async () => {
    const server_response = await ajaxDashboard.get_application_fees_earnings();

    if (server_response.status === "OK") {
      setApplications(server_response.details);
    } else {
      setApplications("");
    }
  };
  const [process, setProcess] = useState("");

  const get_processing_fee_earnings = async () => {
    const server_response = await ajaxDashboard.get_Processing_fees_earnings();

    if (server_response.status === "OK") {
      setProcess(server_response.details);
    } else {
      setProcess("");
    }
  };

  /**
   *  processing fees works=======================================
   */
  const [sPdate, setSpdate] = useState("");
  const [ePdate, setEpdate] = useState("");

  const [processing, setProcessing] = useState("");
  const getProcessingFeesPayment = async () => {
    var data = {
      start_date: sPdate,
      end_date: ePdate,
    };
    const server_response = await ajaxLaons.getprocessingFeesPayment(data);
    if (server_response.status === "OK") {
      setProcessing(server_response.details);
    } else if (server_response.status === "Fail") {
      toast.error(server_response.message);
    }
  };
  const handleSubmitpro = (e) => {
    e.preventDefault();

    if (sPdate && ePdate) {
      getProcessingFeesPayment();
    } else {
      toast.error("Error: Both start and end dates are required");
    }
  };
  //pagination
  const [currentPageTable3, setCurrentPageTable3] = useState(0);
  const itemsPerPageTable3 = 20;

  const handlePageClickTable3 = ({selected}) => {
    setCurrentPageTable3(selected);
  };

  const offsetTable3 = currentPageTable3 * itemsPerPageTable3;
  const paginatedItemsTable3 = Array.isArray(processing)
    ? processing.slice(offsetTable3, offsetTable3 + itemsPerPageTable3)
    : [];

  /**
   * insurance fees payments works ===============================
   */
  const [sSdate, setSSdate] = useState("");
  const [eSdate, setESSdate] = useState("");

  const [insurance, setInsurance] = useState("");
  const getInsurancePayments = async () => {
    var data = {
      start_date: sSdate,
      end_date: eSdate,
    };
    const server_response = await ajaxLaons.getIsurancesFeesPayment(data);
    if (server_response.status === "OK") {
      setInsurance(server_response.details);
    } else if (server_response.status === "Fail") {
      toast.error(server_response.message);
    }
  };

  const handleSubmitInsu = (e) => {
    e.preventDefault();

    if (sSdate && eSdate) {
      getInsurancePayments();
    } else {
      toast.error("Error: Both start and end dates are required");
    }
  };
  //pagination
  const [currentPageTable2, setCurrentPageTable2] = useState(0);
  const itemsPerPageTable2 = 20;

  const handlePageClickTable2 = ({selected}) => {
    setCurrentPageTable2(selected);
  };

  const offsetTable2 = currentPageTable2 * itemsPerPageTable2;
  const paginatedItemsTable2 = Array.isArray(insurance)
    ? insurance.slice(offsetTable2, offsetTable2 + itemsPerPageTable2)
    : [];

  /**
   *
   * application fees works
   */

  const [applictaions, setApplication] = useState("");
  const [sdate, setSdate] = useState("");
  const [edate, setEdate] = useState("");
  const getApplicationFeesPayments = async () => {
    var data = {
      start_date: sdate,
      end_date: edate,
    };
    const server_response = await ajaxLaons.getApplicationFeesPayment(data);
    if (server_response.status === "OK") {
      setApplication(server_response.details);
    } else if (server_response.status === "Fail") {
      toast.error(server_response.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (edate && sdate) {
      getApplicationFeesPayments();
    } else {
      toast.error("Error: Both start and end dates are required");
    }
  };

  // pagination works
  const [currentPageTable1, setCurrentPageTable1] = useState(0);
  const itemsPerPageTable1 = 20;

  const handlePageClickTable1 = ({selected}) => {
    setCurrentPageTable1(selected);
  };

  const offsetTable1 = currentPageTable1 * itemsPerPageTable1;
  const paginatedItemsTable1 = Array.isArray(applictaions)
    ? applictaions.slice(offsetTable1, offsetTable1 + itemsPerPageTable1)
    : [];

  return (
    <div>
      <AppContainer title="payments reports">
        <>
          <Toaster />
          <>
            {/* Row */}
            <div className="row row-sm">
              {/* COL  */}
              <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4">
                <div className="card custom-card">
                  <div className="card-body">
                    <div className="card-order">
                      <label className="main-content-label mb-3 pt-1">
                        Total Insurance fees earnings
                      </label>
                      <p className="text-end">
                        <i className="icon-size mdi mdi-poll-box   float-start text-primary" />
                        <span className="font-weight-bold">
                          {" "}
                          UGX: {insuranceE ? insuranceE : 0}
                        </span>
                      </p>
                      {/* <p className="mb-0 mt-4 text-muted">
                        Month's earning
                        <span className="float-end">UGX: 789,300,000</span>
                      </p> */}
                    </div>
                  </div>
                </div>
              </div>
              {/* COL END */}
              {/* COL  */}
              <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4">
                <div className="card custom-card">
                  <div className="card-body">
                    <div className="card-order">
                      <label className="main-content-label mb-3 pt-1">
                        Total Application fees earnings
                      </label>
                      <p className="text-end">
                        <i className="icon-size mdi mdi-poll-box   float-start text-primary" />
                        <span className="font-weight-bold">
                          {" "}
                          UGX: {applications ? applications : 0}
                        </span>
                      </p>
                      {/* <p className="mb-0 mt-4 text-muted">
                        Month's earning
                        <span className="float-end">UGX: 789,300,000</span>
                      </p> */}
                    </div>
                  </div>
                </div>
              </div>
              {/* COL END */}
              {/* COL  */}
              <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4">
                <div className="card custom-card">
                  <div className="card-body">
                    <div className="card-order">
                      <label className="main-content-label mb-3 pt-1">
                        Total Processing fees earnings
                      </label>
                      <p className="text-end">
                        <i className="icon-size mdi mdi-poll-box   float-start text-primary" />
                        <span className="font-weight-bold">
                          {" "}
                          UGX: {process ? process : 0}
                        </span>
                      </p>
                      {/* <p className="mb-0 mt-4 text-muted">
                        Month's earning
                        <span className="float-end">UGX: 789,300,000</span>
                      </p> */}
                    </div>
                  </div>
                </div>
              </div>
              {/* COL END */}
            </div>
            {/* End Row */}
          </>
          <div className="row square">
            <div className="col-lg-12 col-md-12">
              <div className="card custom-card">
                <div className="card-body">
                  <div className="profile-tab tab-menu-heading">
                    <nav className="nav main-nav-line p-3 tabs-menu profile-nav-line bg-gray-100">
                      <a
                        className="nav-link  active"
                        data-bs-toggle="tab"
                        href="#Insurance">
                        Insurance Fees Payments report
                      </a>
                      <a
                        className="nav-link"
                        data-bs-toggle="tab"
                        href="#Processing">
                        Processing fees payments Report
                      </a>
                      <a
                        className="nav-link"
                        data-bs-toggle="tab"
                        href="#Application">
                        Application fees report
                      </a>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Row */}
          <div className="row row-sm">
            <div className="col-lg-12 col-md-12">
              <div className="card custom-card main-content-body-profile">
                <div className="tab-content">
                  {/* Insurance payments  */}
                  <div
                    className="main-content-body tab-pane p-4 border-top-0  active"
                    id="Insurance">
                    <div className="col-sm-12  col-md-12 col-lg-12 col-xl-12 mt-xl-4">
                      <div className="card custom-card card-dashboard-calendar pb-0">
                        <label className="main-content-label mb-2 pt-1">
                          Insurance Fees Payments report
                        </label>
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
                                <form
                                  action=""
                                  onSubmit={(e) => handleSubmitInsu(e)}>
                                  <div className="row">
                                    <div className="col-sm-12  col-md-4 col-lg-4 col-xl-4 ">
                                      <div className="col-12">
                                        <div className="row">
                                          <label className="col-4">FROM:</label>

                                          <span className="col-8">
                                            <DatePicker
                                              selected={sSdate}
                                              onChange={(e) => setSSdate(e)}
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
                                              selected={eSdate}
                                              onChange={(e) => setESSdate(e)}
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
                                  <th>Amount</th>
                                  <th>Date _paid</th>
                                </tr>
                              </thead>
                              <tbody>
                                {paginatedItemsTable2.map((loan, key) => (
                                  <>
                                    <tr key={key}>
                                      <td>{key + 1}</td>
                                      <td>
                                        {loan.user.first_name} &nbsp;
                                        {loan.user.last_name}
                                      </td>
                                      <td>{loan.cash_in}</td>
                                      <td>{loan.trans_date}</td>
                                    </tr>
                                  </>
                                ))}
                                {!Array.isArray(insurance) && (
                                  <tr>
                                    <td
                                      colSpan={13}
                                      className="text-center text-danger">
                                      no Insurance Fees Payments found
                                    </td>
                                  </tr>
                                )}
                              </tbody>
                            </table>
                            <ReactPaginate
                              pageCount={Math.ceil(
                                insurance.length / itemsPerPageTable2
                              )}
                              pageRangeDisplayed={3}
                              marginPagesDisplayed={1}
                              onPageChange={handlePageClickTable2}
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
                  {/* Processing payment  */}
                  <div
                    className="main-content-body tab-pane p-4 border-top-0"
                    id="Processing">
                    <div className="col-sm-12  col-md-12 col-lg-12 col-xl-12 mt-xl-4">
                      <div className="card custom-card card-dashboard-calendar pb-0">
                        <label className="main-content-label mb-2 pt-1">
                          Processing Fees Payments report
                        </label>
                        <div
                          className="col-sm-12  col-md-12 col-lg-12 col-xl-8 mt-xl-4"
                          style={{
                            borderRadius: "20px",
                          }}>
                          <div className="card custom-card card-dashboard-calendar pb-0">
                            <div className="card-body">
                              <div className="col-sm-12  col-md-12 col-lg-12 col-xl-12">
                                <form
                                  action=""
                                  onSubmit={(e) => handleSubmitpro(e)}>
                                  <div className="row">
                                    <div className="col-sm-12  col-md-4 col-lg-4 col-xl-4 mt-2">
                                      <div className="col-12">
                                        <div className="row">
                                          <label className="col-4">FROM:</label>

                                          <span className="col-8">
                                            <DatePicker
                                              selected={sPdate}
                                              onChange={(e) => setSpdate(e)}
                                              dateFormat="dd/MM/yyyy"
                                              placeholderText="dd/MM/yyyy"
                                              className="form-control text-success"
                                            />
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-sm-12  col-md-4 col-lg-4 col-xl-4 mt-2">
                                      <div className="col-12">
                                        <div className="row">
                                          <label className="col-4">TO:</label>

                                          <span className="col-8">
                                            <DatePicker
                                              selected={ePdate}
                                              onChange={(e) => setEpdate(e)}
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
                                  <th>Amount</th>
                                  <th>Date _paid</th>
                                </tr>
                              </thead>
                              <tbody>
                                {paginatedItemsTable3.map((loan, key) => (
                                  <>
                                    <tr key={key}>
                                      <td>{key + 1}</td>
                                      <td>
                                        {loan.user.first_name} &nbsp;
                                        {loan.user.last_name}
                                      </td>
                                      <td>{loan.cash_in}</td>
                                      <td>{loan.trans_date}</td>
                                    </tr>
                                  </>
                                ))}
                                {!Array.isArray(processing) && (
                                  <tr>
                                    <td
                                      colSpan={13}
                                      className="text-center text-danger">
                                      no Processing Fees Payments found
                                    </td>
                                  </tr>
                                )}
                              </tbody>
                            </table>

                            <ReactPaginate
                              pageCount={Math.ceil(
                                processing.length / itemsPerPageTable3
                              )}
                              pageRangeDisplayed={3}
                              marginPagesDisplayed={1}
                              onPageChange={handlePageClickTable3}
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
                  {/*  Application payments  */}
                  <div
                    className="main-content-body tab-pane p-4 border-top-0"
                    id="Application">
                    <div className="col-sm-12  col-md-12 col-lg-12 col-xl-12 mt-xl-4">
                      <div className="card custom-card card-dashboard-calendar pb-0">
                        <label className="main-content-label mb-2 pt-1">
                          Loan Application payments report
                        </label>
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
                                <form
                                  action=""
                                  onSubmit={(e) => handleSubmit(e)}>
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
                                  <th>Amount</th>
                                  <th>loan_type</th>
                                  <th>Payment_date</th>
                                </tr>
                              </thead>
                              <tbody>
                                {paginatedItemsTable1.map((loan, key) => (
                                  <>
                                    <tr key={key}>
                                      <td>{key + 1}</td>

                                      <td>
                                        {loan.customer_id.first_name} &nbsp;
                                        {loan.customer_id.last_name}
                                      </td>
                                      <td>{loan.amount}</td>
                                      <td>{loan.loan_id.loan_type}</td>
                                      <td>{loan.date_paid}</td>
                                    </tr>
                                  </>
                                ))}
                                {!Array.isArray(applictaions) && (
                                  <tr>
                                    <td
                                      colSpan={13}
                                      className="text-center text-danger">
                                      no Loan Application payments found
                                    </td>
                                  </tr>
                                )}
                              </tbody>
                            </table>

                            <ReactPaginate
                              pageCount={Math.ceil(
                                applictaions.length / itemsPerPageTable1
                              )}
                              pageRangeDisplayed={3}
                              marginPagesDisplayed={1}
                              onPageChange={handlePageClickTable1}
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
                </div>
              </div>
            </div>
          </div>
        </>
      </AppContainer>
    </div>
  );
}

export default LoansReports;
