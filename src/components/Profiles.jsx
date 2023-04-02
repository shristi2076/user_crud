import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from './Navbar'
import ProfInfo from './ProfInfo'
import { useEffect, useState } from 'react'
import { getUserList } from '../json/locStorage'

const Profiles = () => {
    const navigate = useNavigate();
    const [users, setUsers] = useState([]);

    useEffect(() => {
        setUsers(getUserList());
    }, []);

  return (
    <>
        <Navbar/>
        <button className="btn btn-info m-3" onClick={()=>navigate("/create")}>Back</button>
        <div>
            <h1 className="my-2 text-center">Profiles</h1>

            {
                users.length > 0 ? (
                <div className='card bg-secondary p-3 m-3'>
                    <table className='table table-hover'>
                        <thead>
                            <tr>
                                <th>Name <button>A-Z</button></th>
                                <th>Email</th>
                                <th>Phone Number</th>
                                <th>DOB</th>
                                <th>Address</th>
                            </tr>
                        </thead>

                        <tbody>
                            {/* <ProfInfo/> */}

                            {
                                 users.map(user => <ProfInfo user={user} key={user.id} setUsers={setUsers} />)
                            }
                        </tbody>
                    </table>
                </div>
                ) : (
                    <h3 className="text-center">No users</h3>
                )
            }

    </div>
    </>
  )
}

export default Profiles