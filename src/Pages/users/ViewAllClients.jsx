import React, {useContext, useState} from "react";
import AppContainer from "../../Components/Structure/AppContainer";
import ClientContext from "../../Context/ClientContext";
import ReactPaginate from "react-paginate";
import useStateCallback from "../../util/customHooks/useStateCallback";
import AddClientNextOfKin from "../../Components/Users/AddClientNextOfKin";
import ViewClientNextOfKin from "../../Components/Users/ViewClientNextOfKin";
import AddWalletCash from "../../Components/loans/AddWalletCash";

function ViewAllClients() {
  const {clientList} = useContext(ClientContext);

  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 15; // Change this value based on your preference

  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
  };
  const [Addkin, setAddkin] = useStateCallback(false);
  const handle_next_of_kin = (id) => {
    setAddkin(false, () =>
      setAddkin(<AddClientNextOfKin isOpen={true} id={id} state={setAddkin} />)
    );
  };
  const [ViewKin, setViewKin] = useStateCallback(false);
  const handle_view_kin = (id) => {
    setViewKin(false, () =>
      setViewKin(
        <ViewClientNextOfKin isOpen={true} id={id} state={setAddkin} />
      )
    );
  };
  const [payment, setPayment] = useStateCallback(false);
  const paymentHandler = (id) => {
    setPayment(false, () =>
      setPayment(<AddWalletCash isOpen={true} id={id} />)
    );
  };
  // pagination workings

  const offset = currentPage * itemsPerPage;
  const paginatedItems = Array.isArray(clientList)
    ? clientList.slice(offset, offset + itemsPerPage)
    : [];

  return (
    <div>
      <AppContainer title="View clients">
        {Addkin}
        {ViewKin}
        {payment}

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
                          <th>
                            Wallet <br /> balance
                          </th>
                          <th>
                            load Wallet <br />
                            cash
                          </th>
                          <th>next of kin</th>
                          <th>viewProfile</th>
                          <th>status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {/* contact : "256701234567" email : "client@gmail.com" id :
                      "4" is_active nin */}
                        {paginatedItems.map((client, key) => (
                          <tr key={key}>
                            <td>{key + 1}</td>
                            <td>{client.name}</td>
                            <td>{client.username}</td>
                            <td>{client.contact}</td>
                            <td>{client.email}</td>
                            <td>{client.location}</td>
                            <td>{client.wallet_balance}</td>
                            <td>
                              <button
                                onClick={(e) => paymentHandler(client.id)}
                                className="badge  bg-primary-light bg-pill">
                                Add wallet <br />
                                cash
                              </button>
                            </td>

                            <td>
                              <button
                                onClick={(event) =>
                                  handle_next_of_kin(client.id)
                                }
                                className="badge  bg-secondary-light bg-pill">
                                add next of kin
                              </button>
                              <button
                                onClick={(event) => handle_view_kin(client.id)}
                                className="badge  badge bg-primary  bg-pill mx-1">
                                View next of kin
                              </button>
                            </td>
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

                    <ReactPaginate
                      pageCount={Math.ceil(clientList.length / itemsPerPage)}
                      pageRangeDisplayed={3}
                      marginPagesDisplayed={1}
                      onPageChange={handlePageClick}
                      containerClassName={"pagination"}
                      activeClassName={"active"}
                      nextLabel={"Next"}
                      previousLabel={"Previous"}
                      breakLabel={"..."}
                      pageLinkClassName={"page-link"}
                      nextClassName={"page-item"}
                      nextLinkClassName={"page-link"}
                      previousClassName={"page-item"}
                      previousLinkClassName={"page-link"}
                    />
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
