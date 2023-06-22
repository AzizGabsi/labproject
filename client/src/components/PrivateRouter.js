import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRouter = () => {
    const {isAuth, errors : error } = useSelector(state => state.users)

  return (
   isAuth ? <Outlet /> : <Navigate to="/login" />
  )
}

export default PrivateRouter