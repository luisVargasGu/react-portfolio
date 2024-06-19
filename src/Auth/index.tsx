import { faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { login } from '@services/auth'
import { getCookie } from '@services/http'
import { FormEvent, useState } from 'react'
import useSignIn from 'react-auth-kit/hooks/useSignIn'
import { useNavigate } from 'react-router-dom'
import './index.scss'

const Auth = () => {
  const navigate = useNavigate()
  const singIn = useSignIn()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = (e: FormEvent) => {
    e.preventDefault()
    // TODO: add error handling
    // TODO: add loading state
    // TODO: move to service
    login(email, password).then((res) => {
      singIn({
        auth: {
          token: getCookie('jwt_token'),
        },
        // TODO: configure refresh
        userState: { email, userID: res.user_id, avatar: res.avatar },
      })
      navigate('/playground/channel')
    })
  }

  const handleRegister = () => {
    navigate('register')
  }

  return (
    <div className="auth-container">
      <h1
        className={`
	text-secondary
	mb-6
	text-4xl
	font-bold
	text-center
      `}
      >
        Authentication
      </h1>
      <form className="auth-form" onSubmit={handleLogin}>
        <input
          required
          className="auth-input"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          required
          className="auth-input"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="submit"
          value="Login"
          className="
	bg-primary
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
        icon={faUserPlus}
        onClick={handleRegister}
        className="logo register-button hover:text-secondary-dark"
      />
    </div>
  )
}

export default Auth
