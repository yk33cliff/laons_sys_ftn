import React, {useEffect, useState} from "react";
import SystemModal from "../Common/SystemModal";
import toast, {Toaster} from "react-hot-toast";
import ajaxLaons from "../../util/remote/ajaxLaons";
import functions from "../../util/functions";
function ApproveLoan(props) {
  const [guarantors, setGuarantors] = useState("");
  console.log(guarantors);

  useEffect(() => {
    guarantor();
  }, []);
  const RenderFooter = (controls) => {
    return (
      <>
        <button
          className="btn ripple btn-dark"
          type="button"
          onClick={controls.close}>
          Close
        </button>
        <button
          type="button"
          className={`btn ripple btn-success`}
          onClick={ApprovalLoan}>
          Add security
        </button>
      </>
    );
  };
  const userId = functions.sessionGuard();
  const guarantor = async () => {
    var data = {
      id: props.id,
    };
    const server_response = await ajaxLaons.ViewLoanGuarantors(data);

    if (server_response.status === "OK") {
      setGuarantors(server_response.details);
    } else if (server_response.status === "Fail") {
      toast.error(server_response.message);
    }
  };

  const ApprovalLoan = async () => {
    let confirm = window.confirm("Are you sure approve this loan");
    if (!confirm) {
      return false;
    }
    var data = {id: props.id, status: props.status, user: userId};
    const server_response = await ajaxLaons.approveLoans(data);
    if (server_response.status === "OK") {
      props.fun();
      toast.success(server_response.message);
    } else if (server_response.status === "Fail") {
      toast.error(server_response.message);
    }
  };
  return (
    <div>
      <SystemModal
        title="Add loan Securities"
        id="model-update-cross"
        size="lg"
        footer={RenderFooter}>
        <Toaster />
        <div className="mb-4">
          <div className="row row-sm">
            <div className="col-sm-12  col-md-12 col-lg-12 col-xl-12 mt-xl-4">
              <div className="card custom-card card-dashboard-calendar pb-0">
                <label className="main-content-label mb-2 pt-1">
                  customer's Guarantors
                </label>
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="table card-table text-nowrap table-bordered border-top">
                      <thead>
                        <tr>
                          <th>ID</th>
                          <th>Name </th>
                          <th>contact</th>
                          <th>Nin </th>
                          <th>residence</th>
                          <th>relationship</th>
                        </tr>
                      </thead>
                      <tbody>
                        {Array.isArray(guarantors) &&
                          guarantors.map((person, key) => (
                            <tr key={key}>
                              <td>{key + 1}</td>
                              <td>{person.name}</td>
                              <td>{person.phone}</td>
                              <td>{person.nin}</td>
                              <td>{person.residence}</td>
                              <td>{person.relationship}</td>
                            </tr>
                          ))}

                        {!Array.isArray(guarantors) && (
                          <tr>
                            <td colSpan={6}>
                              <p className="text-warning text-center">
                                No guarantor (s) for the selected loan
                              </p>
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            {/* col end */}
            <div className="col-sm-12  col-md- col-lg-12 col-xl-12 mt-xl-4">
              <div className="card custom-card card-dashboard-calendar pb-0">
                <label className="main-content-label mb-2 pt-1">
                  Loan securities
                </label>
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="table card-table text-nowrap table-bordered border-top">
                      <thead>
                        <tr>
                          <th>No.</th>
                          <th>description </th>
                          <th>image 1</th>
                          <th>image 2 </th>
                          <th>Add By</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>#1</td>
                          <td
                            className="text-success"
                            style={{width: "250px", whiteSpace: "normal"}}>
                            <p>
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Explicabo, temporibus ex necessitatibus quia
                              veritatis sit minima modi aliquid reiciendis
                              recusandae velit eum adipisci expedita, dolorum
                              amet fugiat cupiditate! Rem, corrupti.
                            </p>
                          </td>

                          <td>
                            <i className="cc BTC-alt text-warning" /> 0.37218
                          </td>
                          <td>
                            <i className="cc BTC-alt text-warning" /> 0.42173
                          </td>
                          <td>52681.13</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            {/* col end */}
          </div>
        </div>
      </SystemModal>
    </div>
  );
}

export default ApproveLoan;
