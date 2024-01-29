import React, {useEffect, useState} from "react";
import SystemModal from "../Common/SystemModal";
import toast, {Toaster} from "react-hot-toast";

import ajaxLaons from "../../util/remote/ajaxLaons";
import useStateCallback from "../../util/customHooks/useStateCallback";
import ImageModal from "./ImageModal";
// import ajaxLaons from "../../util/remote/ajaxLaons";
function ViewSecurities(props) {
  const [security, setSecurity] = useState("");

  useEffect(() => {
    securities();
  }, []);
  const [modal, setModal] = useStateCallback(false);
  const handle_mdodel1 = (image) => {
    setModal(false, () => setModal(<ImageModal isOpen={true} image={image} />));
  };

  const Print = () => {
    let printContents = document.getElementById("printablediv").innerHTML;
    let originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;

    window.print();
    window.location.reload();
    document.body.innerHTML = originalContents;
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
  const RenderFooter = (controls) => {
    return (
      <>
        <button
          className="btn ripple btn-dark"
          type="button"
          onClick={controls.close}>
          Close
        </button>
        <button className="btn ripple btn-dark" type="button" onClick={Print}>
          print image
        </button>
      </>
    );
  };
  return (
    <div>
      <SystemModal
        title="View Securities"
        id="model-update-cross"
        size="lg"
        footer={RenderFooter}>
        <Toaster />
        <div className="" id="printablediv">
          <div className="mb-4">
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
                        {modal}
                      </thead>
                      <tbody>
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
        </div>
      </SystemModal>
    </div>
  );
}

export default ViewSecurities;
