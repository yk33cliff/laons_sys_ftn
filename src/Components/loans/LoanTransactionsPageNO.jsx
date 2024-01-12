import React, {useEffect, useState} from "react";
import ajaxLaons from "../../util/remote/ajaxLaons";

function LoanTransactionsPageNO(props) {
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
                      <th>payment</th>
                      <th>invoice</th>
                      <th>invoice_type </th>
                      <th>description</th>
                      <th>date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {items &&
                      Array.isArray(items) &&
                      items.map((item, key) => (
                        <tr key={key}>
                          <td>{key + 1}</td>
                          <td className="text-dark">{item.payment}</td>
                          <td className="text-dark">{item.invoice}</td>
                          <td className="text-dark">{item.invoice_type}</td>
                          <td className="text-dark">{item.description}</td>
                          <td className="text-dark">{item.created_at}</td>
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

export default LoanTransactionsPageNO;
