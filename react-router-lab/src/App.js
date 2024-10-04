// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PersonList from './components/PersonList';
import PersonDetail from './components/PersonDetail';
import PersonAdd from './components/PersonAdd';
import PersonEdit from './components/PersonEdit';
import './App.css'; // Global styles

const App = () => {
    return (
        <Router>
            <div className="box-container">
                <Routes>
                    <Route path="/" element={<PersonList />} />
                    <Route path="/add" element={<PersonAdd />} />
                    <Route path="/edit/:id" element={<PersonEdit />} />
                    <Route path="/person/:id" element={<PersonDetail />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;