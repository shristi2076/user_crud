import React from 'react'
import Navbar from './Navbar'
import { useForm } from '../hooks/useForm';


import { useParams } from 'react-router-dom';
import { addUser, getUserById } from '../json/locStorage';
import uuid from 'react-uuid';
import { useState, useEffect } from 'react';
import { editUser } from './../json/locStorage';

const Create = () => {
    
    const { id } = useParams();
    const [showAlert, setshowAlert] = useState(false);
    const { inputValues, handleInputChange, resetForm, setForm } = useForm({
        name: '',
        email: '',
        phone: '',
        city: '',
        district: '',
        province: '',
        country: ''
    });

    useEffect(() => {
        if (id) {
            const user = getUserById(id);
            setForm(user);
        }
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        id ? editUser(id, inputValues) : addUser({ id: uuid(), ...inputValues });
        resetForm();
        setshowAlert(true);
        setTimeout(() => {
            setshowAlert(false);
        }, 2000);
    };

    //aba
    const [exampleFormControlInput1, setPhoneNumber] = useState("");
    const [isValidPhoneNumber, setIsValidPhoneNumber] = useState(false);
    function validatePhoneNumber(phoneNumber) {
        const phoneRegex = /^\d{7}$|^\d{10}$/;
        return phoneRegex.test(phoneNumber);
    }

    function handlePhoneNumberChange(event) {
        const value = event.target.value;
        setPhoneNumber(value);
        setIsValidPhoneNumber(validatePhoneNumber(value));
      }

    // //hyaa samma


  return (
    <>
        <Navbar />
        <h1 align="center">
        {id ? "Edit " : "Add "}
               User
        </h1>
        {/* <h1 className="text-center"> User</h1> */}

        <div className="card border-primary p-1 m-4">
            <form  onSubmit={handleSubmit} >
                <div className="row g-2">
                <div className=" col-sm mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Name *</label>
                    <input name="name" 
                        type="text"
                        className="form-control"
                        value={inputValues.name}
                        onChange={handleInputChange}
                        id="exampleFormControlInput1" 
                        placeholder="Eg: Ram Shah"
                        required/>
                </div>
                <div className="col-sm mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Email address *</label>
                    <input name="email" 
                        type="email" 
                        className="form-control"
                        value={inputValues.email}
                        onChange={handleInputChange} 
                        id="exampleFormControlInput1" 
                        placeholder="name@example.com"
                        required/>
                </div>
                </div>
                <div className="row g-2">   
                <div className="col-sm mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Phone Number *</label>
                    <input name="phone" 
                        type="text" 
                        className="form-control" 
                        value={inputValues.phone}
                        onChange={handleInputChange}
                        id="exampleFormControlInput1" 
                        placeholder="7 or 10 digits only"
                        required/>
                        {/* //hyaa */}
                        {/* {isValidPhoneNumber ? (
                        <p>Valid phone number</p>
                        ) : (
                        <p>Invalid phone number</p>
                        )} */}
                {/* sama */}


                </div>
                <div className="col-sm mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Date of Birth</label>
                    <input name="dob" 
                        type="date" 
                        className="form-control" 
                        value={inputValues.dob}
                        onChange={handleInputChange}
                        id="exampleFormControlInput1" 
                        placeholder="mm/dd/yyyy"/>
                </div>
                </div>
                
                <div className="col-sm mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Address</label>
                    <div className="row g-3">
                        <div className="col-sm">
                            <input name="city" 
                            type="text" 
                            className="form-control" 
                            value={inputValues.city}
                            onChange={handleInputChange}
                            placeholder="City" /* aria-label="City" *//>
                        </div>
                        <div className="col-sm">
                            <input name="district" 
                            type="text" 
                            className="form-control" 
                            value={inputValues.district}
                            onChange={handleInputChange}
                            placeholder="District" aria-label="District"/>
                        </div>
                        <div className="col-sm">
                            {/* <input type="text" className="form-control" placeholder="Province" for="inputGroupSelect01" aria-label="Province"/> */}
                            <select className="form-select" 
                            name='province'
                            value={inputValues.province}
                            onChange={handleInputChange} 
                            id="inputGroupSelect01">
                                <option selected>Province</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                            </select>
                        </div>
                        <div className="col-sm">
                            <input name="country" 
                            type="text" 
                            defaultValue={"Nepal"}
                            className="form-control" 
                            value={inputValues.country}
                            onChange={handleInputChange}
                            placeholder="Country" 
                            // aria-label="Country"
                            />
                        </div>
                    </div>
                    <div className='text-center m-3 '> 
                        <p>All fields marked with * are required</p>
                        <button className='btn btn-primary'>{id ? "Edit" : "Add"} User</button>
                     </div>
                </div>
            </form>
            {
                showAlert && (
                    <div className="px-5">
                        <div className="alert alert-success">
                            <strong>Success!!</strong> {id ? "edit" : "added a new"} User.
                        </div>
                    </div>
                )
            }
        </div>
    </>
)
}

export default Create