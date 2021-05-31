import Store from '@/store/creds'
export default {
    state: () => ({
        login: {
            email: "",
            mobile: "",
            password: "",
            full_name: "",
            otp: ""
        },
        forgot: {
            email: "",
        },
        reset: {
            password: "",
            code: ""
        }
    }),

    getters: {
        login: state => state.login,
        forgot: state => state.forgot,
        reset: state=> state.reset
    },
    mutations: {
        clearForgot(state) { 
            state.forgot = {
                email: "",
            }
        },
        clearReset(state) { 
            state.reset = {
                password: "",
            code: ""
            }
        },
        clearLogin(state) { 
            state.login = {
                email: "",
            mobile: "",
            password: "",
            full_name: "",
            otp: ""
            }
        },
    },
    actions: {
        loginFn: async function ({ state, commit }) {
            try {
                let payload = {
                    email: state.login.email,
                    password: state.login.password
                }
                let response = await this.$api.auth.login(payload)
                commit("creds/updateUserInfo", response.data.data.user, {root: true})
                commit("creds/updateAccessCreds", response.data.data.accessToken, { root: true })
                commit("clearLogin")
                return response.data
            } catch (error) {
                if (error.response && error.response.data) {
                    throw new Error(error.response.data.message)
                } else {
                    throw new Error(error.message)
                }
            }
        },
        createAccount: async function ({ state, commit }, type) {
            try {
                let payload = {
                    email: state.login.email,
                    mobile: state.login.mobile,
                    password: state.login.password,
                    full_name: state.login.full_name
                }
                let response
                if (type&&type==="verify") {
                    payload = {
                        code: state.login.otp
                    }
                    response = await this.$api.auth.verifyAccount(payload)
                    commit("creds/updateUserInfo", response.data.data.user, {root: true})
                    commit("creds/updateAccessCreds", response.data.data.accessToken, {root: true})
                } else {
                    response = await this.$api.auth.signup(payload)
                }
                return response.data
            } catch (error) {
                if (error.response && error.response.data) {
                    throw new Error(error.response.data.message)
                } else {
                    throw new Error(error.message)
                }
            }
        },
        forgotPasswordFn: async function ({ state, commit }) {
            try {
                let payload = {
                    email: state.forgot.email
                }
                let response = await this.$api.auth.forgotPassword(payload)
                return response.data
            } catch (error) {
                if (error.response && error.response.data) {
                    throw new Error(error.response.data.message)
                } else {
                    throw new Error(error.message)
                }
            }
        },
        resetPasswordFn: async function ({ state, commit }) {
            try {
                let payload = {
                    password: state.reset.password,
                    code: state.reset.code
                }
                let response = await this.$api.auth.resetPassword(payload)
                commit("creds/updateUserInfo", response.data.data.user, {root: true})
                commit("creds/updateAccessCreds", response.data.data.accessToken, { root: true })
                commit("clearReset")
                commit("clearForgot")
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
