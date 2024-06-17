import { Outlet } from 'react-router-dom'
import Sidebar from '../Sidebar'

const Layout = () => {
  return (
    <div className="container">
      <Sidebar />
      <div className="ms-24">
        <span
          className="
	text-primary
	opacity-60
	absolute
	top-[16px]
	left-[120px]
	text-4xl
	font-la-belle-aurore"
        >
          &lt;/html&gt;
        </span>
        <br />
        <span
          className="
	text-primary
	opacity-60
	absolute
	top-[42px]
	left-[138px]
	text-4xl
	font-la-belle-aurore"
        >
          &lt;body&gt;
        </span>
        <Outlet />
        <span
          className="
	text-primary
	opacity-60
	absolute
	bottom-[35px]
	left-[138px]
	text-4xl
	font-la-belle-aurore"
        >
          &lt;/body&gt;
        </span>
        <br />
        <span
          className="
	text-primary
	opacity-60
	absolute
	bottom-[8px]
	left-[120px]
	text-4xl
	font-la-belle-aurore"
        >
          &lt;/html&gt;
        </span>
      </div>
    </div>
  )
}

export default Layout
