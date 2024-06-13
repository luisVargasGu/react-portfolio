import './App.scss';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './modules/Home';
import About from './modules/About';
import Contact from './modules/Contact';
import Playground from './modules/Playground';
import Auth from './Auth';
import Registration from './Auth/Registration';
import AuthOutlet from '@auth-kit/react-router/AuthOutlet';
import Channel from './modules/Playground/Channel';

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
            <Route
                path="/playground"
                element={<AuthOutlet fallbackPath="/playground" />}
            >
                <Route path="/playground/channel" element={<Playground />}>
                    <Route index element={<Channel />} />
                </Route>
            </Route>
        </Routes>
    )
}

export default App
