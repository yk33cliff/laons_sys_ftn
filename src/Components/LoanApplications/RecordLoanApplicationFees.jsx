import {useState} from "react";
import SystemModal from "../Common/SystemModal";
import Loader from "../Common/Loader";
import {toast} from "react-hot-toast";
// import ajaxClientContact from "../../util/remote/ajaxClientContact";

function RecordLoanApplicationFees(props) {
  const [loading, setLoading] = useState(false);
  const [contact_name, setContactName] = useState("");
  const [phone_number, setPhoneNumber] = useState("");
  const [designation, setDesignation] = useState("");

  // const handleAddClientContact = async (e) => {
  //   e.preventDefault();
  //   if (
  //     contact_name.length > 0 &&
  //     phone_number.length > 0 &&
  //     designation.length > 0 &&
  //     props.client_id > 0
  //   ) {
  //     setLoading(true);
  //     const server_response = await ajaxClientContact.createClientContact(
  //       props.client_id,
  //       contact_name,
  //       phone_number,
  //       designation
  //     );
  //     setLoading(false);
  //     if (server_response.status === "OK") {
  //       setContactName("");
  //       setPhoneNumber("");
  //       setDesignation("");
  //       toast.success(server_response.message);
  //       props.f(props.client_id);
  //     } else {
  //       toast.error(server_response.message);
  //     }
  //   } else {
  //     toast.error("Complete all fields and try again");
  //   }
  // };

  const RenderFooter = (controls) => {
    if (loading) {
      return <Loader />;
    } else {
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
            // onClick={handleAddClientContact}
          >
            Save payment
          </button>
        </>
      );
    }
  };

  return (
    <SystemModal
      title="Register Register Loan Application  Fees"
      id="model-application fees"
      size="md"
      footer={RenderFooter}>
      <div className="row row-sm">
        <div className="side-menu"></div>
        <div className="col-lg-12 col-md-12">
          <div className="card custom-card">
            <div className="card-body">
              <div>
                <h5 className="main-content-label mb-1"></h5>
              </div>
              <div className="row row-sm">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="form-group">
                      <p className="mg-b-10">select clients application</p>
                      <input
                        type="text"
                        className="form-control"
                        name="example-text-input"
                        placeholder="users first name"
                      />
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <p className="mg-b-10">Amount</p>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Amount applied for"
                      />
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label className="mg-b-10">Date</label>
                      <input
                        type="date"
                        className="form-control"
                        name="example-text-input"
                        placeholder="date of application"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SystemModal>
  );
}

export default RecordLoanApplicationFees;
