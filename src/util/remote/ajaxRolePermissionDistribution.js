import apiCall from "./apiCall";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
   
   
    // async fetchDistributionList(data) {
    //     let response = await apiCall("permission/list", data)
    //     return response;
       
    //   },
      async createRolePermissionDistribution(permission_id,role_id) {
        let data = {
          "permission_id":permission_id,
          "role_id":role_id
        }
       
        let response = await apiCall("rolepermission/create", data)
        return response;
      
      }
    //   ,
    //   async updatePermission(permission_id,permission_code,permission_description) {
    //     let data = {
    //       "permission_id":permission_id,
    //       "permission_code":permission_code,
    //       "permission_description":permission_description
    //     }
       
    //     let response = await apiCall("permission/update", data)
    //     return response;
      
    //   }



}