import ReactIcon from '@assets/react.svg?react'
import Button from '@ui/Button'

const Page1 = () => {
  return (
    <div style={{ padding: 20 }}>
      <ReactIcon color={'#bdbd'} width={100} height={100} />
      <Button url="/" label="Home" />
      <h2>Page1 View 1</h2>
      <div></div>
    </div>
  )
}

export default Page1
