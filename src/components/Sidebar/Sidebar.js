import React from 'react';
import './Sidebar.css';
import NrAlbumu from '../NrAlbumu';
import { Link } from 'react-router-dom';
import ChangeBg from '../ChangeBg/ChangeBg'
import ChangeFontSize from '../ChangeFontSize/ChangeFontSize'

function Sidebar(){
    return (
        <div class="sidebar">
        <ChangeBg/>
        <ChangeFontSize/>
            <header>
                <p>Arkadiusz Gnieciak <NrAlbumu album ="GD28353"/></p>
            </header>
        <ul>
            <li><Link to="/"><i class="fa fa-home" aria-hidden="true"></i>Strona główna</Link></li>
            <li><Link to="/about"><i class="fa fa-list" aria-hidden="true"></i>O nas</Link></li>
            <li><Link to="/services"><i class="fa fa-info-circle" aria-hidden="true"></i>Usługi</Link></li>
            <li><Link to="/contact"><i class="fa fa-laptop" aria-hidden="true"></i>Kontakt</Link></li>
            <li><Link to="/product"><i class="fa fa-phone-square" aria-hidden="true"></i>Produkty</Link></li>
        </ul>
       </div>
       )
}

export default Sidebar;