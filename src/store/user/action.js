import request from 'plato-request';

import {
    USER_SIGNIN,
    USER_SIGNOUT,
    USER_REGISTER
} from './constant';

import { api_baseUrl } from '../../common/config'

const actions ={
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

export default actions;