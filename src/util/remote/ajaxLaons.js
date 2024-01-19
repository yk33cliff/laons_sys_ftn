import apiCall from "./apiCall";

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
  async getInstallmentsNotPaid() {
    let response = await apiCall("loans/get/installmentsNotPaid");
    return response;
  },
  async getWeeklyLoans() {
    let response = await apiCall("loans/get/weeklyActiveLoans");
    return response;
  },
  async getmonthlyLoansActive() {
    let response = await apiCall("loans/get/monthlyActiveLoans");
    return response;
  },
  async getDailylyLoans() {
    let response = await apiCall("loans/get/dailyActiveLoans");
    return response;
  },
  async getLoansPaidOffCompletely() {
    let response = await apiCall("loans/get/LoansCompletelyPaidOff");
    return response;
  },
  async getDefualtedLoans() {
    let response = await apiCall("loans/get/DefualtedLoans");
    return response;
  },

  async gettodayInstallmentsLoans() {
    let response = await apiCall("loans/get/getTodayInstallments");
    return response;
  },

  async getTomoxInstallments() {
    let response = await apiCall("loans/get/TomoxInstallmentLoans");
    return response;
  },

  async getThreeDayInstallments() {
    let response = await apiCall("loans/get/threeDaysInstallments");
    return response;
  },
  async getApplicationFeesPayment() {
    let response = await apiCall("loans/ApplicationFees/Payments");
    return response;
  },
  async getIsurancesFeesPayment() {
    let response = await apiCall("loans/insurance/PaymentsInsu");
    return response;
  },
  async getprocessingFeesPayment() {
    let response = await apiCall("loans/processingFees");
    return response;
  },
  async getLoanReports() {
    let response = await apiCall("loans/loanReports");
    return response;
  },
};
