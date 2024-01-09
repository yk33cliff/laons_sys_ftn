import React from "react";
import {Toaster} from "react-hot-toast";

import SystemModal from "../../Components/Common/SystemModal";
import dictionary from "../../util/dictionary";

function UserProfile(props) {
  //console.log(props.id);
  const RenderFooter = (controls) => {
    return (
      <>
        <button
          className="btn ripple btn-dark"
          type="button"
          onClick={controls.close}>
          Close
        </button>
      </>
    );
  };
  return (
    <div>
      {" "}
      <SystemModal
        title="user profile"
        id="model-new-pass"
        size="lg"
        footer={RenderFooter}>
        <div className="mb-4">
          <p>{props.id.name}</p>

          <div className="col-sm-12 col-md-7 col-xl-8">
            <div className="card custom-card">
              <div className="">
                <div className="main-content-body main-content-body-contacts">
                  <div className="main-contact-info-header pt-3">
                    <div className="media">
                      <div className="main-img-user">
                        <img
                          alt="avatar"
                          src={dictionary.apiHost + "img/avatar.png"}
                        />
                      </div>
                      <div className="media-body">
                        <h4>{props.id.username}</h4>
                        <p>{props.id.role_id.role_name}</p>
                      </div>
                    </div>
                    <div className="main-contact-action btn-list pt-3 pe-3">
                      <a
                        href="javascript:void(0);"
                        className="btn ripple btn-primary text-white btn-icon"
                        data-bs-placement="top"
                        data-bs-toggle="tooltip"
                        title="Edit Profile">
                        <i className="fe fe-edit" />
                      </a>
                      <a
                        href="javascript:void(0);"
                        className="btn ripple btn-secondary text-white btn-icon"
                        data-bs-placement="top"
                        data-bs-toggle="tooltip"
                        title="Delete Profile">
                        <i className="fe fe-trash-2" />
                      </a>
                    </div>
                  </div>
                  <div className="main-contact-info-body">
                    <div>
                      <h6>Biography</h6>
                    </div>
                    <div className="media-list">
                      <div className="media">
                        <div className="media-body">
                          <div>
                            <label>Name</label>{" "}
                            <span className="tx-medium">{props.id.name}</span>
                          </div>
                          <div>
                            <label>contact</label>{" "}
                            <span className="tx-medium">
                              {props.id.contact}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="media">
                        <div className="media-body">
                          <div>
                            <label>Location</label>{" "}
                            <span className="tx-medium">
                              {props.id.location}
                            </span>
                          </div>
                          <div>
                            <label>Email</label>{" "}
                            <span className="tx-medium">{props.id.email}</span>
                          </div>
                        </div>
                      </div>
                      <div className="media">
                        <div className="media-body">
                          <div>
                            <label>nin</label>{" "}
                            <span className="tx-medium">Cm191911010ghf</span>
                          </div>
                          <div>
                            <label>UserName</label>{" "}
                            <span className="tx-medium">
                              {props.id.username}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SystemModal>
    </div>
  );
}

export default UserProfile;
