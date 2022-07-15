import { UserActionTypes } from './user.types';

const INITIAL_STATE = {
    currentUser: null 
}

const userReducer = (state = INITIAL_STATE, action)=>{
    switch(action.type){
    case UserActionTypes.SET_CURRENT_USERS:
            return{
                ...state,
                currentUser: action.payload
            }
    default:
        return state; 
    }
};

export default userReducer;