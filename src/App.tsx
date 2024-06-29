import AuthOutlet from '@auth-kit/react-router/AuthOutlet'
import React from 'react'
import { BrowserRouter, useRoutes } from 'react-router-dom'
import './App.scss'
import Auth from './Auth'
import Registration from './Auth/Registration'
import Layout from './components/Layout'
import About from './modules/About'
import Contact from './modules/Contact'
import Home from './modules/Home'
import Playground from './modules/Playground'
import Channel from './modules/Playground/Channel'
import Portfolio from './modules/Portfolio'

const AppRoutes = () => {
  const routes = [
    {
      path: '/',
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: 'portfolio', element: <Portfolio /> },
        { path: 'about', element: <About /> },
        { path: 'contact', element: <Contact /> },
        {
          path: 'playground',
          element: <Playground />,
          children: [
            { index: true, element: <Auth /> },
            { path: 'register', element: <Registration /> },
          ],
        },
      ],
    },
    {
      path: '/playground',
      element: <AuthOutlet fallbackPath="/playground" />,
      children: [
        {
          path: 'channel',
          element: <Playground />,
          children: [{ index: true, element: <Channel /> }],
        },
      ],
    },
  ]

  return useRoutes(routes)
}

const App = () => {
  return (
    <BrowserRouter>
      <React.StrictMode>
        <AppRoutes />
      </React.StrictMode>
    </BrowserRouter>
  )
}

export default App
