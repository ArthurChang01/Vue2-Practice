import Vue from 'vue'
import Vuex from 'vuex'
import createPromise from 'vuex-promise'

import user from './user'
import {PENDING, SUCCESS, FAILURE, FINALLY} from '../common/constant'

Vue.use(Vuex)

var __DEV__=false;

export default new Vuex.Store({
    //strict: process.env.NODE_ENV !== 'production', //在非生产环境下，使用严格模式
    modules: {
        user
    },
    plugins:[createPromise({
        debug:__DEV__,
        status:{
            PENDING:PENDING,
            SUCCESS:SUCCESS,
            FAILURE:FAILURE,
            FINALLY:FINALLY
        },
        silent:false
    })]
})