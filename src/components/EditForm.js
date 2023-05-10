import React, { useEffect, useState } from 'react'
import { useParams,useNavigate} from "react-router-dom";
import NavBar from './NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useForm } from 'react-hook-form'
import Swal from 'sweetalert2'

function EditForm(props) {
    const { index } = useParams();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [userDetails, setUserDetails] = useState(props.data[index].formValues);
    const emailToDelete = userDetails.email;
    const navigate = useNavigate();
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserDetails({ [name]: value });
    }
    const errorStyles = {
        color: 'red'
    }
    const emailDisableStyles={
        cursor:'not-allowed'
    }
    useEffect(() => {
        const maleRadio = document.querySelector("#male");
        const femaleRadio = document.querySelector("#female");

        if (userDetails.gender === "Male") {
            maleRadio.checked = true;
            setUserDetails({gender:document.editForm.gender.value})
            document.editForm.gender.value = 'Male'
        } else if (userDetails.gender === "Female") {
            femaleRadio.checked = true;
            setUserDetails({gender:document.editForm.gender.value})
            document.editForm.gender.value = 'Female'
        }
        let nameInputs = document.getElementsByClassName('alph');
        for (let i = 0; i < nameInputs.length; i++) {
            let nameInput = nameInputs[i]
            nameInput.addEventListener('keydown', (e) => {
                let charCode = e.which;
                if ((charCode >= 65 && charCode <= 90) || charCode === 8 || charCode === 9 || charCode === 32) {
                } else {
                    e.preventDefault();
                }
            });
        }
    }, [index, props.data, userDetails.gender])

    const cancel = () => {
        navigate('/formdata')
    }
    const onSubmit = data => {
        data.email = document.editForm.email.value
        data.gender = document.editForm.gender.value
        props.editUserHandler(data, emailToDelete, index)
        // props.deleteUserHandler(emailToDelete, index)
        Swal.fire({
            icon: 'success',
            title: 'User Update Successfully'
        }).then(
            navigate('/FormData')
        )
    }
    return (
        <div>
            <NavBar /><br />
            <h1>Edit User Details</h1><br />
            <div className='container'>
                <form onSubmit={handleSubmit(onSubmit)} name="editForm">
                    <div className="mb-3">
                        <div className="row">
                            <div className="col">
                                <label className="form-label">First Name <span style={errorStyles}>*</span></label>
                                <input type="text" name="firstname" className="alph form-control" id="firstName" value={userDetails.firstname} {...register("firstname", { required: "Firstname is Required" })} onChange={handleInputChange} />
                                <p style={errorStyles}>{errors.firstname?.message}</p>
                            </div>
                            <div className="col">
                                <label className="form-label">Middle Name</label>
                                <input type="text" name="middlename" className="form-control" id="middleName" value={userDetails.middlename} {...register("middlename")} onChange={handleInputChange} />
                            </div>
                            <div className="col">
                                <label className="form-label">Last Name <span style={errorStyles}>*</span></label>
                                <input type="text" name="lastname" className="alph form-control" id="lastName" value={userDetails.lastname} {...register("lastname", { required: "Lastname is Required" })} onChange={handleInputChange} />
                                <p style={errorStyles}>{errors.lastname?.message}</p>
                            </div>
                        </div>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Date Of Birth <span style={errorStyles}>*</span></label>
                        <input type="date" name="dob" className="form-control" id="dob" value={userDetails.dob} {...register("dob", { required: "Date Of Birth is Required" })} onChange={handleInputChange} />
                        <p style={errorStyles}>{errors.dob?.message}</p>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Email Address <span style={errorStyles}>*</span></label>
                        <abbr title="Primary key cannot be changed"><input type="text" name="email" style={emailDisableStyles} className="form-control" id="email" value={userDetails.email} disabled /></abbr>
                        <p style={errorStyles}>{errors.email?.message}</p>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="gender" id="male" value="Male" {...register("gender")} onChange={handleInputChange} />
                        <label className="form-check-label">MALE</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="gender" id="female" value="Female" {...register("gender")} onChange={handleInputChange} />
                        <label className="form-check-label">FEMALE</label>
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" name="agree" className="form-check-input" id="agree" checked={userDetails.agree} {...register("agree", { required: "You need to agree the terms & conditions to proceed." })} />
                        <label className="form-check-label" >I agree to the Terms & Conditions <span style={errorStyles}>*</span></label>
                        <p style={errorStyles}>{errors.agree?.message}</p>
                    </div>
                    <button type="submit" className="btn btn-primary">UPDATE</button>
                    <button type="reset" className="btn btn-info" onClick={cancel}>CANCEL</button>
                </form>
            </div>
        </div>
    )
}

export default EditForm