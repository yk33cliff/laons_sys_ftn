import toast, {Toaster} from "react-hot-toast";
import ajaxLaons from "../../util/remote/ajaxLaons";
import {useEffect, useState} from "react";
import functions from "../../util/functions";

function GetLoanFine(props) {
  const user_id = functions.sessionGuard();

  const [fines, setFines] = useState("");
  useEffect(() => {
    get_loan_fines();
  }, []);

  const delete_fyn = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this penalty charge system"
    );

    if (confirmDelete) {
      const data = {
        id: id,
      };

      const server_response = await ajaxLaons.deleteLoanFines(data);

      if (server_response.status === "OK") {
        toast.success(server_response.message);
        get_loan_fines();
      } else {
        toast.error(server_response.message);
      }
    }
  };

  const get_loan_fines = async () => {
    const server_response = await ajaxLaons.getLoanFines();

    if (server_response.status === "OK") {
      setFines(server_response.details);
    } else {
      setFines("");
    }
  };

  return (
    <div>
      <div>
        <div className="row">
          <div className="row row-sm">
            <div className="col-xl-12">
              <div className="card custom-card">
                <div className="card-header border-bottom-0">
                  <label className="main-content-label my-auto pt-2">
                    Loan applications Details
                  </label>
                </div>
                <Toaster />

                <div className="card-body">
                  <div className="table-responsive">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                      <div className="card custom-card">
                        <div className="card-header border-bottom-0">
                          <label className="main-content-label my-auto pt-2">
                            Loan Fine charges
                          </label>
                        </div>

                        <div className="table-responsive">
                          <table className="table card-table text-nowrap table-bordered border-top">
                            <thead>
                              <tr>
                                <th>
                                  date <br />
                                  registered
                                </th>
                                <th>
                                  Base <br />
                                  Amount
                                </th>
                                <th>penalty</th>
                                <th>Actions</th>
                              </tr>
                            </thead>
                            <tbody>
                              {fines &&
                                Array.isArray(fines) &&
                                fines.map((item, key) => (
                                  <>
                                    <tr key={key}>
                                      <td className="text-success">
                                        {item.date_added}
                                      </td>
                                      <td> {item.date_added}</td>
                                      <td> {item.base_amount}</td>
                                      <td> {item.amount}</td>

                                      <td>
                                        <button
                                          type="button"
                                          onClick={() =>
                                            delete_fyn(item.loan_id)
                                          }
                                          className="badge bg-danger-light bg-pill">
                                          delete
                                        </button>
                                      </td>
                                    </tr>
                                  </>
                                ))}
                              {!Array.isArray(fines) && (
                                <>
                                  <tr>
                                    <td
                                      colSpan={4}
                                      className="text-danger text-center">
                                      No fines found in the system
                                    </td>
                                  </tr>
                                </>
                              )}
                            </tbody>
                          </table>
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
      {/* </AppContainer> */}
    </div>
  );
}

export default GetLoanFine;
