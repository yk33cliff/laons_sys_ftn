import apiCall from "./apiCall";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
   
   
    // async fetchDistributionList(data) {
    //     let response = await apiCall("permission/list", data)
    //     return response;
       
    //   },
      async createPermissionDistribution(permission_id,user_id,added_by) {
        let data = {
          "permission_id":permission_id,
          "user_id":user_id,
          "added_by":added_by
        }
       
        let response = await apiCall("distribution/create", data)
        return response;
      
      }



}