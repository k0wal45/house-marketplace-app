import { Navigate, Outlet } from "react-router-dom"
import {checkingStatus, useAuthStatus} from '../hooks/useAuthStatus'
import Spinner from "./Spinner"

const PrivateRout = () => {
  const {loggedIn, checkingStatus} = useAuthStatus()

  if(checkingStatus) {
    return <Spinner />
  }

  return loggedIn ? <Outlet /> : <Navigate to='/sign-in' /> 
}

export default PrivateRout
