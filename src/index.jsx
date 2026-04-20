import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { createRoot } from 'react-dom/client';

import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';

import './style.css'

import Editor from './editor'
import Test from './editor/test/001/index.jsx'
import Landing from './Landing'
import SimplePage from './SimplePage'
import SignUp from './SignUp'
import Home from './Home'
import Dashboard from './Dashboard'
import Profile from './Profile'


const root = createRoot(document.getElementById("app"));

const Layout = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
          <Route path="/editor" element={<Editor />} />
          <Route path="/test/*" element={<Test />} />
          <Route path="/landing" element={<Landing />} />
          <Route path="/simple" element={<SimplePage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

root.render(<Layout />);
