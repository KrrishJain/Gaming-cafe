import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { Route } from 'react-router-dom'

function Login() {
    const {loginWithRedirect, isAuthenticated} = useAuth0()
   return (
   
}

export default Login