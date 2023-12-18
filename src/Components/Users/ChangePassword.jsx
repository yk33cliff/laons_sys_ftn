import {useState} from "react";
import SystemModal from "../Common/SystemModal";

import {Toaster, toast} from "react-hot-toast";
import ajaxUser from "../../util/remote/ajaxUser";

const ChangePassword = (props) => {
  const [old_password, setOldPassword] = useState("");
  const [new_password, setNewPassword] = useState("");
  console.log(props.id);

  const handleUpdatePassword = async (e) => {
    e.preventDefault();
    if (props.id > 0 || old_password.length > 0 || new_password.length > 0) {
      var pass = btoa(old_password);
      var passn = btoa(new_password);
      var data = {id: props.id, old_p: pass, new_p: passn};
      const server_response = await ajaxUser.updatePassword(data);
      if (server_response.status === "OK") {
        setOldPassword("");
        setNewPassword("");
        toast.success(server_response.message);
      } else {
        toast.error(server_response.message);
      }
    } else {
      toast.error("Please enter all fields!");
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
          onClick={handleUpdatePassword}>
          Save New Password
        </button>
      </>
    );
  };

  return (
    <SystemModal
      title="Change Password"
      id="model-new-pass"
      size="md"
      footer={RenderFooter}>
      <div className="mb-4">
        <label htmlFor="">Enter Current Password</label>
        <Toaster />
        <input
          onChange={(e) => setOldPassword(e.target.value)}
          value={old_password}
          type="password"
          className="form-control"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="">Set New Password</label>
        <input
          onChange={(e) => setNewPassword(e.target.value)}
          value={new_password}
          type="password"
          className="form-control"
        />
      </div>
    </SystemModal>
  );
};

export default ChangePassword;
