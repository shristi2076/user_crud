import React from 'react'
import { useNavigate } from 'react-router-dom'
import { removeUser } from '../json/locStorage'
import { getUserList } from '../json/locStorage'

const ProfInfo = ({user, setUsers}) => {
  const { id, name, email, phone, dob, city, district, province, country } = user;
  const navigate = useNavigate();
  const deleteUser = () => {
      removeUser(id);
      setUsers(getUserList());
  }

  return (
    // <>
    
    <tr className="table-primary">
      <th>{name}</th>
      <td>{email}</td>
      <td>{phone}</td>
      <td>{dob}</td>
      <td>{city},{district},Province-{province},{country}</td>
      <td>
        <div className="d-flex gap-3">
          <span role="button" className='badge bg-success' onClick={() => navigate(`/edit-user/${id}`)}>
            Edit
          </span>
          <span role="button" className='badge bg-danger' onClick={() => deleteUser()}>
            Delete
          </span>
        </div>
      </td>

    </tr>
    // </>
  )
}

export default ProfInfo