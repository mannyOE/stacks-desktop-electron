
export default {
    state: () => ({
        
    }),

    getters: {
        
    },
    mutations: {
        
    },
    actions: {
        apply: async function ({ state, commit }, payload) {
            try {
                let response = await this.$api.user.apply(payload)
                commit("creds/updateUserInfo", response.data.data, {root: true})
                return response.data
            } catch (error) {
                if (error.response && error.response.data) {
                    throw new Error(error.response.data.message)
                } else {
                    throw new Error(error.message)
                }
            }
        },
        
    }
}
