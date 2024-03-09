import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Playground from './components/Playground';
import Auth from './components/Playground/Auth';
import Registration from './components/Playground/Registration';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="contact" element={<Contact />} />
                <Route path="/playground" element={<Playground />}>
                    <Route index element={<Auth />} />
                    <Route path="register" element={<Registration />} />
                </Route>
            </Route>
        </Routes>
    );
}

export default App;

