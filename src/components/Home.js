import React from 'react'
// import Form from './Form'
import FormContainer from '../containers/FormContainer'
import NavBar from './NavBar'

function Home() {
    return (
        <div>
            <NavBar /><br />
            <h1>Add Users</h1><br />
            <FormContainer /><br /><br />
        </div>
    )
}
export default Home