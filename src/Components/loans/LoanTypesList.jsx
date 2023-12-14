import React, {useContext} from "react";
import LoanTypesContext from "../../Context/LoanTypesContext";
import UpdateLoanType from "./UpdateLoanType";
import useStateCallback from "../../util/customHooks/useStateCallback";
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
                      <th>Duration</th>
                      <th>
                        interest <br /> rate
                      </th>
                      <th>
                        application <br />
                        fee rate
                      </th>
                      <th>
                        amaximum <br />
                        Amount
                      </th>
                      <th>
                        Allowed <br />
                        installment
                      </th>
                      <th>status</th>
                      <th>Update</th>
                    </tr>
                  </thead>
                  <tbody>
                    {LoanTypes &&
                      Array.isArray(LoanTypes) &&
                      LoanTypes.map((loan, key) => (
                        <tr key={key}>
                          <td>{key + 1}</td>
                          <td>{loan.name}</td>
                          <td>{loan.duration} months</td>
                          <td>{loan.interest_rate}</td>
                          <td>{loan.processing_fee_rate}</td>
                          <td>{loan.maximum_amount}</td>
                          <td>{loan.installment_type}</td>

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

                          <td>
                            <button
                              className=" badge bg-danger-light bg-pill"
                              onClick={(e) =>
                                handleModal(e, loan, getLoanList)
                              }>
                              update
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
      </div>
    </div>
  );
}

export default LoanTypesList;
