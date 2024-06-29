import { faRightToBracket } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { register } from '@services/auth'
import { getCookie } from '@services/http'
import { FormEvent, useState } from 'react'
import useSignIn from 'react-auth-kit/hooks/useSignIn'
import { useNavigate } from 'react-router-dom'
import './index.scss' // Import CSS file for Registration component

const Registration = () => {
  const navigate = useNavigate()
  const singIn = useSignIn()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleRegister = (e: FormEvent) => {
    e.preventDefault()
    register(email, password).then((res) => {
      singIn({
        auth: {
          token: getCookie('jwt_token'),
        },
        // TODO: configure refresh
        userState: { email, user_id: res.user_id, avatar: res.avatar },
      })
    })
    navigate('/playground')
  }

  const handleLogin = () => {
    navigate('/playground')
  }

  return (
    <div className="registration-container">
      <h1
        className="
        text-secondary
	mb-6
	text-4xl
	font-bold
	text-center
	"
      >
        Registration
      </h1>
      <form className="registration-form" onSubmit={handleRegister}>
        <input
          required
          className="registration-input"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          required
          className="registration-input"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="submit"
          value="Register"
          className="bg-primary
	p-4
	my-4
	text-secondary
	font-normal
	text-2xl
	rounded
	cursor-pointer
	hover:bg-primary-dark
	"
        />
      </form>
      <FontAwesomeIcon
        icon={faRightToBracket}
        onClick={handleLogin}
        className="logo hover:text-secondary-dark"
      />
    </div>
  )
}

export default Registration
