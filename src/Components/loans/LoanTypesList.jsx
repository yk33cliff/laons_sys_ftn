import React, {useContext, useState} from "react";
import LoanTypesContext from "../../Context/LoanTypesContext";
import UpdateLoanType from "./UpdateLoanType";
import useStateCallback from "../../util/customHooks/useStateCallback";
import {RenderSecure} from "../../util/script/RenderSecure";
import ReactPaginate from "react-paginate";

function LoanTypesList() {
  const {LoanTypes, getLoanList} = useContext(LoanTypesContext);
  const [modal, setModal] = useStateCallback(false);

  const handleModal = (e, loan) => {
    setModal(false, () =>
      setModal(
        <UpdateLoanType isOpen={true} loan={loan} getLoanList={getLoanList} />
      )
    );
  };

  const getStatusBadge = (status) => {
    if (status === "monthly") {
      return (
        <p style={{fontSize: "14px"}} className="text-success">
          months
        </p>
      );
    } else if (status === "fortnight") {
      return (
        <p style={{fontSize: "14px"}} className="text-dark">
          months
        </p>
      );
    } else if (status === "weekly") {
      return (
        <p style={{fontSize: "14px"}} className="text-dark">
          weeks
        </p>
      );
    } else if (status === "daily") {
      return (
        <p style={{fontSize: "14px"}} className="text-dark">
          days
        </p>
      );
    }
  };
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 20; // Change this value based on your preference

  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
  };

  const offset = currentPage * itemsPerPage;
  const paginatedItems = Array.isArray(LoanTypes)
    ? LoanTypes.slice(offset, offset + itemsPerPage)
    : [];

  return (
    <div>
      <div className="row row-sm">
        <div className="col-xl-12">
          <div className="card custom-card">
            <div className="card-header border-bottom-0">
              <label className="main-content-label my-auto pt-2">
                LOAN TYPES AND DETAILS
              </label>
            </div>
            {modal}
            <div className="card-body">
              <div className="table-responsive">
                <table className="table card-table text-nowrap table-hover table-bordered table-striped border-top">
                  <thead>
                    <tr>
                      <th>No.</th>
                      <th>Type</th>
                      <th>
                        maximum <br /> duration
                      </th>
                      <th>
                        interest <br /> rate
                      </th>
                      <th>
                        monitoring fees <br /> rate
                      </th>
                      <th>
                        application <br />
                        fee rate
                      </th>
                      <th>
                        processing <br />
                        fee rate
                      </th>
                      <th>
                        insurance <br />
                        fee rate
                      </th>
                      <th>
                        penalty <br />
                        fee rate
                      </th>
                      <th>
                        minimum <br />
                        amount
                      </th>
                      <th>
                        amaximum <br />
                        Amount
                      </th>
                      <th>status</th>
                      <RenderSecure code="EDIT-TYPE">
                        <th>Update</th>
                      </RenderSecure>
                    </tr>
                  </thead>
                  <tbody>
                    {paginatedItems.map((loan, key) => (
                      <tr key={key}>
                        <td>{key + 1}</td>
                        <td>{loan.name}</td>
                        <td>
                          <p>
                            <span>{loan.duration}</span>
                            <span style={{fontSize: "12px"}}>
                              {getStatusBadge(loan.installment_type)}
                            </span>
                          </p>
                        </td>
                        <td>{loan.interest_rate}</td>
                        <td>{loan.monitoring}</td>
                        <td>{loan.application_rate}</td>
                        <td>{loan.processing_fee_rate}</td>
                        <td>{loan.insurance}</td>
                        <td>{loan.fine_rate}</td>
                        <td>{loan.min_amount}</td>
                        <td>{loan.maximum_amount}</td>

                        <td>
                          {loan.status === "1" ? (
                            <span className="badge bg-success-light bg-pill">
                              active
                            </span>
                          ) : (
                            <span className="badge bg-danger-light bg-pill">
                              inactive
                            </span>
                          )}
                        </td>
                        <RenderSecure code="EDIT-TYPE">
                          <td>
                            <button
                              className=" badge bg-danger-light bg-pill"
                              onClick={(e) =>
                                handleModal(e, loan, getLoanList)
                              }>
                              update
                            </button>
                          </td>
                        </RenderSecure>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Render the pagination component */}
      <ReactPaginate
        pageCount={Math.ceil(LoanTypes.length / itemsPerPage)}
        pageRangeDisplayed={10}
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
  );
}

export default LoanTypesList;
