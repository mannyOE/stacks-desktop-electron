/* eslint-disable */
export default (blackAxios) => ({
    routes: {
      login: "auth/login",
      register: "auth/signup/",
        forgotten: "auth/forgot-password",
        reset: "auth/reset-password",
        resendToken: "auth/resend-token",
      verify: "auth/verify-account",
    },
  
    //   login method
    login: async function (args) {
      return blackAxios
        .post(this.routes.login, args)
    },
    signup: async function (args) {
      return blackAxios
        .post(this.routes.register, args)
    },
    forgotPassword: async function (args) {
        return blackAxios
          .post(this.routes.forgotten, args)
    },
    resetPassword: async function (args) {
        return blackAxios
          .post(this.routes.reset, args)
    },
    resendToken: async function (args) {
        return blackAxios
          .post(this.routes.resendToken, args)
    },
    verifyAccount: async function (args) {
        return blackAxios
          .post(this.routes.verify, args)
      },
    
  });
  