import React, {useState} from 'react'
import NavBar from './NavBar'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom';

function FormData(props) {
  const navigate = useNavigate();
  let sortedFormData = props.data.sort((a, b) => a.formValues.firstname > b.formValues.firstname ? 1 : -1);
  const editUser = (index) => {
    navigate('/edit/' + index)
  }
  const deleteUser = (emailId, index) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You want to delete user with email " + emailId,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete!'
    }).then((result) => {
      if (result.isConfirmed) {
        props.deleteUserHandler(emailId, index)
        Swal.fire(
          'Deleted!',
          'User with emailId ' + emailId + ' Deleted',
          'success'
        )
      }
    })
  }
  const [search, setSearch] = useState('');
  const handleSearch = (event) => {
    setSearch(event.target.value);
  };
  const filteredData = {
    nodes: sortedFormData.filter((item) =>
    item.formValues.firstname.toLowerCase().includes(search.toLowerCase()) ||
    item.formValues.middlename.toLowerCase().includes(search.toLowerCase()) ||
    item.formValues.lastname.toLowerCase().includes(search.toLowerCase()) || 
    item.formValues.email.toLowerCase().includes(search.toLowerCase()) ||
    item.formValues.dob.toLowerCase().includes(search.toLowerCase())
    ),
  };
  let idCounter = 1;
  return (
    <div>
      <NavBar />
      <h1>All Users</h1>
      <input id="search" type="text" onChange={handleSearch} placeholder='Search Users By Firstname, Middlename, Lastname, Email, or Date Of Birth......' /><br /><br />
      <table className="table table-bordered" id="myTable">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">FirstName</th>
            <th scope="col">MiddleName</th>
            <th scope="col">LastName</th>
            <th scope="col">Date Of Birth</th>
            <th scope="col">Email</th>
            <th scope="col">Gender</th>
            <th scope="col">T&C</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.nodes.length > 0 ? filteredData.nodes.map((user, index) => {
            return (
              <tr key={user.formValues.email}>
                <th scope="row">{idCounter++}</th>
                <td>{user.formValues.firstname}</td>
                <td>{user.formValues.middlename ? user.formValues.middlename : '--'}</td>
                <td>{user.formValues.lastname}</td>
                <td>{user.formValues.dob}</td>
                <td>{user.formValues.email}</td>
                <td>{user.formValues.gender}</td>
                <td>{user.formValues.agree ? 'Agreed' : 'Not Agreed'}</td>
                <td className='actionBtns'>
                  <abbr title="Edit"><button onClick={() => { editUser(index) }} className='btnEdit'><i className="bi bi-pen-fill"></i></button></abbr>
                  <abbr title="Delete"><button onClick={() => { deleteUser(user.formValues.email, index) }} className="btnDelete">
                    <i className="bi bi-trash-fill"></i>
                  </button></abbr>
                </td>
              </tr>
            )
          }) : null
          }
        </tbody>
      </table>
    </div>
  )
}
export default FormData