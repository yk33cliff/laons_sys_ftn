import React, {useState} from "react";
import SystemModal from "../Common/SystemModal";
import toast, {Toaster} from "react-hot-toast";
import ajaxLaons from "../../util/remote/ajaxLaons";
import functions from "../../util/functions";
function AddLoanpayment(props) {
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [contact, setContact] = useState("");
  const id = props.id;
  var user_id = functions.sessionGuard();
  //console.log(props.customer);
  const handler = async (e) => {
    e.preventDefault();
    if (amount.length > 0) {
      var data = {
        Loan_id: id,
        amount: amount,
        contact: contact,
        user_id: user_id,
        date: date,
        customer: props.customer,
      };

      const server_response = await ajaxLaons.AddLoanRepayment(data);
      if (server_response.status === "OK") {
        // resetForm();
        toast.success(server_response.message);
        setAmount("");
        setDate("");
      } else {
        toast.error(server_response.message);
      }
    } else {
      toast.error("Amount is mandatory");
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
          Add payment
        </button>
      </>
    );
  };
  return (
    <div>
      <SystemModal
        title="Add laon payment for cash payment"
        id="model-update-cross"
        size="md"
        footer={RenderFooter}>
        <Toaster />
        <div className="mb-4">
          <label htmlFor="">amount Paid</label>
          <input
            type="text"
            className="form-control"
            placeholder="amount paid by the user"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="">Customer Contact</label>
          <input
            type="text"
            className="form-control"
            placeholder="customer's contact"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="">payment date</label>
          <input
            type="date"
            className="form-control"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
      </SystemModal>
    </div>
  );
}

export default AddLoanpayment;
