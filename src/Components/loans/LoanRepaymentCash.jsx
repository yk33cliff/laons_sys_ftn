import React, {useState} from "react";
import SystemModal from "../Common/SystemModal";
import toast, {Toaster} from "react-hot-toast";
import ajaxLaons from "../../util/remote/ajaxLaons";
function AddWalletCash(props) {
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [residence, setResidence] = useState("");
  const [phone, setPhone] = useState("");
  const [relationship, setRelationship] = useState("");

  //   //console.log(props.id);
  const handler = async (e) => {
    e.preventDefault();
    if (amount.length > 0 && date.length > 0) {
      var data = {
        id: props.id,
        amount: amount,
        date: date,
      };

      const server_response = await ajaxLaons.addLoanGuarantor(data);
      if (server_response.status === "OK") {
        // resetForm();
        toast.success(server_response.message);
        setAmount("");
        setDate("");
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
        title="Add Loan  guarantor"
        id="model-update-cross"
        size="md"
        footer={RenderFooter}>
        <Toaster />
        <div className="mb-4">
          <label htmlFor="">Amount </label>
          <input
            type="text"
            className="form-control text-dark"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="">Date paid</label>
          <input
            type="text"
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
