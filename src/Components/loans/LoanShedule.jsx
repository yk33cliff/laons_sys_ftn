import React, {useState} from "react";
import SystemModal from "../Common/SystemModal";
// import toast, {Toaster} from "react-hot-toast";
import dictionary from "../../util/dictionary";
// import ajaxLaons from "../../util/remote/ajaxLaons";
function ImageModal(props) {
  const Print = () => {
    let printContents = document.getElementById("printablediv").innerHTML;
    let originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;

    window.print();
    window.location.reload();
    document.body.innerHTML = originalContents;
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
        title="Loan shedule printable"
        id="model-update-cross"
        size="lg "
        footer={RenderFooter}>
        {/* <Toaster /> */}
        <div className="" id="printablediv">
          <div className="mb-4">
            <p>{props.image}</p>
            <img
              style={{width: "1000px", height: "800px"}}
              src={dictionary.apiHost + "uploads/" + props.image}
              className="img-fluid"
              alt="..."
            />
          </div>
        </div>
      </SystemModal>
    </div>
  );
}

export default ImageModal;
