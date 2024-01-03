
import React from 'react';
import MainPage from './components/MainPage';
import Header from './components/Header';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
    return (
        
            <Router>
                <Header />
                <Routes>
                    <Route
                        path="/" 
                        element={<MainPage/>}
                        />
                </Routes>
            </Router>
        
    )
    };



export default App
