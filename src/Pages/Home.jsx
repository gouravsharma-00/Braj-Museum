import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../style/Home.css';

const Home = () => {
    const [count, setCount] = useState(0);
    return (
        <div className='home-main'>
            <h1>Home</h1>
            <Link to="/braj">Braj Darshan</Link>
        </div>
    );
}

export default Home;