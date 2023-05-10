import { connect } from "react-redux";
import Form from "../components/Form";
import {submitForm} from '../service/Actions/actions'

export const mapDispatchToProps = dispatch => ({
    submitFormDataHandler:data => dispatch(submitForm(data))
})
export const mapStateToProps = state => ({
    data:state
})
export default connect(mapStateToProps, mapDispatchToProps)(Form);