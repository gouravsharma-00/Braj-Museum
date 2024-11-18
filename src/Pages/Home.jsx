import React from 'react';
import HighLight from '../components/HighLight';
import TopDestinations from '../components/TopDestinations';
import MainSection from '../components/Header';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <>
            <MainSection />
            <TopDestinations />
            <HighLight />
            <Footer />
        </>
    );
}

export default Home;
