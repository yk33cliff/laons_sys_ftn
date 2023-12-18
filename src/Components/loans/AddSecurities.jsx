import React from "react";
import SystemModal from "../Common/SystemModal";

function AddSecurities(props) {
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
          // onClick={handler}
        >
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
        size="md"
        footer={RenderFooter}>
        <div className="mb-4">
          <label htmlFor="">security description</label>
          <textarea className="form-control" rows={2} />
        </div>
        <div className="mb-4">
          <label htmlFor="">security image 1</label>
          <input type="file" className="form-control" />
        </div>
        <div className="mb-4">
          <label htmlFor="">security image 2</label>
          <input type="file" className="form-control" />
        </div>
      </SystemModal>
    </div>
  );
}

export default AddSecurities;
