import React from 'react'
// import ViteLogo from '@assets/react.svg?react'
import './App.css'
import { RouterProvider } from 'react-router-dom'
import router from '@config/routes'

function App() {
  return <RouterProvider router={router} />
}

export default App
