import React, {useState} from "react";
import SystemModal from "../Common/SystemModal";
import toast, {Toaster} from "react-hot-toast";
import ajaxLaons from "../../util/remote/ajaxLaons";
function AddGuarantors(props) {
  const [name, setName] = useState("");
  const [nin, setNin] = useState("");
  const [residence, setResidence] = useState("");
  const [phone, setPhone] = useState("");
  const [relationship, setRelationship] = useState("");
  const [limit, SetLimit] = useState("");
  const [occuption, setOccuption] = useState("");

  //   console.log(props.id);
  const handler = async (e) => {
    e.preventDefault();
    if (
      name.length > 0 &&
      nin.length > 0 &&
      residence.length > 0 &&
      phone.length > 0 &&
      limit.length > 0 &&
      relationship.length > 0
    ) {
      var data = {
        id: props.id,
        name: name,
        Nin: nin,
        residence: residence,
        phone: phone,
        relationship: relationship,
        limit: limit,
      };

      const server_response = await ajaxLaons.addLoanGuarantor(data);
      if (server_response.status === "OK") {
        // resetForm();
        toast.success(server_response.message);
        setName("");
        setNin("");
        setPhone("");
        setRelationship("");
        setResidence("");
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
          Add Guarantor
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
          <label htmlFor="">Guarantor Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="names"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="">Guarantor contact</label>
          <input
            type="text"
            className="form-control"
            placeholder="telephone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="">Guarantor residence</label>
          <input
            type="text"
            className="form-control"
            placeholder="where the loan holder resides"
            value={residence}
            onChange={(e) => setResidence(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="">Guarantor NIN</label>
          <input
            type="text"
            className="form-control"
            placeholder="nin number of the loan holder"
            value={nin}
            onChange={(e) => setNin(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="">Guarantor relationship with loan seeker</label>
          <input
            type="text"
            className="form-control"
            placeholder="relationship"
            value={relationship}
            onChange={(e) => setRelationship(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="">Guarantor occupation</label>
          <input
            type="text"
            className="form-control"
            placeholder="occupation of guarantor"
            value={occuption}
            onChange={(e) => setOccuption(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="">Guarantor's Limit</label>
          <input
            type="text"
            className="form-control"
            placeholder="amount of the loan the person backs up"
            value={limit}
            onChange={(e) => SetLimit(e.target.value)}
          />
        </div>
      </SystemModal>
    </div>
  );
}

export default AddGuarantors;
