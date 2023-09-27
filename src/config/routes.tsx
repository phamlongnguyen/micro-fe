import React from 'react'
import { createBrowserRouter } from 'react-router-dom'

const Home = React.lazy(() => import('@pages/Home'))
const NotFound = React.lazy(() => import('@pages/NotFound'))

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [
      {
        path: 'team',
        element: <Home />,
      },
    ],
  },
  {
    children: [
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
])
export default router
