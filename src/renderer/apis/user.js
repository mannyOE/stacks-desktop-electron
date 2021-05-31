/* eslint-disable */
export default (blackAxios) => ({
    routes: {
      apply: "user/apply",
    },
  
    //   login method
    apply: async function (args) {
      return blackAxios
          .post(this.routes.apply, args.data, {
              headers: {
                'Authorization': args.token
            }
        })
    },
    
    
  });
  