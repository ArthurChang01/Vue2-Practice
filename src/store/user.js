import Vue from 'vue'
import request from 'plato-request';

import { PENDING, SUCCESS, FAILURE, FINALLY } from '../common/constant'
import { api_baseUrl } from '../common/config'

export const USER_SIGNIN = 'USER_SIGNIN' //登录成功
export const USER_SIGNOUT = 'USER_SIGNOUT' //退出登录
export const USER_REGISTER = 'USER_REGISTER' //退出登录

export default {
    state: {},
    mutations: {
        [USER_SIGNIN](state, {payload, meta}) {
            if (meta && meta.promise === SUCCESS)
                Object.assign(state, payload[0])
        },
        [USER_REGISTER](state, {payload, meta}) {
            if (meta && meta.promise === SUCCESS)
                Object.assign(state, payload)
        },
        [USER_SIGNOUT](state) {
            sessionStorage.removeItem('user')
            Object.keys(state).forEach(k => Vue.delete(state, k))
        }
    },
    actions: {
        [USER_SIGNIN]({commit}, user) {
            commit(USER_SIGNIN, request(
                '{base}/Members?name={name}&password={password}',
                {
                    params: {
                        base: api_baseUrl,
                        name: user.name,
                        password: user.password
                    }
                }))
        },
        [USER_REGISTER]({commit}, user) {
            commit(USER_REGISTER, request(
                {
                    method: 'POST',
                    url: '{base}/Members',
                    params: {
                        base: api_baseUrl
                    },
                    body: {
                        name: user.name,
                        password: user.password
                    }
                }))
        },
        [USER_SIGNOUT]({commit}) {
            commit(USER_SIGNOUT)
        }
    }
}