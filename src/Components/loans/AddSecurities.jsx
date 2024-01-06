import React, {useState} from "react";
import SystemModal from "../Common/SystemModal";
import ajaxLaons from "../../util/remote/ajaxLaons";
import toast, {Toaster} from "react-hot-toast";
import functions from "../../util/functions";

function AddSecurities(props) {
  const [description, setDescription] = useState("");
  const [picture, setPicture] = useState("");
  const [picture2, setPicture2] = useState("");
  const id = props.id;
  const user_id = functions.sessionGuard();

  const changePicture = (e) => {
    e.preventDefault();

    let files = e.target.files;
    let reader = new FileReader();
    reader.readAsDataURL(files[0]);

    reader.onload = (e) => {
      const newItem = {file: e.target.result};

      setPicture(e.target.result);
    };
  };

  const changePicture2 = (e) => {
    e.preventDefault();

    let files = e.target.files;
    let reader = new FileReader();
    reader.readAsDataURL(files[0]);

    reader.onload = (e) => {
      const newItem = {file: e.target.result};

      setPicture2(e.target.result);
    };
  };

  const handler = async (e) => {
    e.preventDefault();
    // if (amount.length > 0) {
    var data = {
      id: id,
      pic1: picture,
      pic2: picture2,
      description: description,
      user: user_id,
    };

    const server_response = await ajaxLaons.AddLoanSecurity(data);
    if (server_response.status === "OK") {
      // resetForm();
      toast.success(server_response.message);
      setPicture("");
      setPicture2("");
      setDescription("");
    } else {
      toast.error(server_response.message);
    }
    // } else {
    //   toast.error("Amount is mandatory");
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
        <button
          type="button"
          className={`btn ripple btn-success`}
          onClick={handler}>
          Add security
        </button>
      </>
    );
  };
  return (
    <div>
      <SystemModal
        title="Add loan Securities"
        id="model-update-cross"
        size="lg"
        footer={RenderFooter}>
        <div className="mb-4">
          <label htmlFor="">security description</label>
          <textarea
            className="form-control"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            rows={2}
          />
        </div>
        <Toaster />
        <div className="mb-4">
          <label htmlFor="">security image 1</label>
          <input
            type="file"
            className="form-control"
            // value={picture}
            onChange={(e) => changePicture(e)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="">security image 2</label>
          <input
            type="file"
            className="form-control"
            // value={picture2}
            onChange={(e) => changePicture2(e)}
          />
        </div>
      </SystemModal>
    </div>
  );
}

export default AddSecurities;
