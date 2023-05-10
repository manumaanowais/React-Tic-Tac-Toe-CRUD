import { connect } from "react-redux";
import {editUser} from "../service/Actions/actions";
import EditForm from "../components/EditForm";

export const mapDispatchToProps = dispatch => ({
    editUserHandler:(data, email, index) => dispatch(editUser(data, email, index))
    })
export const mapStateToProps = state => ({
    
    data:state.formData
})
export default connect(mapStateToProps, mapDispatchToProps)(EditForm);