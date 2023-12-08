import apiCall from "./apiCall";

// eslint-disable-next-line import/no-anonymous-default-export
export default {

      async createComment(log_id,user_id,comment,tag_id)
      {
          let data={
            "log_id":log_id,
            "user_id":user_id,
            "comment":comment,
            "tag_id":tag_id
          }
          let response = await apiCall("comment/create", data)
          return response;
      },

      async listComments(log_id)
      {
          let data={
            "log_id":log_id,
          }
          let response = await apiCall("comment/list", data)
          return response;
      }
      ,
      async listTags(user_id)
      {
          let data={
            "user_id":user_id,
          }
          let response = await apiCall("tag/list", data)
          return response;
      }
      ,

      async countTags(user_id)
      {
          let data={
            "user_id":user_id,
          }
          let response = await apiCall("tag/count", data)
          return response;
      }
     


      
}