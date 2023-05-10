import {DELETE_USER, EDIT_USER, SUBMIT_FORM } from "../constants";

const initialState = {
    formValues:[]
}
console.log("Initial State : ",initialState)
export default function formData(state=[], action){
    switch(action.type){
        case SUBMIT_FORM : 
            return [
                ...state,
                {formValues:action.data}
            ]
        case DELETE_USER :
            console.warn("State is :" ,state)
            const {index} = action.index;
            state.splice(index,1)
            return [
                ...state
            ]
        case EDIT_USER : 
            return state.map(user => {
                if (user.formValues.email === action.data.data.email) { // Email is used as primary key, so it can not be changed.
                  return { ...user, formValues:action.data.data };
                }
                return user;
              });

        default : 
            return state
    }
}