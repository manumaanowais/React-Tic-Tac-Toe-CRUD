import { connect } from "react-redux";
import FormData from "../components/FormData"
import { deleteUser } from "../service/Actions/actions";

export const mapDispatchToProps = dispatch => ({
    deleteUserHandler:(emailId,index) => dispatch(deleteUser(emailId, index))
})
export const mapStateToProps = state => ({
    data:state.formData
})
export default connect(mapStateToProps, mapDispatchToProps)(FormData);