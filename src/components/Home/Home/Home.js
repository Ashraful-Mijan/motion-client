import React from 'react';
import Navbar from '../../Navbar/Navbar';
import Header from '../Header/Header';
import Jobs from '../Jobs/Jobs';

const Home = () => {
    return (
        <div className='home'>
            <Navbar/>
            {/* <Header/> */}
            <Jobs/>
        </div>
    );
};

export default Home;