import { SET_USER } from "../Actions/types";

const initialState={
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    contact_number: ''
};

export default (state= initialState , action) =>{
    switch(action.type){
        case SET_USER:{
            return{
                ...state,
                [action.payload.name] : action.payload.value
            }
        }
        default:
            return state;
    }
}