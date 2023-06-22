import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import {register as registerAction } from "../slices/userSlice"

const Register = () => {
  const dispatch = useDispatch()
  const {isAuth, errors : error } = useSelector(state => state.users)
  const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {console.log(data);
   return dispatch(registerAction(data))
    }
    console.log(errors);

useEffect(() => {
if(isAuth) navigate('/')
}, [isAuth])

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <h3>Sign Up</h3>
        <div className="mb-3">
          <label style={{fontSize:"50%"}}>Username</label>
          <input
            type="text"
            className="form-control"
            placeholder="Name"
            {...register("name", {required: true, maxLength: 80})}
          />
          <p style={{color: "red"}}>{errors.name && "Name is required" }</p>
        </div>
        <div className="mb-3">
          <label style={{fontSize:"50%"}}>Address</label>
          <input type="text" className="form-control" placeholder="Address" 
          {...register("address", {required: true})}
          />
        <p style={{color: "red"}}>{errors.address && "Address is required" }</p>
        </div>
        <div className="mb-3">
          <label style={{fontSize:"50%"}}>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            {...register("email", {required: true})} />
            <p style={{color: "red"}}>{(errors.email && "Email is unvalid") }</p>
        </div>
        <div className="mb-3">
          <label style={{fontSize:"50%"}}>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            {...register("password", {required: true})} 
          />
        <p style={{color: "red"}}>{errors.password && "Enter at least 8 characters" }</p>
        </div>
        <p style={{color: "red"}}>{error && error.msg }</p>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </div>
        <p className="forgot-password text-right">
          Already registered <Link to="/login">sign in?</Link>
        </p>
      </form>
  )
}

export default Register