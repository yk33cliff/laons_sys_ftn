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
  async fetchFinesTotal() {
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
  //   async enableUser(user_id) {
  //     let data = {
  //       user_id: user_id,
  //     };
  //     let response = await apiCall("user/enable", data);
  //     return response;
  //   },
};
