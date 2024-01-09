import React, {useEffect, useState} from "react";
import AppContainer from "../Components/Structure/AppContainer";
import {useParams} from "react-router-dom";
import ajaxUser from "../util/remote/ajaxUser";
import ajaxClient from "../util/remote/ajaxClient";
import Loader from "../Components/Common/Loader";

const UserProfile = (props) => {
  const [userClients, setUserClients] = useState(false);
  const [userProfile, setUserProfile] = useState(false);
  const {id} = useParams();

  useEffect(() => {
    getUserProfile(id);
    getUserClients(id);
  }, [id]);

  const getUserProfile = async (id) => {
    const server_response = await ajaxUser.fetchUserProfile(id);
    // //console.log(server_response)
    if (server_response.status === "OK") {
      //store results
      setUserProfile(server_response.details);
    } else {
      //communicate error
      setUserProfile("404");
    }
  };

  const getUserClients = async (id) => {
    const server_response = await ajaxClient.fetchUserClients(id);
    //   //console.log(server_response)
    if (server_response.status === "OK") {
      //store results
      setUserClients(server_response.details);
    } else {
      //communicate error
      setUserClients("404");
    }
  };

  return (
    <AppContainer title={"User Profile"}>
      <div class="main_content_iner ">
        <div class="container-fluid p-0 sm_padding_15px">
          <div class="row justify-content-center">
            <div class="col-lg-4">
              <div class="card_box box_shadow position-relative mb_30     ">
                <div class="white_box_tittle     ">
                  <div class="main-title2 ">
                    <h4 class="mb-2 nowrap ">User Details</h4>
                  </div>
                </div>
                {userProfile && (
                  <div class="box_body">
                    <div class="col-md-6 mb-3">
                      <label for="exampleFormControlInput1" class="form-label">
                        Names
                      </label>
                      <p>
                        {userProfile.first_name} {userProfile.last_name}
                      </p>
                    </div>
                    <div class="col-md-6 mb-3">
                      <label for="exampleFormControlInput1" class="form-label">
                        E-mail
                      </label>
                      <p>{userProfile.email}</p>
                    </div>
                    <div class="col-md-6 mb-3">
                      <label for="exampleFormControlInput1" class="form-label">
                        NIN
                      </label>
                      <p>{userProfile.nin}</p>
                    </div>
                    <div class="col-md-6 mb-3">
                      <label for="exampleFormControlInput1" class="form-label">
                        District
                      </label>
                      <p>{userProfile.district}</p>
                    </div>
                    <div class="col-md-6 mb-3">
                      <label for="exampleFormControlInput1" class="form-label">
                        Team
                      </label>
                      <p>{userProfile.team.team_name}</p>
                    </div>
                    <div class="col-md-6 mb-3">
                      <label for="exampleFormControlInput1" class="form-label">
                        Role
                      </label>
                      <p>
                        <span className="badge bg-info rounded-pill text-black">
                          {userProfile.role.role_name}
                        </span>
                      </p>
                    </div>
                  </div>
                )}
                {!userProfile && <Loader />}
              </div>
            </div>
            <div class="col-lg-8">
              <div class="card_box box_shadow position-relative mb_30 border_radius_0     ">
                <div class="white_box_tittle     ">
                  <div class="main-title2 ">
                    <h4 class="mb-2 nowrap ">Clients Registered</h4>
                  </div>
                </div>
                <div class="box_body">
                  <div class="QA_table mb_30">
                    <table class="table lms_table_active">
                      <thead>
                        <tr>
                          <th scope="col">No.</th>
                          <th scope="col">Client Name</th>
                          <th scope="col">Registration Date</th>
                        </tr>
                      </thead>
                      <tbody>
                        {Array.isArray(userClients) &&
                          userClients.map((item, key) => (
                            <tr key={key}>
                              <th scope="row"> {key + 1}</th>
                              <td>{item.name}</td>
                              <td>{item.created_at.short_date}</td>
                            </tr>
                          ))}
                      </tbody>
                    </table>
                    {!userClients && <Loader />}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppContainer>
  );
};

export default UserProfile;
