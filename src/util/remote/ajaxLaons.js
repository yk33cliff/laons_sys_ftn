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
  async AddLoanSecurity(data) {
    let response = await apiCall("add/loans/AddSecurity", data);
    return response;
  },
  async ViewLoanSecurities(data) {
    let response = await apiCall("view/loans/viewLoansSecurities", data);
    return response;
  },
  async getLoanDetails(data) {
    let response = await apiCall("view/loans/getLoanDetails", data);
    return response;
  },
  async getLoanHolderDetails(data) {
    let response = await apiCall("users/getLoanHolderDetails", data);
    return response;
  },
  async updateLoanGuarantor(data) {
    let response = await apiCall("update/loans/guarantorUpdate", data);
    return response;
  },
  async deleteLoanGuarantor(data) {
    let response = await apiCall("delete/loans/guarantordelete", data);
    return response;
  },
  async UpdateLoanDetails(data) {
    let response = await apiCall("loans/updates/updateLoan/details", data);
    return response;
  },
  async deleteLoan(data) {
    let response = await apiCall("loans/deleting/delete/this", data);
    return response;
  },
  async getLoanShedule(data) {
    let response = await apiCall("add/loans/shedule", data);
    return response;
  },
  async getLoanTransactions(data) {
    let response = await apiCall("loans/transactions", data);
    return response;
  },
  async getReciepts() {
    let response = await apiCall("loans/cashReciepts");
    return response;
  },
  async getApprovedLoanNotcashed() {
    let response = await apiCall("loans/cashLoanNotPaid");
    return response;
  },
  async ActivateCashLoan(data) {
    let response = await apiCall("loans/cashloanActivator", data);
    return response;
  },
  async declineLoanApplication(data) {
    let response = await apiCall("loans/declineLoan", data);
    return response;
  },
  async fetchUserTransactions(data) {
    let response = await apiCall("Accountability/user/userTranctions", data);
    return response;
  },
  async getDeclinedLOans() {
    let response = await apiCall("loans/declinedLoan");
    return response;
  },
  async reactivate_loan(data) {
    let response = await apiCall("loans/reactivateLoan", data);
    return response;
  },
  async deleteLoanFines(data) {
    let response = await apiCall("loans/delete/fynes", data);
    return response;
  },
  async getLoanFines(data) {
    let response = await apiCall("loans/get/fynes", data);
    return response;
  },
  async LoanCalculator(data) {
    let response = await apiCall("loans/LoanCalculator", data);
    return response;
  },
};
