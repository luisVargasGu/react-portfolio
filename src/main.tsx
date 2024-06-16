import AuthProvider from 'react-auth-kit'
import createStore from 'react-auth-kit/createStore'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App.tsx'
import './index.css'
import { store } from './store/store'

const root = ReactDOM.createRoot(document.getElementById('root')!)
const authStore = createStore({
  authName: 'jwt_token',
  authType: 'cookie',
  cookieDomain: window.location.hostname,
  cookieSecure: window.location.protocol === 'http:',
})

root.render(
  <AuthProvider store={authStore}>
    <Provider store={store}>
      <App />
    </Provider>
  </AuthProvider>
)
