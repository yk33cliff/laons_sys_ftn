import apiCall from "./apiCall";
/**if (AppData::__update($this->TableName, $data, $id)) :
            $this->Success = "operation was successfully!!";
            return true;
        endif;
        $this->Error = "operation failed ";
        return false;
 * deals with loan application,  processing
 */
export default {
  async createLoanType(data) {
    let response = await apiCall("Loan_create_type", data);
    return response;
  },
  async fetchLoanTypeList(data) {
    let response = await apiCall("Loan_types_list", data);
    return response;
  },
  async UpdateLoanType(data) {
    let response = await apiCall("Loan_update_type", data);
    return response;
  },
  async CreateLoanApplication(data) {
    let response = await apiCall("Loan_application_add", data);
    return response;
  },
  async ViewUsersLoans(data) {
    let response = await apiCall("get_user_loans", data);
    return response;
  },
  async fetchLoansToApprove(data) {
    let response = await apiCall("get_loan/loan/approve/", data);
    return response;
  },
  async approveLoans(data) {
    let response = await apiCall("loan/approve/now", data);
    return response;
  },
  async fetchActiveLoans() {
    let response = await apiCall("loan/active/loans");
    return response;
  },
  async addLoanGuarantor(data) {
    let response = await apiCall("add/loans/guarantors", data);
    return response;
  },
  async ViewLoanGuarantors(data) {
    let response = await apiCall("get/loans/guarantors", data);
    return response;
  },
  async AddLoanRepayment(data) {
    let response = await apiCall("add/loans/repayments", data);
    return response;
  },
};
