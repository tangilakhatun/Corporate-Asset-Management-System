import React from 'react';
import Navbar from '../component/navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../component/footer/Footer';

const RootLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default RootLayout;