import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../style/Home.css';
import Header from '../components/header';
import Footer from '../components/footer';

const Home = () => {
    const [count, setCount] = useState(0);
    return (
        <>
        <Header />
        <div className='home-main'>
            <h1>Home</h1>
            <Link to="/braj">Braj Darshan</Link>
        </div>
        <Footer />
        </>
    );
}

export default Home;
