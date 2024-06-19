import { Outlet } from 'react-router-dom'

const Playground = () => {
  return (
    <div className="h-full w-full flex">
      <Outlet />
    </div>
  )
}

export default Playground
