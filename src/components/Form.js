import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'

function Form(props) {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const [userDetails, setUserDetails] = useState();
    console.log("User Details : ",userDetails)
    const onSubmit = data => {
        props.submitFormDataHandler(data)
        setUserDetails(data)
        let fname = data.firstname
        let mname = data.middlename
        let lname = data.lastname
        let dateob = data.dob
        let emailAddress = data.email
        let genderValue = data.gender
        let agreeValue = data.agree
        Swal.fire({
            icon: 'success',
            title: 'Form Data Submitted Successfully',
            html: '<b>First Name </b>: '+fname+'<br/><b>Middle Name </b>: '+mname+'<br/><b>Last Name </b>: '+lname+'<br/><b>Date Of Birth </b>: '+dateob+'<br/><b>Email Address </b>: '+emailAddress+'<br/><b>Gender </b>: '+genderValue+'<br/><b>Agree To The Terms & Conditions </b>: '+agreeValue
          }).then(
            navigate('/FormData')
          )
        }
    const divStyles={
        height: '500px'
    }
    const errorStyles = {
        color: 'red'
    }
    useEffect(() => {
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
    }, [])
    return (
        <div>
            <div className='container' style={divStyles}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-3">
                        <div className="row">
                            <div className="col">
                                <label className="form-label">First Name <span style={errorStyles}>*</span></label>
                                <input type="text" name="firstname" className="alph form-control" id="firstName" {...register("firstname", { required: "Firstname is Required" })} />
                                <p style={errorStyles}>{errors.firstname?.message}</p>
                            </div>
                            <div className="col">
                                <label className="form-label">Middle Name</label>
                                <input type="text" name="middlename" className="form-control" id="middleName" {...register("middlename")} />
                            </div>
                            <div className="col">
                                <label className="form-label">Last Name <span style={errorStyles}>*</span></label>
                                <input type="text" name="lastname" className="alph form-control" id="lastName" {...register("lastname", { required: "Lastname is Required" })} />
                                <p style={errorStyles}>{errors.lastname?.message}</p>
                            </div>
                        </div>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Date Of Birth <span style={errorStyles}>*</span></label>
                        <input type="date" name="dob" className="form-control" id="dob" {...register("dob", { required: "Date Of Birth is Required" })} />
                        <p style={errorStyles}>{errors.dob?.message}</p>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Email Address <span style={errorStyles}>*</span></label>
                        <input type="text" name="email" className="form-control" id="email" {...register("email", { required: "Email is Required", pattern: { value: /^\S+@\S+$/i, message: "Email is Invalid" } })} />
                        <p style={errorStyles}>{errors.email?.message}</p>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="gender" id="male" value="Male" {...register("gender")} />
                        <label className="form-check-label">MALE</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="gender" id="female" value="Female" {...register("gender")} />
                        <label className="form-check-label">FEMALE</label>
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" name="agree" className="form-check-input" id="agree" {...register("agree", { required: "You need to agree the terms & conditions to proceed." })} />
                        <label className="form-check-label" >I agree to the Terms & Conditions <span style={errorStyles}>*</span></label>
                        <p style={errorStyles}>{errors.agree?.message}</p>
                    </div>
                    <button type="submit" className="btn btn-primary">SUBMIT</button>
                    <button type="reset" className="btn btn-info">RESET</button>
                </form>
            </div>
        </div>
    )
}
export default Form