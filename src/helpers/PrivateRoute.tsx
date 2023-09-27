// import { OpenAPI as OpenAPI_OPS } from '~services/ops'
import React from 'react'

type Props = {
  children?: React.ReactNode
}
const PrivateRoute = ({ children }: Props) => {
  const isLoggedIn = false
  if (isLoggedIn) {
    //get TOKEN HERE
  }
  return isLoggedIn ? children : <div></div>
}

export default PrivateRoute
