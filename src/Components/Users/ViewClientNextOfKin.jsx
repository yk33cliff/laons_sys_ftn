import React, {useEffect, useState} from "react";
import SystemModal from "../Common/SystemModal";

import toast, {Toaster} from "react-hot-toast";
import ajaxUser from "../../util/remote/ajaxUser";
import useStateCallback from "../../util/customHooks/useStateCallback";
import UpdateNextOfKin from "./UpdateNextOfKin";
function ViewClientNextOfKin(props) {
  // //console.log(props.id);
  const [Kin, setKin] = useState("");
  //console.log(Kin);
  useEffect(() => {
    Fetchdata();
  }, []);

  const Fetchdata = async () => {
    const data = {
      client_id: props.id,
    };

    const server_response = await ajaxUser.fetchNextOfKindata(data);
    if (server_response.status === "OK") {
      setKin(server_response.details);
    } else if (server_response.status === "Fail") {
      toast.error(server_response.message);
    }
  };
  const [Upadate, setUpdate] = useStateCallback(false);
  const Handle_Update = (id) => {
    setUpdate(false, () =>
      setUpdate(<UpdateNextOfKin isOpen={true} data={id} />)
    );
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

        {Kin && (
          <button
            className="btn ripple btn-dark"
            type="button"
            onClick={() => Handle_Update(Kin)}>
            update Next of kin
          </button>
        )}
      </>
    );
  };
  return (
    <div>
      <Toaster />
      <SystemModal
        title="View user next of kin"
        id="model-update-cross"
        size="xl "
        footer={RenderFooter}>
        <Toaster />
        {Upadate}
        {Kin && (
          <div className="col-lg-12 col-md-12 col-xl-12">
            <div className="row">
              <div className="col-6">
                <p>
                  First_name &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                  <span
                    style={{
                      color: "grey",
                    }}>
                    <u>{Kin && Kin.first_name}</u>
                  </span>
                </p>
                <p>
                  Last_name &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                  <span
                    style={{
                      color: "grey",
                    }}>
                    <u>{Kin && Kin.last_name}</u>
                  </span>
                </p>
                <p>
                  Other Names &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                  <span
                    style={{
                      color: "grey",
                    }}>
                    <u>{Kin && Kin.other_names}</u>
                  </span>
                </p>
                <p>
                  Gender&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                  <span
                    style={{
                      color: "grey",
                    }}>
                    <u>{Kin && Kin.gender}</u>
                  </span>
                </p>
                <p>
                  Relationship &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                  <span
                    style={{
                      color: "grey",
                    }}>
                    <u>{Kin && Kin.relationship}</u>
                  </span>
                </p>
              </div>
              <div className="col-6">
                <p>
                  Pirmary Contact&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                  <span
                    style={{
                      color: "grey",
                    }}>
                    <u>{Kin && Kin.contact}</u>
                  </span>
                </p>
                <p>
                  Other Contact&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                  <span
                    style={{
                      color: "grey",
                    }}>
                    <u>{Kin && Kin.contact2}</u>
                  </span>
                </p>
                <p>
                  Residence&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                  <span
                    style={{
                      color: "grey",
                    }}>
                    <u>{Kin && Kin.location}</u>
                  </span>
                </p>
              </div>
            </div>
            <p></p>
          </div>
        )}

        {!Kin && (
          <p className="text-danger text-center">
            {" "}
            user has no registered next of kin
          </p>
        )}
      </SystemModal>
    </div>
  );
}

export default ViewClientNextOfKin;
