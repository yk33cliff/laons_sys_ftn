import React, {useEffect, useState} from "react";
import AppContainer from "../../Components/Structure/AppContainer";
import ajaxLaons from "../../util/remote/ajaxLaons";
import toast from "react-hot-toast";
import ReactPaginate from "react-paginate";
function PaymentReports() {
  useEffect(() => {
    getApplicationFeesPayments();
    getInsurancePayments();
    getProcessingFeesPayment();
  }, []);

  const [applictaions, setApplication] = useState("");
  const getApplicationFeesPayments = async () => {
    const server_response = await ajaxLaons.getApplicationFeesPayment();
    if (server_response.status === "OK") {
      setApplication(server_response.details);
    } else if (server_response.status === "Fail") {
      toast.error(server_response.message);
    }
  };
  const [insurance, setInsurance] = useState("");
  const getInsurancePayments = async () => {
    const server_response = await ajaxLaons.getprocessingFeesPayment();
    if (server_response.status === "OK") {
      setInsurance(server_response.details);
    } else if (server_response.status === "Fail") {
      toast.error(server_response.message);
    }
  };
  const [processing, setProcessing] = useState("");
  const getProcessingFeesPayment = async () => {
    const server_response = await ajaxLaons.getIsurancesFeesPayment();
    if (server_response.status === "OK") {
      setProcessing(server_response.details);
    } else if (server_response.status === "Fail") {
      toast.error(server_response.message);
    }
  };
  // --------------------------------

  const [currentPageTable1, setCurrentPageTable1] = useState(0);
  const itemsPerPageTable1 = 10;

  const handlePageClickTable1 = ({selected}) => {
    setCurrentPageTable1(selected);
  };

  const offsetTable1 = currentPageTable1 * itemsPerPageTable1;
  const paginatedItemsTable1 = Array.isArray(applictaions)
    ? applictaions.slice(offsetTable1, offsetTable1 + itemsPerPageTable1)
    : [];

  // -----------------------

  const [currentPageTable2, setCurrentPageTable2] = useState(0);
  const itemsPerPageTable2 = 10;

  const handlePageClickTable2 = ({selected}) => {
    setCurrentPageTable2(selected);
  };

  const offsetTable2 = currentPageTable2 * itemsPerPageTable2;
  const paginatedItemsTable2 = Array.isArray(insurance)
    ? insurance.slice(offsetTable2, offsetTable2 + itemsPerPageTable2)
    : [];

  // ---------------------

  const [currentPageTable3, setCurrentPageTable3] = useState(0);
  const itemsPerPageTable3 = 10;

  const handlePageClickTable3 = ({selected}) => {
    setCurrentPageTable3(selected);
  };

  const offsetTable3 = currentPageTable3 * itemsPerPageTable3;
  const paginatedItemsTable3 = Array.isArray(processing)
    ? processing.slice(offsetTable3, offsetTable3 + itemsPerPageTable3)
    : [];

  return (
    <div>
      <AppContainer title="payments reports">
        <div>
          <div className="row">
            {/* Insurance fees payment */}
            <div className="col-sm-12  col-md-6 col-lg-6 col-xl-6 mt-xl-4">
              <div className="card custom-card card-dashboard-calendar pb-0">
                <label className="main-content-label mb-2 pt-1">
                  Insurance Fees Payments
                </label>
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

            {/* Processing fees payment */}
            <div className="col-sm-12  col-md-6 col-lg-6 col-xl-6 mt-xl-4">
              <div className="card custom-card card-dashboard-calendar pb-0">
                <label className="main-content-label mb-2 pt-1">
                  Processing Fees Payments
                </label>
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

            {/* application fees payment */}
            <div className="col-sm-12  col-md-12 col-lg-12 col-xl-12 mt-xl-4">
              <div className="card custom-card card-dashboard-calendar pb-0">
                <label className="main-content-label mb-2 pt-1">
                  Loan Application payments
                </label>
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
      </AppContainer>
    </div>
  );
}

export default PaymentReports;
