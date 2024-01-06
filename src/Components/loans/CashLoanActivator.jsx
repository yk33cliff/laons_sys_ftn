import React, {useState} from "react";
import SystemModal from "../Common/SystemModal";
import ajaxLaons from "../../util/remote/ajaxLaons";
import toast, {Toaster} from "react-hot-toast";
import functions from "../../util/functions";

function CashLoanActivator(props) {
  const [date, setDate] = useState("");
  const id = props.id;
  const user_id = functions.sessionGuard();

  const handler = async (e) => {
    e.preventDefault();
    // if (amount.length > 0) {
    var data = {
      id: id,
      date: date,
    };

    const server_response = await ajaxLaons.ActivateCashLoan(data);
    if (server_response.status === "OK") {
      // resetForm();
      toast.success(server_response.message);
      props.customer();
      setDate("");
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
        title="Activate Cash loan"
        id="model-update-cross"
        size="lg"
        footer={RenderFooter}>
        <div className="mb-4">
          <label htmlFor="">Loan cashing Date</label>
          <input
            className="form-control"
            type="date"
            onChange={(e) => setDate(e.target.value)}
            value={date}
          />
        </div>
        <Toaster />
      </SystemModal>
    </div>
  );
}

export default CashLoanActivator;
