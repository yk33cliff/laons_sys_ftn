import React, {useEffect, useState} from "react";
import SystemModal from "../Common/SystemModal";
import toast, {Toaster} from "react-hot-toast";
import ajaxLaons from "../../util/remote/ajaxLaons";
import functions from "../../util/functions";
import useStateCallback from "../../util/customHooks/useStateCallback";
import ImageModal from "./ImageModal";
function ApproveLoan(props) {
  const [guarantors, setGuarantors] = useState("");
  const [security, setSecurity] = useState("");
  const [comment, setComment] = useState("");
  // console.log(security);

  useEffect(() => {
    guarantor();
    securities();
  }, []);
  const [modal, setModal] = useStateCallback(false);
  const handle_mdodel1 = (image) => {
    setModal(false, () => setModal(<ImageModal isOpen={true} image={image} />));
  };

  const RenderFooter = (controls) => {
    return (
      <>
        <button
          classname="btn ripple btn-dark"
          type="button"
          // onClick={(guarantor(), securities(), setModal(false))}>
          // onClick={(controls.close, window.location.reload)}>
          onClick={controls.close}>
          Close
        </button>

        <button
          type="button"
          className={`btn ripple btn-success`}
          onClick={ApprovalLoan}>
          Approve Loan
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
      props.function();
    }
    // else if (server_response.status === "Fail") {
    // toast.error(server_response.message);
    // }
  };
  const securities = async () => {
    var data = {
      id: props.id,
    };
    const server_response = await ajaxLaons.ViewLoanSecurities(data);

    if (server_response.status === "OK") {
      setSecurity(server_response.details);
    }
    // else if (server_response.status === "Fail") {
    //   toast.error(server_response.message);
    // }
  };

  const ApprovalLoan = async () => {
    let confirm = window.confirm("Are you sure approve this loan");
    if (!confirm) {
      return false;
    }
    var data = {
      id: props.id,
      status: props.status,
      user: userId,
      comment: comment,
    };
    const server_response = await ajaxLaons.approveLoans(data);
    if (server_response.status === "OK") {
      // props.fun();
      window.location.reload();
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
                        {modal}
                        {Array.isArray(security) &&
                          security.map((security, key) => (
                            <tr key={key}>
                              <td>{key + 1}</td>
                              <td
                                className="text-success"
                                style={{width: "250px", whiteSpace: "normal"}}>
                                <p>{security.security}</p>
                              </td>

                              <td
                                className="text-success"
                                style={{width: "250px", whiteSpace: "normal"}}>
                                <button
                                  className="badge  bg-warning-light bg-pill"
                                  onClick={() =>
                                    handle_mdodel1(security.image1)
                                  }>
                                  {security.image1}
                                </button>
                              </td>
                              <td
                                className="text-success"
                                style={{width: "250px", whiteSpace: "normal"}}>
                                <button
                                  className="badge  bg-warning-light bg-pill"
                                  onClick={() =>
                                    handle_mdodel1(security.image2)
                                  }>
                                  {security.image2}
                                </button>
                              </td>
                              <td>
                                {" "}
                                <p>{security.added_by}</p>
                              </td>
                            </tr>
                          ))}
                        {!Array.isArray(security) && (
                          <tr>
                            <td className="text-danger" colSpan={5}></td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            {/* col end */}
          </div>
          <div className="col-sm-12  col-md- col-lg-12 col-xl-12 mt-xl-4">
            <div className="form-group">
              <label className="mg-b-10">
                <u>Already existing comment</u>{" "}
              </label>
            </div>
          </div>
          <div className="col-sm-12  col-md- col-lg-12 col-xl-12 mt-xl-4">
            <div className="form-group">
              <label className="mg-b-10">Interest Rate</label>
              <input
                type="text"
                className="form-control text-success"
                name="interestRate"
                placeholder="comment on approval"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
            </div>
          </div>
        </div>
      </SystemModal>
    </div>
  );
}

export default ApproveLoan;
