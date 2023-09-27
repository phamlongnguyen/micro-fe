import ReactIcon from '@assets/react.svg?react'
import Button from '@ui/Button'
import { Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <div style={{ padding: 20 }}>
      <ReactIcon color={'#bdbd'} width={100} height={100} />
      <Button url="/team" label="Page 1" />
      <h2>Home View 1</h2>
      <Outlet />
      <p>Lorem ipsum dolor sit amet, consectetur adip.</p>
    </div>
  )
}

export default Home
