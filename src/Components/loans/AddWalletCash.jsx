import React, {useState} from "react";
import SystemModal from "../Common/SystemModal";
import toast, {Toaster} from "react-hot-toast";
import ajaxLaons from "../../util/remote/ajaxLaons";
import ajaxUser from "../../util/remote/ajaxUser";
import functions from "../../util/functions";
import useStateCallback from "../../util/customHooks/useStateCallback";
import LoanCashReceipt from "./LoanCashReciept";
function AddWalletCash(props) {
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  //console.log(props.id);
  var user = functions.sessionGuard();

  const [reciept, setReciept] = useStateCallback(false);
  const Handle_reciept = (id) => {
    setReciept(false, () =>
      setReciept(<LoanCashReceipt isOpen={true} id={id} />)
    );
  };
  const handler = async (e) => {
    e.preventDefault();
    if (amount.length > 0 && date.length > 0) {
      var data = {
        customer_id: props.id,
        amount_in: amount,
        date: date,
        added_by: user,
      };

      const server_response = await ajaxUser.AddWalletCashToUser(data);
      if (server_response.status === "OK") {
        // resetForm();
        toast.success(server_response.message);
        props.function();
        setAmount("");
        setDate("");
        Handle_reciept(server_response.details);
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
          Add payment
        </button>
      </>
    );
  };
  return (
    <div>
      <SystemModal
        title="Add User wallet cash"
        id="model-update-cross"
        size="md"
        footer={RenderFooter}>
        <Toaster />
        {reciept}
        <div className="mb-4">
          <label htmlFor="">Amount </label>
          <input
            type="text"
            className="form-control text-dark"
            placeholder="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        {/* <div className="mb-4">
          <label htmlFor="">customer,s contact </label>
          <input
            type="text"
            className="form-control text-dark"
            placeholder="customers contact"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div> */}

        <div className="mb-4">
          <label htmlFor="">Date paid</label>
          <input
            type="date"
            className="form-control text-dark"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
      </SystemModal>
    </div>
  );
}

export default AddWalletCash;
