import React, {useEffect, useState} from "react";
import SystemModal from "../Common/SystemModal";
import toast, {Toaster} from "react-hot-toast";
import dictionary from "../../util/dictionary";
import ajaxLaons from "../../util/remote/ajaxLaons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDeleteLeft, faEdit, faTrash} from "@fortawesome/free-solid-svg-icons";
import useStateCallback from "../../util/customHooks/useStateCallback";
import UpdateGurantors from "./UpdateGurantors";
// import ajaxLaons from "../../util/remote/ajaxLaons";
function ViewGuarantors(props) {
  const [guarantors, setGuarantors] = useState("");
  useEffect(() => {
    guarantor();
  }, []);
  const guarantor = async () => {
    var data = {
      id: props.id,
    };
    const server_response = await ajaxLaons.ViewLoanGuarantors(data);

    if (server_response.status === "OK") {
      setGuarantors(server_response.details);
    }
    // else if (server_response.status === "Fail") {
    // toast.error(server_response.message);
    // }
  };
  //  view model guarantors
  const [Update, setUpdate] = useStateCallback(false);
  const handleGuarantors = (guarantor) => {
    setUpdate(false, () =>
      setUpdate(<UpdateGurantors isOpen={true} guarantor={guarantor} />)
    );
  };
  // delete guarantor----------------+++++++++++++++++++++++++++++++
  const deleteguarantor = async (id) => {
    let confirm = window.confirm(
      "Are you sure you want to delete this guarantor from this loan"
    );
    if (confirm) {
      var data = {
        id: id,
      };
    }

    const server_response = await ajaxLaons.deleteLoanGuarantor(data);

    if (server_response.status === "OK") {
      guarantor();
      toast.success(server_response.message);
    } else {
      toast.error(server_response.message);
    }
  };

  const RenderFooter = (controls) => {
    return (
      <>
        <button
          className="btn ripple btn-dark"
          type="button"
          onClick={controls.close}>
          Close
        </button>
      </>
    );
  };
  return (
    <div>
      <SystemModal
        title="View Guarantors"
        id="model-update-cross"
        size="xl"
        footer={RenderFooter}>
        <Toaster />
        {Update}
        <div className="" id="printablediv">
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
                          <th>Update</th>
                          <th>delete</th>
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
                              <td>
                                <button
                                  className="badge  bg-primary-light bg-pill m-2"
                                  onClick={() => handleGuarantors(person)}>
                                  <FontAwesomeIcon
                                    icon={faEdit}
                                    fade
                                    style={{color: "orange"}}
                                  />
                                  update
                                </button>
                              </td>

                              <td>
                                <button
                                  className="badge  bg-danger-light bg-pill m-2"
                                  onClick={() => deleteguarantor(person.id)}>
                                  <FontAwesomeIcon
                                    icon={faTrash}
                                    fade
                                    style={{color: "red"}}
                                  />{" "}
                                  Delete
                                </button>
                              </td>
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
          </div>
        </div>
      </SystemModal>
    </div>
  );
}

export default ViewGuarantors;
