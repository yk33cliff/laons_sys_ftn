import apiCall from "./apiCall";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  async fetchTotalUser() {
    let response = await apiCall("dashboard/get_total_system_users");
    return response;
  },
  async fetch_pull_balance() {
    let response = await apiCall("dashboard/get_pull_balance");
    return response;
  },
  async fetch_total_clients() {
    let response = await apiCall("dashboard/get_clients_number");
    return response;
  },
  async fetch_total_fine_earnings() {
    let response = await apiCall("dashboard/total/fines");
    return response;
  },
  async fetch_interest_earned() {
    let response = await apiCall("dashboard/total/interests");
    return response;
  },
  async fetchNo_pendingApprove(data) {
    let response = await apiCall("dashboard/total/pendingApprovals", data);
    return response;
  },
  async fetchSumLoaned() {
    let response = await apiCall("dashboard/total/sumLoaned");
    return response;
  },
  async fetchNumber_activeLoans() {
    let response = await apiCall("dashboard/total/activeLoansNumber");
    return response;
  },
  async Fetch_quick_balance() {
    let response = await apiCall("dashboard/get/request/electronic_balance/");
    return response;
  },
  async get_application_fees_earnings() {
    let response = await apiCall("dashboard/get/applicationfees/");
    return response;
  },
  async get_recent_transaction(data) {
    let response = await apiCall("RecentTransactions/get", data);
    return response;
  },
  async fetch_monitoring_fees_earned() {
    let response = await apiCall("dashboard/get/monitoring/fees");
    return response;
  },
  async get_loan_insurance_earnings() {
    let response = await apiCall("dashboard/get/Insurance_earnings");
    return response;
  },
  async get_Processing_fees_earnings() {
    let response = await apiCall("dashboard/get/processing_earnings");
    return response;
  },
  async get_amount_tied_up_in_principal() {
    let response = await apiCall("dashboard/get/tiedUpLoans");
    return response;
  },
  //   async enableUser(user_id) {
  //     let data = {
  //       user_id: user_id,
  //     };
  //     let response = await apiCall("user/enable", data);
  //     return response;
  //   },
};
