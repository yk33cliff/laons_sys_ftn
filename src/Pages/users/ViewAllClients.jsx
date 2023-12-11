import React, {useContext} from "react";
import AppContainer from "../../Components/Structure/AppContainer";
import ClientContext from "../../Context/ClientContext";

function ViewAllClients() {
  const {clientList} = useContext(ClientContext);
  console.log(clientList);

  return (
    <div>
      <AppContainer title="View clients">
        <div className="row">
          <div className="row row-sm">
            <div className="col-lg-12 col-md-12 mx-10">
              <div
                style={{
                  float: "right",
                  marginBottom: "20px",
                }}
                className="col-lg-2 col-md-2">
                <div className="form-group mb-0">
                  <a
                    href="/clients/Add"
                    className="btn col-lg -12 rounded-50 col-md-12 btn-primary">
                    + clients
                  </a>
                </div>
              </div>
            </div>
            <br />
          </div>
          <div className="row row-sm">
            <div className="col-xl-12">
              <div className="card custom-card">
                <div className="card-header border-bottom-0">
                  <label className="main-content-label my-auto pt-2">
                    View clients
                  </label>
                </div>
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="table card-table text-nowrap table-bordered border-top">
                      <thead>
                        <tr>
                          <th>No.</th>
                          <th>Name</th>
                          <th>username</th>
                          <th>contact</th>
                          <th>email</th>
                          <th> location</th>
                          <th>viewProfile</th>
                          <th>status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {/* contact : "256701234567" email : "client@gmail.com" id :
                      "4" is_active nin */}
                        {clientList &&
                          Array.isArray(clientList) &&
                          clientList.map((client, key) => (
                            <tr key={key}>
                              <td>{key + 1}</td>
                              <td>{client.name}</td>
                              <td>{client.username}</td>
                              <td>{client.contact}</td>
                              <td>{client.email}</td>
                              <td>{client.location}</td>
                              <td>
                                <a
                                  href={`/profile/${client.id}`}
                                  classname="btn badge bg-warning-light bg-pill">
                                  profile
                                </a>
                              </td>
                              <td>
                                {client.is_active === "1" ? (
                                  <span className="badge bg-success-light bg-pill">
                                    active
                                  </span>
                                ) : (
                                  <span className="badge bg-danger-light bg-pill">
                                    inactive
                                  </span>
                                )}
                              </td>
                            </tr>
                          ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AppContainer>
    </div>
  );
}

export default ViewAllClients;
