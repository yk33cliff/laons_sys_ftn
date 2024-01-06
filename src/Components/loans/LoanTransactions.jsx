import React, {useEffect, useState} from "react";
import ajaxLaons from "../../util/remote/ajaxLaons";

function LoanTransactions(props) {
  const [items, setItems] = useState("");

  useEffect(() => {
    getTransactions();
  }, []);
  const getTransactions = async () => {
    var data = {
      loan_id: props.id,
    };
    const server_response = await ajaxLaons.getLoanTransactions(data);

    if (server_response.status === "OK") {
      setItems(server_response.details);
    }
    // else if (server_response.status === "Fail") {
    // toast.error(server_response.message);
    // }
  };
  console.log(items);
  // {
  //       "amount": "9400",
  //       "issue": "principal payment",
  //       "date_of_pay": "2024-Jan-Wed"
  //   },

  return (
    <div>
      {/* Row*/}
      <div className="row row-sm">
        <div className="col-xl-12">
          <div className="card custom-card">
            <div className="card-header border-bottom-0">
              <label className="main-content-label my-auto pt-2">
                Loan transactions
              </label>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table className="table card-table text-nowrap table-bordered border-top">
                  <thead>
                    <tr>
                      <th>No.</th>
                      <th>Amount</th>
                      <th>Payment Issue</th>
                      <th>payment date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Array.isArray(items) &&
                      items.map((item, key) => (
                        <tr key={key}>
                          <td>{key + 1}</td>
                          <td className="text-dark">{item.amount}</td>
                          <td className="text-dark">{item.issue}</td>
                          <td className="text-dark">{item.date_of_pay}</td>
                        </tr>
                      ))}
                  </tbody>
                </table>
                <br />
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Row End */}
    </div>
  );
}

export default LoanTransactions;
