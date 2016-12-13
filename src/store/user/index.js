import actions from './action';
import state from './state';
import mutations from './mutation'
import {USER_SIGNIN, USER_SIGNOUT, USER_REGISTER} from './constant'

module.exports={
    USER_SIGNIN, 
    USER_SIGNOUT, 
    USER_REGISTER,
    state,
    actions,
    mutations
};