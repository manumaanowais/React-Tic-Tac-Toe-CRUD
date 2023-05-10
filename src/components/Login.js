import React, { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './SigninStyles.css'
import Swal from 'sweetalert2'

export const UserContext = React.createContext()

function Login() {
    const [username, setUsername] = useState(null)
    const [password, setPassword] = useState(null)
    const navigate = useNavigate()
    const inputRef = useRef()
    useEffect(() => {
        inputRef.current.focus()
    }, [])
    const handleSubmit = e => {
        if (username === null || username === '') {
            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.addEventListener('mouseenter', Swal.stopTimer)
                    toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
            })
            Toast.fire({
                icon: 'error',
                title: 'Username Cannot Be Blank!'
            })
        } else if (username !== 'Numaan') {
            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.addEventListener('mouseenter', Swal.stopTimer)
                    toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
            })
            Toast.fire({
                icon: 'error',
                title: 'Invalid Username!'
            })
        } else if (password === null || password === '') {
            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.addEventListener('mouseenter', Swal.stopTimer)
                    toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
            })
            Toast.fire({
                icon: 'error',
                title: 'Password Cannot Be Blank!'
            })
        } else if (password !== '1234') {
            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.addEventListener('mouseenter', Swal.stopTimer)
                    toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
            })
            Toast.fire({
                icon: 'error',
                title: 'Wrong Password!'
            })
        } else if (username === 'Numaan' && password === '1234') {
            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.addEventListener('mouseenter', Swal.stopTimer)
                    toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
            })
            Toast.fire({
                icon: 'success',
                title: 'Login Successful!'
            })
            navigate('/home')
        }
        // alert("Username : " + username +", Password : "+ password)
        e.preventDefault()
    }

    return (
        <>
            <div className='signindiv'>
                <form onSubmit={handleSubmit}>
                    <h1 className='signinh1'>Sign In</h1>
                    <label className='labels'>Username </label>
                    <input className='inputs' type='text' onChange={e => setUsername(e.target.value)} ref={inputRef} /><br /><br />
                    <label className='labels'>Password </label>
                    <input className='inputs' type='password' onChange={e => setPassword(e.target.value)} /><br /><br />
                    <input className='btns' type="submit" value="Sign In" />
                </form>
            </div>
            <div id="signupp"><p>Don't Have an Account?<button id="signupbtn">Sign Up</button></p></div>
        </>
    )
}

export default Login