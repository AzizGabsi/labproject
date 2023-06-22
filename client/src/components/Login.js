import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { login } from '../slices/userSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'
// import "./formStyle.css"

const Login = () => {
  const dispatch = useDispatch()
  const {isAuth, errors : error } = useSelector(state => state.users)
  const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {console.log(data);
   return dispatch(login(data))
    }
    console.log(errors);
    console.log('error from login: ', error)
useEffect( () => {
  if(isAuth) navigate('/')
}, [isAuth])

  return (
   <div className=''>
     <form style={{alignItems:"center"}} onSubmit={handleSubmit(onSubmit)}>
    <h3>Sign In</h3>
    <div className="mb-3">
      <label style={{fontSize:"50%"}}>Email address</label>
      <input
        type="email"
        className="form-control"
        placeholder="Enter email"
        {...register("email", {required: true})}
      />
    </div>
    <div className="mb-3">
      <label style={{fontSize:"50%"}}>Password</label>
      <input
        type="password"
        className="form-control"
        placeholder="Enter password"
        {...register("password", {required: true})} 
        />
      <p style={{color: "red"}}>{error && error.msg }</p>
    </div>
    <div className="mb-3">
      <div className="custom-control custom-checkbox">
        <input
          type="checkbox"
          className="custom-control-input"
          id="customCheck1"
        />
        <label style={{fontSize:"50%"}}className="custom-control-label" htmlFor="customCheck1">
          Remember me
        </label>
      </div>
    </div>
    <div className="d-grid">
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </div>
    <div className="forgot-password"  style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
    <p className="forgot-password text-right" >
      Forgot <a href="#">password?</a>
    </p>
    <Link to="/register"> Sign Up </Link>
    </div>
    
  </form>
   </div>
  )
}

export default Login