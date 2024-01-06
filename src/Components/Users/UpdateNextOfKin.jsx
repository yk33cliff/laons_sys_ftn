import React, {useState} from "react";
import SystemModal from "../Common/SystemModal";

import toast, {Toaster} from "react-hot-toast";
import ajaxUser from "../../util/remote/ajaxUser";
function UpdateNextOfKin(props) {
  const Kin = props.data;
  const id = Kin.id;
  const [fname, setFname] = useState(Kin.first_name);
  const [lname, setLname] = useState(Kin.last_name);
  const [othername, setOthername] = useState(Kin.other_names);
  const [nin, setNin] = useState(Kin.nin);
  const [phone, setPhone] = useState(Kin.contact);
  const [phone2, setPhone2] = useState(Kin.contact2);
  const [relation, setRelation] = useState(Kin.relationship);
  const [location, setLocation] = useState(Kin.location);
  const [gender, setGender] = useState(Kin.gender);
  const handler = async (e) => {
    e.preventDefault();
    if (
      fname.length > 0 &&
      lname.length > 0 &&
      othername.length > 0 &&
      phone.length > 0 &&
      nin.length > 0
    ) {
      // const password = btoa(pass);
      const data = {
        id: id,
        first_name: fname,
        last_name: lname,
        other_name: othername,
        gender: gender,
        nin: nin,
        location: location,
        contact: phone,
        contact2: phone2,
        relationship: relation,
      };

      const server_response = await ajaxUser.UpdateNextOfKin(data);
      if (server_response.status === "OK") {
        toast.success(server_response.message);
      } else if (server_response.status == "Fail") {
        toast.error(server_response.message);
      }
    } else {
      toast.error("Complete all fields and try again");
    }
  };

  const resetForm = () => {};

  const RenderFooter = (controls) => {
    return (
      <>
        <button
          className="btn ripple btn-dark"
          type="button"
          onClick={controls.close}>
          Close
        </button>
        <button className="btn ripple btn-dark" type="button" onClick={handler}>
          Update data
        </button>
      </>
    );
  };
  return (
    <div>
      <Toaster />
      <SystemModal
        title="Add user next of kin"
        id="model-update-cross"
        size="xl "
        footer={RenderFooter}>
        {/* <Toaster /> */}
        <div className="row">
          <div className="col-md-6 col-lg-6 col-sm-12">
            <label htmlFor="">fisrt Name</label>
            <input
              type="text"
              className="form-control"
              value={fname}
              onChange={(e) => setFname(e.target.value)}
            />
          </div>
          <div className="col-md-6 col-lg-6 col-sm-12">
            <label htmlFor="">Last name</label>
            <input
              type="text"
              className="form-control"
              value={lname}
              onChange={(e) => setLname(e.target.value)}
            />
          </div>
          <div className="col-md-6 col-lg-6 col-sm-12">
            <label htmlFor="">Other Names</label>
            <input
              type="text"
              className="form-control"
              value={othername}
              onChange={(e) => setOthername(e.target.value)}
            />
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label className="mg-b-10">Gender</label>
              <select
                name=""
                className="form-control"
                id=""
                value={gender}
                onChange={(e) => setGender(e.target.value)}>
                <option value="" disabled>
                  ------select gender-------
                </option>
                <option value="male">male</option>
                <option value="female">female</option>
              </select>
            </div>
          </div>
          <div className="col-md-6 col-lg-6 col-sm-12">
            <label htmlFor="">Relationship</label>
            <input
              type="text"
              className="form-control"
              value={relation}
              onChange={(e) => setRelation(e.target.value)}
            />
          </div>
          <div className="col-md-6 col-lg-6 col-sm-12">
            <label htmlFor="">Nin number or other form of identification</label>
            <input
              type="text"
              className="form-control"
              value={nin}
              onChange={(e) => setNin(e.target.value)}
            />
          </div>
          <div className="col-md-6 col-lg-6 col-sm-12">
            <label htmlFor="">Primary Contact</label>
            <input
              type="text"
              className="form-control"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="col-md-6 col-lg-6 col-sm-12">
            <label htmlFor=""> alternative Contact </label>
            <input
              type="text"
              className="form-control"
              value={phone2}
              onChange={(e) => setPhone2(e.target.value)}
            />
          </div>

          <div className="col-md-6 col-lg-6 col-sm-12">
            <label htmlFor="">Residence</label>
            <input
              type="text"
              className="form-control"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
        </div>
      </SystemModal>
    </div>
  );
}

export default UpdateNextOfKin;
