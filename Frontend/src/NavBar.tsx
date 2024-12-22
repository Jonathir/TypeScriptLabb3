import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'

const NavBar: React.FC = () => {
    return (
        <nav style={{padding: '1rem', background: '#f4f4f4', borderBottom: '1px solid #ddd' }}>
            <ul style={{display: 'flex', gap: '1rem', listStyle: 'none', margin: 0, padding: 0}}>
                <li>
                    <Link to="/">Personer</Link>
                </li>
                <li>
                    <Link to="/person-overview">Journalöversikt</Link>
                </li>
                <li>
                    <Link to="/about">UML</Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;