import './styles.scss'
import { useNavigate } from 'react-router-dom'

type PropsButton = {
  url: string
  label: string
}
const Button: React.FC<PropsButton> = ({ url, label }) => {
  const navigate = useNavigate()
  return (
    <div className="button" onClick={() => navigate(url)}>
      {label}
    </div>
  )
}

export default Button
