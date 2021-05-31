
export default {
    state: () => ({
        userInfo: {},
        accessCreds: {},
        settings: {}
    }),

    getters: {
        userInfo: state=>state.userInfo,
        accessCreds: state=>state.accessCreds,
        settings: state=>state.settings, 
    },
    mutations: {
        updateUserInfo(state, user) {
            state.userInfo = user
        },
        updateAccessCreds(state, creds) {
            state.accessCreds = creds
        },
        logUserOut(state) {
            state.accessCreds = null
            state.userInfo = null
        }
    },
    actions: {
        callWithToken({
            dispatch,
            commit,
            state
          }, args) {
            const params = args.params
            const storeAction = args.action
            const token = state.accessCreds.token
            params.token = 'Bearer ' + token
      
            return storeAction(params)
          },
    }
}
