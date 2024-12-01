import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    const [drop, setDrop] = useState(window.innerWidth < 600);
    const [down, setDown] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setDrop(window.innerWidth < 600);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleDropdown = () => {
        setDown(!down);
    };

    return (
        <nav className="navbar">
            <h1 className="navbar-brand">Braj Museum</h1>
            {
                !drop && 
                <ul className="navbar-links">
                    <li><Link to="/braj">Braj Darshan</Link></li>
                    <li><Link to="/">Home</Link></li>
                </ul>
            }
            {
                drop &&
                <>
                    <button onClick={handleDropdown} style={{
                        border: 'none',
                        padding: '0.5rem 1rem'
                    }}>Option</button>
                   { down && <div style={{
                        height: '200px',
                        width: '200px',
                        backgroundColor: 'black',
                        position: 'fixed',
                        right: '10px',
                        top: '100px'
                    }} className='flex'>
                        <ul className="navbar-links" style={{flexDirection: 'column'}}>
                            <li><Link to="/braj">Braj Darshan</Link></li>
                            <li><Link to="/">Home</Link></li>
                        </ul>
                    </div>}
                </>
            }
        </nav>
    );
};

export default NavBar;