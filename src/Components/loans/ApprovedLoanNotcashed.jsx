import React, {useEffect, useState} from "react";
import ajaxLaons from "../../util/remote/ajaxLaons";
import ReactPaginate from "react-paginate";
import AppContainer from "../Structure/AppContainer";
import {RenderSecure} from "../../util/script/RenderSecure";
import CashLoanActivator from "./CashLoanActivator";
import useStateCallback from "../../util/customHooks/useStateCallback";

function ApprovedLoanNotcashed() {
  useEffect(() => {
    getLOansHere();
  }, []);

  const [Loans, setLoans] = useState("");
  const getLOansHere = async () => {
    const server_response = await ajaxLaons.getApprovedLoanNotcashed();

    if (server_response.status === "OK") {
      setLoans(server_response.details);
    }
    // else if (server_response.status === "Fail") {
    // toast.error(server_response.message);
    // }
  };

  const [activator, setActivator] = useStateCallback(false);
  const activatorHandler = (id) => {
    setActivator(false, () =>
      setActivator(
        <CashLoanActivator
          isOpen={true}
          id={id}
          customer={getLOansHere}
          state={2}
        />
      )
    );
  };

  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 10; // Change this value based on your preference

  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
  };

  const offset = currentPage * itemsPerPage;
  const paginatedItems = Array.isArray(Loans)
    ? Loans.slice(offset, offset + itemsPerPage)
    : [];

  return (
    <AppContainer title="Active loans">
      {activator}
      <div className="row row-sm">
        <div className="col-sm-12  col-md-12 col-lg-12 col-xl-12 mt-xl-4">
          <div className="card custom-card card-dashboard-calendar pb-0">
            <label className="main-contenpaymentHandlert-label mb-2 pt-1">
              Active /currently runnning loans
            </label>

            <div className="card-body">
              <div className="table-responsive">
                <table className="table card-table text-nowrap table-bordered border-top">
                  <thead>
                    <tr>
                      {/* "id": "13", "customer_id": "denise dens", "loan_type":
                      "marriage Loan", "amount": "1200000", "duration": "3",
                      "interest_rate": "5", "processing_fee_rate": "3",
                      "insurance_rate": "6", "fine_rate": "9", "date_requested":
                      "2024-01-05", "status": "3" */}
                      <th>NO</th>
                      <th>Customer </th>
                      <th>Amount to cash</th>
                      <th>activate loan</th>
                    </tr>
                  </thead>
                  <tbody>
                    {paginatedItems.map((loan, key) => (
                      <tr key={key}>
                        <td>{key + 1}</td>
                        <td>{loan.customer_id}</td>
                        <td>{loan.amount}</td>
                        <td>
                          <button
                            type="button"
                            className="badge  text-white bg-primary bg-pill mt-2"
                            style={{fontSize: "14px"}}
                            onClick={(e) => activatorHandler(loan.id)}>
                            activate_loan
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                <ReactPaginate
                  pageCount={Math.ceil(Loans.length / itemsPerPage)}
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
  );
}

export default ApprovedLoanNotcashed;
