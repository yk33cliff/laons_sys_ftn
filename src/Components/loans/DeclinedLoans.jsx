import React, {useEffect, useState} from "react";
import ajaxLaons from "../../util/remote/ajaxLaons";
import ReactPaginate from "react-paginate";
import {RenderSecure} from "../../util/script/RenderSecure";
import toast, {Toaster} from "react-hot-toast";
import functions from "../../util/functions";

function DeclinedLoans() {
  const [trans, setTrans] = useState("");

  useEffect(() => {
    get_recent_Transactions();
  }, []);
  const get_recent_Transactions = async () => {
    const server_response = await ajaxLaons.getDeclinedLOans();

    if (server_response.status === "OK") {
      setTrans(server_response.details);
    } else {
      setTrans("");
    }
  };

  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 20; // Change this value based on your preference

  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
  };

  const offset = currentPage * itemsPerPage;
  const paginatedItems = Array.isArray(trans)
    ? trans.slice(offset, offset + itemsPerPage)
    : [];

  const handle_reactivate = async (id) => {
    let confirm = window.confirm(
      "are you sure you want to reactivate this loan"
    );
    if (!confirm) {
      return false;
    }
    var data = {
      id: id,
    };
    const server_response = await ajaxLaons.reactivate_loan(data);
    if (server_response.status === "OK") {
      window.location.reload();
      toast.success(server_response.message);
    } else if (server_response.status === "Fail") {
      toast.error(server_response.message);
    }
  };
  const is_approver = functions.check_is_approver();

  return (
    <div>
      <div className="row row-sm">
        <div className="col-xl-12">
          <div className="card custom-card">
            <div className="card-header border-bottom-0">
              <label className="main-content-label my-auto pt-2">
                declined loans
              </label>
              <Toaster />
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table className="table card-table text-nowrap table-bordered border-top">
                  <thead>
                    <tr>
                      <th>No.</th>
                      <th>Customer's name</th>
                      <th>Loan Types</th>
                      <th>Amount</th>
                      <th>Decliner</th>
                      <th>Decline's reason</th>
                      {is_approver == 1 && <th>Reactivate loan</th>}
                    </tr>
                  </thead>

                  <tbody>
                    {paginatedItems.map((loan, key) => (
                      <tr key={key}>
                        <td>{key + 1}</td>
                        <td>{loan.customer_id.names}</td>
                        <td>{loan.loan_type}</td>
                        <td>{loan.amount}</td>
                        <td>{loan.decliner1}</td>
                        <td>{loan.declined_comment1}</td>
                        {is_approver == 1 && (
                          <td>
                            <button
                              onClick={() => handle_reactivate(loan.id)}
                              className="badge  text-white bg-secondary bg-pill">
                              Reactivate <br />
                              loan
                            </button>
                          </td>
                        )}
                      </tr>
                    ))}
                  </tbody>
                </table>

                <ReactPaginate
                  pageCount={Math.ceil(trans.length / itemsPerPage)}
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
  );
}

export default DeclinedLoans;
