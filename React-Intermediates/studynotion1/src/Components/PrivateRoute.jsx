import React from 'react'
import { Navigate } from 'react-router-dom'
const PrivateRoute = ({setIsLoggedIn,children}) => {
  if(setIsLoggedIn){

      return (
          <div>

    </div>
  )
}else{
   return<Navigate to='/login'/>
}
}

export default PrivateRoute