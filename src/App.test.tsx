import { render, screen } from '@testing-library/react'
import AuthProvider from 'react-auth-kit'
import createStore from 'react-auth-kit/createStore'
import { Provider } from 'react-redux'
import App from './App'
import { store } from './store/store'

it('should render the App component', () => {
  const authStore = createStore({
    authName: 'jwt_token',
    authType: 'cookie',
    cookieDomain: window.location.hostname,
    cookieSecure: window.location.protocol === 'http:',
  })
  render(
    <AuthProvider store={authStore}>
      <Provider store={store}>
        <App />
      </Provider>
    </AuthProvider>
  )
  const message = screen.getAllByText('</html>')
  expect(message[0]).toBeVisible()
})
