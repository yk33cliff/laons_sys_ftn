import React, {useEffect, useState} from "react";
import ajaxLaons from "../../util/remote/ajaxLaons";
import ReactPaginate from "react-paginate";
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
  // pagination workings
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 15; // Change this value based on your preference

  const offset = currentPage * itemsPerPage;
  const paginatedItems = Array.isArray(items)
    ? items.slice(offset, offset + itemsPerPage)
    : [];
  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
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
                      <th>date</th>
                      <th>invoice_type </th>
                      <th>debit</th>
                      <th>creadit</th>
                      <th>description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {paginatedItems.map((item, key) => (
                      <tr key={key}>
                        <td>{key + 1}</td>
                        <td className="text-dark">{item.created_at}</td>
                        <td className="text-dark">{item.invoice_type}</td>
                        <td className="text-dark">{item.invoice}</td>
                        <td className="text-dark">{item.payment}</td>
                        <td className="text-dark">{item.description}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <ReactPaginate
                  pageCount={Math.ceil(items.length / itemsPerPage)}
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
