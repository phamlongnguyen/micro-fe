// import ViteLogo from '@assets/react.svg?react'
import './App.css'
import { RouterProvider } from 'react-router-dom'
import router from '@config/routes'
import { Suspense } from 'react'

const Loading = () => {
  return <div>Loading...</div>
}

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <RouterProvider router={router} />
    </Suspense>
  )
}

export default App
