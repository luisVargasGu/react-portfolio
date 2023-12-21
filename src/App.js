import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Playground from './components/Playground';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
            </Route>
            <Route path="/about" element={<Layout />}>
                <Route index element={<About />} />
            </Route>
            <Route path="/contact" element={<Layout />}>
                <Route index element={<Contact />} />
            </Route>
            <Route path="/playground" element={<Layout />}>
                <Route index element={<Playground />} />
            </Route>
        </Routes>
    );
}

export default App;

