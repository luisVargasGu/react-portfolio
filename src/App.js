import './App.scss';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Playground from './components/Playground';
import Auth from './components/Playground/Auth';
import Registration from './components/Playground/Registration';
import AuthOutlet from '@auth-kit/react-router/AuthOutlet';
import Channel from './components/Playground/Channel';

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
                <Route element={<AuthOutlet fallbackPath='/playground' />}>
                    <Route path="/channel" element={<Playground />}>
                        <Route index element={<Channel />} />
                    </Route>
                </Route>
            </Route>
        </Routes>
    );
}

export default App;

