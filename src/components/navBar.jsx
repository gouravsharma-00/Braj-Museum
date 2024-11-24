import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="navbar">
            <h1 className="navbar-brand">Braj Museum</h1>
            <ul className="navbar-links">
                <li><Link to="/store">Prasad</Link></li>
                <li><Link to="/braj">Braj Darshan</Link></li>
                <li><Link to="/">Home</Link></li>
            </ul>
        </nav>
    );
};

export default NavBar;