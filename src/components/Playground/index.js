import { Outlet } from 'react-router-dom';
import './index.scss';

const Playground = () => {
    return (
        <div className='playground'>
            <Outlet />
        </div>
    );
}

export default Playground;
