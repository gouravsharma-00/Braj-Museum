import React from 'react';
import HighLight from '../components/HighLight';
import TopDestinations from '../components/TopDestinations';
import MainSection from '../components/Header';
import Footer from '../components/Footer';
import Contributors from '../components/contributors';

const Home = () => {
    return (
        <>
            <MainSection />
            <TopDestinations />
            <Contributors/>
            <HighLight />
            <Footer />
        </>
    );
}

export default Home;
