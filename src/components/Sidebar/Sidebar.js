import React from 'react';
import './Sidebar.css';
import NrAlbumu from '../NrAlbumu';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function Sidebar(){
    return (
        <div class="sidebar">
            <header>
                <p>Arkadiusz Gnieciak <NrAlbumu album ="GD28353"/></p>
            </header>
        <ul>
        <ul>
            <li><Link to="/">Strona główna</Link></li>
            <li><Link to="/about">O nas</Link></li>
            <li><Link to="/services">Usługi</Link></li>
            <li><Link to="/contact">Kontakt</Link></li>
            <li><Link to="/product">Produkty</Link></li>
          </ul>
        </ul>
       </div>
       )
}

export default Sidebar;