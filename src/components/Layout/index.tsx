import './index.scss'

import { Outlet } from 'react-router-dom'
import Sidebar from '../Sidebar'

const Layout = () => {
  return (
    <div className="App container">
      <Sidebar />
      <div className="page ms-24">
        <span className="tags top-tags-html">&lt;/html&gt;</span>
        <br />
        <span className="tags top-tags">&lt;body&gt;</span>
        <Outlet />
        <span className="tags bottom-tags">&lt;/body&gt;</span>
        <br />
        <span className="tags bottom-tags-html">&lt;/html&gt;</span>
      </div>
    </div>
  )
}

export default Layout
