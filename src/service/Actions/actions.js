import { DELETE_USER, EDIT_USER, SUBMIT_FORM } from "../constants"

export const submitForm = (data) => {
    return {
        type : SUBMIT_FORM,
        data : data
    }
}
export const deleteUser = (emailId, index) => {
    return {
        type : DELETE_USER,
        emailId : {emailId},
        index : {index}
    }
}
export const editUser = (data, emailId, index) => {
    return {
        type : EDIT_USER,
        data : {data, emailId, index}
    }
}