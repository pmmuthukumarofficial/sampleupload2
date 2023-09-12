
import './Header.css';
import { Text } from './Text';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import {Profile} from './pages/Profile';
import { Contact } from './pages/Contact';

import {useState, createContext} from 'react';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import {Home} from './pages/Home';
import { Store } from './pages/Store';


function App(){

  return (
    <div className="App">
      <Provider store={Store}>
        <Router>
          <Link to="/"> Home </Link>
          <Link to="/profile"> Profile </Link>
          <Link to="/contact"> Contact </Link>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Router>
      </Provider>
    </div>
    );

   
}

export default App;









