import React, {useContext} from "react";
import AppContainer from "../Structure/AppContainer";
import UserContext from "../../Context/UserContext";

function ViewUsers() {
  const {userList} = useContext(UserContext);
  // console.log(userList);
  return (
    <div>
      <div>
        <div className="row row-sm">
          <div className="col-xl-12">
            <div className="card custom-card">
              <div className="card-header border-bottom-0">
                <label className="main-content-label my-auto pt-2">
                  System users
                </label>
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table card-table text-nowrap table-bordered border-top">
                    <thead>
                      <tr>
                        {/* contact : "256701234567" email : */}
                        {/* "busikuwyclif@gmail.com" id : "1" is_active : "1" */}
                        {/* is_admin : "0" location : "KAMPALA" name : "Super */}
                        {/* Admin" nin : "CMKDSV34554" role_id : short_name : "S" */}
                        {/* username : "root" */}
                        <th>No.</th>
                        <th>Name</th>
                        <th>UserName</th>
                        <th>role</th>
                        <th>Contact</th>
                        <th>Email</th>
                        <th>Nin</th>
                        <th>Residence</th>
                        <th>status</th>
                        <th>user Profile</th>
                      </tr>
                    </thead>
                    <tbody>
                      {!Array.isArray(userList) && (
                        <tr>
                          <td colSpan={8}>
                            <p className="text-center">
                              No user found in the system
                            </p>
                          </td>
                        </tr>
                      )}

                      {Array.isArray(userList) &&
                        userList.map((user, key) => (
                          <tr key={key}>
                            <td>{key + 1}</td>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.role_id.role_name}</td>
                            <td>{user.email}</td>
                            <td>{user.nin}</td>
                            <td>{user.username}</td>
                            <td>{user.location}</td>
                            <td>
                              {user.is_active === "1" ? (
                                <span className="badge bg-info-light bg-pill">
                                  active
                                </span>
                              ) : (
                                <span className="badge bg-danger-light bg-pill">
                                  inactive
                                </span>
                              )}
                            </td>
                            <td>
                              <span className="badge bg-success-light bg-pill">
                                <a
                                  href={`/user/${user.id}`}
                                  classname="btn text-white badge  bg-warning-light bg-pill">
                                  profile
                                </a>
                              </span>
                            </td>
                          </tr>
                        ))}
                      {/* <tr>
                          <td>#12450</td>
                          <td className="text-success">Buy</td>
                          <td>
                            <i className="cc BTC-alt text-warning" /> 0.37218
                          </td>
                          <td>
                            <i className="cc BTC-alt text-warning" /> 0.42173
                          </td>
                          <td>52681.13</td>
                          <td>$ 5273.15</td>
                          <td>
                            <span className="badge bg-success-light bg-pill">
                              Completed
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td>#12451</td>
                          <td className="text-danger">Sell</td>
                          <td>
                            <i className="cc BTC-alt text-warning" /> 1.47364
                          </td>
                          <td>
                            <i className="cc BTC-alt text-warning" /> 0.36472
                          </td>
                          <td>73647.15</td>
                          <td>$ 2637.37</td>

                          <td>
                            <span className="badge bg-warning-light bg-pill">
                              Pending
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td>#12452</td>
                          <td className="text-danger">Sell</td>
                          <td>
                            <i className="cc BTC-alt text-warning" /> 0.63736
                          </td>
                          <td>
                            <i className="cc BTC-alt text-warning" /> 0.73748
                          </td>
                          <td>72637.02</td>
                          <td>$ 6345.16</td>

                          <td>
                            <span className="badge bg-danger-light bg-pill">
                              Cancelled
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td>#12453</td>
                          <td className="text-success">Buy</td>
                          <td>
                            <i className="cc BTC-alt text-warning" /> 0.63647
                          </td>
                          <td>
                            <i className="cc BTC-alt text-warning" /> 0.83643
                          </td>
                          <td>83748.19</td>
                          <td>$ 23836.09</td>

                          <td>
                            <span className="badge bg-success-light bg-pill">
                              Completed
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td>#12454</td>
                          <td className="text-success">Buy</td>
                          <td>
                            <i className="cc BTC-alt text-warning" /> 0.76263
                          </td>
                          <td>
                            <i className="cc BTC-alt text-warning" /> 0.72563
                          </td>
                          <td>32635.32</td>
                          <td>$ 7235.25</td>

                          <td>
                            <span className="badge bg-success-light bg-pill">
                              Completed
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td>#12455</td>
                          <td className="text-danger">Sell</td>
                          <td>
                            <i className="cc BTC-alt text-warning" /> 0.46263
                          </td>
                          <td>
                            <i className="cc BTC-alt text-warning" /> 0.27363
                          </td>
                          <td>28937.22</td>
                          <td>$ 4853.15</td>

                          <td>
                            <span className="badge bg-info-light bg-pill">
                              In Process
                            </span>
                          </td>
                        </tr> */}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewUsers;
