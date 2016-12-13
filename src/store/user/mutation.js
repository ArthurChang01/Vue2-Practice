import { SUCCESS } from '../../common/constant'

import {
    USER_SIGNIN,
    USER_SIGNOUT,
    USER_REGISTER
} from './constant';

const mutations= {
    [USER_SIGNIN](state, {payload, meta}) {
        if (meta && meta.promise === SUCCESS && payload.length>0) {
            state.name = payload[0].name;
            state.password = payload[0].password
        }
    },
    [USER_REGISTER](state, {payload, meta}) {
        if (meta && meta.promise === SUCCESS) {
            state.name = payload.name;
            state.password = payload.password
        }
    },
    [USER_SIGNOUT](state) {
        state.name = '';
        state.password = '';
    }
}

export default mutations;