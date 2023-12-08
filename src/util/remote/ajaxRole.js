import apiCall from "./apiCall";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  async fetchRoleList() {
    let response = await apiCall("role_list");
    return response;
  },
  async createRole(role_name) {
    let data = {
      role_name: role_name,
    };

    let response = await apiCall("role_create", data);
    return response;
  },
};
