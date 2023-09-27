/* eslint-disable react-refresh/only-export-components */
import React from 'react'
import { createBrowserRouter } from 'react-router-dom'

const LayoutUser = React.lazy(() => import('@layout/LayoutUser'))
const Home = React.lazy(() => import('@pages/Home'))
const Page1 = React.lazy(() => import('@pages/Page1'))
const NotFound = React.lazy(() => import('@pages/NotFound'))

const router = createBrowserRouter([
  {
    path: '/',
    element: <LayoutUser />,
    children: [
      {
        path: 'team',
        element: <Page1 />,
      },
      {
        path: '/',
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
