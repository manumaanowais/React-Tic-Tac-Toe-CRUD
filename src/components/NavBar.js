import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar() {
    const headerProfileStyles = {
        float: 'right',
        color: 'white',
        backgroundColor: 'black',
        border: 'none'
    }
    return (
        <div>
            <nav>
                <NavLink to='/home' className='headerBtn'>Home</NavLink>
                <NavLink to='/tic-tac-toe' className='headerBtn'>TicTacToe</NavLink>
                <NavLink to='/formdata' className='headerBtn'>Users</NavLink>
                <button type="button" className="btn dropdown-toggle custom-btn" style={headerProfileStyles} data-toggle="dropdown">Numaan</button>
                <div className="dropdown-menu">
                    <a className="dropdown-item" href="#popup1"><i className="bi bi-person-circle"> Profile</i></a>
                    {/* <a className="dropdown-item" href="/formdata"><i className="bi bi-people"> All Users</i></a> */}
                    <a className="dropdown-item" href="/"><i className="bi bi-box-arrow-right"> Logout</i></a>
                </div>
            </nav>

            <div id="popup1" className="overlay">
                <div className="popup">
                    <h2>Profile Details</h2>
                    <a className="close" href="#usersdata">&times;</a>
                    <div className="content">
                        <div id="img-preview"></div>
                        <img id="profilephoto" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLHpSaMs4clzCDPPRzsiYiRsEXNjUKjQ6QYWSTpDUSrkMC1tT6lVa1k_hZE-aO68QiDoM&usqp=CAU" alt="Error in loading.." />
                        <div className="profiledetails">
                            <table className="table">
                                <tbody>
                                    <tr>
                                        <th scope="row">Name &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </th>
                                        <td id="nameprint">Numaan Owais</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Username &nbsp; </th>
                                        <td id="usernameprint">manumaanowais809</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Email &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </th>
                                        <td id="emailprint">manumaanowais809@gmail.com</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Phone &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </th>
                                        <td id="phoneprint">8096512816</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Role &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </th>
                                        <td id="rolenameprint">Admin</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default NavBar