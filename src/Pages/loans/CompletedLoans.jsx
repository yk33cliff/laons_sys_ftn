import React, {useContext, useEffect, useState} from "react";

import toast, {Toaster} from "react-hot-toast";
import {RenderSecure} from "../../util/script/RenderSecure";
import ReactPaginate from "react-paginate";

import AppContainer from "../../Components/Structure/AppContainer";
import ajaxLaons from "../../util/remote/ajaxLaons";

function CompletedLoans() {
  useEffect(() => {
    getmonthlyLoanns();
  }, []);

  const [paid, setPaid] = useState("");
  const getmonthlyLoanns = async () => {
    const server_response = await ajaxLaons.getLoansPaidOffCompletely();

    if (server_response.status === "OK") {
      setPaid(server_response.details);
    } else if (server_response.status === "Fail") {
      toast.error(server_response.message);
    }
  };

  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 20; // Change this value based on your preference

  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
  };

  const offset = currentPage * itemsPerPage;
  const paginatedItems = Array.isArray(paid)
    ? paid.slice(offset, offset + itemsPerPage)
    : [];

  return (
    <AppContainer title="View Loan Application">
      <div>
        {/* <AppContainer title="View Loan Application"> */}
        <div>
          <div className="row">
            <div className="row row-sm">
              <div className="col-xl-12">
                <div className="card custom-card">
                  <div className="card-header border-bottom-0">
                    <label className="main-content-label my-auto pt-2">
                      Completed loans
                    </label>
                  </div>
                  <Toaster />

                  <div className="card-body">
                    <div className="table-responsive">
                      <table className="table card-table text-nowrap table-bordered border-top">
                        <thead>
                          <tr>
                            <th>NO.</th>
                            <th>customer</th>
                            <th>
                              Loan <br /> type
                            </th>
                            <th>principal Amount</th>
                          </tr>
                        </thead>
                        <tbody>
                          <Toaster />
                          {!Array.isArray(paid) && (
                            <tr>
                              <td
                                colSpan={12}
                                className="text-info text-center">
                                No complete Loans found
                              </td>
                            </tr>
                          )}

                          {paginatedItems.map((loan, key) => (
                            <tr key={key}>
                              <td> {key + 1}</td>
                              <td> {loan.customer}</td>
                              <td> {loan.Loan_type}</td>
                              <td> {loan.amount}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>

                      <ReactPaginate
                        pageCount={Math.ceil(paid.length / itemsPerPage)}
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
          </div>
        </div>
      </div>
    </AppContainer>
  );
}

export default CompletedLoans;
