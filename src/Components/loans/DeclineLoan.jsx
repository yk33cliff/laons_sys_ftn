import React, {useState} from "react";
import SystemModal from "../Common/SystemModal";
import toast, {Toaster} from "react-hot-toast";
import ajaxLaons from "../../util/remote/ajaxLaons";
import functions from "../../util/functions";
function DeclineLoan(props) {
  const [comment, setComment] = useState("");
  const user_id = functions.sessionGuard();
  //   console.log(props.id);
  const handler = async (e) => {
    e.preventDefault();
    if (comment.length > 0) {
      var data = {
        id: props.id,
        comment: comment,
        user_id: user_id,
      };

      const server_response = await ajaxLaons.declineLoanApplication(data);
      if (server_response.status === "OK") {
        setComment("");
        window.location.reload();
        toast.success(server_response.message);
      } else {
        toast.error(server_response.message);
      }
    } else {
      toast.error("Fill all the fields, they are mandatory");
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
        <button
          type="button"
          className={`btn ripple btn-success`}
          onClick={handler}>
          Decline Loan
        </button>
      </>
    );
  };
  return (
    <div>
      <SystemModal
        title="Add Loan  guarantor"
        id="model-update-cross"
        size="md"
        footer={RenderFooter}>
        <Toaster />
        <div className="mb-4">
          <label htmlFor="">reason for Declining</label>
          <input
            type="text"
            className="form-control"
            placeholder="reason to backup loan decline"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
        </div>
      </SystemModal>
    </div>
  );
}

export default DeclineLoan;
